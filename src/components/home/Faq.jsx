import { Container } from '@/components/common/Container';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqData from '@/data/faq.json';

export function Faq() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
          {/* Coluna de Texto */}
          <div className="lg:pr-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Perguntas Frequentes</h2>
            <p className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-800">
              Ainda tem dúvidas?
            </p>
            <p className="mt-6 text-lg text-muted-foreground">
              Respostas rápidas para as perguntas mais comuns. Se sua dúvida não estiver aqui, não hesite em entrar em contato conosco.
            </p>
          </div>

          {/* Coluna do Acordeão */}
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="text-left text-lg hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
}