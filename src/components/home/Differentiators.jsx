import { Zap, ShieldCheck, Stethoscope } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from '@/components/common/Container';

const features = [
  {
    icon: <Stethoscope size={32} className="text-primary" />,
    title: "Tratamentos Minimamente Invasivos",
    description: "Foco em procedimentos que garantem uma recuperação mais rápida e menos desconforto, utilizando técnicas de ponta.",
    highlight: false,
  },
  {
    icon: <Zap size={32} className="text-white" />,
    title: "Tecnologia de Ponta",
    // COPY AJUSTADA: Sai o "Utilizamos"
    description: "A utilização dos equipamentos e protocolos mais avançados em medicina regenerativa e tratamento da dor para resultados superiores.",
    highlight: true,
  },
  {
    icon: <ShieldCheck size={32} className="text-primary" />,
    title: "Resultados Comprovados",
    description: "Abordagem focada em evidências científicas e em um histórico de sucesso, com centenas de pacientes retomando suas atividades.",
    highlight: false,
  },
];

export function Differentiators() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          {/* COPY AJUSTADA: Sai o "Nossos" */}
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">MINHA ABORDAGEM</h2>
          <p className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-800">
            Uma Visão Completa Para a Sua Saúde
          </p>
          {/* COPY AJUSTADA: Sai o "Combinamos" */}
          <p className="mt-6 text-lg text-muted-foreground">
            A mais alta tecnologia é combinada com um cuidado humano e personalizado para garantir não apenas o tratamento, mas o seu bem-estar completo.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className={`text-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                feature.highlight ? 'bg-brand-dark text-white' : 'bg-slate-50'
              }`}
            >
              <CardHeader className="items-center">
                <div className={`mb-4 w-16 h-16 rounded-full flex items-center justify-center ${
                  feature.highlight ? 'bg-white/10' : 'bg-primary-light'
                }`}>
                  {feature.icon}
                </div>
                <CardTitle className={feature.highlight ? 'text-white' : 'text-gray-800'}>
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={feature.highlight ? 'text-slate-300' : 'text-muted-foreground'}>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}