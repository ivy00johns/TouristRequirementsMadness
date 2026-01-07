// Main application module

import { countryData, getFlagEmoji } from './countryData.js';
import { MINUTES_PER_FIELD, FIELDS_PER_PAGE, socialPlatforms } from './config.js';
import { phase1Questions } from './sectionDefinitions.js';
import {
    resetFieldCount,
    getFieldCount,
    addToFieldCount,
    generateSocialMediaFields,
    generateEmailFields,
    generatePhoneFields,
    generateFamilyFields,
    generateAddressFields,
    generateEducationFields,
    generateEmploymentFields,
    generateTravelFields,
    generateUSTravelFields,
    generateUSContactsFields,
    generateFinancialFields,
    generateOrganizationFields
} from './sectionGenerators.js';
import { initializeRepeaters, setUpdateStatsCallback, exposeGlobals } from './repeaterManager.js';
import { autoFillDemo } from './demoFunctions.js';

// Application state
let selectedCountry = '';
let countryStatus = '';

/**
 * Build country flag grid
 */
function buildCountryGrid(containerId, countries, status) {
    const container = document.getElementById(containerId);
    if (!container) return;

    countries.forEach(country => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `country-btn ${status}`;
        btn.dataset.country = country.name;
        btn.dataset.status = status;
        btn.innerHTML = `
            <span class="flag">${getFlagEmoji(country.code)}</span>
            <span class="country-name">${country.name}</span>
        `;
        btn.addEventListener('click', () => selectCountry(country.name, status));
        container.appendChild(btn);
    });
}

/**
 * Handle country selection
 */
function selectCountry(name, status) {
    // Remove previous selection
    document.querySelectorAll('.country-btn.selected').forEach(btn => {
        btn.classList.remove('selected');
    });

    // Select new country
    const btn = document.querySelector(`.country-btn[data-country="${name}"]`);
    if (btn) btn.classList.add('selected');

    selectedCountry = name;
    countryStatus = status;

    handleCountrySelect();
}

/**
 * Handle country selection UI updates
 */
function handleCountrySelect() {
    const warningDiv = document.getElementById('countryWarning');
    const formQuestions = document.getElementById('formQuestions');

    if (!selectedCountry) {
        warningDiv.classList.add('hidden');
        formQuestions.classList.add('hidden');
        return;
    }

    warningDiv.classList.remove('hidden');

    if (countryStatus === 'full-ban') {
        warningDiv.className = 'country-warning full-ban';
        warningDiv.innerHTML = `
            <h4>TRAVEL BAN IN EFFECT</h4>
            <p><strong>${selectedCountry}</strong> is subject to a <strong>full travel ban</strong> under Proclamation 10949 (effective January 1, 2026).</p>
            <p>All immigrant and nonimmigrant visas are <strong>suspended</strong>, including tourist (B-1/B-2), student (F/M/J), and work visas.</p>
            <p class="ban-source">Source: Proclamation 10949, June 4, 2025</p>
            <div class="ban-demo-note">
                <p>While you cannot apply for a visa, you can continue to see what the form would look like:</p>
                <button class="btn-secondary" onclick="window.showFormAnyway()">Continue for demonstration purposes</button>
            </div>
        `;
        formQuestions.classList.add('hidden');
    } else if (countryStatus === 'partial-ban') {
        warningDiv.className = 'country-warning partial-ban';
        warningDiv.innerHTML = `
            <h4>PARTIAL TRAVEL BAN</h4>
            <p><strong>${selectedCountry}</strong> is subject to a <strong>partial travel ban</strong> under Proclamation 10949.</p>
            <p>Tourist visas (B-1/B-2), student visas (F/M/J), and immigrant visas are <strong>suspended</strong>.</p>
            <p>Only certain work visas and diplomatic visas may be processed.</p>
            <p class="ban-source">Source: Proclamation 10949, June 4, 2025</p>
            <div class="ban-demo-note">
                <p>While tourist visas are suspended, you can continue to see what the form would look like:</p>
                <button class="btn-secondary" onclick="window.showFormAnyway()">Continue for demonstration purposes</button>
            </div>
        `;
        formQuestions.classList.add('hidden');
    } else if (countryStatus === 'vwp') {
        warningDiv.className = 'country-warning vwp';
        warningDiv.innerHTML = `
            <h4>VISA WAIVER PROGRAM - Enhanced Requirements Proposed</h4>
            <p><strong>${selectedCountry}</strong> is part of the Visa Waiver Program.</p>
            <p>You may travel visa-free with ESTA, but <strong>proposed new requirements</strong> (comment period ends Feb 9, 2026) would require:</p>
            <ul>
                <li>10 years of email addresses</li>
                <li>5 years of phone numbers</li>
                <li>Complete family member information</li>
                <li>Mandatory selfie via CBP mobile app</li>
                <li>DNA and biometric collection "when feasible"</li>
            </ul>
            <p class="ban-source">Source: Dec 10, 2025 Federal Register Notice</p>
        `;
        formQuestions.classList.remove('hidden');
        updateRealTimeFieldCount();
    } else {
        warningDiv.className = 'country-warning standard';
        warningDiv.innerHTML = `
            <h4>ENHANCED VETTING REQUIRED</h4>
            <p>Citizens of <strong>${selectedCountry}</strong> require a visa and are subject to enhanced vetting procedures.</p>
            <p>You may be selected for additional screening using form DS-5535, which requires 15 years of history.</p>
            <p>A visa bond of up to <strong>$15,000</strong> may be required.</p>
            <p class="ban-source">Source: Executive Order 14161; DS-5535 Supplemental Form</p>
        `;
        formQuestions.classList.remove('hidden');
        updateRealTimeFieldCount();
    }
}

