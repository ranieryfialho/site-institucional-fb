import { CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/ui/button';

// A lista de valores foi mantida, pois descreve os pilares da prática.
const values = [
  {
    name: 'Atendimento Humanizado e Individual',
    description: 'Cada paciente é único. Dedico meu tempo para ouvir e entender suas necessidades específicas.' // Ajustado para primeira pessoa
  },
  {
    name: 'Tecnologia de Vanguarda',
    description: 'Investimento contínuo em equipamentos e técnicas para oferecer o que há de mais moderno na ortopedia.'
  },
  {
    name: 'Abordagem Multidisciplinar',
    description: 'Colaboração com fisioterapeutas e outros especialistas para garantir um plano de recuperação completo e eficaz.'
  }
];

export function InstituteTeaser() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 items-center">
          {/* Coluna da Imagem */}
          <div className="w-full h-80 lg:h-full bg-slate-200 rounded-2xl flex items-center justify-center">
            <p className="text-slate-500">Foto do Instituto / Equipe</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Minha Estrutura de Trabalho</h2>
            <p className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-800">
              Tecnologia e Cuidado no Instituto FOT
            </p>
            <p className="mt-6 text-lg text-muted-foreground">
              Para colocar minha filosofia em prática, conto com uma estrutura moderna e uma equipe alinhada ao cuidado centrado no paciente. Minha missão é proporcionar um retorno rápido e seguro às suas atividades, utilizando o melhor ambiente possível.
            </p>
            <dl className="mt-8 space-y-6">
              {values.map((value) => (
                <div key={value.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-800">
                    <CheckCircle2 className="absolute left-1 top-1 h-5 w-5 text-primary" aria-hidden="true" />
                    {value.name}
                  </dt>
                  <dd className="inline text-muted-foreground"> - {value.description}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
                <Button size="lg" className="bg-green-950 text-white hover:bg-green-900">Conheça a Estrutura</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}