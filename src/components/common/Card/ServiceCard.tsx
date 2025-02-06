import React from 'react';
import styles from './ServiceCard.module.scss';

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className={styles.card}>
      <img src={service.icon} alt={service.title} className={styles.icon} />
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  );
}