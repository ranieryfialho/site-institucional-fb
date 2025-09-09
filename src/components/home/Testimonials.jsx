import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Container } from '@/components/common/Container';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from '@/components/ui/button';
import testimonialsData from '@/data/testimonials.json';

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
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

  return (
    <section className="bg-primary-light py-20 sm:py-28">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Depoimentos</h2>
          {/* COPY CORRIGIDA: "Nossos" para "Meus" */}
          <p className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-800">
            O Que Meus Pacientes Dizem
          </p>
          {/* COPY CORRIGIDA: Tom de voz singular */}
          <p className="mt-6 text-lg text-muted-foreground">
            A confiança e a satisfação de quem atendo é o meu maior resultado. Veja algumas histórias de sucesso.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonialsData.map((testimonial, index) => (
                <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 pl-4" key={index}>
                  <Card className="h-full flex flex-col justify-between">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4">
                          <p className="font-semibold text-gray-800">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-muted-foreground">&ldquo;{testimonial.text}&rdquo;</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full">
             <Button variant="outline" size="icon" onClick={scrollPrev} className="absolute -left-4 rounded-full h-10 w-10 bg-white shadow-md">
               <ArrowLeft className="h-4 w-4" />
             </Button>
             <Button variant="outline" size="icon" onClick={scrollNext} className="absolute -right-4 rounded-full h-10 w-10 bg-white shadow-md">
               <ArrowRight className="h-4 w-4" />
             </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}