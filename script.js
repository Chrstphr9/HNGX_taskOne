// Get the current date
const currentDate = new Date();

// Define an array of day names
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Get the day of the week (0-6)
const dayOfWeek = currentDate.getDay();

// Display the day of the week on the webpage
const dayOfWeekElement = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
dayOfWeekElement.textContent = dayNames[dayOfWeek];
