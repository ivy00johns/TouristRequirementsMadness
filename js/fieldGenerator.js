// Generic field generation utilities

/**
 * Creates a status badge HTML element
 * @param {string} status - 'current', 'proposed', or 'likely'
 * @param {boolean} inline - Whether to use inline styling
 * @returns {string} HTML string for the badge
 */
export function createStatusBadge(status, inline = false) {
    if (!status) return '';
    const className = inline ? 'status-badge-inline' : 'status-badge';
    const label = status.toUpperCase();
    return `<span class="${className} ${status}">${label}</span>`;
}

/**
 * Creates a single form field
 * @param {Object} config - Field configuration
 * @returns {string} HTML string for the field
 */
export function createField(config) {
    const {
        label,
        type = 'text',
        placeholder = 'Required',
        status = null,
        options = [],
        note = null,
        fullWidth = false
    } = config;

    const statusBadge = status ? createStatusBadge(status, true) : '';
    const widthClass = fullWidth ? ' full-width' : '';

    let inputHtml = '';
    switch (type) {
        case 'select':
        case 'yesNo':
            const selectOptions = type === 'yesNo'
                ? ['Select Yes/No', 'Yes', 'No']
                : options;
            inputHtml = `<select disabled>
                ${selectOptions.map(opt => `<option>${opt}</option>`).join('')}
            </select>`;
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

/**
 * Creates a fieldset with legend and optional notice
 * @param {Object} config - Fieldset configuration
 * @returns {string} HTML string for the fieldset
 */
export function createFieldset(config) {
    const {
        id,
        legend,
        status = null,
        notice = null,
        sourceCite = null,
        content = '',
        className = ''
    } = config;

    const statusBadge = status ? createStatusBadge(status) : '';
    const noticeHtml = notice
        ? `<p class="fieldset-notice">${notice}</p>`
        : '';
    const sourceHtml = sourceCite
        ? `<p class="source-cite">${sourceCite}</p>`
        : '';

    return `
        <fieldset class="form-fieldset ${className}" id="${id}">
            <legend>${statusBadge}${legend}</legend>
            ${noticeHtml}
            ${sourceHtml}
            ${content}
        </fieldset>
    `;
}

/**
 * Creates a repeater section with add button
 * @param {Object} config - Repeater configuration
 * @returns {string} HTML string for the repeater
 */
export function createRepeaterSection(config) {
    const {
        id,
        title,
        itemLabel,
        addButtonText,
        status = null,
        minRequired = 0
    } = config;

    const statusBadge = status ? createStatusBadge(status, true) : '';
    const requiredNote = minRequired > 0 ? ` (Minimum ${minRequired} required)` : '';

    return `
        <div class="repeater-section" id="${id}">
            <div class="repeater-header">
                <h4>${statusBadge}${title}${requiredNote} <span class="entry-count">(0 entries)</span></h4>
                <button type="button" class="btn-add-item" data-repeater="${id}">+ ${addButtonText}</button>
            </div>
            <div class="repeater-items" id="${id}Container">
                <!-- Generated items appear here -->
            </div>
        </div>
    `;
}

/**
 * Creates an entry container for repeatable items
 * @param {Object} config - Entry configuration
 * @returns {string} HTML string for the entry
 */
export function createEntryContainer(config) {
    const {
        className,
        title,
        subtitle = '',
        content,
        removable = true
    } = config;

    const removeBtn = removable
        ? '<button type="button" class="btn-remove-entry" title="Remove this entry">&times;</button>'
        : '';

    return `
        <div class="${className}">
            <div class="entry-header">
                <h4>${title}${subtitle ? ` <span class="entry-subtitle">${subtitle}</span>` : ''}</h4>
                ${removeBtn}
            </div>
            <div class="field-row">
                ${content}
            </div>
        </div>
    `;
}

/**
 * Creates a warning notice that appears after sections
 * @param {Object} config - Warning configuration
 * @returns {string} HTML string for the warning
 */
export function createSectionWarning(config) {
    const { title, items } = config;

    return `
        <div class="section-warning">
            <h5>${title}</h5>
            <ul>
                ${items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `;
}
