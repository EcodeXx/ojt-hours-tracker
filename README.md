Sure! Here's the updated version of the README, reflecting the new features added to the **OJT Hours Tracker**:

---

# OJT Hours Tracker

**Project Title**: OJT Hours Tracker  
**Author**: EcodeXx

## Description

The **OJT Hours Tracker** is a web-based application designed to help users calculate the end date of their On-the-Job Training (OJT) period. It factors in the start date, total required hours, hours worked per day, and automatically adjusts for weekends, holidays, and absences. This ensures that the OJT duration is accurately calculated, taking into consideration official Philippine holidays, weekends, and any absent days reported.

## Features

- **OJT End Date Calculation**: Calculate the end date of the OJT based on the start date, total required hours, and hours worked per day.
- **Holiday Adjustment**: Automatically adjusts the OJT duration if official holidays overlap the OJT period.
- **Absent Days Calculation**: Takes into account any days the user has been absent, extending the OJT period accordingly.
- **Weekend Exclusion**: Excludes weekends (Saturday and Sunday) from the OJT duration calculation.
- **Philippine Holidays**: Adjusts the OJT period for all official Philippine holidays.
- **Holiday Display**: Lists all holidays that fall within the OJT period, informing the user of any date overlaps.
- **Responsive Design**: Optimized for different screen sizes, including desktop, tablet, and mobile devices.

## Technologies Used

- **HTML**: Provides the structure of the web page.
- **CSS**: Styling for the responsive design, ensuring the application works well across various screen sizes.
- **JavaScript**: Logic for calculating the OJT end date, adjusting for holidays, weekends, and absent days.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/EcodeXx/ojt-hours-tracker.git
   cd ojt-hours-tracker
   ```

2. **Open the application**:
   - Open the `index.html` file in your preferred browser to launch the OJT Hours Tracker.

## Usage

1. **Enter Start Date**: Select the start date of your OJT using the date input field.
2. **Enter Total Hours Required**: Input the total number of hours required to complete your OJT.
3. **Enter Hours Worked Per Day**: Specify how many hours you work each day during your OJT.
4. **Enter Absent Days**: If you have been absent on any days, input the number of absent days to adjust the end date.
5. **Click Calculate**: Press the "Calculate End Date" button to determine when your OJT will end, excluding weekends, holidays, and your absences.

## Example Calculation:

- **Start Date**: January 1, 2025
- **Total Hours Required**: 1000 hours
- **Hours Worked Per Day**: 8 hours
- **Absent Days**: 2 days

The app will calculate the end date by excluding weekends, holidays, and adjusting for any days marked as absent.

## How It Works:

1. **Weekend Exclusion**: The app skips Saturdays and Sundays in the OJT duration calculation.
2. **Holiday Adjustment**: If a Philippine holiday falls within the OJT period, the OJT duration will be extended to account for these holidays.
3. **Absence Adjustment**: If the user enters any absent days, these will be added to the OJT duration, adjusting the final end date.

## Future Enhancements

- **User Authentication**: Allow users to save their OJT calculations and progress.
- **Multiple OJT Sessions**: Enable users to track multiple OJT sessions with different start dates and durations.
- **Export Functionality**: Add a feature to export the OJT calculation as a PDF or text file.

---

