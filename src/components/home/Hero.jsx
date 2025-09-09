import { ArrowRight, Calendar, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/common/Container';

export function Hero() {
  return (
    <section className="bg-brand-dark text-white relative">
      <Container className="pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20 items-center">
          {/* Coluna de Texto */}
          <div className="text-center lg:text-left z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none">
              Tratamentos modernos e minimamente invasivos para dor e articulações.
            </h1>
            <p className="mt-8 text-lg text-slate-300 max-w-xl mx-auto lg:mx-0">
              Experimente a tranquilidade de uma vida sem dor com a dedicação e expertise do Dr. Felipe Brasil, especialista em Joelho e Medicina Regenerativa.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg bg-white text-brand-dark hover:bg-slate-200">
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Consulta
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-transparent border-white text-white hover:bg-white  hover:text-green-950">
                Conheça os Tratamentos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Coluna da Imagem com ajustes para mobile */}
          <div className="relative w-full h-[450px] md:h-[550px] flex justify-center items-center px-4 md:px-0">
            {/* Placeholder da Imagem Principal */}
            <div className="w-full h-full bg-slate-700 rounded-3xl flex items-center justify-center">
              <p className="text-slate-400 text-center">FOTO DO DR. FELIPE BRASIL</p>
            </div>

            {/* Badge de Reviews com ajustes para mobile */}
            <div className="absolute top-12 -right-8 md:-right-8 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg flex items-center space-x-3 text-brand-dark animate-fade-in-up">
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
              </div>
              <div>
                <p className="font-bold">10k+</p>
                <p className="text-xs text-slate-600">Avaliações Positivas</p>
              </div>
            </div>

            {/* Badge de Cursos com ajustes para mobile */}
            <div className="absolute bottom-8 -left-8 md:-left-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg text-brand-dark animate-fade-in-up flex items-center space-x-3" style={{ animationDelay: '0.2s' }}>
              <BookOpen className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">Cursos & Mentoria</p>
                <p className="text-xs text-slate-600">para profissionais da saúde</p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}