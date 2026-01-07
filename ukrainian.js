// Ukrainian Refugee Status Calculator
// Data and logic for the "Impossible Compliance Calculator"

// Program status data
const programStatus = {
    u4u: {
        name: "Uniting for Ukraine (U4U)",
        status: "PAUSED",
        statusDate: "2025-01-27",
        reparoleAvailable: false,
        processingTime: { min: 8, max: 18 } // months
    },
    tps: {
        name: "Temporary Protected Status",
        status: "ACTIVE",
        expirationDate: new Date("2026-10-19"),
        eligibilityCutoff: new Date("2023-08-16"),
        processingTime: { min: 12, max: 18 } // months
    }
};

// Fee structure (per person, in USD)
const fees = {
    i131Filing: {
        name: "Re-Parole Application (I-131)",
        online: 580,
        waivable: true,
        source: "USCIS Fee Schedule"
    },
    i765Filing: {
        name: "Employment Authorization (I-765)",
        online: 470,
        waivable: true,
        source: "USCIS Fee Schedule"
    },
    hr1EAD: {
        name: "H.R. 1 EAD Fee",
        amount: 275,
        waivable: false,
        source: "H.R. 1 (Laken Riley Act)"
    },
    paroleGrant: {
        name: "Parole Grant Fee (upon approval)",
        amount: 1000,
        waivable: false,
        source: "CBP Collection"
    },
    tpsRegistration: {
        name: "TPS Registration",
        amount: 500,
        waivable: false,
        source: "USCIS Fee Schedule 2025"
    }
};

// Timeline data
const timeline = {
    freezeStart: new Date("2025-02-14"),
    freezeEnd: new Date("2025-06-09"),
    freezeDays: 114,
    currentBacklog: 11300000,
    filingWindowDays: 180, // Can file 180 days before expiration
    processingDaysMin: 240, // 8 months
    processingDaysMax: 540  // 18 months
};

// Statistics
const stats = {
    ineligibleForTPS: 120000,
    totalAffected: 280000
};

// State
let currentStatus = null;
let arrivalDate = null;
let expirationDate = null;
let familyAdults = 1;
let familyChildren = 0;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Status radio button listeners
    document.querySelectorAll('input[name="currentStatus"]').forEach(radio => {
        radio.addEventListener('change', handleStatusChange);
    });

    // Calculate button
    document.getElementById('calculateSituation')?.addEventListener('click', calculateSituation);

    // Input listeners
    document.getElementById('familyAdults')?.addEventListener('change', updateFamilySize);
    document.getElementById('familyChildren')?.addEventListener('change', updateFamilySize);

    // Modal close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
    document.getElementById('resultsModal')?.addEventListener('click', (e) => {
        if (e.target.id === 'resultsModal') closeModal();
    });
});

function handleStatusChange(e) {
    currentStatus = e.target.value;
    document.getElementById('dateQuestions').classList.remove('hidden');

    // Set default dates based on status
    const today = new Date();
    if (currentStatus === 'expired') {
        // For expired status, set expiration in the past
        const pastDate = new Date(today);
        pastDate.setMonth(pastDate.getMonth() - 3);
        document.getElementById('expirationDate').value = formatDateForInput(pastDate);
    }
}

