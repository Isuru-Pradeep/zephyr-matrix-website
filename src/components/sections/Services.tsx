import ServiceCard from '@/components/common/Card/ServiceCard';
import styles from './Services.module.scss';

const services = [
  {
    id: 1,
    title: 'Custom Software Development',
    description: 'Tailored software solutions for your business needs.',
    icon: '/images/software-icon.svg',
  },
  {
    id: 2,
    title: 'Cloud Integration',
    description: 'Seamless cloud solutions for scalability and efficiency.',
    icon: '/images/cloud-icon.svg',
  },
  {
    id: 3,
    title: 'Digital Transformation',
    description: 'Modernize your business with cutting-edge technology.',
    icon: '/images/digital-icon.svg',
  },
];

export default function Services() {
  return (
    <section className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.grid}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}