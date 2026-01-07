// Configuration constants for the visa application form

// Entry class selector for repeater items
export const ENTRY_CLASSES = '.email-entry, .phone-entry, .family-entry, .address-entry, .education-entry, .employment-entry, .travel-entry, .us-travel-entry, .contact-entry, .itinerary-entry, .organization-entry, .alias-entry, .citizenship-entry, .marriage-entry, .lost-passport-entry';

// Social media platforms required by DS-160
export const socialPlatforms = [
    'Facebook', 'Instagram', 'Twitter/X', 'LinkedIn', 'YouTube',
    'Reddit', 'TikTok', 'Pinterest', 'Tumblr', 'VKontakte',
    'Sina Weibo', 'QZone', 'Douban', 'Youku', 'Ask.FM',
    'Flickr', 'Twoo', 'Myspace', 'Google+', 'Vine'
];

// Status badge types with their CSS classes and display names
export const statusTypes = {
    current: { class: 'current', label: 'CURRENT' },
    proposed: { class: 'proposed', label: 'PROPOSED' },
    likely: { class: 'likely', label: 'LIKELY' }
};

// Field type configurations for form generation
export const fieldTypes = {
    text: { tag: 'input', type: 'text', placeholder: 'Required' },
    email: { tag: 'input', type: 'email', placeholder: 'Required' },
    tel: { tag: 'input', type: 'tel', placeholder: 'Required' },
    date: { tag: 'input', type: 'date' },
    number: { tag: 'input', type: 'number', placeholder: 'Required' },
    select: { tag: 'select' },
    textarea: { tag: 'textarea', placeholder: 'Required' },
    yesNo: { tag: 'select', options: ['Select Yes/No', 'Yes', 'No'] }
};

// Calculation constants
export const MINUTES_PER_FIELD = 2;
export const FIELDS_PER_PAGE = 30;

// Family relationship definitions with their field requirements
export const familyRelationships = {
    parent: {
        labels: ['Father', 'Mother'],
        extraFields: [
            { label: 'Current Residence - City', type: 'text' },
            { label: 'Current Residence - Country', type: 'text' }
        ],
        baseFieldCount: 7
    },
    child: {
        labels: ['Child'],
        extraFields: [],
        baseFieldCount: 5
    },
    other: {
        labels: ['Spouse', 'Sibling'],
        extraFields: [
            { label: 'Current Nationality', type: 'text' },
            { label: 'Current Address - Street', type: 'text' },
            { label: 'Current Address - City', type: 'text' },
            { label: 'Current Address - Country', type: 'text' },
            { label: 'Phone Number', type: 'tel', status: 'likely' },
            { label: 'Email Address', type: 'email', status: 'likely' }
        ],
        baseFieldCount: 11
    }
};
