import { ArrowRight, Calendar, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/common/Container';
import drFelipeHeroImage from '@/assets/images/dr-felipe-hero.jpg';
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { Link } from 'react-router-dom';

const avatarUrls = [
  {
    imageUrl: "/avatars/avatar1.jpg",
    profileUrl: "#"
  },
  {
    imageUrl: "/avatars/avatar2.jpg", 
    profileUrl: "#"
  },
  {
    imageUrl: "/avatars/avatar3.jpg",
    profileUrl: "#"
  },
];

export function Hero() {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5585988881155&text=Ol%C3%A1%21+Vim+do+site+Institucional+do+Dr.+Felipe+Brasil+e+gostaria+de+agendar+uma+consulta&type=phone_number&app_absent=0";

  return (
    <section className="bg-brand-dark text-white relative">
      <Container className="pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20 items-center">
          <div className="text-center lg:text-left z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none">
              Tratamentos modernos e minimamente invasivos para dor e articulações.
            </h1>
            <p className="mt-8 text-lg text-slate-300 max-w-xl mx-auto lg:mx-0">
              Experimente a tranquilidade de uma vida sem dor com a dedicação e expertise do Dr. Felipe Brasil, especialista em Joelho e Medicina Regenerativa.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg bg-white text-brand-dark hover:bg-slate-200" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Consulta
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-transparent border-white text-white hover:bg-white hover:text-brand-dark" asChild>
                <Link to="/tratamentos">
                  Conheça os Tratamentos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Coluna da Imagem */}
          <div className="relative w-full h-[700px] flex justify-center items-center">
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={drFelipeHeroImage}
                alt="Foto do Dr. Felipe Brasil, ortopedista especialista"
                className="w-full h-full object-cover object-center" 
              />
            </div>

            {/* Badge de Reviews */}
            <div className="absolute top-4 right-4 md:top-12 md:-right-8 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg flex items-center space-x-3 text-brand-dark animate-fade-in-up">
              <AvatarCircles avatarUrls={avatarUrls} />
              <div>
                <p className="font-bold">10k+</p>
                <p className="text-xs text-slate-600">Avaliações Positivas</p>
              </div>
            </div>

            {/* Badge de Cursos */}
            <div className="absolute bottom-4 left-4 md:bottom-8 md:-left-8 bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-lg text-brand-dark animate-fade-in-up flex items-center space-x-4" style={{ animationDelay: '0.2s' }}>
              <Link to="/cursos-mentoria">
              <BookOpen className="h-6 w-6 text-primary flex-shrink-0" />
              </Link>
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