import React from 'react';

export default function ThemeToggleBtn() {
  const theme = 'dark';
  return (
    <button className={`themeToggleBtn ${theme}`}>
      <span>dark mode</span>
      <div className="pill">
        <div className="circle"></div>
      </div>
    </button>
  );
}
