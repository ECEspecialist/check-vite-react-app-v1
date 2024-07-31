import { useState } from 'react';
import Calendar from 'react-calendar';
import "./Calendar.css";
import 'react-calendar/dist/Calendar.css';
import { enUS } from 'date-fns/locale'; // Import the locale
function CalendarApp() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='calendar-app'>
               <span className='personal-calendar-title'>Personal Calendar</span>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} locale={enUS}/>
      </div>
    </div>
  );
}

export default CalendarApp;