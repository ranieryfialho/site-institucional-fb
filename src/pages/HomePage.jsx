import { Hero } from '@/components/home/Hero';
import { Differentiators } from '@/components/home/Differentiators';
import { Testimonials } from '@/components/home/Testimonials';
import { InstituteTeaser } from '@/components/home/InstituteTeaser';
import { BlogTeaser } from '@/components/home/BlogTeaser';
import { Faq } from '@/components/home/Faq';
import { PageTransition } from '@/components/common/PageTransition';
import { FadeIn } from '@/components/common/FadeIn';

export function HomePage() {
  return (
    <PageTransition>
      <Hero />
      
      <FadeIn>
        <Differentiators />
      </FadeIn>

      <FadeIn>
        <Testimonials />
      </FadeIn>
      
      <FadeIn>
        <InstituteTeaser />
      </FadeIn>
      
      <FadeIn>
        <BlogTeaser />
      </FadeIn>
      
      <FadeIn>
        <Faq />
      </FadeIn>
    </PageTransition>
  );
}