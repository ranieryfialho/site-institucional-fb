import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Container } from '@/components/common/Container';
import { Button } from '@/components/ui/button';
import blogPostsData from '@/data/blog-posts.json';
import { Link } from 'react-router-dom';

export function BlogTeaser() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    dragFree: true,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 },
    },
  });
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [emblaApi, setScrollProgress]);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll();
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  const posts = blogPostsData.slice(0, 4);

  return (
    <section className="bg-brand-dark py-20 sm:py-28 text-white"> 
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Blog e Novidades</h2>
          <p className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            Informação e Cuidado
          </p>
          <p className="mt-6 text-lg text-slate-300">
            Mantenha-se informado com artigos, dicas e as últimas novidades sobre saúde ortopédica e bem-estar, escritos por quem entende do assunto.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {posts.map((post) => (
                <div key={post.slug} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 pl-4">
                  <Card className="h-full flex flex-col overflow-hidden bg-white text-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    <Link to={`/blog/${post.slug}`} className="block h-full">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-56 w-full object-cover"
                      />
                      <CardContent className="p-6 flex flex-col flex-grow">
                        <p className="text-sm text-muted-foreground">{post.date}</p>
                        <h3 className="mt-2 text-xl font-semibold hover:text-primary">{post.title}</h3>
                        <p className="mt-3 text-base text-muted-foreground flex-grow">{post.excerpt}</p>
                        <p className="mt-4 font-semibold text-primary">Leia Mais →</p>
                      </CardContent>
                    </Link>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full">
            <Button variant="outline" size="icon" onClick={scrollPrev} className="absolute -left-4 rounded-full h-10 w-10 bg-white shadow-md">
              <ArrowLeft className="h-4 w-4 text-brand-dark" />
            </Button>
            <Button variant="outline" size="icon" onClick={scrollNext} className="absolute -right-4 rounded-full h-10 w-10 bg-white shadow-md">
              <ArrowRight className="h-4 w-4 text-brand-dark" />
            </Button>
          </div>
        </div>
        
        <div className="mt-16 text-center">
            <Link to="/blog">
              <Button size="lg" variant="outline" className="text-lg bg-transparent border-white text-white hover:bg-white hover:text-green-950">Ver Todos os Artigos</Button>
            </Link>
        </div>
      </Container>
    </section>
  );
}