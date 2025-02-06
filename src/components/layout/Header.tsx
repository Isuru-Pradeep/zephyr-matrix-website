'use client';

import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import styles from './Header.module.scss';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Zephyr Matrix</Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <button onClick={toggleTheme} className={styles.themeToggle}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </header>
  );
}