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

// Convert country code to flag emoji
function getFlagEmoji(countryCode) {
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

let totalFieldCount = 0;
let selectedCountry = '';
let countryStatus = '';

// Build country flag grid
function buildCountryGrid(containerId, countries, status) {
    const container = document.getElementById(containerId);
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

// Initialize country grids
document.addEventListener('DOMContentLoaded', function() {
    buildCountryGrid('fullBanGrid', countryData.fullBan, 'full-ban');
    buildCountryGrid('partialBanGrid', countryData.partialBan, 'partial-ban');
    buildCountryGrid('vwpGrid', countryData.vwp, 'vwp');
    buildCountryGrid('standardGrid', countryData.standard, 'standard');

    // Search functionality
    document.getElementById('countrySearch').addEventListener('input', function(e) {
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
});

document.getElementById('generateForm').addEventListener('click', generateForm);
document.getElementById('submitForm').addEventListener('click', showResults);

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
            <h4>🚫 TRAVEL BAN IN EFFECT</h4>
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
            <h4>⚠️ PARTIAL TRAVEL BAN</h4>
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
            <h4>📋 VISA WAIVER PROGRAM - Enhanced Requirements Proposed</h4>
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
    } else {
        warningDiv.className = 'country-warning standard';
        warningDiv.innerHTML = `
            <h4>📝 ENHANCED VETTING REQUIRED</h4>
            <p>Citizens of <strong>${selectedCountry}</strong> require a visa and are subject to enhanced vetting procedures.</p>
            <p>You may be selected for additional screening using form DS-5535, which requires 15 years of history.</p>
            <p>A visa bond of up to <strong>$15,000</strong> may be required.</p>
            <p class="ban-source">Source: Executive Order 14161; DS-5535 Supplemental Form</p>
        `;
        formQuestions.classList.remove('hidden');
    }
}

function showFormAnyway() {
    document.getElementById('formQuestions').classList.remove('hidden');
    const warningDiv = document.getElementById('countryWarning');
    warningDiv.querySelector('.ban-demo-note').innerHTML = '<p class="demo-active">Showing form for demonstration purposes only. This visa category is currently suspended.</p>';
}

function generateForm() {
    // Validate inputs
    const familyMembers = parseInt(document.getElementById('familyMembers').value);
    const emailCount = parseInt(document.getElementById('emailCount').value);
    const phoneCount = parseInt(document.getElementById('phoneCount').value);
    const addressCount = parseInt(document.getElementById('addressCount').value);
    const jobCount = parseInt(document.getElementById('jobCount').value);
    const travelCount = parseInt(document.getElementById('travelCount').value);
    const socialMediaCount = parseInt(document.getElementById('socialMediaCount').value);

    // Check for empty/invalid inputs
    if (isNaN(familyMembers) || isNaN(emailCount) || isNaN(phoneCount) ||
        isNaN(addressCount) || isNaN(jobCount) || isNaN(travelCount) || isNaN(socialMediaCount)) {
        alert('Please fill in all fields with valid numbers.');
        return;
    }

    totalFieldCount = 11; // Base personal info fields

    // Generate Social Media Fields
    generateSocialMediaFields(socialMediaCount);

    // Generate Email Fields
    generateEmailFields(emailCount);

    // Generate Phone Fields
    generatePhoneFields(phoneCount);

    // Generate Family Fields
    generateFamilyFields(familyMembers);

    // Generate Address Fields
    generateAddressFields(addressCount);

    // Generate Employment Fields
    generateEmploymentFields(jobCount);

    // Generate Travel Fields
    generateTravelFields(travelCount);

    // Add biometrics (7 items) and security questions (5)
    totalFieldCount += 7 + 5;

    // Update stats
    updateStats();

    // Show phase 2
    document.getElementById('phase1').classList.add('hidden');
    document.getElementById('phase2').classList.remove('hidden');

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function generateSocialMediaFields(count) {
    const container = document.getElementById('socialMediaFields');
    container.innerHTML = '';

    // Always show all 20 platforms as required
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

    // Add extra accounts if user has more
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
    container.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const div = document.createElement('div');
        div.className = 'email-entry';
        div.innerHTML = `
            <h4>Email Address ${i + 1}</h4>
            <div class="field-row">
                <div class="field-group">
                    <label>Email Address</label>
                    <input type="email" disabled placeholder="Required">
                </div>
                <div class="field-group">
                    <label>Type (Personal/Business/Family)</label>
                    <select disabled><option>Select Type</option></select>
                </div>
                <div class="field-group">
                    <label>Provider (Gmail, Yahoo, etc.)</label>
                    <input type="text" disabled placeholder="Required">
                </div>
                <div class="field-group">
                    <label>Date Created</label>
                    <input type="date" disabled>
                </div>
                <div class="field-group">
                    <label>Still Active?</label>
                    <select disabled><option>Yes/No</option></select>
                </div>
            </div>
        `;
        container.appendChild(div);
        totalFieldCount += 5;
    }
}

function generatePhoneFields(count) {
    const container = document.getElementById('phoneFields');
    container.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const div = document.createElement('div');
        div.className = 'phone-entry';
        div.innerHTML = `
            <h4>Phone Number ${i + 1}</h4>
            <div class="field-row">
                <div class="field-group">
                    <label>Country Code</label>
                    <input type="text" disabled placeholder="+1">
                </div>
                <div class="field-group">
                    <label>Phone Number</label>
                    <input type="tel" disabled placeholder="Required">
                </div>
                <div class="field-group">
                    <label>Type</label>
                    <select disabled>
                        <option>Select Type</option>
                        <option>Personal Mobile</option>
                        <option>Business Mobile</option>
                        <option>Home Landline</option>
                        <option>Work Landline</option>
                        <option>Family Member's Phone</option>
                    </select>
                </div>
                <div class="field-group">
                    <label>Carrier/Provider</label>
                    <input type="text" disabled placeholder="Required">
                </div>
                <div class="field-group">
                    <label>Years Used (From-To)</label>
                    <input type="text" disabled placeholder="2020-Present">
                </div>
            </div>
        `;
        container.appendChild(div);
        totalFieldCount += 5;
    }
}

function generateFamilyFields(count) {
    const container = document.getElementById('familyFields');
    container.innerHTML = '';

    const relationships = ['Father', 'Mother', 'Spouse', 'Sibling', 'Child'];

    for (let i = 0; i < count; i++) {
        const rel = i < relationships.length ? relationships[i] : `Family Member ${i + 1}`;
        const isParent = rel === 'Father' || rel === 'Mother';
        const isChild = rel === 'Child';

        // Parents: names, DOB, birthplace, residence (per proposed rule)
        // Spouse/siblings: "complete identifying information"
        // Children: names, DOB, birthplace

        const div = document.createElement('div');
        div.className = 'family-entry';

        let fieldsHtml = `
            <h4>${rel}</h4>
            <div class="field-row">
                <div class="field-group">
                    <label>Full Legal Name</label>
                    <input type="text" disabled placeholder="Required">
                </div>
                <div class="field-group">
                    <label>Relationship</label>
                    <input type="text" disabled placeholder="Required" value="${rel}">
                </div>
                <div class="field-group">
                    <label>Date of Birth</label>
                    <input type="date" disabled>
                </div>
                <div class="field-group">
                    <label>Place of Birth (City)</label>
                    <input type="text" disabled placeholder="Required">
                </div>
                <div class="field-group">
                    <label>Place of Birth (Country)</label>
                    <input type="text" disabled placeholder="Required">
                </div>`;

        // Parents get residence info
        if (isParent) {
            fieldsHtml += `
                <div class="field-group">
                    <label>Current Residence - City</label>
                    <input type="text" disabled placeholder="Required">
                </div>
                <div class="field-group">
                    <label>Current Residence - Country</label>
                    <input type="text" disabled placeholder="Required">
                </div>`;
            totalFieldCount += 7;
        }
        // Children only get name, DOB, birthplace (already covered above)
        else if (isChild) {
            totalFieldCount += 5;
        }
        // Spouse/siblings get "complete identifying information"
        else {
            fieldsHtml += `
                <div class="field-group">
                    <label>Current Nationality</label>
                    <input type="text" disabled placeholder="Required">
                </div>
                <div class="field-group">
                    <label>Current Address - Street</label>
                    <input type="text" disabled placeholder="Required">
                </div>
                <div class="field-group">
                    <label>Current Address - City</label>
                    <input type="text" disabled placeholder="Required">
                </div>
                <div class="field-group">
                    <label>Current Address - Country</label>
                    <input type="text" disabled placeholder="Required">
                </div>
                <div class="field-group">
                    <label><span class="status-badge-inline likely">LIKELY</span> Phone Number</label>
                    <input type="tel" disabled placeholder="Likely required">
                </div>
                <div class="field-group">
                    <label><span class="status-badge-inline likely">LIKELY</span> Email Address</label>
                    <input type="email" disabled placeholder="Likely required">
                </div>`;
            totalFieldCount += 11;
        }

        fieldsHtml += `</div>`;
        div.innerHTML = fieldsHtml;
        container.appendChild(div);
    }
}

function generateAddressFields(count) {
    const container = document.getElementById('addressFields');
    container.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const div = document.createElement('div');
        div.className = 'address-entry';
        div.innerHTML = `
            <h4>Address ${i + 1} ${i === 0 ? '(Current)' : ''}</h4>
            <div class="field-row">
                <div class="field-group">
                    <label>Street Address Line 1</label>
                    <input type="text" disabled placeholder="Required">
                </div>
                <div class="field-group">
                    <label>Street Address Line 2</label>
                    <input type="text" disabled placeholder="Apt, Suite, etc.">
                </div>
                <div class="field-group">
                    <label>City</label>
                    <input type="text" disabled placeholder="Required">
                </div>
                <div class="field-group">
                    <label>State/Province/Region</label>
                    <input type="text" disabled placeholder="Required">
                </div>
                <div class="field-group">
                    <label>Postal Code</label>
                    <input type="text" disabled placeholder="Required">
                </div>
                <div class="field-group">
                    <label>Country</label>
                    <input type="text" disabled placeholder="Required">
                </div>
                <div class="field-group">
                    <label>Date Moved In</label>
                    <input type="date" disabled>
                </div>
                <div class="field-group">
                    <label>Date Moved Out</label>
                    <input type="date" disabled>
                </div>
                <div class="field-group">
                    <label><span class="status-badge-inline likely">LIKELY</span> Landlord/Property Owner Name</label>
                    <input type="text" disabled placeholder="Likely required">
                </div>
                <div class="field-group">
                    <label><span class="status-badge-inline likely">LIKELY</span> Landlord Phone Number</label>
                    <input type="tel" disabled placeholder="Likely required">
                </div>
            </div>
        `;
        container.appendChild(div);
        totalFieldCount += 10;
    }
}