// Make showFormAnyway globally accessible
window.showFormAnyway = function() {
    document.getElementById('formQuestions').classList.remove('hidden');
    const warningDiv = document.getElementById('countryWarning');
    warningDiv.querySelector('.ban-demo-note').innerHTML = '<p class="demo-active">Showing form for demonstration purposes only. This visa category is currently suspended.</p>';
    updateRealTimeFieldCount();
};

/**
 * Calculate estimated field count based on Phase 1 inputs
 */
function calculateEstimatedFields() {
    const getValue = (id) => parseInt(document.getElementById(id)?.value) || 0;

    let estimate = 50; // Base personal info fields (expanded)
    estimate += 7; // Biometrics
    estimate += Math.max(getValue('socialMediaCount'), socialPlatforms.length) * 5; // 5 fields per account
    estimate += getValue('emailCount') * 5;
    estimate += getValue('phoneCount') * 5;

    // Family - variable based on relationship types
    const familyCount = getValue('familyMembers');
    // Rough estimate: assume 2 parents (7 each), rest average 8 fields
    estimate += Math.min(familyCount, 2) * 7 + Math.max(0, familyCount - 2) * 8;

    estimate += getValue('addressCount') * 10;
    estimate += getValue('educationCount') * 10;
    estimate += getValue('jobCount') * 12;
    estimate += getValue('travelCount') * 8;
    estimate += getValue('usTravelCount') * 10;

    // U.S. contacts and itinerary
    estimate += 5; // Trip info
    estimate += getValue('usContactCount') * 8;
    estimate += getValue('usDestinationCount') * 6;

    estimate += 10; // Financial info
    estimate += getValue('organizationCount') * 6;
    estimate += 5; // Security questions

    return estimate;
}

/**
 * Update real-time field count display
 */
