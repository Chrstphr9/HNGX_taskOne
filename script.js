function updateDateTime() {
    const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');

    const now = new Date();
    const utcTimeMilliseconds = now.getTime(); 
    const dayOfWeek = now.toLocaleDateString(undefined, { weekday: 'long' });

    utcTimeElement.textContent = `UTC Time: ${utcTimeMilliseconds}`;
    dayOfWeekElement.textContent = `Day of the Week: ${dayOfWeek}`;
}

setInterval(updateDateTime, 1000);

updateDateTime();