import React from 'react';
import ThemeToggleBtn from './ThemeToggleBtn';
import MainHeading from './MainHeading';

export default function Header() {
  return (
    <header className="header">
      <MainHeading />
      <ThemeToggleBtn />
    </header>
  );
}
