// Repeater functionality - Add/remove entries dynamically

import { ENTRY_CLASSES } from './config.js';
import { getFieldCount, addToFieldCount } from './sectionGenerators.js';

// Store reference to updateStats function (will be set by app.js)
let updateStatsCallback = null;

/**
 * Set the callback for updating stats display
 */
export function setUpdateStatsCallback(callback) {
    updateStatsCallback = callback;
}

/**
 * Get total field count (delegated to sectionGenerators)
 */
function getTotalFieldCount() {
    return getFieldCount();
}

/**
 * Update total field count (delegated to sectionGenerators)
 */
function updateFieldCount(delta) {
    addToFieldCount(delta);
    if (updateStatsCallback) {
        updateStatsCallback();
    }
}

/**
 * Count fields in an entry
 */
function countFieldsInEntry(entry) {
    const inputs = entry.querySelectorAll('input, select, textarea');
    return inputs.length;
}

/**
 * Initialize repeater buttons after form generation
 */
export function initializeRepeaters() {
    // Enable all add buttons
    document.querySelectorAll('.btn-add-item').forEach(btn => {
        btn.disabled = false;
        btn.addEventListener('click', handleAddEntry);
    });

    document.querySelectorAll('.btn-add-account').forEach(btn => {
        btn.disabled = false;
        btn.addEventListener('click', handleAddAccount);
    });
}

/**
 * Handle adding a new entry to a repeater section
 */
function handleAddEntry(e) {
    const button = e.target;
    const repeaterSection = button.closest('.repeater-section');
    const repeaterItems = repeaterSection.querySelector('.repeater-items');
    const entryCount = repeaterSection.querySelector('.entry-count');

    // Get the first entry as a template
    const firstEntry = repeaterItems.querySelector(ENTRY_CLASSES);
    if (!firstEntry) return;

    // Clone and update the entry
    const newEntry = firstEntry.cloneNode(true);
    const currentCount = repeaterItems.querySelectorAll(ENTRY_CLASSES).length + 1;

    // Update the entry number in the h4
    const h4 = newEntry.querySelector('h4');
    if (h4) {
        h4.textContent = h4.textContent.replace(/\d+/, currentCount);
    }

    // Clear all input values in the clone
    newEntry.querySelectorAll('input, textarea').forEach(input => {
        input.value = '';
    });
    newEntry.querySelectorAll('select').forEach(select => {
        select.selectedIndex = 0;
    });

    // Add remove button if not present
    if (!newEntry.querySelector('.btn-remove-entry')) {
        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'btn-remove-entry';
        removeBtn.textContent = '×';
        removeBtn.addEventListener('click', () => removeEntry(removeBtn, repeaterSection));

        const entryH4 = newEntry.querySelector('h4');
        if (entryH4) {
            entryH4.style.display = 'flex';
            entryH4.style.justifyContent = 'space-between';
            entryH4.style.alignItems = 'center';
            const titleText = entryH4.textContent;
            entryH4.innerHTML = `<span>${titleText}</span>`;
            entryH4.appendChild(removeBtn);
        }
    }

    repeaterItems.appendChild(newEntry);

    // Update count
    if (entryCount) {
        entryCount.textContent = `(${currentCount} entries)`;
    }

    // Update total field count
    updateFieldCount(countFieldsInEntry(newEntry));
}

/**
 * Handle adding a new social media account
 */
function handleAddAccount(e) {
    const button = e.target;
    const platformSection = button.closest('.platform-section');
    const platformAccounts = platformSection.querySelector('.platform-accounts');

    const firstAccount = platformAccounts.querySelector('.platform-item');
    if (!firstAccount) return;

    const newAccount = firstAccount.cloneNode(true);
    const currentCount = platformAccounts.querySelectorAll('.platform-item').length + 1;

    // Update account label
    const label = newAccount.querySelector('.account-label');
    if (label) {
        label.textContent = `Account ${currentCount}`;
    }

    // Clear inputs
    newAccount.querySelectorAll('input').forEach(input => {
        input.value = '';
    });
    newAccount.querySelectorAll('select').forEach(select => {
        select.selectedIndex = 0;
    });

    // Add remove button if not present
    if (!newAccount.querySelector('.btn-remove-account')) {
        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'btn-remove-account';
        removeBtn.textContent = '×';
        removeBtn.onclick = function() { window.removeSocialAccount(this); };
        newAccount.appendChild(removeBtn);
    }

    platformAccounts.appendChild(newAccount);

    // Update total field count (5 fields per account)
    updateFieldCount(5);
}

/**
 * Remove an entry from a repeater section
 */
function removeEntry(button, repeaterSection) {
    const entry = button.closest(ENTRY_CLASSES);
    const repeaterItems = repeaterSection.querySelector('.repeater-items');
    const entryCount = repeaterSection.querySelector('.entry-count');

    // Don't remove if it's the last entry
    const allEntries = repeaterItems.querySelectorAll(ENTRY_CLASSES);
    if (allEntries.length <= 1) return;

    // Update field count before removing
    updateFieldCount(-countFieldsInEntry(entry));

    entry.remove();

    // Renumber remaining entries
    const remainingEntries = repeaterItems.querySelectorAll(ENTRY_CLASSES);
    remainingEntries.forEach((entry, index) => {
        const h4 = entry.querySelector('h4 span') || entry.querySelector('h4');
        if (h4) {
            h4.textContent = h4.textContent.replace(/\d+/, index + 1);
        }
    });

    // Update count
    if (entryCount) {
        entryCount.textContent = `(${remainingEntries.length} ${remainingEntries.length === 1 ? 'entry' : 'entries'})`;
    }
}

/**
 * Remove dynamically generated entries (emails, phones, family, addresses, etc.)
 * Exposed globally for onclick handlers
 */
export function removeDynamicEntry(button) {
    // Find the entry by looking for common entry class patterns
    const entry = button.closest(ENTRY_CLASSES);
    if (!entry) return;

    const container = entry.parentElement;
    const entryClass = entry.className;
    const allEntries = container.querySelectorAll('.' + entryClass.split(' ')[0]);

    // Don't remove if it's the last entry
    if (allEntries.length <= 1) return;

    // Update field count before removing
    updateFieldCount(-countFieldsInEntry(entry));

    entry.remove();

    // Renumber remaining entries
    const remainingEntries = container.querySelectorAll('.' + entryClass.split(' ')[0]);
    remainingEntries.forEach((ent, index) => {
        const h4Span = ent.querySelector('h4 > span:first-child') || ent.querySelector('h4');
        if (h4Span) {
            h4Span.innerHTML = h4Span.innerHTML.replace(/\d+/, index + 1);
        }
    });
}

/**
 * Remove social media account
 * Exposed globally for onclick handlers
 */
export function removeSocialAccount(button) {
    const account = button.closest('.platform-item');
    if (!account) return;

    const container = account.parentElement;
    const allAccounts = container.querySelectorAll('.platform-item');

    // Don't remove if it's the last account
    if (allAccounts.length <= 1) return;

    // Update field count (5 fields per account)
    updateFieldCount(-5);

    account.remove();

    // Renumber remaining accounts
    const remainingAccounts = container.querySelectorAll('.platform-item');
    remainingAccounts.forEach((acc, index) => {
        const label = acc.querySelector('.account-label');
        if (label) {
            label.textContent = `Account ${index + 1}`;
        }
    });
}

// Expose functions globally for onclick handlers in HTML
export function exposeGlobals() {
    window.removeDynamicEntry = removeDynamicEntry;
    window.removeSocialAccount = removeSocialAccount;
}
