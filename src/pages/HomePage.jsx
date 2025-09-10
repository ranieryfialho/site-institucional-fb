import { Hero } from '@/components/home/Hero';
import { Differentiators } from '@/components/home/Differentiators';
import { Testimonials } from '@/components/home/Testimonials';
import { InstituteTeaser } from '@/components/home/InstituteTeaser';
import { BlogTeaser } from '@/components/home/BlogTeaser';
import { Faq } from '@/components/home/Faq';
import { PageTransition } from '@/components/common/PageTransition'; // Importa a transição de página
import { FadeIn } from '@/components/common/FadeIn'; // Importa a animação de scroll

export function HomePage() {
  return (
    // 1. Adicionado o PageTransition para a entrada da página inteira
    <PageTransition>
      {/* A seção Hero não precisa de FadeIn, pois aparece junto com a página */}
      <Hero />

      {/* 2. Cada seção abaixo agora é envolvida por um FadeIn individual */}
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