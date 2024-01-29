// Calendar.js
import React, { useState } from 'react';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const startOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handleDateClick = (day) => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day));
  };

  const renderCalendar = () => {
    const days = [];
    const totalDays = daysInMonth(selectedDate.getFullYear(), selectedDate.getMonth());

    for (let i = 1; i <= totalDays; i++) {
      days.push(
        <div
          key={i}
          className={`day ${selectedDate.getDate() === i ? 'selected' : ''}`}
          onClick={() => handleDateClick(i)}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar card col-md-6">
      <div className="month">
        <span className='calender'>{selectedDate.toLocaleString('default', { month: 'long' })}</span>
        <span>{selectedDate.getFullYear()}</span>
      </div>
      <div className="weekdays">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="days">{renderCalendar()}</div>
    </div>
  );
};

export default Calendar;
