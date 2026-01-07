// Social media platforms required by DS-160
const socialPlatforms = [
    'Facebook', 'Instagram', 'Twitter/X', 'LinkedIn', 'YouTube',
    'Reddit', 'TikTok', 'Pinterest', 'Tumblr', 'VKontakte',
    'Sina Weibo', 'QZone', 'Douban', 'Youku', 'Ask.FM',
    'Flickr', 'Twoo', 'Myspace', 'Google+', 'Vine'
];

// Country data with ISO codes for flags
const countryData = {
    // Full travel ban countries (19 + Palestinian Authority)
    fullBan: [
        { name: 'Afghanistan', code: 'AF' },
        { name: 'Burkina Faso', code: 'BF' },
        { name: 'Chad', code: 'TD' },
        { name: 'Equatorial Guinea', code: 'GQ' },
        { name: 'Eritrea', code: 'ER' },
        { name: 'Haiti', code: 'HT' },
        { name: 'Iran', code: 'IR' },
        { name: 'Laos', code: 'LA' },
        { name: 'Libya', code: 'LY' },
        { name: 'Mali', code: 'ML' },
        { name: 'Myanmar', code: 'MM' },
        { name: 'Niger', code: 'NE' },
        { name: 'Palestinian Authority', code: 'PS' },
        { name: 'Republic of the Congo', code: 'CG' },
        { name: 'Sierra Leone', code: 'SL' },
        { name: 'Somalia', code: 'SO' },
        { name: 'South Sudan', code: 'SS' },
        { name: 'Sudan', code: 'SD' },
        { name: 'Syria', code: 'SY' },
        { name: 'Yemen', code: 'YE' }
    ],
    // Partial travel ban countries (~20)
    partialBan: [
        { name: 'Angola', code: 'AO' },
        { name: 'Antigua and Barbuda', code: 'AG' },
        { name: 'Benin', code: 'BJ' },
        { name: 'Burundi', code: 'BI' },
        { name: "Côte d'Ivoire", code: 'CI' },
        { name: 'Cuba', code: 'CU' },
        { name: 'Dominica', code: 'DM' },
        { name: 'Gabon', code: 'GA' },
        { name: 'The Gambia', code: 'GM' },
        { name: 'Malawi', code: 'MW' },
        { name: 'Mauritania', code: 'MR' },
        { name: 'Nigeria', code: 'NG' },
        { name: 'Senegal', code: 'SN' },
        { name: 'Tanzania', code: 'TZ' },
        { name: 'Togo', code: 'TG' },
        { name: 'Tonga', code: 'TO' },
        { name: 'Venezuela', code: 'VE' },
        { name: 'Zambia', code: 'ZM' },
        { name: 'Zimbabwe', code: 'ZW' }
    ],
    // Visa Waiver Program countries (41)
    vwp: [
        { name: 'Andorra', code: 'AD' },
        { name: 'Australia', code: 'AU' },
        { name: 'Austria', code: 'AT' },
        { name: 'Belgium', code: 'BE' },
        { name: 'Brunei', code: 'BN' },
        { name: 'Chile', code: 'CL' },
        { name: 'Croatia', code: 'HR' },
        { name: 'Czech Republic', code: 'CZ' },
        { name: 'Denmark', code: 'DK' },
        { name: 'Estonia', code: 'EE' },
        { name: 'Finland', code: 'FI' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'Greece', code: 'GR' },
        { name: 'Hungary', code: 'HU' },
        { name: 'Iceland', code: 'IS' },
        { name: 'Ireland', code: 'IE' },
        { name: 'Israel', code: 'IL' },
        { name: 'Italy', code: 'IT' },
        { name: 'Japan', code: 'JP' },
        { name: 'Latvia', code: 'LV' },
        { name: 'Liechtenstein', code: 'LI' },
        { name: 'Lithuania', code: 'LT' },
        { name: 'Luxembourg', code: 'LU' },
        { name: 'Malta', code: 'MT' },
        { name: 'Monaco', code: 'MC' },
        { name: 'Netherlands', code: 'NL' },
        { name: 'New Zealand', code: 'NZ' },
        { name: 'Norway', code: 'NO' },
        { name: 'Poland', code: 'PL' },
        { name: 'Portugal', code: 'PT' },
        { name: 'San Marino', code: 'SM' },
        { name: 'Singapore', code: 'SG' },
        { name: 'Slovakia', code: 'SK' },
        { name: 'Slovenia', code: 'SI' },
        { name: 'South Korea', code: 'KR' },
        { name: 'Spain', code: 'ES' },
        { name: 'Sweden', code: 'SE' },
        { name: 'Switzerland', code: 'CH' },
        { name: 'Taiwan', code: 'TW' },
        { name: 'United Kingdom', code: 'GB' }
    ],
    // Standard enhanced vetting (all other countries)
    standard: [
        { name: 'Albania', code: 'AL' },
        { name: 'Algeria', code: 'DZ' },
        { name: 'Argentina', code: 'AR' },
        { name: 'Armenia', code: 'AM' },
        { name: 'Azerbaijan', code: 'AZ' },
        { name: 'Bahamas', code: 'BS' },
        { name: 'Bahrain', code: 'BH' },
        { name: 'Bangladesh', code: 'BD' },
        { name: 'Barbados', code: 'BB' },
        { name: 'Belarus', code: 'BY' },
        { name: 'Belize', code: 'BZ' },
        { name: 'Bhutan', code: 'BT' },
        { name: 'Bolivia', code: 'BO' },
        { name: 'Bosnia and Herzegovina', code: 'BA' },
        { name: 'Botswana', code: 'BW' },
        { name: 'Brazil', code: 'BR' },
        { name: 'Bulgaria', code: 'BG' },
        { name: 'Cambodia', code: 'KH' },
        { name: 'Cameroon', code: 'CM' },
        { name: 'Canada', code: 'CA' },
        { name: 'Cape Verde', code: 'CV' },
        { name: 'Central African Republic', code: 'CF' },
        { name: 'China', code: 'CN' },
        { name: 'Colombia', code: 'CO' },
        { name: 'Comoros', code: 'KM' },
        { name: 'Costa Rica', code: 'CR' },
        { name: 'Cyprus', code: 'CY' },
        { name: 'Democratic Republic of the Congo', code: 'CD' },
        { name: 'Djibouti', code: 'DJ' },
        { name: 'Dominican Republic', code: 'DO' },
        { name: 'Ecuador', code: 'EC' },
        { name: 'Egypt', code: 'EG' },
        { name: 'El Salvador', code: 'SV' },
        { name: 'Eswatini', code: 'SZ' },
        { name: 'Ethiopia', code: 'ET' },
        { name: 'Fiji', code: 'FJ' },
        { name: 'Georgia', code: 'GE' },
        { name: 'Ghana', code: 'GH' },
        { name: 'Grenada', code: 'GD' },
        { name: 'Guatemala', code: 'GT' },
        { name: 'Guinea', code: 'GN' },
        { name: 'Guinea-Bissau', code: 'GW' },
        { name: 'Guyana', code: 'GY' },
        { name: 'Honduras', code: 'HN' },
        { name: 'India', code: 'IN' },
        { name: 'Indonesia', code: 'ID' },
        { name: 'Iraq', code: 'IQ' },
        { name: 'Jamaica', code: 'JM' },
        { name: 'Jordan', code: 'JO' },
        { name: 'Kazakhstan', code: 'KZ' },
        { name: 'Kenya', code: 'KE' },
        { name: 'Kiribati', code: 'KI' },
        { name: 'Kosovo', code: 'XK' },
        { name: 'Kuwait', code: 'KW' },
        { name: 'Kyrgyzstan', code: 'KG' },
        { name: 'Lebanon', code: 'LB' },
        { name: 'Lesotho', code: 'LS' },
        { name: 'Liberia', code: 'LR' },
        { name: 'Madagascar', code: 'MG' },
        { name: 'Malaysia', code: 'MY' },
        { name: 'Maldives', code: 'MV' },
        { name: 'Marshall Islands', code: 'MH' },
        { name: 'Mauritius', code: 'MU' },
        { name: 'Mexico', code: 'MX' },
        { name: 'Micronesia', code: 'FM' },
        { name: 'Moldova', code: 'MD' },
        { name: 'Mongolia', code: 'MN' },
        { name: 'Montenegro', code: 'ME' },
        { name: 'Morocco', code: 'MA' },
        { name: 'Mozambique', code: 'MZ' },
        { name: 'Namibia', code: 'NA' },
        { name: 'Nauru', code: 'NR' },
        { name: 'Nepal', code: 'NP' },
        { name: 'Nicaragua', code: 'NI' },
        { name: 'North Korea', code: 'KP' },
        { name: 'North Macedonia', code: 'MK' },
        { name: 'Oman', code: 'OM' },
        { name: 'Pakistan', code: 'PK' },
        { name: 'Palau', code: 'PW' },
        { name: 'Panama', code: 'PA' },
        { name: 'Papua New Guinea', code: 'PG' },
        { name: 'Paraguay', code: 'PY' },
        { name: 'Peru', code: 'PE' },
        { name: 'Philippines', code: 'PH' },
        { name: 'Qatar', code: 'QA' },
        { name: 'Romania', code: 'RO' },
        { name: 'Russia', code: 'RU' },
        { name: 'Rwanda', code: 'RW' },
        { name: 'Saint Kitts and Nevis', code: 'KN' },
        { name: 'Saint Lucia', code: 'LC' },
        { name: 'Saint Vincent and the Grenadines', code: 'VC' },
        { name: 'Samoa', code: 'WS' },
        { name: 'São Tomé and Príncipe', code: 'ST' },
        { name: 'Saudi Arabia', code: 'SA' },
        { name: 'Serbia', code: 'RS' },
        { name: 'Seychelles', code: 'SC' },
        { name: 'Solomon Islands', code: 'SB' },
        { name: 'South Africa', code: 'ZA' },
        { name: 'Sri Lanka', code: 'LK' },
        { name: 'Suriname', code: 'SR' },
        { name: 'Tajikistan', code: 'TJ' },
        { name: 'Thailand', code: 'TH' },
        { name: 'Timor-Leste', code: 'TL' },
        { name: 'Trinidad and Tobago', code: 'TT' },
        { name: 'Tunisia', code: 'TN' },
        { name: 'Turkey', code: 'TR' },
        { name: 'Turkmenistan', code: 'TM' },
        { name: 'Tuvalu', code: 'TV' },
        { name: 'Uganda', code: 'UG' },
        { name: 'Ukraine', code: 'UA' },
        { name: 'United Arab Emirates', code: 'AE' },
        { name: 'Uruguay', code: 'UY' },
        { name: 'Uzbekistan', code: 'UZ' },
        { name: 'Vanuatu', code: 'VU' },
        { name: 'Vietnam', code: 'VN' }
    ]
};

