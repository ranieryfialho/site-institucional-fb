import { Container } from "@/components/common/Container";
import { FadeIn } from "@/components/common/FadeIn";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import treatmentsData from '@/data/treatments.json';

export function TratamentosPage() {
  return (
    <div className="bg-white">
      {/* Header da Página */}
      <FadeIn>
        <div className="bg-slate-50 py-16 sm:py-24">
          <Container className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-800">Tratamentos Oferecidos</h1>
            <p className="mt-6 text-lg max-w-3xl mx-auto text-muted-foreground">
              Soluções modernas e personalizadas para o tratamento da dor, lesões e doenças ortopédicas, com foco na sua recuperação e qualidade de vida.
            </p>
          </Container>
        </div>
      </FadeIn>

      {/* Seção de Abas com os Tratamentos */}
      <Container className="py-20 sm:py-28">
        <FadeIn delay={0.2}>
          <Tabs defaultValue={treatmentsData.categories[0].id} className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-auto">
              {treatmentsData.categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="py-3 text-base">
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {treatmentsData.categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.treatments.map((treatment) => (
                    <Card key={treatment.name}>
                      <CardHeader>
                        <CardTitle>{treatment.name}</CardTitle>
                        <CardDescription className="pt-2">{treatment.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </FadeIn>
      </Container>
    </div>
  );
}