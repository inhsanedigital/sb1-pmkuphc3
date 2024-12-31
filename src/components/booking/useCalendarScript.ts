import { useEffect } from 'react';

export default function useCalendarScript() {
  useEffect(() => {
    // Remove any existing Calendly scripts to prevent duplicates
    const existingScript = document.querySelector('script[src*="calendly"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[src*="calendly"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);
}