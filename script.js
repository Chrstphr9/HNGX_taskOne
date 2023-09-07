function updateDateTime() {
    const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');

    // Create a new Date object with the current date and time
    const now = new Date();

    // Calculate the UTC+1 offset in milliseconds (1 hour = 3600000 milliseconds)
    const utcOffsetMilliseconds = 1 * 60 * 60 * 1000; // UTC+1

    // Apply the UTC+1 offset to the current time
    const timeInUTCPlus1 = new Date(now.getTime() + utcOffsetMilliseconds);

    // Get the day of the week and time in UTC+1
    const dayOfWeek = timeInUTCPlus1.toLocaleDateString(undefined, { weekday: 'long' });
    const hours = timeInUTCPlus1.getUTCHours().toString().padStart(2, '0');
    const minutes = timeInUTCPlus1.getUTCMinutes().toString().padStart(2, '0');
    const seconds = timeInUTCPlus1.getUTCSeconds().toString().padStart(2, '0');

    utcTimeElement.textContent = `UTC Time: ${hours}:${minutes}:${seconds}`;
    dayOfWeekElement.textContent = `Day of the Week: ${dayOfWeek}`;
}

setInterval(updateDateTime, 1000);

updateDateTime();
