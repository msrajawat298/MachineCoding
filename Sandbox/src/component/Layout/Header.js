"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Layout.module.css';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path ? styles.navLinkActive : '';

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <img src="/logo.svg" alt="VitableTech Logo" height="32" style={{ height: '32px' }} />
        </Link>
        
        <nav className={styles.navLinks}>
          <Link href="/" className={`${styles.navLink} ${isActive('/')}`}>
            Home
          </Link>
          <Link href="/exercises" className={`${styles.navLink} ${isActive('/exercises')}`}>
            Exercises
          </Link>
          <Link href="/about" className={`${styles.navLink} ${isActive('/about')}`}>
            About
          </Link>
          <Link href="/guide" className={`${styles.navLink} ${isActive('/guide')}`}>
            Guide
          </Link>
        </nav>

        <div className="d-flex gap-2">
           {/* Placeholder for auth or extra actions */}
           <Link href="/exercises" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
             Start Coding
           </Link>
        </div>
      </div>
    </header>
  );
}
