import styles from './Testimonials.module.scss';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, TechCorp',
    quote: 'Zephyr Matrix transformed our business with their innovative solutions.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'CTO, Innovate Inc.',
    quote: 'Their expertise in cloud integration is unmatched.',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2>What Our Clients Say</h2>
      <div className={styles.grid}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.card}>
            <p>{testimonial.quote}</p>
            <h3>{testimonial.name}</h3>
            <p>{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}