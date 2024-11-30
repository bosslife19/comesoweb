import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

 // Import FontAwesome calendar icon

const MonthPicker = () => {
  const [date, setDate] = useState(null); // Track selected month
  const [showCalendar, setShowCalendar] = useState(false); // Control calendar visibility
  const [isFocused, setIsFocused] = useState(false); // Track focus for placeholder behavior
  
  // Handle date change from calendar
  const handleDateChange = (newDate) => {
    setDate(newDate);
    setShowCalendar(false); // Hide the calendar after selecting a date
  };

  // Format the selected date to display only the month and year
  const formatDate = (date) => {
    if (!date) return '';
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  return (
    <div className="relative">
      {/* Input field */}
      <input
        type="text"
        value={formatDate(date)}
        onFocus={() => setIsFocused(true)} // Hide placeholder when focused
        onBlur={() => setIsFocused(false)} // Show placeholder when not focused
        onClick={() => setShowCalendar(!showCalendar)} // Toggle calendar visibility on input click
        placeholder={!isFocused && !date ? 'This Month' : ''}
        className="border text-[#0000]   border-[#D0D5DD] rounded-[50px] px-3 py-2 w-[160px] pl-10" // Add padding left for the icon
      />

      {/* Calendar icon inside input */}
      {/* <FontAwesomeIcon
        icon={faCalendarAlt}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" // Position the icon
      /> */}

      {/* Display the calendar */}
      {showCalendar && (
        <div className="absolute top-full right-0 mt-2">
          <Calendar
            value={date}
            onChange={handleDateChange}
            view="month" // Show only the month view
          />
        </div>
      )}
    </div>
  );
};

export default MonthPicker;