function updateRealTimeFieldCount() {
    const counterDiv = document.getElementById('realTimeCounter');
    if (!counterDiv) return;

    const estimate = calculateEstimatedFields();
    const hours = Math.ceil((estimate * MINUTES_PER_FIELD) / 60);
    const pages = Math.ceil(estimate / FIELDS_PER_PAGE);

    counterDiv.innerHTML = `
        <div class="estimate-box">
            <h4>Estimated Form Size Based on Your Entries:</h4>
            <div class="estimate-stats">
                <div class="estimate-stat">
                    <span class="estimate-number">${estimate.toLocaleString()}</span>
                    <span class="estimate-label">Total Fields</span>
                </div>
                <div class="estimate-stat">
                    <span class="estimate-number">${hours}</span>
                    <span class="estimate-label">Hours to Complete</span>
                </div>
                <div class="estimate-stat">
                    <span class="estimate-number">${pages}</span>
                    <span class="estimate-label">Printed Pages</span>
                </div>
            </div>
        </div>
    `;
    counterDiv.classList.remove('hidden');
}

/**
 * Generate the complete form
 */
function generateForm(skipScroll = false) {
    const getValue = (id) => parseInt(document.getElementById(id)?.value) || 0;

    // Validate inputs
    const requiredFields = ['familyMembers', 'emailCount', 'phoneCount', 'addressCount',
                           'educationCount', 'jobCount', 'travelCount', 'socialMediaCount',
                           'usDestinationCount'];

    for (const field of requiredFields) {
        if (isNaN(getValue(field))) {
            alert('Please fill in all fields with valid numbers.');
            return;
        }
    }

    // Reset field count
    resetFieldCount();
    addToFieldCount(50); // Base personal info fields (expanded)

    // Generate all sections
    generateSocialMediaFields(getValue('socialMediaCount'));
    generateEmailFields(getValue('emailCount'));
    generatePhoneFields(getValue('phoneCount'));
    generateFamilyFields(getValue('familyMembers'));
    generateAddressFields(getValue('addressCount'));
    generateEducationFields(getValue('educationCount'));
    generateEmploymentFields(getValue('jobCount'));
    generateTravelFields(getValue('travelCount'));
    generateUSTravelFields(getValue('usTravelCount'));
    generateUSContactsFields(getValue('usContactCount'), getValue('usDestinationCount'));
    generateFinancialFields();
    generateOrganizationFields(getValue('organizationCount'));

    // Add biometrics and security questions
    addToFieldCount(7 + 5);

    // Update stats
    updateStats();

    // Show phase 2
    document.getElementById('phase1').classList.add('hidden');
    document.getElementById('phase2').classList.remove('hidden');

    // Initialize repeater buttons after form is generated
    initializeRepeaters();

    if (!skipScroll) {
        // Scroll phase2 into view after DOM updates
        setTimeout(() => {
            document.getElementById('phase2').scrollIntoView({ behavior: 'instant', block: 'start' });
        }, 50);
    }
}

/**
 * Update statistics display
 */
function updateStats() {
    const totalFields = getFieldCount();
    document.getElementById('totalFields').textContent = totalFields.toLocaleString();

    const hours = Math.ceil((totalFields * MINUTES_PER_FIELD) / 60);
    document.getElementById('estimatedTime').textContent = hours;

    const pages = Math.ceil(totalFields / FIELDS_PER_PAGE);
    document.getElementById('pagesCount').textContent = pages;
}

/**
 * Show results modal
 */
