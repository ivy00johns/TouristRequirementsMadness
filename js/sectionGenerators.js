// Section generators - create form sections based on definitions

import { createField, createFieldset, createEntryContainer, createRepeaterSection, createStatusBadge } from './fieldGenerator.js';
import { sectionDefinitions } from './sectionDefinitions.js';
import { socialPlatforms } from './config.js';

/**
 * Track total field count globally
 */
let totalFieldCount = 0;

export function resetFieldCount() {
    totalFieldCount = 0;
}

export function getFieldCount() {
    return totalFieldCount;
}

export function addToFieldCount(count) {
    totalFieldCount += count;
}

/**
 * Generate social media fields
 */
export function generateSocialMediaFields(count) {
    const container = document.getElementById('socialMediaFields');
    if (!container) return;
    container.innerHTML = '';

    // Always show all 20 platforms as required
    socialPlatforms.forEach(platform => {
        const platformDiv = document.createElement('div');
        platformDiv.className = 'platform-section';
        platformDiv.innerHTML = `
            <div class="platform-header">
                <span class="platform-name">${platform}</span>
                <button type="button" class="btn-add-account" disabled>+ Add Another ${platform} Account</button>
            </div>
            <div class="platform-accounts">
                <div class="platform-item">
                    <span class="account-label">Account 1</span>
                    <input type="text" disabled placeholder="Username (Required)">
                    <input type="text" disabled placeholder="Profile URL (Required)">
                    <select disabled>
                        <option>Account Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                        <option>Deleted</option>
                    </select>
                    <input type="text" disabled placeholder="Date Created (MM/YYYY)">
                    <select disabled>
                        <option>Account Visibility</option>
                        <option>Public</option>
                        <option>Private</option>
                        <option>Friends Only</option>
                    </select>
                </div>
            </div>
        `;
        container.appendChild(platformDiv);
        addToFieldCount(5); // 5 fields per account (username, URL, status, date created, visibility)
    });

    // Additional platforms beyond the 20 required
    if (count > socialPlatforms.length) {
        for (let i = 0; i < count - socialPlatforms.length; i++) {
            const div = document.createElement('div');
            div.className = 'platform-section additional';
            div.innerHTML = `
                <div class="platform-header">
                    <span class="platform-name">Additional Platform ${i + 1}</span>
                    <button type="button" class="btn-add-account" disabled>+ Add Another Account</button>
                </div>
                <div class="platform-accounts">
                    <div class="platform-item">
                        <span class="account-label">Account 1</span>
                        <input type="text" disabled placeholder="Platform Name (Required)">
                        <input type="text" disabled placeholder="Username (Required)">
                        <input type="text" disabled placeholder="Profile URL (Required)">
                        <select disabled>
                            <option>Account Status</option>
                            <option>Active</option>
                            <option>Inactive</option>
                            <option>Deleted</option>
                        </select>
                        <input type="text" disabled placeholder="Date Created (MM/YYYY)">
                    </div>
                </div>
            `;
            container.appendChild(div);
            addToFieldCount(5);
        }
    }
}

/**
 * Generate email history fields
 */
export function generateEmailFields(count) {
    const container = document.getElementById('emailFields');
    if (!container) return;
    container.innerHTML = '';
    const def = sectionDefinitions.emailHistory;

    for (let i = 0; i < count; i++) {
        const content = def.entryFields.map(field => createField(field)).join('');
        const entry = createEntryContainer({
            className: 'email-entry',
            title: `Email Address ${i + 1}`,
            content,
            removable: i > 0
        });
        container.insertAdjacentHTML('beforeend', entry);
        addToFieldCount(def.fieldsPerEntry);
    }
}

/**
 * Generate phone history fields
 */
export function generatePhoneFields(count) {
    const container = document.getElementById('phoneFields');
    if (!container) return;
    container.innerHTML = '';
    const def = sectionDefinitions.phoneHistory;

    for (let i = 0; i < count; i++) {
        const content = def.entryFields.map(field => createField(field)).join('');
        const entry = createEntryContainer({
            className: 'phone-entry',
            title: `Phone Number ${i + 1}`,
            content,
            removable: i > 0
        });
        container.insertAdjacentHTML('beforeend', entry);
        addToFieldCount(def.fieldsPerEntry);
    }
}

/**
 * Generate family member fields
 */
