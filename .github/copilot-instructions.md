# Copilot Instructions for Timeline Tracker

## Project Overview
This is a vanilla JavaScript, HTML, and CSS project designed to track time progress through the year 2026. It is a static site hosted on GitHub Pages.

## Architecture
- **Frontend**: Single `index.html` file with vanilla JS (`script.js`) and CSS (`style.css`).
- **State**: No persistent state; calculations are based on the current system time (`new Date()`).
- **Components**:
  - **Year Tracker**: Calculates progress from Jan 1 to Dec 31, 2026.
  - **Month Tracker**: Calculates progress for the current month.
  - **Target Tracker**: Specific countdown to May 3rd, 2026.
  - **Mantras**: Rotates motivational text.

## Development Workflow
- **Running**: Open `index.html` directly in a web browser. No build server required.
- **Testing**: 
  - Logic validation is performed via `test_logic.js`.
  - Run with Node.js: `node test_logic.js` (simulates specific dates like Jan 5, 2026).
  - **Critical**: When modifying date logic, always verify against `test_logic.js` to ensure edge cases (leap years, month boundaries) are handled.

## Code Conventions
- **JavaScript**:
  - Use `const` and `let`, avoid `var`.
  - Direct DOM manipulation via `document.getElementById`.
  - Date calculations should use milliseconds for precision: `(date2 - date1) / (1000 * 60 * 60 * 24)`.
- **CSS**:
  - Keep styles in `style.css`.
  - Use semantic class names (e.g., `.tracker-card`, `.progress-bar`).
- **HTML**:
  - Semantic HTML5 tags (`header`, `section`, `div`).

## Key Files
- `script.js`: Contains all business logic and UI update code.
- `test_logic.js`: Standalone script for verifying date math logic with mock dates.
- `index.html`: Main entry point and structure.

## Specific Patterns
- **Date Mocking**: In `test_logic.js`, dates are mocked using `new Date('2026-01-05T12:00:00')`. Use this pattern to test specific scenarios.
- **UI Updates**: The `updateTrackers()` function in `script.js` is the central loop, running on load and every 60 seconds.
