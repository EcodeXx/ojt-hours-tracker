// List of holidays for 2025 (in the Philippines)
const holidays = [
  { date: '2025-01-01', name: 'New Year\'s Day' },
  { date: '2025-02-25', name: 'EDSA People Power Revolution' },
  { date: '2025-04-09', name: 'Araw ng Kagitingan' },
  { date: '2025-04-17', name: 'Maundy Thursday' },   // Added Maundy Thursday
  { date: '2025-04-18', name: 'Good Friday' },         // Added Good Friday
  { date: '2025-05-01', name: 'Labor Day' },
  { date: '2025-06-12', name: 'Independence Day' },
  { date: '2025-08-21', name: 'Ninoy Aquino Day' },
  { date: '2025-11-01', name: 'All Saints’ Day' },
  { date: '2025-11-02', name: 'All Souls’ Day' },
  { date: '2025-12-25', name: 'Christmas Day' },
  { date: '2025-12-30', name: 'Rizal Day' }
];

// JavaScript to handle OJT end date calculation
document.getElementById('calculateEndMonth').addEventListener('click', function() {
  const startDate = new Date(document.getElementById('startDate').value);
  const totalHoursRequired = parseInt(document.getElementById('totalHoursRequired').value);
  const hoursPerDay = parseInt(document.getElementById('hoursPerDay').value);

  if (isNaN(totalHoursRequired) || isNaN(hoursPerDay) || totalHoursRequired <= 0 || hoursPerDay <= 0) {
    alert("Please enter valid numbers for total hours and hours per day.");
    return;
  }

  // Calculate the number of total days required to complete OJT
  const totalDaysRequired = totalHoursRequired / hoursPerDay;

  // Calculate the end date by adding weekdays to the start date
  let endDate = getEndDateExcludingWeekends(startDate, totalDaysRequired);

  // Check for holidays overlapping the OJT time period and adjust the end date
  let adjustedEndDate = adjustForHolidays(startDate, endDate, totalDaysRequired, hoursPerDay);

  // Display the exact end date (including the date and month)
  const endMonth = adjustedEndDate.toLocaleString('default', { month: 'long' });  // Get full month name
  const endYear = adjustedEndDate.getFullYear();
  const endDay = adjustedEndDate.getDate();

  document.getElementById('ojtEndDate').textContent = `Your OJT will end on ${endMonth} ${endDay}, ${endYear}.`;

  // Display holidays that overlap with the OJT period
  displayHolidaysWithinOjtPeriod(startDate, adjustedEndDate);
});

// Calculate the OJT end date, excluding weekends (only weekdays)
function getEndDateExcludingWeekends(startDate, totalDaysRequired) {
  let currentDate = new Date(startDate);
  let weekdaysCount = 0;

  // Loop to calculate the end date, excluding weekends
  while (weekdaysCount < totalDaysRequired) {
    currentDate.setDate(currentDate.getDate() + 1);

    // Check if it's not Saturday (6) or Sunday (0)
    if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
      weekdaysCount++;
    }
  }

  return currentDate;
}

// Adjust end date if holidays overlap
function adjustForHolidays(startDate, endDate, totalDaysRequired, hoursPerDay) {
  let totalDaysAdjusted = 0;

  // Check for holidays falling within the OJT period
  for (let holiday of holidays) {
    const holidayDate = new Date(holiday.date);
    
    // Check if holiday is within the OJT period
    if (holidayDate >= startDate && holidayDate <= endDate) {
      totalDaysAdjusted -= 2;  // Each holiday shortens the OJT period by 2 days (instead of adding)
    }
  }

  // Calculate the new end date by subtracting the adjusted days from the initial end date
  let newEndDate = new Date(endDate);
  newEndDate.setDate(newEndDate.getDate() + totalDaysAdjusted); // Subtract the days reduced by holidays

  return newEndDate;
}

// Display the holidays that fall within the OJT period (in Philippine Time)
function displayHolidaysWithinOjtPeriod(startDate, endDate) {
  const holidayList = document.getElementById('holidayDetails');
  holidayList.innerHTML = "";  // Clear the previous holiday list
  
  // Iterate over the holidays and display those within the OJT period
  let holidaysInOjtPeriod = holidays.filter(holiday => {
    const holidayDate = new Date(holiday.date);
    return holidayDate >= startDate && holidayDate <= endDate;
  });

  if (holidaysInOjtPeriod.length === 0) {
    holidayList.innerHTML = "<li>No holidays during your OJT period.</li>";
  } else {
    holidaysInOjtPeriod.forEach(holiday => {
      const listItem = document.createElement("li");
      const holidayDate = new Date(holiday.date);
      const holidayName = holiday.name;

      // Display holiday in Philippine Time (PHT, UTC+8)
      const phtDate = new Date(holidayDate.toLocaleString("en-US", { timeZone: "Asia/Manila" }));
      
      // Format the date in a readable way (e.g., March 25, 2025)
      const formattedDate = phtDate.toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' });

      listItem.textContent = `${holidayName} on ${formattedDate}`;
      holidayList.appendChild(listItem);
    });
  }
}
