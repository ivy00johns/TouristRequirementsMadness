// Section definitions based on actual documented requirements
// Sources: DS-160, DS-5535, Proposed ESTA rule (Dec 10, 2025), Proclamation 10949

import { socialPlatforms } from './config.js';

/**
 * All section definitions with their fields and source citations
 * Each section includes:
 * - id: DOM element ID
 * - letter: Section letter for form
 * - title: Display title
 * - status: 'current', 'proposed', or 'likely'
 * - sourceCite: Source documentation citation
 * - notice: Optional explanatory notice
 * - fields: Array of field definitions OR generator function name
 */

export const sectionDefinitions = {
    // Section B: Personal Information (DS-160 base)
    personalInfo: {
        id: 'personalFields',
        letter: 'B',
        title: 'Personal Information',
        status: 'current',
        sourceCite: 'Source: DS-160 Form',
        baseFieldCount: 11,
        fields: [
            { label: 'Full Legal Name (as on passport)', type: 'text' },
            { label: 'All Previous Names Used', type: 'text' },
            { label: 'Date of Birth', type: 'date' },
            { label: 'Place of Birth (City)', type: 'text' },
            { label: 'Place of Birth (Country)', type: 'text' },
            { label: 'Biological Sex', type: 'select', options: ['Select...', 'Male', 'Female'] },
            { label: 'National ID Number', type: 'text' },
            { label: 'Passport Number', type: 'text' },
            { label: 'Passport Issue Date', type: 'date' },
            { label: 'Passport Expiry Date', type: 'date' },
            { label: 'Passport Issuing Authority', type: 'text' }
        ]
    },

    // Section C: Biometric Data (USCIS-2025-0205)
    biometrics: {
        id: 'biometricSection',
        letter: 'C',
        title: 'Biometric Data Collection',
        status: 'proposed',
        sourceCite: 'Source: Federal Register USCIS-2025-0205',
        notice: 'Per proposed rule USCIS-2025-0205 (Nov 3, 2025), the following biometric data would be collected at your interview. Comment period ends Feb 9, 2026.',
        baseFieldCount: 7,
        biometricItems: [
            { icon: '👁️', label: 'Iris Scan (Both Eyes)' },
            { icon: '🖐️', label: '10 Fingerprints + Palm Prints' },
            { icon: '📸', label: 'Facial Recognition Photo' },
            { icon: '🎤', label: 'Voice Print Recording' },
            { icon: '🧬', label: 'DNA Sample' },
            { icon: '✍️', label: 'Handwriting Sample' },
            { icon: '🤳', label: 'Live Selfie (CBP App)' }
        ]
    },

    // Section D: Social Media (DS-160 + Federal Register Dec 10, 2025)
    socialMedia: {
        id: 'socialMediaFields',
        letter: 'D',
        title: 'Social Media Disclosure (Past 5 Years)',
        status: 'current',
        sourceCite: 'Source: DS-160 Form; Federal Register Dec 10, 2025',
        notice: 'You must disclose ALL accounts on the following 20 platforms. For F/M/J/H-1B visas, profiles must be set to PUBLIC before your interview (effective June 18, 2025 for students; Dec 15, 2025 for workers).',
        platforms: socialPlatforms,
        fieldsPerPlatform: 3 // username, URL, status
    },

    // Section E: Email History (Proposed ESTA rule)
    emailHistory: {
        id: 'emailFields',
        letter: 'E',
        title: 'Email Address History (Past 10 Years)',
        status: 'proposed',
        sourceCite: 'Source: Proposed ESTA rule, Dec 10, 2025 Federal Register',
        fieldsPerEntry: 5,
        entryFields: [
            { label: 'Email Address', type: 'email' },
            { label: 'Type (Personal/Business/Family)', type: 'select', options: ['Select Type', 'Personal', 'Business', 'Family', 'School'] },
            { label: 'Provider (Gmail, Yahoo, etc.)', type: 'text' },
            { label: 'Date Created', type: 'date' },
            { label: 'Still Active?', type: 'yesNo' }
        ]
    },

    // Section F: Phone History (Proposed ESTA rule)
    phoneHistory: {
        id: 'phoneFields',
        letter: 'F',
        title: 'Phone Number History (Past 5 Years)',
        status: 'proposed',
        sourceCite: 'Source: Proposed ESTA rule, Dec 10, 2025 Federal Register',
        fieldsPerEntry: 5,
        entryFields: [
            { label: 'Country Code', type: 'text', placeholder: '+1' },
            { label: 'Phone Number', type: 'tel' },
            { label: 'Type', type: 'select', options: ['Select Type', 'Personal Mobile', 'Business Mobile', 'Home Landline', 'Work Landline', "Family Member's Phone"] },
            { label: 'Carrier/Provider', type: 'text' },
            { label: 'Years Used (From-To)', type: 'text', placeholder: '2020-Present' }
        ]
    },

    // Section G: Family Information (Proposed ESTA rule)
    familyInfo: {
        id: 'familyFields',
        letter: 'G',
        title: 'Family Member Information',
        status: 'proposed',
        sourceCite: "Source: Proposed ESTA rule requires parents' names, DOB, birthplace, residence; spouse/siblings' complete info; children's names, DOB, birthplace",
        notice: 'Complete information required for ALL immediate family members (parents, spouse, siblings, children) regardless of whether they are traveling with you.',
        // Dynamic field count based on relationship type
    },

    // Section H: Address History (DS-5535)
    addressHistory: {
        id: 'addressFields',
        letter: 'H',
        title: 'Address History (Past 15 Years)',
        status: 'current',
        sourceCite: 'Source: DS-5535 supplemental form (15 years); DS-160 requires 5 years',
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

    // NEW: Section I-A: Educational History (DS-5535)
    educationHistory: {
        id: 'educationFields',
        letter: 'I-A',
        title: 'Educational History (Past 15 Years)',
        status: 'current',
        sourceCite: 'Source: DS-5535 requires 15 years of history; DS-160 requires educational background',
        notice: 'List ALL educational institutions attended in the past 15 years, including high school, university, vocational training, and graduate programs.',
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

    // Section I-B: Employment History (DS-5535)
    employmentHistory: {
        id: 'employmentFields',
        letter: 'I-B',
        title: 'Employment History (Past 15 Years)',
        status: 'current',
        sourceCite: 'Source: DS-5535 supplemental form (15 years); DS-160 requires 5 years',
        notice: 'Include ALL positions: full-time, part-time, freelance, internships, and volunteer work. Requires employer names, addresses, phone numbers, supervisor names, job titles, duties, and monthly income.',
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

    // Section J: International Travel History (DS-5535)
    travelHistory: {
        id: 'travelFields',
        letter: 'J',
        title: 'International Travel History (Past 15 Years)',
        status: 'current',
        sourceCite: 'Source: DS-5535 supplemental form (15 years); DS-160 requires 5 years',
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

    // NEW: Section J-B: Previous U.S. Travel (DS-160)
    previousUSTravel: {
        id: 'usTravelFields',
        letter: 'J-B',
        title: 'Previous United States Travel',
        status: 'current',
        sourceCite: 'Source: DS-160 asks "Have you ever been in the U.S.?" with dates and details',
        notice: 'Provide details for EACH previous visit to the United States, including dates, ports of entry, visa type used, and contacts visited.',
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

    // NEW: Section K-A: U.S. Contacts and Itinerary (DS-160)
    usContacts: {
        id: 'usContactsFields',
        letter: 'K-A',
        title: 'U.S. Contacts and Planned Itinerary',
        status: 'current',
        sourceCite: 'Source: DS-160 requires U.S. contact information and trip details',
        notice: 'Provide contact information for persons or organizations you will visit in the United States, and your planned itinerary.',
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

    // NEW: Section L: Financial Information (DS-160)
    financialInfo: {
        id: 'financialFields',
        letter: 'L',
        title: 'Financial Disclosure',
        status: 'current',
        sourceCite: 'Source: DS-160 requires "Present Monthly Income" and "Describe the source of funds you will use"',
        notice: 'Provide information about your financial status and how you will fund your trip to the United States.',
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

    // Section K-B: Security Screening (DS-5535 + Consular guidance)
    securityScreening: {
        id: 'securityFields',
        letter: 'K-B',
        title: 'Security Screening Questions',
        status: null, // Mixed statuses
        sourceCite: 'Source: Consular officers screen for "hostility toward the U.S." and antisemitism per June 2025 guidance. IP metadata collection per proposed ESTA rule.',
        fields: [
            {
                label: 'Have you ever expressed views critical of the United States government on social media?',
                type: 'yesNo',
                status: 'likely',
                note: 'Inferred from screening criteria for "hostility toward the U.S."',
                fullWidth: true
            },
            {
                label: 'Have you ever attended a protest or political demonstration?',
                type: 'yesNo',
                status: 'likely',
                note: 'Inferred from organizational membership screening',
                fullWidth: true
            },
            {
                label: 'Have you ever been questioned, detained, or arrested by any authority in any country?',
                type: 'yesNo',
                status: 'current',
                fullWidth: true
            },
            {
                label: 'Provide IP addresses you have used to access social media (if known):',
                type: 'textarea',
                status: 'proposed',
                placeholder: 'Required if known',
                note: 'Per proposed ESTA rule: "IP addresses and metadata from submitted photographs"',
                fullWidth: true
            }
        ],
        // Organizations moved to repeater section
        organizationsRepeater: {
            id: 'organizationsRepeater',
            title: 'Organizations, Clubs, or Groups (Past 15 Years)',
            status: 'current',
            sourceCite: 'Source: DS-5535 requires "all organizations, clubs, or groups you have been a member of (past 15 years)"',
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
    }
};

// Phase 1 input questions configuration
export const phase1Questions = [
    { id: 'familyMembers', label: 'How many immediate family members do you have? (parents, siblings, spouse, children)', min: 0, max: 50 },
    { id: 'emailCount', label: 'How many email addresses have you used in the past 10 years? (personal & business)', min: 1, max: 100 },
    { id: 'phoneCount', label: 'How many phone numbers have you used in the past 5 years? (personal, business, family)', min: 1, max: 50 },
    { id: 'addressCount', label: 'How many addresses have you lived at in the past 15 years?', min: 1, max: 50 },
    { id: 'educationCount', label: 'How many educational institutions have you attended in the past 15 years?', min: 0, max: 20 },
    { id: 'jobCount', label: 'How many jobs have you held in the past 15 years?', min: 0, max: 100 },
    { id: 'travelCount', label: 'How many countries have you traveled to in the past 15 years?', min: 0, max: 200 },
    { id: 'usTravelCount', label: 'How many times have you previously visited the United States?', min: 0, max: 100 },
    { id: 'usContactCount', label: 'How many U.S. contacts will you visit? (friends, family, business)', min: 0, max: 20 },
    { id: 'usDestinationCount', label: 'How many U.S. cities/destinations are in your itinerary?', min: 1, max: 50 },
    { id: 'organizationCount', label: 'How many organizations, clubs, or groups have you been a member of (past 15 years)?', min: 0, max: 100 },
    { id: 'socialMediaCount', label: 'How many social media accounts do you have or have had in the past 5 years?', min: 0, max: 50 }
];
