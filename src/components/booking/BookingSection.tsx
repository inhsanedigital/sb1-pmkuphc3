import React from 'react';
import BookingHeading from './BookingHeading';
import GHLCalendar from './GHLCalendar';

export default function BookingSection() {
  return (
    <section id="booking" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BookingHeading />
        <GHLCalendar />
      </div>
    </section>
  );
}