function generateEmploymentFields(count) {
    const container = document.getElementById('employmentFields');
    container.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const div = document.createElement('div');
        div.className = 'employment-entry';
        div.innerHTML = `
            <h4>Position ${i + 1} ${i === 0 ? '(Current/Most Recent)' : ''}</h4>
            <div class="field-row">
                <div class="field-group">
                    <label>Employer Name</label>
                    <input type="text" disabled placeholder="Required">
                </div>
                <div class="field-group">
                    <label>Employer Address - Street</label>
                    <input type="text" disabled placeholder="Required">
                </div>
                <div class="field-group">
                    <label>Employer Address - City</label>
                    <input type="text" disabled placeholder="Required">
                </div>
                <div class="field-group">
                    <label>Employer Address - Country</label>
                    <input type="text" disabled placeholder="Required">
                </div>
                <div class="field-group">
                    <label>Employer Phone Number</label>
                    <input type="tel" disabled placeholder="Required">
                </div>
                <div class="field-group">
                    <label>Supervisor Name</label>
                    <input type="text" disabled placeholder="Required">
                </div>
                <div class="field-group">
                    <label>Supervisor Phone</label>
                    <input type="tel" disabled placeholder="Required">
                </div>
                <div class="field-group">
                    <label>Your Job Title</label>
                    <input type="text" disabled placeholder="Required">
                </div>
                <div class="field-group">
                    <label>Start Date</label>
                    <input type="date" disabled>
                </div>
                <div class="field-group">
                    <label>End Date</label>
                    <input type="date" disabled>
                </div>
                <div class="field-group">
                    <label>Monthly Salary (USD equivalent)</label>
                    <input type="number" disabled placeholder="Required">
                </div>
                <div class="field-group full-width">
                    <label>Detailed Description of Duties</label>
                    <textarea disabled placeholder="Required - Provide comprehensive description"></textarea>
                </div>
            </div>
        `;
        container.appendChild(div);
        totalFieldCount += 12;
    }
}

