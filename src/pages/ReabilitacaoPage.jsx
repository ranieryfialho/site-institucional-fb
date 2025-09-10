import { Container } from "@/components/common/Container";
import { PageTransition } from "@/components/common/PageTransition";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from 'lucide-react';
import { Link } from "react-router-dom";

const protocols = [
  {
    title: "Protocolo de Recuperação Acelerada (Fast Track)",
    description: "Um programa intensivo e monitorado para atletas e pacientes com alta demanda funcional, visando um retorno seguro e rápido às atividades."
  },
  {
    title: "Reabilitação Pré-Operatória (Prehab)",
    description: "Fortalecimento e preparação da articulação antes da cirurgia para otimizar os resultados e acelerar a recuperação pós-operatória."
  },
  {
    title: "Terapia Manual e Liberação Miofascial",
    description: "Técnicas especializadas para restaurar a mobilidade, aliviar a dor e corrigir desequilíbrios musculares que afetam a articulação."
  }
];

export function ReabilitacaoPage() {
  return (
    <PageTransition>
      <div className="bg-white">
        <div className="bg-slate-50 py-16 sm:py-24">
          <Container className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-800">Reabilitação e Fisioterapia</h1>
            <p className="mt-6 text-lg max-w-3xl mx-auto text-muted-foreground">
              O sucesso de um tratamento não depende apenas do procedimento, mas de uma reabilitação bem executada. Conheça minha abordagem para garantir sua recuperação completa.
            </p>
          </Container>
        </div>

        <Container className="py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 items-center">
            <div className="w-full h-80 lg:h-96 bg-slate-200 rounded-2xl flex items-center justify-center">
              <p className="text-slate-500">Foto de paciente em reabilitação</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-800">Recuperação Guiada pela Ciência</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Minha filosofia de reabilitação é baseada em um diagnóstico preciso e em um plano totalmente personalizado. Em colaboração com fisioterapeutas de elite, cada fase da sua recuperação é projetada para restaurar a força, a mobilidade e a confiança, minimizando o risco de novas lesões.
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link to="/contato">Inicie sua Jornada de Recuperação</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>

        <div className="bg-primary-light">
          <Container className="py-20 sm:py-28">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-gray-800">Protocolos de Reabilitação</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Desenvolvi protocolos específicos que integram tecnologia e as melhores práticas clínicas para acelerar e otimizar os resultados.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {protocols.map((protocol) => (
                <Card key={protocol.title} className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <span>{protocol.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{protocol.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </PageTransition>
  );
}