// Section field definitions based on documented requirements
const sectionDefinitions = {
    emailHistory: {
        fieldsPerEntry: 5,
        entryFields: [
            { label: 'Email Address', type: 'email' },
            { label: 'Type (Personal/Business/Family)', type: 'select', options: ['Select Type', 'Personal', 'Business', 'Family', 'School'] },
            { label: 'Provider (Gmail, Yahoo, etc.)', type: 'text' },
            { label: 'Date Created', type: 'date' },
            { label: 'Still Active?', type: 'yesNo' }
        ]
    },
    phoneHistory: {
        fieldsPerEntry: 5,
        entryFields: [
            { label: 'Country Code', type: 'text', placeholder: '+1' },
            { label: 'Phone Number', type: 'tel' },
            { label: 'Type', type: 'select', options: ['Select Type', 'Personal Mobile', 'Business Mobile', 'Home Landline', 'Work Landline', "Family Member's Phone"] },
            { label: 'Carrier/Provider', type: 'text' },
            { label: 'Years Used (From-To)', type: 'text', placeholder: '2020-Present' }
        ]
    },
    addressHistory: {
        fieldsPerEntry: 10,
        entryFields: [
            { label: 'Street Address Line 1', type: 'text' },
            { label: 'Street Address Line 2', type: 'text', placeholder: 'Apt, Suite, etc.' },
            { label: 'City', type: 'text' },
            { label: 'State/Province/Region', type: 'text' },
            { label: 'Postal Code', type: 'text' },
            { label: 'Country', type: 'text' },
            { label: 'Date Moved In', type: 'date' },
            { label: 'Date Moved Out', type: 'date' },
            { label: 'Landlord/Property Owner Name', type: 'text', status: 'likely' },
            { label: 'Landlord Phone Number', type: 'tel', status: 'likely' }
        ]
    },
    educationHistory: {
        fieldsPerEntry: 10,
        entryFields: [
            { label: 'Institution Name', type: 'text' },
            { label: 'Institution Address (City, Country)', type: 'text' },
            { label: 'Institution Phone Number', type: 'tel' },
            { label: 'Field of Study', type: 'text' },
            { label: 'Degree/Certificate Obtained', type: 'text', placeholder: 'e.g., Bachelor of Science, High School Diploma' },
            { label: 'Start Date (Month/Year)', type: 'text', placeholder: 'MM/YYYY' },
            { label: 'End Date (Month/Year)', type: 'text', placeholder: 'MM/YYYY' },
            { label: 'Academic Advisor/Department Head Name', type: 'text' },
            { label: 'Academic Advisor Phone Number', type: 'tel' },
            { label: 'Did you complete this program?', type: 'yesNo' }
        ]
    },
    employmentHistory: {
        fieldsPerEntry: 12,
        entryFields: [
            { label: 'Employer Name', type: 'text' },
            { label: 'Employer Address - Street', type: 'text' },
            { label: 'Employer Address - City', type: 'text' },
            { label: 'Employer Address - Country', type: 'text' },
            { label: 'Employer Phone Number', type: 'tel' },
            { label: 'Supervisor Name', type: 'text' },
            { label: 'Supervisor Phone', type: 'tel' },
            { label: 'Your Job Title', type: 'text' },
            { label: 'Start Date', type: 'date' },
            { label: 'End Date', type: 'date' },
            { label: 'Monthly Salary (USD equivalent)', type: 'number' },
            { label: 'Detailed Description of Duties', type: 'textarea', fullWidth: true }
        ]
    },
    travelHistory: {
        fieldsPerEntry: 8,
        entryFields: [
            { label: 'Country Visited', type: 'text' },
            { label: 'City/Cities Visited', type: 'text' },
            { label: 'Arrival Date', type: 'date' },
            { label: 'Departure Date', type: 'date' },
            { label: 'Purpose of Visit', type: 'select', options: ['Select Purpose', 'Tourism', 'Business', 'Family Visit', 'Education', 'Medical', 'Other'] },
            { label: 'Accommodation Address', type: 'text' },
            { label: 'Flight Number (Inbound)', type: 'text', placeholder: 'If applicable' },
            { label: 'Flight Number (Outbound)', type: 'text', placeholder: 'If applicable' }
        ]
    },
    previousUSTravel: {
        fieldsPerEntry: 10,
        entryFields: [
            { label: 'Date of Arrival', type: 'date' },
            { label: 'Date of Departure', type: 'date' },
            { label: 'Port of Entry (Airport/Land Crossing)', type: 'text' },
            { label: 'Visa Type Used', type: 'text', placeholder: 'e.g., B1/B2, F-1, ESTA' },
            { label: 'Visa Number', type: 'text' },
            { label: 'Purpose of Visit', type: 'text' },
            { label: 'Complete Itinerary (all cities visited)', type: 'textarea' },
            { label: 'Accommodation Addresses', type: 'textarea' },
            { label: 'Did you overstay your authorized period?', type: 'yesNo' },
            { label: 'Have you ever been denied entry to the U.S.?', type: 'yesNo' }
        ]
    },
    usContacts: {
        tripInfoFields: [
            { label: 'Primary Purpose of Trip', type: 'select', options: ['Select Purpose', 'Tourism', 'Business', 'Family Visit', 'Medical Treatment', 'Conference/Event', 'Other'] },
            { label: 'Detailed Description of Purpose', type: 'textarea', placeholder: 'Required - Describe activities, locations, and purpose in detail' },
            { label: 'Intended Length of Stay (Days)', type: 'number' },
            { label: 'Intended Date of Arrival', type: 'date' },
            { label: 'Intended Date of Departure', type: 'date' }
        ],
        contactFieldsPerEntry: 8,
        contactFields: [
            { label: 'Contact Type', type: 'select', options: ['Select Type', 'Friend', 'Family', 'Business Contact', 'Hotel', 'Tour Company', 'Other'] },
            { label: 'Contact Full Legal Name / Organization Name', type: 'text' },
            { label: 'Relationship to You', type: 'text' },
            { label: 'Contact Address (Street, City, State, ZIP)', type: 'text' },
            { label: 'Contact Phone Number', type: 'tel' },
            { label: 'Contact Email Address', type: 'email' },
            { label: 'Have you met this contact in person before?', type: 'yesNo' },
            { label: 'If yes, when and where?', type: 'text', placeholder: 'If applicable' }
        ],
        itineraryFieldsPerEntry: 6,
        itineraryFields: [
            { label: 'City/Location', type: 'text' },
            { label: 'State', type: 'text' },
            { label: 'Arrival Date at This Location', type: 'date' },
            { label: 'Departure Date from This Location', type: 'date' },
            { label: 'Accommodation Name and Address', type: 'text' },
            { label: 'Activities Planned at This Location', type: 'textarea' }
        ]
    },
    financialInfo: {
        incomeFields: [
            { label: 'Current Monthly Income (USD)', type: 'number' },
            { label: 'Current Employer Monthly Salary', type: 'number' },
            { label: 'Secondary Income Sources (describe)', type: 'textarea' },
            { label: "Spouse's Monthly Income (if applicable)", type: 'number', placeholder: 'If applicable' }
        ],
        tripFundingFields: [
            { label: 'Who is paying for this trip?', type: 'select', options: ['Select...', 'Self', 'Employer', 'Family Member', 'Sponsor/Organization', 'Other'] },
            { label: "If sponsored: Sponsor's full legal name", type: 'text', placeholder: 'If applicable' },
            { label: "Sponsor's relationship to you", type: 'text', placeholder: 'If applicable' },
            { label: "Sponsor's address", type: 'text', placeholder: 'If applicable' },
            { label: "Sponsor's phone number", type: 'tel', placeholder: 'If applicable' },
            { label: "Sponsor's email address", type: 'email', placeholder: 'If applicable' }
        ]
    },
    organizations: {
        fieldsPerEntry: 6,
        entryFields: [
            { label: 'Organization Name', type: 'text' },
            { label: 'Organization Type', type: 'select', options: ['Select Type', 'Professional', 'Social', 'Religious', 'Political', 'Athletic', 'Alumni', 'Other'] },
            { label: 'Your Role/Position', type: 'text' },
            { label: 'Membership Start Date', type: 'text', placeholder: 'MM/YYYY' },
            { label: 'Membership End Date (or "Current")', type: 'text', placeholder: 'MM/YYYY or Current' },
            { label: 'Organization Address/Headquarters Location', type: 'text' }
        ]
    }
};

