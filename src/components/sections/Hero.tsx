import React from 'react';
import styles from './Hero.module.scss';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export default function Hero({ title, subtitle, ctaText, ctaLink }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img src="/images/zephyr-matrix-cover.svg" alt="zephyr-matrix-cover" />
      </div>
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <a href={ctaLink} className={styles.ctaButton}>
          {ctaText}
        </a>
      </div>
    </section>
  );
}