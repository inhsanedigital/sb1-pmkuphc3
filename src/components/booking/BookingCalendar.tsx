import React from 'react';
import useCalendarScript from './useCalendarScript';

export default function BookingCalendar() {
  useCalendarScript();
  
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div 
        className="calendly-inline-widget w-full" 
        data-url="https://calendly.com/inhsanedigital/30min" 
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  );
}