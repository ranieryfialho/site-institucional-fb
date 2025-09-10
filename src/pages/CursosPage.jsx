import { Container } from "@/components/common/Container";
import { PageTransition } from "@/components/common/PageTransition"; // <-- IMPORTAMOS O NOVO COMPONENTE
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";
import coursesData from "@/data/courses.json";

export function CursosPage() {
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
              <Card key={course.title} className="flex flex-col aspect-[3/4] overflow-hidden">
                <div className="relative h-1/2 bg-slate-200 flex items-center justify-center">
                  <p className="text-slate-500 text-sm">Imagem do Curso</p>
                </div>
                <CardHeader className="p-4 pb-0">
                  <p className="text-sm font-semibold text-primary">{course.audience}</p>
                  <CardTitle className="text-lg font-bold text-gray-800 mb-2 leading-tight">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 flex-grow flex flex-col justify-between">
                  <CardDescription className="text-gray-600 text-xs leading-relaxed line-clamp-3 mb-4">
                    {course.description}
                  </CardDescription>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold">
                    <a href={course.link} target="_blank" rel="noopener noreferrer">Saber Mais</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>

        <div className="bg-brand-dark">
          <Container className="py-20 sm:py-28">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-white">Mentoria Consultório de Sucesso</h2>
              <p className="mt-6 text-lg text-slate-300">{coursesData.mentorship.description}</p>
              <div className="mt-10">
                <Button asChild size="lg" className="bg-white text-green-900 hover:bg-white/60 font-semibold">
                  <a href={coursesData.mentorship.link} target="_blank" rel="noopener noreferrer">Quero transformar meu consultório</a>
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </PageTransition>
  );
}