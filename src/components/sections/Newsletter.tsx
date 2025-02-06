import styles from './Newsletter.module.scss';

export default function Newsletter() {
  return (
    <section className={styles.newsletter}>
      <h2>Subscribe to Our Newsletter</h2>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}