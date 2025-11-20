import React from 'react';

const AsciiArtBackground = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden="true">
      <svg width="100%" height="100%">
        <defs>
          <pattern id="dot-pattern" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(255, 255, 255, 0.05)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-pattern)" />
      </svg>
    </div>
  );
};

export default AsciiArtBackground;
