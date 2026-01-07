// Demo functionality - Auto-fill with realistic values

import { countryData } from './countryData.js';

/**
 * Generate a random integer within a range (inclusive)
 */
export function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Auto-fill demo with realistic random values
 * @param {Function} selectCountryFn - Function to select a country
 * @param {Function} updateRealTimeFieldCountFn - Function to update real-time field count
 * @param {Function} generateFormFn - Function to generate the form
 */
export function autoFillDemo(selectCountryFn, updateRealTimeFieldCountFn, generateFormFn) {
    // Pick a random "standard" country to show full form experience
    const standardCountries = countryData.standard;
    const randomCountry = standardCountries[Math.floor(Math.random() * standardCountries.length)];

    // Select the country (without scrolling)
    selectCountryFn(randomCountry.name, 'standard');

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
    updateRealTimeFieldCountFn();

    // Generate the form immediately
    generateFormFn();
}
