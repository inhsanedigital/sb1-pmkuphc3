import React from 'react';

interface ScrollCTAProps {
  text: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export default function ScrollCTA({ text, className = '', variant = 'primary' }: ScrollCTAProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all";
  const variantStyles = variant === 'primary'
    ? "bg-gradient-to-r from-blue-900 to-blue-500 text-white hover:shadow-lg"
    : "border-2 border-white text-white hover:bg-white/10";

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {text}
    </button>
  );
}