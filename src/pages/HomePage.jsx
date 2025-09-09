import { Hero } from '@/components/home/Hero';
import { Differentiators } from '@/components/home/Differentiators';
import { Testimonials } from '@/components/home/Testimonials';
import { InstituteTeaser } from '@/components/home/InstituteTeaser';
import { BlogTeaser } from '@/components/home/BlogTeaser';
import { Faq } from '@/components/home/Faq';

export function HomePage() {
  return (
    <>
      <Hero />
      <Differentiators />
      <Testimonials />
      <InstituteTeaser />
      <BlogTeaser />
      <Faq />
    </>
  );
}