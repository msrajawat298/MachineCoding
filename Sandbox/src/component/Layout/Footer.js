import Link from 'next/link';
import styles from './Layout.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container`}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h3><span className="text-gradient">FrontendForge</span></h3>
            <p className={styles.footerSlogan}>
              Forging Elite Frontend Engineers. <br/>
              <span style={{fontSize: '0.8em', opacity: 0.7}}>Powered by VitableTech</span>
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Resources</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/exercises" className={styles.footerLink}>Exercises</Link></li>
              <li><Link href="/about" className={styles.footerLink}>About Us</Link></li>
              <li><Link href="/guide" className={styles.footerLink}>Developer Guide</Link></li>
              <li><a href="https://blog.vitabletech.in/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Blog</a></li>
              <li><a href="https://github.com/msrajawat298/MachineCoding" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>GitHub Repo</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Connect</h4>
            <ul className={styles.footerLinks}>
              <li><a href="https://vitabletech.in/#contact" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Contact Us</a></li>
              <li><Link href="#" className={styles.footerLink}>Privacy Policy</Link></li>
            </ul>
          </div>

        </div>
        
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} VitableTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
