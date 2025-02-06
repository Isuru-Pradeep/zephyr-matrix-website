import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Zephyr Matrix. All rights reserved.</p>
    </footer>
  );
}