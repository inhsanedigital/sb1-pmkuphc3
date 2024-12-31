import React, { useEffect } from 'react';

export default function GHLCalendar() {
  useEffect(() => {
    // Load GHL form embed script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <iframe 
        src="https://api.leadconnectorhq.com/widget/booking/wYQiCxuWM3h2ZxhCIrmb" 
        style={{ width: '100%', border: 'none', overflow: 'hidden', height: '700px' }}
        scrolling="no" 
        id="wYQiCxuWM3h2ZxhCIrmb_1735660686783"
        title="Book a Call"
      />
    </div>
  );
}