export function generateFamilyFields(count) {
    const container = document.getElementById('familyFields');
    if (!container) return;
    container.innerHTML = '';

    const relationships = ['Father', 'Mother', 'Spouse', 'Sibling', 'Child'];

    for (let i = 0; i < count; i++) {
        const rel = i < relationships.length ? relationships[i] : `Family Member ${i + 1}`;
        const isParent = rel === 'Father' || rel === 'Mother';
        const isChild = rel === 'Child' || (i >= 4 && rel.includes('Family Member'));

        // Base fields for all family members
        let fieldsHtml = `
            ${createField({ label: 'Full Legal Name', type: 'text' })}
            ${createField({ label: 'Relationship', type: 'text', placeholder: rel })}
            ${createField({ label: 'Date of Birth', type: 'date' })}
            ${createField({ label: 'Place of Birth (City)', type: 'text' })}
            ${createField({ label: 'Place of Birth (Country)', type: 'text' })}
        `;

        let fieldCount = 5;

        // Parents get residence info
        if (isParent) {
            fieldsHtml += `
                ${createField({ label: 'Current Residence - City', type: 'text' })}
                ${createField({ label: 'Current Residence - Country', type: 'text' })}
            `;
            fieldCount = 7;
        }
        // Spouse/siblings get complete identifying information
        else if (!isChild) {
            fieldsHtml += `
                ${createField({ label: 'Current Nationality', type: 'text' })}
                ${createField({ label: 'Current Address - Street', type: 'text' })}
                ${createField({ label: 'Current Address - City', type: 'text' })}
                ${createField({ label: 'Current Address - Country', type: 'text' })}
                ${createField({ label: 'Phone Number', type: 'tel', status: 'likely' })}
                ${createField({ label: 'Email Address', type: 'email', status: 'likely' })}
            `;
            fieldCount = 11;
        }

        const entry = createEntryContainer({
            className: 'family-entry',
            title: rel,
            content: fieldsHtml,
            removable: i > 0
        });
        container.insertAdjacentHTML('beforeend', entry);
        addToFieldCount(fieldCount);
    }
}

/**
 * Generate address history fields
 */
export function generateAddressFields(count) {
    const container = document.getElementById('addressFields');
    if (!container) return;
    container.innerHTML = '';
    const def = sectionDefinitions.addressHistory;

    for (let i = 0; i < count; i++) {
        const content = def.entryFields.map(field => createField(field)).join('');
        const entry = createEntryContainer({
            className: 'address-entry',
            title: `Address ${i + 1}`,
            subtitle: i === 0 ? '(Current)' : '',
            content,
            removable: i > 0
        });
        container.insertAdjacentHTML('beforeend', entry);
        addToFieldCount(def.fieldsPerEntry);
    }
}

/**
 * Generate education history fields
 */
export function generateEducationFields(count) {
    const container = document.getElementById('educationFields');
    if (!container) return;
    container.innerHTML = '';
    const def = sectionDefinitions.educationHistory;

    for (let i = 0; i < count; i++) {
        const content = def.entryFields.map(field => createField(field)).join('');
        const entry = createEntryContainer({
            className: 'education-entry',
            title: `Educational Institution ${i + 1}`,
            subtitle: i === 0 ? '(Most Recent)' : '',
            content,
            removable: i > 0
        });
        container.insertAdjacentHTML('beforeend', entry);
        addToFieldCount(def.fieldsPerEntry);
    }
}

/**
 * Generate employment history fields
 */
export function generateEmploymentFields(count) {
    const container = document.getElementById('employmentFields');
    if (!container) return;
    container.innerHTML = '';
    const def = sectionDefinitions.employmentHistory;

    for (let i = 0; i < count; i++) {
        const content = def.entryFields.map(field => createField(field)).join('');
        const entry = createEntryContainer({
            className: 'employment-entry',
            title: `Position ${i + 1}`,
            subtitle: i === 0 ? '(Current/Most Recent)' : '',
            content,
            removable: i > 0
        });
        container.insertAdjacentHTML('beforeend', entry);
        addToFieldCount(def.fieldsPerEntry);
    }
}

/**
 * Generate international travel history fields
 */
export function generateTravelFields(count) {
    const container = document.getElementById('travelFields');
    if (!container) return;
    container.innerHTML = '';
    const def = sectionDefinitions.travelHistory;

    for (let i = 0; i < count; i++) {
        const content = def.entryFields.map(field => createField(field)).join('');
        const entry = createEntryContainer({
            className: 'travel-entry',
            title: `Trip ${i + 1}`,
            content,
            removable: i > 0
        });
        container.insertAdjacentHTML('beforeend', entry);
        addToFieldCount(def.fieldsPerEntry);
    }
}

/**
 * Generate previous U.S. travel fields
 */