function showResults() {
    const modal = document.getElementById('resultsModal');
    const totalFields = getFieldCount();

    document.getElementById('finalFieldCount').textContent = totalFields.toLocaleString();

    const hours = Math.ceil((totalFields * MINUTES_PER_FIELD) / 60);
    document.getElementById('finalTimeEstimate').textContent = hours;

    const pages = Math.ceil(totalFields / FIELDS_PER_PAGE);
    document.getElementById('finalPages').textContent = pages;

    // Update modal title based on country status
    const modalTitle = document.querySelector('#resultsModal h2');
    if (countryStatus === 'full-ban') {
        modalTitle.innerHTML = `<span class="modal-ban-tag">BANNED</span> Your "Simple" Tourist Visa from ${selectedCountry}`;
    } else if (countryStatus === 'partial-ban') {
        modalTitle.innerHTML = `<span class="modal-ban-tag partial">SUSPENDED</span> Your "Simple" Tourist Visa from ${selectedCountry}`;
    } else if (selectedCountry) {
        modalTitle.textContent = `Your "Simple" Tourist Visa from ${selectedCountry}`;
    } else {
        modalTitle.textContent = 'Your "Simple" Tourist Visa Application';
    }

    // Generate comparison list
    const getValue = (id) => parseInt(document.getElementById(id)?.value) || 0;

    let countryInfo = '';
    if (countryStatus === 'full-ban') {
        countryInfo = `<li class="ban-highlight"><span class="status-tag banned">BANNED</span> Citizens of ${selectedCountry} are <strong>prohibited</strong> from obtaining any U.S. visa <em>(Proclamation 10949)</em></li>`;
    } else if (countryStatus === 'partial-ban') {
        countryInfo = `<li class="ban-highlight partial"><span class="status-tag banned">SUSPENDED</span> Tourist visas for ${selectedCountry} citizens are <strong>suspended</strong> <em>(Proclamation 10949)</em></li>`;
    }

    const comparisonList = document.getElementById('comparisonList');
    comparisonList.innerHTML = `
        ${countryInfo}
        <li><span class="status-tag proposed">PROPOSED</span> Your DNA sample <em>(USCIS-2025-0205)</em></li>
        <li><span class="status-tag proposed">PROPOSED</span> Iris scans of both eyes <em>(USCIS-2025-0205)</em></li>
        <li><span class="status-tag proposed">PROPOSED</span> All 10 fingerprints plus palm prints <em>(USCIS-2025-0205)</em></li>
        <li><span class="status-tag proposed">PROPOSED</span> A voice print recording <em>(USCIS-2025-0205)</em></li>
        <li><span class="status-tag current">CURRENT</span> Facial recognition photos <em>(effective Dec 26, 2025)</em></li>
        <li><span class="status-tag proposed">PROPOSED</span> A live selfie through the CBP app <em>(proposed ESTA rule)</em></li>
        <li><span class="status-tag proposed">PROPOSED</span> 10 years of email history (${getValue('emailCount')} addresses) <em>(proposed ESTA rule)</em></li>
        <li><span class="status-tag current">CURRENT</span> Usernames for 20 social media platforms <em>(DS-160 requirement)</em></li>
        <li><span class="status-tag current">CURRENT</span> Profiles set to PUBLIC for students/workers <em>(June/Dec 2025)</em></li>
        <li><span class="status-tag proposed">PROPOSED</span> Full details on ${getValue('familyMembers')} family members <em>(proposed ESTA rule)</em></li>
        <li><span class="status-tag current">CURRENT</span> ${getValue('educationCount')} educational institutions over 15 years <em>(DS-5535 form)</em></li>
        <li><span class="status-tag current">CURRENT</span> ${getValue('addressCount')} addresses over 15 years <em>(DS-5535 form)</em></li>
        <li><span class="status-tag current">CURRENT</span> ${getValue('jobCount')} jobs with supervisor names, phones, salaries <em>(DS-5535 form)</em></li>
        <li><span class="status-tag current">CURRENT</span> Details on ${getValue('travelCount')} international trips <em>(DS-5535 form)</em></li>
        <li><span class="status-tag current">CURRENT</span> ${getValue('organizationCount')} organization memberships <em>(DS-5535 form)</em></li>
        <li><span class="status-tag likely">LIKELY</span> Screening for "hostility toward the U.S." <em>(consular guidance)</em></li>
        <li><span class="status-tag current">CURRENT</span> Up to $15,070 in fees and bonds <em>(ESTA $40 + bond up to $15,000)</em></li>
    `;

    // Calculate absurdity level
    let absurdityBase = Math.min(100, Math.round((totalFields / 500) * 100));
    if (countryStatus === 'full-ban') absurdityBase = 100;
    else if (countryStatus === 'partial-ban') absurdityBase = Math.max(absurdityBase, 90);

    document.getElementById('absurdityFill').style.width = absurdityBase + '%';

    let absurdityLabel = '';
    if (countryStatus === 'full-ban') {
        absurdityLabel = 'Total Exclusion';
    } else if (countryStatus === 'partial-ban') {
        absurdityLabel = 'Effectively Banned';
    } else if (absurdityBase < 30) {
        absurdityLabel = 'Bureaucratic Nightmare';
    } else if (absurdityBase < 50) {
        absurdityLabel = 'Kafkaesque';
    } else if (absurdityBase < 70) {
        absurdityLabel = 'Dystopian';
    } else if (absurdityBase < 90) {
        absurdityLabel = 'Orwellian';
    } else {
        absurdityLabel = 'Beyond Parody';
    }
    document.getElementById('absurdityLabel').textContent = absurdityLabel;

    modal.classList.remove('hidden');
}