function generateTravelFields(count) {
    const container = document.getElementById('travelFields');
    container.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const div = document.createElement('div');
        div.className = 'travel-entry';
        div.innerHTML = `
            <h4>Trip ${i + 1}</h4>
            <div class="field-row">
                <div class="field-group">
                    <label>Country Visited</label>
                    <input type="text" disabled placeholder="Required">
                </div>
                <div class="field-group">
                    <label>City/Cities Visited</label>
                    <input type="text" disabled placeholder="Required">
                </div>
                <div class="field-group">
                    <label>Arrival Date</label>
                    <input type="date" disabled>
                </div>
                <div class="field-group">
                    <label>Departure Date</label>
                    <input type="date" disabled>
                </div>
                <div class="field-group">
                    <label>Purpose of Visit</label>
                    <select disabled>
                        <option>Select Purpose</option>
                        <option>Tourism</option>
                        <option>Business</option>
                        <option>Family Visit</option>
                        <option>Education</option>
                        <option>Medical</option>
                        <option>Other</option>
                    </select>
                </div>
                <div class="field-group">
                    <label>Accommodation Address</label>
                    <input type="text" disabled placeholder="Required">
                </div>
                <div class="field-group">
                    <label>Flight Number (Inbound)</label>
                    <input type="text" disabled placeholder="If applicable">
                </div>
                <div class="field-group">
                    <label>Flight Number (Outbound)</label>
                    <input type="text" disabled placeholder="If applicable">
                </div>
            </div>
        `;
        container.appendChild(div);
        totalFieldCount += 8;
    }
}

