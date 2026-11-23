import { useEffect, useState } from 'react';
import { profile } from '../data/portfolio';
import { Icon } from './Icon';

function getInitialTheme() {
  try {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
  } catch {
    // Use the system preference if browser storage is unavailable.
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function SiteHeader() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#17160f' : '#f5f0dc');
    try {
      window.localStorage.setItem('portfolio-theme', theme);
    } catch {
      // The selected theme remains active for this page view.
    }
  }, [theme]);

  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label={`${profile.name}, home`}>SR</a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </nav>
      <button
        className="theme-toggle"
        type="button"
        onClick={() => setTheme(nextTheme)}
        aria-label={`Switch to ${nextTheme} mode`}
        aria-pressed={theme === 'dark'}
        title={`Switch to ${nextTheme} mode`}
      >
        <Icon>{theme === 'dark' ? 'light_mode' : 'dark_mode'}</Icon>
      </button>
    </header>
  );
}
