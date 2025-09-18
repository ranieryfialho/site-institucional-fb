import { Container } from "@/components/common/Container";
import { PageTransition } from "@/components/common/PageTransition";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import coursesData from "@/data/courses.json";

function CursosPage() {
  const WHATSAPP_NUMBER = "5585981191467";

  // Esta função será usada apenas pela mentoria agora
  const handleWhatsAppClick = (courseName) => {
    const message = `Olá, Dr. Felipe. Gostaria de saber mais sobre o curso/mentoria: *${coursename}*.`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <PageTransition>
      <div className="bg-white">
        <div className="bg-slate-50 py-16 sm:py-24">
          <Container className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-800">Cursos e Mentoria</h1>
            <p className="mt-6 text-lg max-w-3xl mx-auto text-muted-foreground">
              Compartilhando conhecimento para elevar o nível da ortopedia e da fisioterapia no Brasil. Aprimore sua prática clínica com cursos e mentorias baseados em anos de experiência.
            </p>
          </Container>
        </div>

        <Container className="py-20 sm:py-28">
          <div className="text-left mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-800">Cursos Técnicos</h2>
            <p className="mt-4 text-lg text-muted-foreground">Cursos práticos e focados em técnicas de vanguarda para aplicação imediata no seu consultório.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesData.courses.map((course) => (
              <Card key={course.title} className="flex flex-col overflow-hidden group">
                <div className="relative h-56 bg-slate-200 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <CardHeader className="p-0">
                    <p className="text-sm font-semibold text-primary">{course.audience}</p>
                    <CardTitle className="text-lg font-bold text-gray-800 mb-2 leading-tight">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 flex-grow">
                    <CardDescription className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {course.description}
                    </CardDescription>
                  </CardContent>
                  <div className="mt-auto pt-4">
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                      <a href={course.link} target="_blank" rel="noopener noreferrer">
                        Saber Mais
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>

        <div className="bg-brand-dark">
          <Container className="py-20 sm:py-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               <div className="relative h-80 rounded-2xl overflow-hidden">
                  <img
                    src={coursesData.mentorship.image}
                    alt={coursesData.mentorship.title}
                    className="w-full h-full object-cover"
                  />
               </div>
               <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-white">{coursesData.mentorship.title}</h2>
                  <p className="mt-6 text-lg text-slate-300">{coursesData.mentorship.description}</p>
                  <div className="mt-10">
                    <Button asChild size="lg" className="bg-white text-green-900 hover:bg-white/60 font-semibold">
                      <a href={coursesData.mentorship.link} target="_blank" rel="noopener noreferrer">
                        Quero transformar meu consultório
                      </a>
                    </Button>
                  </div>
               </div>
            </div>
          </Container>
        </div>
      </div>
    </PageTransition>
  );
}

export default CursosPage;