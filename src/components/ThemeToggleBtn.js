import React, { useState, useEffect } from 'react';

export default function ThemeToggleBtn() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const globalStyles = document.documentElement.style;
    if (theme !== 'light') {
      // Set to light
      globalStyles.setProperty('--main-bg', 'hsl(230, 17%, 14%)');
      globalStyles.setProperty('--top-bg', 'hsl(232, 19%, 15%)');
      globalStyles.setProperty('--card-bg', 'hsl(228, 28%, 20%)');
      globalStyles.setProperty('--muted-text', 'hsl(228, 34%, 66%)');
      globalStyles.setProperty('--regular-text', 'hsl(0, 0%, 100%)');
    } else {
      // Set to dark
      globalStyles.setProperty('--main-bg', ' hsl(0, 0%, 100%)');
      globalStyles.setProperty('--top-bg', 'hsl(225, 100%, 98%)');
      globalStyles.setProperty('--card-bg', 'hsl(227, 47%, 96%)');
      globalStyles.setProperty('--muted-text', 'hsl(228, 12%, 44%)');
      globalStyles.setProperty('--regular-text', 'hsl(230, 17%, 14%)');
    }
  }, [theme]);

  const toggleThemes = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <button className={`themeToggleBtn ${theme}`} onClick={toggleThemes}>
      <span>dark mode</span>
      <div className="pill">
        <div className="circle"></div>
      </div>
    </button>
  );
}
