# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A satirical single-page website demonstrating the bureaucratic absurdity of Trump administration's 2025-2026 visa vetting requirements. Users select their country from a visual flag grid, answer questions about their personal history, and the app dynamically generates a massive disabled form showing every field they would need to complete.

## How It Works

**Phase 1 - Country Selection & Questions:**
- Visual grid of 180+ countries with flag emojis, organized by restriction level
- Country selection triggers appropriate warning (ban notice, partial ban, VWP info, or standard vetting)
- User inputs counts: family members, emails, phones, addresses, jobs, travel history, social accounts

**Phase 2 - Generated Form:**
- Dynamically builds disabled form fields based on user's counts
- Calculates total fields, estimated hours to complete (2 min/field), printed pages (30 fields/page)
- Shows biometrics section (DNA, iris, voice print, etc.)
- All 20 social media platforms always shown as required
- Submit triggers results modal with "absurdity scale" and share buttons

## Files

- `index.html` - Two-phase structure with form fieldsets and results modal
- `app.js` - Country data with ISO codes, form generation functions, statistics
- `styles.css` - Government-styled theme with color-coded status badges
- `claude_docs/trump_visa_madness.md` - Source document for all requirements

## Country Categories (in `countryData` object)

| Category | Status | Count | Color |
|----------|--------|-------|-------|
| `fullBan` | All visas suspended | 20 | Red |
| `partialBan` | Tourist visas suspended | 19 | Orange |
| `vwp` | Visa Waiver (enhanced ESTA proposed) | 41 | Yellow |
| `standard` | Standard enhanced vetting | 100+ | Green |

## Requirement Status System

Every requirement must have a status badge indicating its source:
- `CURRENT` (green) - In effect (e.g., DS-160, DS-5535, Proclamation 10949)
- `PROPOSED` (yellow) - Proposed rule, comment period ends Feb 2026 (e.g., USCIS-2025-0205)
- `LIKELY` (purple) - Inferred from policy language, not explicitly documented

## Development

Static site - open `index.html` directly in browser. No build tools or dependencies.

## Accuracy Requirements

All displayed requirements must be traceable to `claude_docs/trump_visa_madness.md`. When adding fields:
1. Verify the requirement exists in source document
2. Apply correct status badge
3. Include inline source citation (e.g., "Source: DS-5535 supplemental form")