/**
 * Close modal
 */
function closeModal() {
    document.getElementById('resultsModal').classList.add('hidden');
}

/**
 * Share on Twitter
 */
function shareTwitter() {
    const totalFields = getFieldCount();
    let text = '';
    if (countryStatus === 'full-ban') {
        text = `Citizens of ${selectedCountry} are BANNED from visiting the US under Trump's 2026 travel ban. 39 countries affected. This is real.`;
    } else if (countryStatus === 'partial-ban') {
        text = `Tourist visas from ${selectedCountry} are SUSPENDED under Trump's 2026 travel ban. Even if allowed, you'd need ${totalFields} form fields + DNA.`;
    } else {
        text = `To visit the US as a tourist from ${selectedCountry || 'abroad'}, you could need ${totalFields} form fields, DNA/iris scans (proposed), and 15 years of history. Real 2025-2026 requirements.`;
    }
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`, '_blank');
}

/**
 * Copy link to clipboard
 */
function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Link copied to clipboard!');
    });
}

/**
 * Handle auto-fill demo button click
 */
function handleAutoFillDemo() {
    autoFillDemo(selectCountry, updateRealTimeFieldCount, generateForm);
}

// Make functions globally accessible
window.closeModal = closeModal;
window.shareTwitter = shareTwitter;
window.copyLink = copyLink;

/**
 * Initialize the application
 */
function init() {
    // Expose global functions for onclick handlers
    exposeGlobals();

    // Set up the callback for repeater manager to update stats
    setUpdateStatsCallback(updateStats);

    // Build country grids
    buildCountryGrid('fullBanGrid', countryData.fullBan, 'full-ban');
    buildCountryGrid('partialBanGrid', countryData.partialBan, 'partial-ban');
    buildCountryGrid('vwpGrid', countryData.vwp, 'vwp');
    buildCountryGrid('standardGrid', countryData.standard, 'standard');

    // Country search functionality
    document.getElementById('countrySearch')?.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        document.querySelectorAll('.country-btn').forEach(btn => {
            const countryName = btn.dataset.country.toLowerCase();
            if (searchTerm === '' || countryName.includes(searchTerm)) {
                btn.style.display = '';
            } else {
                btn.style.display = 'none';
            }
        });

        // Show/hide category headers based on visible countries
        document.querySelectorAll('.country-category').forEach(category => {
            const visibleCountries = category.querySelectorAll('.country-btn:not([style*="display: none"])');
            category.style.display = visibleCountries.length > 0 ? '' : 'none';
        });
    });

    // Form generation button
    document.getElementById('generateForm')?.addEventListener('click', () => generateForm());

    // Submit button
    document.getElementById('submitForm')?.addEventListener('click', showResults);

    // Auto-fill demo button
    document.getElementById('autoFillDemo')?.addEventListener('click', handleAutoFillDemo);

    // Real-time field count updates
    const inputIds = ['familyMembers', 'emailCount', 'phoneCount', 'addressCount', 'educationCount',
                      'jobCount', 'travelCount', 'usTravelCount', 'usContactCount', 'usDestinationCount',
                      'organizationCount', 'socialMediaCount'];
    inputIds.forEach(id => {
        document.getElementById(id)?.addEventListener('input', updateRealTimeFieldCount);
    });

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Close modal on outside click
    document.getElementById('resultsModal')?.addEventListener('click', (e) => {
        if (e.target.id === 'resultsModal') {
            closeModal();
        }
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);
