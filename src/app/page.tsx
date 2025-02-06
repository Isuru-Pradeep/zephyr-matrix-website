import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import Newsletter from '@/components/sections/Newsletter';

export default function Home() {
  return (
    <>
      <Hero
        title="Powering Tomorrow's Technology Today"
        subtitle="Empowering businesses with innovative technology solutions."
        ctaText="Explore Our Services"
        ctaLink="/services"
      />
      <Services />
      <Testimonials />
      <Newsletter />
    </>
  );
}