// Convert country code to flag emoji
function getFlagEmoji(countryCode) {
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

// Constants
const MINUTES_PER_FIELD = 2;
const FIELDS_PER_PAGE = 30;

let totalFieldCount = 0;
let selectedCountry = '';
let countryStatus = '';

// Helper: Create a single field HTML
function createField(config) {
    const {
        label,
        type = 'text',
        placeholder = 'Required',
        status = null,
        options = [],
        note = null,
        fullWidth = false
    } = config;

    const statusBadge = status ? `<span class="status-badge-inline ${status}">${status.toUpperCase()}</span>` : '';
    const widthClass = fullWidth ? ' full-width' : '';

    let inputHtml = '';
    switch (type) {
        case 'select':
            inputHtml = `<select disabled>${options.map(opt => `<option>${opt}</option>`).join('')}</select>`;
            break;
        case 'yesNo':
            inputHtml = `<select disabled><option>Select Yes/No</option><option>Yes</option><option>No</option></select>`;
            break;
        case 'textarea':
            inputHtml = `<textarea disabled placeholder="${placeholder}"></textarea>`;
            break;
        default:
            inputHtml = `<input type="${type}" disabled placeholder="${placeholder}">`;
    }

    const noteHtml = note ? `<p class="field-note">${note}</p>` : '';

    return `
        <div class="field-group${widthClass}">
            <label>${statusBadge}${label}</label>
            ${inputHtml}
            ${noteHtml}
        </div>
    `;
}

// Helper: Create entry container
function createEntryContainer(className, title, subtitle, content) {
    return `
        <div class="${className}">
            <h4>${title}${subtitle ? ` <span class="entry-subtitle">${subtitle}</span>` : ''}</h4>
            <div class="field-row">
                ${content}
            </div>
        </div>
    `;
}

// Build country flag grid
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

function selectCountry(name, status) {
    document.querySelectorAll('.country-btn.selected').forEach(btn => {
        btn.classList.remove('selected');
    });

    const btn = document.querySelector(`.country-btn[data-country="${name}"]`);
    if (btn) btn.classList.add('selected');

    selectedCountry = name;
    countryStatus = status;

    handleCountrySelect();
}

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
                <button class="btn-secondary" onclick="showFormAnyway()">Continue for demonstration purposes</button>
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
                <button class="btn-secondary" onclick="showFormAnyway()">Continue for demonstration purposes</button>
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

function showFormAnyway() {
    document.getElementById('formQuestions').classList.remove('hidden');
    const warningDiv = document.getElementById('countryWarning');
    warningDiv.querySelector('.ban-demo-note').innerHTML = '<p class="demo-active">Showing form for demonstration purposes only. This visa category is currently suspended.</p>';
    updateRealTimeFieldCount();
}

// Calculate estimated field count
function calculateEstimatedFields() {
    const getValue = (id) => parseInt(document.getElementById(id)?.value) || 0;

    let estimate = 50; // Base personal info fields (expanded: name, aliases, birth, sex, marital, citizenship, IDs, passport, contact)
    estimate += 7; // Biometrics
    estimate += Math.max(getValue('socialMediaCount'), socialPlatforms.length) * 3;
    estimate += getValue('emailCount') * 5;
    estimate += getValue('phoneCount') * 5;

    const familyCount = getValue('familyMembers');
    estimate += Math.min(familyCount, 2) * 7 + Math.max(0, familyCount - 2) * 8;

    estimate += getValue('addressCount') * 10;
    estimate += getValue('educationCount') * 10;
    estimate += getValue('jobCount') * 12;
    estimate += getValue('travelCount') * 8;
    estimate += getValue('usTravelCount') * 10;

    estimate += 5; // Trip info
    estimate += getValue('usContactCount') * 8;
    estimate += getValue('usDestinationCount') * 6;

    estimate += 10; // Financial info
    estimate += getValue('organizationCount') * 6;
    estimate += 5; // Security questions

    return estimate;
}

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

// Section generators
function generateSocialMediaFields(count) {
    const container = document.getElementById('socialMediaFields');
    if (!container) return;
    container.innerHTML = '';

    socialPlatforms.forEach(platform => {
        const div = document.createElement('div');
        div.className = 'platform-item';
        div.innerHTML = `
            <span class="platform-name">${platform}</span>
            <input type="text" disabled placeholder="Username (Required)">
            <input type="text" disabled placeholder="Profile URL (Required)">
            <select disabled>
                <option>Account Status</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Deleted</option>
            </select>
        `;
        container.appendChild(div);
        totalFieldCount += 3;
    });

    if (count > socialPlatforms.length) {
        for (let i = 0; i < count - socialPlatforms.length; i++) {
            const div = document.createElement('div');
            div.className = 'platform-item additional';
            div.innerHTML = `
                <span class="platform-name">Additional Account ${i + 1}</span>
                <input type="text" disabled placeholder="Platform Name">
                <input type="text" disabled placeholder="Username">
                <input type="text" disabled placeholder="Profile URL">
            `;
            container.appendChild(div);
            totalFieldCount += 3;
        }
    }
}

function generateEmailFields(count) {
    const container = document.getElementById('emailFields');
    if (!container) return;
    container.innerHTML = '';
    const def = sectionDefinitions.emailHistory;

    for (let i = 0; i < count; i++) {
        const content = def.entryFields.map(field => createField(field)).join('');
        container.insertAdjacentHTML('beforeend', createEntryContainer('email-entry', `Email Address ${i + 1}`, '', content));
        totalFieldCount += def.fieldsPerEntry;
    }
}

function generatePhoneFields(count) {
    const container = document.getElementById('phoneFields');
    if (!container) return;
    container.innerHTML = '';
    const def = sectionDefinitions.phoneHistory;

    for (let i = 0; i < count; i++) {
        const content = def.entryFields.map(field => createField(field)).join('');
        container.insertAdjacentHTML('beforeend', createEntryContainer('phone-entry', `Phone Number ${i + 1}`, '', content));
        totalFieldCount += def.fieldsPerEntry;
    }
}

function generateFamilyFields(count) {
    const container = document.getElementById('familyFields');
    if (!container) return;
    container.innerHTML = '';

    const relationships = ['Father', 'Mother', 'Spouse', 'Sibling', 'Child'];

    for (let i = 0; i < count; i++) {
        const rel = i < relationships.length ? relationships[i] : `Family Member ${i + 1}`;
        const isParent = rel === 'Father' || rel === 'Mother';
        const isChild = rel === 'Child' || (i >= 4 && rel.includes('Family Member'));

        let fieldsHtml = `
            ${createField({ label: 'Full Legal Name', type: 'text' })}
            ${createField({ label: 'Relationship', type: 'text', placeholder: rel })}
            ${createField({ label: 'Date of Birth', type: 'date' })}
            ${createField({ label: 'Place of Birth (City)', type: 'text' })}
            ${createField({ label: 'Place of Birth (Country)', type: 'text' })}
        `;

        let fieldCount = 5;

        if (isParent) {
            fieldsHtml += `
                ${createField({ label: 'Current Residence - City', type: 'text' })}
                ${createField({ label: 'Current Residence - Country', type: 'text' })}
            `;
            fieldCount = 7;
        } else if (!isChild) {
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

        container.insertAdjacentHTML('beforeend', createEntryContainer('family-entry', rel, '', fieldsHtml));
        totalFieldCount += fieldCount;
    }
}

function generateAddressFields(count) {
    const container = document.getElementById('addressFields');
    if (!container) return;
    container.innerHTML = '';
    const def = sectionDefinitions.addressHistory;

    for (let i = 0; i < count; i++) {
        const content = def.entryFields.map(field => createField(field)).join('');
        container.insertAdjacentHTML('beforeend', createEntryContainer('address-entry', `Address ${i + 1}`, i === 0 ? '(Current)' : '', content));
        totalFieldCount += def.fieldsPerEntry;
    }
}

function generateEducationFields(count) {
    const container = document.getElementById('educationFields');
    if (!container) return;
    container.innerHTML = '';
    const def = sectionDefinitions.educationHistory;

    for (let i = 0; i < count; i++) {
        const content = def.entryFields.map(field => createField(field)).join('');
        container.insertAdjacentHTML('beforeend', createEntryContainer('education-entry', `Educational Institution ${i + 1}`, i === 0 ? '(Most Recent)' : '', content));
        totalFieldCount += def.fieldsPerEntry;
    }
}

function generateEmploymentFields(count) {
    const container = document.getElementById('employmentFields');
    if (!container) return;
    container.innerHTML = '';
    const def = sectionDefinitions.employmentHistory;

    for (let i = 0; i < count; i++) {
        const content = def.entryFields.map(field => createField(field)).join('');
        container.insertAdjacentHTML('beforeend', createEntryContainer('employment-entry', `Position ${i + 1}`, i === 0 ? '(Current/Most Recent)' : '', content));
        totalFieldCount += def.fieldsPerEntry;
    }
}

function generateTravelFields(count) {
    const container = document.getElementById('travelFields');
    if (!container) return;
    container.innerHTML = '';
    const def = sectionDefinitions.travelHistory;

    for (let i = 0; i < count; i++) {
        const content = def.entryFields.map(field => createField(field)).join('');
        container.insertAdjacentHTML('beforeend', createEntryContainer('travel-entry', `Trip ${i + 1}`, '', content));
        totalFieldCount += def.fieldsPerEntry;
    }
}

function generateUSTravelFields(count) {
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
        container.insertAdjacentHTML('beforeend', createEntryContainer('us-travel-entry', `U.S. Visit ${i + 1}`, '', content));
        totalFieldCount += def.fieldsPerEntry;
    }
}

function generateUSContactsFields(contactCount, destinationCount) {
    const container = document.getElementById('usContactsFields');
    if (!container) return;
    container.innerHTML = '';
    const def = sectionDefinitions.usContacts;

    // Trip info fields
    let tripInfoHtml = '<div class="subsection"><h5>Trip Information</h5><div class="field-row">';
    tripInfoHtml += def.tripInfoFields.map(field => createField(field)).join('');
    tripInfoHtml += '</div></div>';
    container.insertAdjacentHTML('beforeend', tripInfoHtml);
    totalFieldCount += def.tripInfoFields.length;

    // U.S. Contacts
    if (contactCount > 0) {
        let contactsHtml = '<div class="subsection"><h5>U.S. Contacts</h5>';
        for (let i = 0; i < contactCount; i++) {
            const content = def.contactFields.map(field => createField(field)).join('');
            contactsHtml += createEntryContainer('contact-entry', `U.S. Contact ${i + 1}`, '', content);
            totalFieldCount += def.contactFieldsPerEntry;
        }
        contactsHtml += '</div>';
        container.insertAdjacentHTML('beforeend', contactsHtml);
    }

    // Itinerary
    let itineraryHtml = '<div class="subsection"><h5>Planned Itinerary</h5>';
    for (let i = 0; i < destinationCount; i++) {
        const content = def.itineraryFields.map(field => createField(field)).join('');
        itineraryHtml += createEntryContainer('itinerary-entry', `Destination ${i + 1}`, '', content);
        totalFieldCount += def.itineraryFieldsPerEntry;
    }
    itineraryHtml += '</div>';
    container.insertAdjacentHTML('beforeend', itineraryHtml);
}

function generateFinancialFields() {
    const container = document.getElementById('financialFields');
    if (!container) return;
    container.innerHTML = '';
    const def = sectionDefinitions.financialInfo;

    let incomeHtml = '<div class="subsection"><h5>Current Financial Status</h5><div class="field-row">';
    incomeHtml += def.incomeFields.map(field => createField(field)).join('');
    incomeHtml += '</div></div>';
    container.insertAdjacentHTML('beforeend', incomeHtml);
    totalFieldCount += def.incomeFields.length;

    let fundingHtml = '<div class="subsection"><h5>Trip Funding Source</h5><div class="field-row">';
    fundingHtml += def.tripFundingFields.map(field => createField(field)).join('');
    fundingHtml += '</div></div>';
    container.insertAdjacentHTML('beforeend', fundingHtml);
    totalFieldCount += def.tripFundingFields.length;
}

function generateOrganizationFields(count) {
    const container = document.getElementById('organizationsContainer');
    if (!container) return;
    container.innerHTML = '';

    if (count === 0) {
        container.innerHTML = '<p class="no-entries">No organization memberships to report.</p>';
        return;
    }

    const def = sectionDefinitions.organizations;

    for (let i = 0; i < count; i++) {
        const content = def.entryFields.map(field => createField(field)).join('');
        container.insertAdjacentHTML('beforeend', createEntryContainer('organization-entry', `Organization ${i + 1}`, '', content));
        totalFieldCount += def.fieldsPerEntry;
    }

    const countDisplay = document.querySelector('#organizationsRepeater .entry-count');
    if (countDisplay) {
        countDisplay.textContent = `(${count} entries)`;
    }
}

function generateForm() {
    const getValue = (id) => parseInt(document.getElementById(id)?.value) || 0;

    const requiredFields = ['familyMembers', 'emailCount', 'phoneCount', 'addressCount',
                           'educationCount', 'jobCount', 'travelCount', 'socialMediaCount',
                           'usDestinationCount'];

    for (const field of requiredFields) {
        if (isNaN(getValue(field))) {
            alert('Please fill in all fields with valid numbers.');
            return;
        }
    }

    totalFieldCount = 50; // Base personal info (expanded: name, aliases, birth, sex, marital, citizenship, IDs, passport, contact)

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

    totalFieldCount += 7 + 5; // Biometrics + security questions

    updateStats();

    document.getElementById('phase1').classList.add('hidden');
    document.getElementById('phase2').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateStats() {
    document.getElementById('totalFields').textContent = totalFieldCount.toLocaleString();
    const hours = Math.ceil((totalFieldCount * MINUTES_PER_FIELD) / 60);
    document.getElementById('estimatedTime').textContent = hours;
    const pages = Math.ceil(totalFieldCount / FIELDS_PER_PAGE);
    document.getElementById('pagesCount').textContent = pages;
}

function showResults() {
    const modal = document.getElementById('resultsModal');

    document.getElementById('finalFieldCount').textContent = totalFieldCount.toLocaleString();
    const hours = Math.ceil((totalFieldCount * MINUTES_PER_FIELD) / 60);
    document.getElementById('finalTimeEstimate').textContent = hours;
    const pages = Math.ceil(totalFieldCount / FIELDS_PER_PAGE);
    document.getElementById('finalPages').textContent = pages;

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

    let absurdityBase = Math.min(100, Math.round((totalFieldCount / 500) * 100));
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

function closeModal() {
    document.getElementById('resultsModal').classList.add('hidden');
}

function shareTwitter() {
    let text = '';
    if (countryStatus === 'full-ban') {
        text = `Citizens of ${selectedCountry} are BANNED from visiting the US under Trump's 2026 travel ban. 39 countries affected. This is real.`;
    } else if (countryStatus === 'partial-ban') {
        text = `Tourist visas from ${selectedCountry} are SUSPENDED under Trump's 2026 travel ban. Even if allowed, you'd need ${totalFieldCount} form fields + DNA.`;
    } else {
        text = `To visit the US as a tourist from ${selectedCountry || 'abroad'}, you could need ${totalFieldCount} form fields, DNA/iris scans (proposed), and 15 years of history. Real 2025-2026 requirements.`;
    }
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`, '_blank');
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Link copied to clipboard!');
    });
}

// Auto-fill demo with realistic random values
function autoFillDemo() {
    // Pick a random "standard" country to show full form experience
    const standardCountries = countryData.standard;
    const randomCountry = standardCountries[Math.floor(Math.random() * standardCountries.length)];

    // Select the country
    selectCountry(randomCountry.name, 'standard');

    // Scroll to show country selection briefly
    document.querySelector('.country-grid-container').scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Fill in realistic random values after a short delay
    setTimeout(() => {
        // Realistic ranges based on a typical adult traveler
        const realisticValues = {
            familyMembers: randomInRange(4, 8),      // Parents, siblings, maybe spouse/kids
            emailCount: randomInRange(5, 12),        // Personal, work, old accounts
            phoneCount: randomInRange(3, 6),         // Personal, work, maybe old numbers
            addressCount: randomInRange(4, 10),      // Moved a few times over 15 years
            educationCount: randomInRange(2, 4),     // High school, college, maybe grad school
            jobCount: randomInRange(4, 10),          // Average job tenure ~2-3 years
            travelCount: randomInRange(8, 20),       // Moderate traveler
            usTravelCount: randomInRange(0, 5),      // Some previous US visits
            usContactCount: randomInRange(1, 4),     // A few contacts
            usDestinationCount: randomInRange(2, 5), // NYC, LA, maybe Vegas
            organizationCount: randomInRange(3, 8),  // Gym, clubs, professional orgs
            socialMediaCount: randomInRange(6, 12)   // Various platforms over 5 years
        };

        // Set all values
        Object.entries(realisticValues).forEach(([id, value]) => {
            const input = document.getElementById(id);
            if (input) {
                input.value = value;
                // Trigger input event for real-time counter
                input.dispatchEvent(new Event('input', { bubbles: true }));
            }
        });

        // Update the real-time counter
        updateRealTimeFieldCount();

        // Auto-generate the form after another short delay
        setTimeout(() => {
            generateForm();
        }, 800);

    }, 500);
}

// Helper for random range
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    buildCountryGrid('fullBanGrid', countryData.fullBan, 'full-ban');
    buildCountryGrid('partialBanGrid', countryData.partialBan, 'partial-ban');
    buildCountryGrid('vwpGrid', countryData.vwp, 'vwp');
    buildCountryGrid('standardGrid', countryData.standard, 'standard');

    document.getElementById('countrySearch')?.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        document.querySelectorAll('.country-btn').forEach(btn => {
            const countryName = btn.dataset.country.toLowerCase();
            btn.style.display = (searchTerm === '' || countryName.includes(searchTerm)) ? '' : 'none';
        });

        document.querySelectorAll('.country-category').forEach(category => {
            const visibleCountries = category.querySelectorAll('.country-btn:not([style*="display: none"])');
            category.style.display = visibleCountries.length > 0 ? '' : 'none';
        });
    });

    document.getElementById('generateForm')?.addEventListener('click', generateForm);
    document.getElementById('submitForm')?.addEventListener('click', showResults);
    document.getElementById('autoFillDemo')?.addEventListener('click', autoFillDemo);

    // Real-time field count updates
    const inputIds = ['familyMembers', 'emailCount', 'phoneCount', 'addressCount', 'educationCount',
                      'jobCount', 'travelCount', 'usTravelCount', 'usContactCount', 'usDestinationCount',
                      'organizationCount', 'socialMediaCount'];
    inputIds.forEach(id => {
        document.getElementById(id)?.addEventListener('input', updateRealTimeFieldCount);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    document.getElementById('resultsModal')?.addEventListener('click', (e) => {
        if (e.target.id === 'resultsModal') closeModal();
    });
});
