// Social media platforms required by DS-160
const socialPlatforms = [
    'Facebook', 'Instagram', 'Twitter/X', 'LinkedIn', 'YouTube',
    'Reddit', 'TikTok', 'Pinterest', 'Tumblr', 'VKontakte',
    'Sina Weibo', 'QZone', 'Douban', 'Youku', 'Ask.FM',
    'Flickr', 'Twoo', 'Myspace', 'Google+', 'Vine'
];

let totalFieldCount = 0;

document.getElementById('generateForm').addEventListener('click', generateForm);
document.getElementById('submitForm').addEventListener('click', showResults);

function generateForm() {
    totalFieldCount = 11; // Base personal info fields

    const familyMembers = parseInt(document.getElementById('familyMembers').value) || 0;
    const emailCount = parseInt(document.getElementById('emailCount').value) || 0;
    const phoneCount = parseInt(document.getElementById('phoneCount').value) || 0;
    const addressCount = parseInt(document.getElementById('addressCount').value) || 0;
    const jobCount = parseInt(document.getElementById('jobCount').value) || 0;
    const travelCount = parseInt(document.getElementById('travelCount').value) || 0;
    const socialMediaCount = parseInt(document.getElementById('socialMediaCount').value) || 0;

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

    // Generate comparison list with sourced status
    const familyMembers = parseInt(document.getElementById('familyMembers').value) || 0;
    const emailCount = parseInt(document.getElementById('emailCount').value) || 0;
    const addressCount = parseInt(document.getElementById('addressCount').value) || 0;
    const jobCount = parseInt(document.getElementById('jobCount').value) || 0;
    const travelCount = parseInt(document.getElementById('travelCount').value) || 0;

    const comparisonList = document.getElementById('comparisonList');
    comparisonList.innerHTML = `
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

    // Calculate absurdity level
    const absurdity = Math.min(100, Math.round((totalFieldCount / 500) * 100));
    document.getElementById('absurdityFill').style.width = absurdity + '%';

    let absurdityLabel = '';
    if (absurdity < 30) {
        absurdityLabel = 'Bureaucratic Nightmare';
    } else if (absurdity < 50) {
        absurdityLabel = 'Kafkaesque';
    } else if (absurdity < 70) {
        absurdityLabel = 'Dystopian';
    } else if (absurdity < 90) {
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
    const text = `To visit the US as a tourist, you could need to fill out ${totalFieldCount} form fields, provide DNA/iris scans (proposed), and 15 years of history. Based on real 2025-2026 requirements.`;
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
