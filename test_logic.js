const YEAR = 2026;
const startDate = new Date(`${YEAR}-01-01T00:00:00`);
const endDate = new Date(`${YEAR}-12-31T23:59:59`);

// Mock current date: Jan 5th, 2026
const now = new Date('2026-01-05T12:00:00');

console.log(`Current simulated date: ${now.toISOString()}`);

if (now < startDate) {
    console.log("Before 2026");
} else if (now > endDate) {
    console.log("After 2026");
} else {
    const totalDuration = endDate - startDate;
    const elapsedDuration = now - startDate;
    
    const daysSpent = Math.floor(elapsedDuration / (1000 * 60 * 60 * 24));
    const daysLeft = Math.ceil((endDate - now) / (1000 * 60 * 60 * 24));
    const percentage = (elapsedDuration / totalDuration) * 100;

    console.log(`Days Spent: ${daysSpent}`);
    console.log(`Days Left: ${daysLeft}`);
    console.log(`Percentage: ${percentage.toFixed(2)}%`);
    
    // Validation
    if (daysSpent + daysLeft >= 365 && daysSpent + daysLeft <= 366) {
        console.log("Validation Passed: Days sum up correctly.");
    } else {
        console.log(`Validation Failed: Sum is ${daysSpent + daysLeft}`);
    }
}