export function generateUSTravelFields(count) {
    const container = document.getElementById('usTravelFields');
    if (!container) return;
    container.innerHTML = '';

    if (count === 0) {
        container.innerHTML = '<p class="no-entries">No previous U.S. travel to report.</p>';
        return;
    }

    const def = sectionDefinitions.previousUSTravel;

    for (let i = 0; i < count; i++) {
        const content = def.entryFields.map(field => createField(field)).join('');
        const entry = createEntryContainer({
            className: 'us-travel-entry',
            title: `U.S. Visit ${i + 1}`,
            content,
            removable: i > 0
        });
        container.insertAdjacentHTML('beforeend', entry);
        addToFieldCount(def.fieldsPerEntry);
    }
}

/**
 * Generate U.S. contacts and itinerary fields
 */
export function generateUSContactsFields(contactCount, destinationCount) {
    const container = document.getElementById('usContactsFields');
    if (!container) return;
    container.innerHTML = '';
    const def = sectionDefinitions.usContacts;

    // Trip info fields (always shown)
    let tripInfoHtml = '<div class="subsection"><h5>Trip Information</h5><div class="field-row">';
    tripInfoHtml += def.tripInfoFields.map(field => createField(field)).join('');
    tripInfoHtml += '</div></div>';
    container.insertAdjacentHTML('beforeend', tripInfoHtml);
    addToFieldCount(def.tripInfoFields.length);

    // U.S. Contacts
    if (contactCount > 0) {
        let contactsHtml = '<div class="subsection"><h5>U.S. Contacts</h5>';
        for (let i = 0; i < contactCount; i++) {
            const content = def.contactFields.map(field => createField(field)).join('');
            contactsHtml += createEntryContainer({
                className: 'contact-entry',
                title: `U.S. Contact ${i + 1}`,
                content,
                removable: i > 0
            });
            addToFieldCount(def.contactFieldsPerEntry);
        }
        contactsHtml += '</div>';
        container.insertAdjacentHTML('beforeend', contactsHtml);
    }

    // Planned Itinerary
    let itineraryHtml = '<div class="subsection"><h5>Planned Itinerary</h5>';
    for (let i = 0; i < destinationCount; i++) {
        const content = def.itineraryFields.map(field => createField(field)).join('');
        itineraryHtml += createEntryContainer({
            className: 'itinerary-entry',
            title: `Destination ${i + 1}`,
            content,
            removable: i > 0
        });
        addToFieldCount(def.itineraryFieldsPerEntry);
    }
    itineraryHtml += '</div>';
    container.insertAdjacentHTML('beforeend', itineraryHtml);
}

/**
 * Generate financial information fields
 */
export function generateFinancialFields() {
    const container = document.getElementById('financialFields');
    if (!container) return;
    container.innerHTML = '';
    const def = sectionDefinitions.financialInfo;

    // Income fields
    let incomeHtml = '<div class="subsection"><h5>Current Financial Status</h5><div class="field-row">';
    incomeHtml += def.incomeFields.map(field => createField(field)).join('');
    incomeHtml += '</div></div>';
    container.insertAdjacentHTML('beforeend', incomeHtml);
    addToFieldCount(def.incomeFields.length);

    // Trip funding fields
    let fundingHtml = '<div class="subsection"><h5>Trip Funding Source</h5><div class="field-row">';
    fundingHtml += def.tripFundingFields.map(field => createField(field)).join('');
    fundingHtml += '</div></div>';
    container.insertAdjacentHTML('beforeend', fundingHtml);
    addToFieldCount(def.tripFundingFields.length);
}

/**
 * Generate organization membership fields (repeater style)
 */
export function generateOrganizationFields(count) {
    const container = document.getElementById('organizationsContainer');
    if (!container) return;
    container.innerHTML = '';

    if (count === 0) {
        container.innerHTML = '<p class="no-entries">No organization memberships to report.</p>';
        return;
    }

    const def = sectionDefinitions.securityScreening.organizationsRepeater;

    for (let i = 0; i < count; i++) {
        const content = def.entryFields.map(field => createField(field)).join('');
        const entry = createEntryContainer({
            className: 'organization-entry',
            title: `Organization ${i + 1}`,
            content,
            removable: i > 0
        });
        container.insertAdjacentHTML('beforeend', entry);
        addToFieldCount(def.fieldsPerEntry);
    }

    // Update the count display
    const countDisplay = document.querySelector('#organizationsRepeater .entry-count');
    if (countDisplay) {
        countDisplay.textContent = `(${count} entries)`;
    }
}