function formatDateForInput(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}`;
}

function parseInputDate(value) {
    if (!value) return null;
    const [year, month] = value.split('-');
    return new Date(parseInt(year), parseInt(month) - 1, 15); // Use 15th of month
}

function updateFamilySize() {
    familyAdults = parseInt(document.getElementById('familyAdults')?.value) || 1;
    familyChildren = parseInt(document.getElementById('familyChildren')?.value) || 0;
}

function calculateSituation() {
    updateFamilySize();
    arrivalDate = parseInputDate(document.getElementById('arrivalDate')?.value);
    expirationDate = parseInputDate(document.getElementById('expirationDate')?.value);

    if (!currentStatus) {
        alert('Please select your current immigration status.');
        return;
    }

    if (!arrivalDate || !expirationDate) {
        alert('Please enter your arrival date and status expiration date.');
        return;
    }

    // Show all analysis sections
    showSituationAnalysis();
    showTimelineSection();
    showFeeSection();
    showFreezeSection();
    showScenarioSection();
    showScamSection();
    showSummarySection();

    // Scroll to analysis
    document.getElementById('situationAnalysis').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showSituationAnalysis() {
    const section = document.getElementById('situationAnalysis');
    const analysisBox = document.getElementById('analysisBox');
    const tpsBox = document.getElementById('tpsEligibility');

    const today = new Date();
    const daysUntilExpiration = Math.ceil((expirationDate - today) / (1000 * 60 * 60 * 24));
    const isExpired = daysUntilExpiration < 0;
    const isTpsEligible = arrivalDate <= programStatus.tps.eligibilityCutoff;

    // Status name mapping
    const statusNames = {
        u4u: 'U4U Parolee',
        tps: 'TPS Holder',
        both: 'U4U Parolee with TPS',
        pending: 'Application Pending',
        expired: 'Status Expired'
    };

    // Build analysis HTML
    let analysisHtml = `
        <div class="analysis-row">
            <span class="analysis-label">STATUS:</span>
            <span class="analysis-value">${statusNames[currentStatus]}</span>
        </div>
        <div class="analysis-row">
            <span class="analysis-label">Arrived:</span>
            <span class="analysis-value">${arrivalDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
        </div>
        <div class="analysis-row ${isExpired ? 'expired' : ''}">
            <span class="analysis-label">Expiration:</span>
            <span class="analysis-value">${expirationDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                ${isExpired ? '<span class="badge-expired">EXPIRED</span>' : `(${daysUntilExpiration} days)`}
            </span>
        </div>
        <div class="analysis-row">
            <span class="analysis-label">Family Size:</span>
            <span class="analysis-value">${familyAdults + familyChildren} people (${familyAdults} adults, ${familyChildren} children)</span>
        </div>
    `;

    if (currentStatus === 'u4u' || currentStatus === 'both' || currentStatus === 'pending') {
        analysisHtml += `
            <div class="analysis-row warning">
                <span class="analysis-label">Re-Parole Status:</span>
                <span class="analysis-value">⏸️ PAUSED - Not accepting new applications</span>
            </div>
        `;
    }

    analysisBox.innerHTML = analysisHtml;

    // TPS Eligibility
    let tpsHtml = '';
    if (isTpsEligible) {
        tpsHtml = `
            <div class="eligibility-box eligible">
                <h4>TPS ELIGIBILITY: ✅ ELIGIBLE</h4>
                <p>You arrived BEFORE the August 16, 2023 cutoff date.</p>
                <p>You may register for TPS (if you haven't already).</p>
                <p class="eligibility-note">TPS provides work authorization and protection from deportation until October 19, 2026.</p>
            </div>
        `;
    } else {
        tpsHtml = `
            <div class="eligibility-box ineligible">
                <h4>TPS ELIGIBILITY: ❌ INELIGIBLE</h4>
                <p>You arrived AFTER the August 16, 2023 cutoff date.</p>
                <p>~${stats.ineligibleForTPS.toLocaleString()} Ukrainians share this situation.</p>
                <p class="eligibility-note"><strong>YOUR ONLY OPTION:</strong> Re-Parole Application (Form I-131)</p>
                <p class="eligibility-warning">STATUS: ⏸️ PAUSED - No new applications being accepted</p>
            </div>
        `;
    }

    tpsBox.innerHTML = tpsHtml;
    section.classList.remove('hidden');
}

function showTimelineSection() {
    const section = document.getElementById('timelineSection');
    const container = document.getElementById('timelineContainer');

    const today = new Date();
    const earliestFiling = new Date(expirationDate);
    earliestFiling.setDate(earliestFiling.getDate() - timeline.filingWindowDays);

    const expectedDecisionMin = new Date(earliestFiling);
    expectedDecisionMin.setDate(expectedDecisionMin.getDate() + timeline.processingDaysMin);

    const expectedDecisionMax = new Date(earliestFiling);
    expectedDecisionMax.setDate(expectedDecisionMax.getDate() + timeline.processingDaysMax);

    const gapMin = Math.max(0, Math.ceil((expectedDecisionMin - expirationDate) / (1000 * 60 * 60 * 24)));
    const gapMax = Math.max(0, Math.ceil((expectedDecisionMax - expirationDate) / (1000 * 60 * 60 * 24)));

    // Update gap display
    document.getElementById('gapDays').textContent = `${gapMin}-${gapMax} days (${Math.floor(gapMin/30)}-${Math.floor(gapMax/30)} months)`;

    const timelineHtml = `
        <div class="timeline-visual">
            <div class="timeline-header">
                <p><strong>RULE:</strong> You may file no earlier than 180 days before expiration.</p>
            </div>
            <div class="timeline-dates">
                <div class="timeline-item">
                    <div class="timeline-marker filing"></div>
                    <div class="timeline-info">
                        <strong>Earliest Filing Date</strong>
                        <span>${earliestFiling.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-marker expiration"></div>
                    <div class="timeline-info">
                        <strong>Your Status Expires</strong>
                        <span>${expirationDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                </div>
                <div class="timeline-item gap">
                    <div class="timeline-marker gap-marker"></div>
                    <div class="timeline-info">
                        <strong>GAP PERIOD BEGINS</strong>
                        <span>No work, no travel, accruing unlawful presence</span>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-marker decision"></div>
                    <div class="timeline-info">
                        <strong>Expected Decision</strong>
                        <span>${expectedDecisionMin.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - ${expectedDecisionMax.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                    </div>
                </div>
            </div>
            <div class="gap-warning-box">
                <h4>YOUR GAP PERIOD: ${Math.floor(gapMin/30)}-${Math.floor(gapMax/30)} MONTHS</h4>
                <p>During this time you:</p>
                <ul>
                    <li>• Cannot legally work</li>
                    <li>• Cannot travel</li>
                    <li>• May accrue unlawful presence</li>
                    <li>• Could be placed in removal proceedings</li>
                </ul>
            </div>
        </div>
    `;

    container.innerHTML = timelineHtml;
    section.classList.remove('hidden');
}

function showFeeSection() {
    const section = document.getElementById('feeSection');
    const tbody = document.getElementById('feeTableBody');
    const totalFamilySize = familyAdults + familyChildren;

    // Calculate fees
    const feeItems = [
        {
            name: fees.i131Filing.name,
            perPerson: fees.i131Filing.online,
            waivable: fees.i131Filing.waivable
        },
        {
            name: fees.i765Filing.name,
            perPerson: fees.i765Filing.online,
            waivable: fees.i765Filing.waivable
        },
        {
            name: fees.hr1EAD.name,
            perPerson: fees.hr1EAD.amount,
            waivable: fees.hr1EAD.waivable
        },
        {
            name: fees.paroleGrant.name,
            perPerson: fees.paroleGrant.amount,
            waivable: fees.paroleGrant.waivable
        }
    ];

    let total = 0;
    let tableHtml = '';

    feeItems.forEach(item => {
        const familyTotal = item.perPerson * totalFamilySize;
        total += familyTotal;
        tableHtml += `
            <tr>
                <td>${item.name}</td>
                <td>$${item.perPerson.toLocaleString()}</td>
                <td>$${familyTotal.toLocaleString()}</td>
                <td class="${item.waivable ? 'waivable' : 'non-waivable'}">${item.waivable ? 'Yes' : 'NO'}</td>
            </tr>
        `;
    });

    tbody.innerHTML = tableHtml;
    document.getElementById('totalFee').innerHTML = `<strong>$${total.toLocaleString()}</strong>`;
    document.getElementById('trapFeeAmount').textContent = `$${total.toLocaleString()}`;

    section.classList.remove('hidden');
}

function showFreezeSection() {
    document.getElementById('freezeSection').classList.remove('hidden');
}

function showScenarioSection() {
    document.getElementById('scenarioSection').classList.remove('hidden');
}

function showScamSection() {
    document.getElementById('scamSection').classList.remove('hidden');
}

function showSummarySection() {
    const section = document.getElementById('summarySection');
    const dashboard = document.getElementById('summaryDashboard');

    const today = new Date();
    const daysUntilExpiration = Math.ceil((expirationDate - today) / (1000 * 60 * 60 * 24));
    const isExpired = daysUntilExpiration < 0;
    const isTpsEligible = arrivalDate <= programStatus.tps.eligibilityCutoff;
    const totalFamilySize = familyAdults + familyChildren;
    const totalFee = (fees.i131Filing.online + fees.i765Filing.online + fees.hr1EAD.amount + fees.paroleGrant.amount) * totalFamilySize;

    const statusNames = {
        u4u: 'U4U Parolee',
        tps: 'TPS Holder',
        both: 'U4U + TPS',
        pending: 'Pending',
        expired: 'Expired'
    };

    const dashboardHtml = `
        <table class="summary-table">
            <tr>
                <td>YOUR STATUS</td>
                <td>${statusNames[currentStatus]} ${isTpsEligible ? '' : '(TPS Ineligible)'}</td>
            </tr>
            <tr>
                <td>Expires</td>
                <td>${isExpired ? '<span class="badge-expired">EXPIRED</span>' : `${expirationDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} (${daysUntilExpiration} days)`}</td>
            </tr>
            <tr>
                <td>Can file re-parole</td>
                <td>⏸️ PAUSED - Not accepting applications</td>
            </tr>
            <tr>
                <td>Processing time</td>
                <td>8-18 months (if accepting)</td>
            </tr>
            <tr>
                <td>Cost (family of ${totalFamilySize})</td>
                <td><strong>$${totalFee.toLocaleString()}</strong></td>
            </tr>
            <tr>
                <td>Expected gap period</td>
                <td>2-12 months without status</td>
            </tr>
            <tr>
                <td>During gap you can</td>
                <td>❌ Work &nbsp; ❌ Travel &nbsp; ❌ Get benefits</td>
            </tr>
        </table>
    `;

    dashboard.innerHTML = dashboardHtml;
    section.classList.remove('hidden');
}

// Toggle scenario accordion
function toggleScenario(id) {
    const content = document.getElementById(id);
    const isHidden = content.classList.contains('hidden');

    // Close all scenarios first
    document.querySelectorAll('.scenario-content').forEach(el => {
        el.classList.add('hidden');
    });
    document.querySelectorAll('.scenario-header').forEach(el => {
        el.classList.remove('active');
    });

    // Open clicked one if it was closed
    if (isHidden) {
        content.classList.remove('hidden');
        content.previousElementSibling.classList.add('active');
    }
}

// Share functions
function shareTwitterUkraine() {
    const totalFamilySize = familyAdults + familyChildren;
    const totalFee = (fees.i131Filing.online + fees.i765Filing.online + fees.hr1EAD.amount + fees.paroleGrant.amount) * totalFamilySize;

    const text = `Ukrainian refugees who escaped a war now face $${totalFee.toLocaleString()} in fees, 8-18 month waits, and months in legal limbo. The system is designed to fail. This is real.`;
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`, '_blank');
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Link copied to clipboard!');
    });
}

function closeModal() {
    document.getElementById('resultsModal').classList.add('hidden');
}

function showModal() {
    const totalFamilySize = familyAdults + familyChildren;
    const totalFee = (fees.i131Filing.online + fees.i765Filing.online + fees.hr1EAD.amount + fees.paroleGrant.amount) * totalFamilySize;

    document.getElementById('modalFee').textContent = `$${totalFee.toLocaleString()}`;
    document.getElementById('modalGap').textContent = '2-12';
    document.getElementById('modalProcessing').textContent = '8-18';
    document.getElementById('resultsModal').classList.remove('hidden');
}
