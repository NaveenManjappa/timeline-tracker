document.addEventListener('DOMContentLoaded', () => {
    updateTrackers();
    setupMantras();
    
    // Update trackers every minute to keep it fresh
    setInterval(updateTrackers, 60000);
});

function updateTrackers() {
    const now = new Date();
    const currentYear = 2026;
    
    // 1. Year 2026 Tracker
    const startOfYear = new Date(currentYear, 0, 1);
    const endOfYear = new Date(currentYear, 11, 31, 23, 59, 59);
    const totalYearDays = (endOfYear - startOfYear) / (1000 * 60 * 60 * 24);
    const daysSpentYear = (now - startOfYear) / (1000 * 60 * 60 * 24);
    
    updateTrackerUI(
        'year', 
        daysSpentYear, 
        totalYearDays, 
        Math.max(0, totalYearDays - daysSpentYear)
    );

    // 2. Month Tracker
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
    const totalMonthDays = (endOfMonth - startOfMonth) / (1000 * 60 * 60 * 24); // Approximate days in month
    // More precise calculation for days in month
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const daysSpentMonth = now.getDate() - 1 + (now.getHours() / 24);
    
    // Update Month Title
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    document.getElementById('month-title').textContent = `${monthNames[now.getMonth()]} Progress`;

    updateTrackerUI(
        'month', 
        daysSpentMonth, 
        daysInMonth, 
        daysInMonth - daysSpentMonth
    );

    // 3. May 3rd, 2026 Tracker
    // Assuming start date is Jan 1, 2026 for the "completion" context, 
    // or we can just track countdown. Let's track from Jan 1, 2026 to May 3, 2026.
    const targetDate = new Date(2026, 4, 3, 23, 59, 59); // May is month 4 (0-indexed)
    const startOfTargetPeriod = new Date(2026, 0, 1);
    
    const totalTargetDays = (targetDate - startOfTargetPeriod) / (1000 * 60 * 60 * 24);
    const daysSpentTarget = (now - startOfTargetPeriod) / (1000 * 60 * 60 * 24);
    
    // If we are past the date
    let spentTargetDisplay = daysSpentTarget;
    let leftTargetDisplay = totalTargetDays - daysSpentTarget;
    
    if (now > targetDate) {
        spentTargetDisplay = totalTargetDays;
        leftTargetDisplay = 0;
    }

    updateTrackerUI(
        'target',
        spentTargetDisplay,
        totalTargetDays,
        leftTargetDisplay
    );
}

function updateTrackerUI(idPrefix, spent, total, left) {
    const percent = Math.min(100, Math.max(0, (spent / total) * 100));
    
    document.getElementById(`${idPrefix}-progress`).style.width = `${percent}%`;
    document.getElementById(`${idPrefix}-spent`).textContent = Math.floor(spent);
    document.getElementById(`${idPrefix}-left`).textContent = Math.ceil(left);
    document.getElementById(`${idPrefix}-percent`).textContent = `${percent.toFixed(1)}%`;
}

function setupMantras() {
    const mantras = {
        tired: "My energy is boundless. I am strong, capable, and manly.",
        hard: "I love complex challenges. I am the expert here.",
        bank: "I have more than enough. I am financially free.",
        family: "I am present. This moment is a blessing.",
        stuck: "I make it happen. Action is my nature."
    };

    const buttons = document.querySelectorAll('.mantra-btn');
    const display = document.getElementById('mantra-text');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            buttons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked
            btn.classList.add('active');
            
            // Update text with animation reset
            const type = btn.getAttribute('data-type');
            
            // Trigger reflow for animation restart
            display.style.animation = 'none';
            display.offsetHeight; /* trigger reflow */
            display.style.animation = null; 
            
            display.textContent = mantras[type];
        });
    });
}