function updateStats() {
    document.getElementById('totalFields').textContent = totalFieldCount.toLocaleString();

    // Estimate 2 minutes per field on average
    const hours = Math.ceil((totalFieldCount * 2) / 60);
    document.getElementById('estimatedTime').textContent = hours;

    // Estimate 30 fields per printed page
    const pages = Math.ceil(totalFieldCount / 30);
    document.getElementById('pagesCount').textContent = pages;
}

function showResults() {
    const modal = document.getElementById('resultsModal');

    document.getElementById('finalFieldCount').textContent = totalFieldCount.toLocaleString();

    const hours = Math.ceil((totalFieldCount * 2) / 60);
    document.getElementById('finalTimeEstimate').textContent = hours;

    const pages = Math.ceil(totalFieldCount / 30);
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

    // Generate comparison list with sourced status
    const familyMembers = parseInt(document.getElementById('familyMembers').value) || 0;
    const emailCount = parseInt(document.getElementById('emailCount').value) || 0;
    const addressCount = parseInt(document.getElementById('addressCount').value) || 0;
    const jobCount = parseInt(document.getElementById('jobCount').value) || 0;
    const travelCount = parseInt(document.getElementById('travelCount').value) || 0;

    // Add country-specific info at the top
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
        <li><span class="status-tag proposed">PROPOSED</span> 10 years of email history (${emailCount} addresses) <em>(proposed ESTA rule)</em></li>
        <li><span class="status-tag current">CURRENT</span> Usernames for 20 social media platforms <em>(DS-160 requirement)</em></li>
        <li><span class="status-tag current">CURRENT</span> Profiles set to PUBLIC for students/workers <em>(June/Dec 2025)</em></li>
        <li><span class="status-tag proposed">PROPOSED</span> Full details on ${familyMembers} family members <em>(proposed ESTA rule)</em></li>
        <li><span class="status-tag current">CURRENT</span> ${addressCount} addresses over 15 years <em>(DS-5535 form)</em></li>
        <li><span class="status-tag current">CURRENT</span> ${jobCount} jobs with supervisor names, phones, salaries <em>(DS-5535 form)</em></li>
        <li><span class="status-tag current">CURRENT</span> Details on ${travelCount} international trips <em>(DS-5535 form)</em></li>
        <li><span class="status-tag likely">LIKELY</span> Screening for "hostility toward the U.S." <em>(consular guidance)</em></li>
        <li><span class="status-tag current">CURRENT</span> Up to $15,070 in fees and bonds <em>(ESTA $40 + bond up to $15,000)</em></li>
    `;

    // Calculate absurdity level - higher for banned countries
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

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Close modal on outside click
document.getElementById('resultsModal').addEventListener('click', (e) => {
    if (e.target.id === 'resultsModal') {
        closeModal();
    }
});
