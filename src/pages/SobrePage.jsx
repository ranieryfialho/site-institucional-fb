import { Container } from "@/components/common/Container";
import { PageTransition } from "@/components/common/PageTransition";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';
import drFelipeImage from '@/assets/images/dr-felipe.png'; 

const MEDICO_SRC = drFelipeImage;
const MEDICO_ALT = "Dr. Felipe Brasil — Ortopedista especialista em joelho";

// Remova o "export" daqui
function SobrePage() {
  return (
    <PageTransition>
      <div className="bg-white min-h-screen flex items-center"> 
        <Container className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-x-12 gap-y-16 items-center">
            <div className="relative p-2 border bg-slate-50/50 rounded-2xl shadow-lg">
              <div className="absolute -top-16 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(25,54,52,0.12),transparent)] blur-2xl" />
              
              <figure className="aspect-[4/5] w-full overflow-hidden rounded-xl">
                <img
                  src={MEDICO_SRC}
                  alt={MEDICO_ALT}
                  className="h-full w-full object-cover object-top"
                />
              </figure>
              <figcaption className="p-4 text-sm text-center text-muted-foreground">
                Atendimento humanizado com foco em técnicas minimamente invasivas.
              </figcaption>
            </div>

            <div className="text-center lg:text-left">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Sobre o especialista</Badge>
              <h1 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-gray-800">
                Dr. Felipe Brasil — Ortopedista Especialista em Joelho
              </h1>

              <div className="mt-6 space-y-4 text-muted-foreground text-lg">
                <p>
                  Com anos de experiência no diagnóstico e tratamento das mais diversas lesões e doenças do joelho, dedico-me a oferecer soluções modernas, seguras e personalizadas para cada paciente.
                </p>
                <p>
                  Minha atuação é focada em tratamentos minimamente invasivos, sempre com o objetivo de reduzir a dor, melhorar a mobilidade e devolver a qualidade de vida, evitando, sempre que possível, procedimentos cirúrgicos de grande porte.
                </p>
                <p>
                  Acredito que cada paciente merece um cuidado humanizado e próximo, onde as decisões de tratamento são tomadas em conjunto, com total clareza e segurança.
                </p>
              </div>

              <div className="mt-10 flex justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
                  <Link to="/contato">
                    Agendar avaliação com o especialista
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </PageTransition>
  );
}
export default SobrePage;