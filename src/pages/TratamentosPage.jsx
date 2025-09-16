import { Container } from "@/components/common/Container";
import { PageTransition } from "@/components/common/PageTransition";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { useState } from "react";
import treatmentsData from '@/data/treatments.json';

const WHATSAPP_NUMBER = '5585981191467'

export function TratamentosPage() {
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const openModal = (treatment) => {
    setSelectedTreatment(treatment);
  };

  const closeModal = () => {
    setSelectedTreatment(null);
  };

   const handleWhatsAppClick = (treatmentName) => {
    const message = `Olá, Dr. Felipe. Gostaria de saber mais sobre o tratamento: *${treatmentName}*.`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <PageTransition>
      <div className="bg-white">
        {/* Header da Página */}
        <div className="bg-slate-50 py-12 sm:py-16">
          <Container className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-800">Tratamentos Oferecidos</h1>
            <p className="mt-6 text-lg max-w-3xl mx-auto text-muted-foreground">
              Soluções modernas e personalizadas para o tratamento da dor, lesões e doenças ortopédicas, com foco na sua recuperação e qualidade de vida.
            </p>
          </Container>
        </div>

        {/* Seção de Abas com os Tratamentos */}
        <Container className="pt-16 sm:pt-20 pb-20 sm:pb-28 relative">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {category.treatments.map((treatment) => (
                    <Card key={treatment.name} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-auto">
                      {/* Imagem do Tratamento */}
                      <div className="relative h-[30rem] bg-gradient-to-br from-gray-100 to-gray-200">
                        {treatment.image && (
                          <img
                            src={treatment.image}
                            alt={treatment.name}
                            className="w-full h-full object-cover"
                          />
                        )}
                        {/* Placeholder para imagem se não houver */}
                        {!treatment.image && (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
                              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>

                      <CardContent className="p-4 flex-1 flex flex-col">
                        <div className="flex-1">
                          <CardHeader className="p-0 mb-3">
                            <CardTitle className="text-lg font-bold text-gray-800 mb-2 leading-tight line-clamp-2">
                              {treatment.name}
                            </CardTitle>
                            <CardDescription className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                              {treatment.description}
                            </CardDescription>
                          </CardHeader>

                          {/* Badges de Benefícios */}
                          {treatment.benefits && (
                            <div className="flex flex-wrap gap-1 mb-3">
                              {treatment.benefits.slice(0, 2).map((benefit, index) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs"
                                >
                                  {benefit}
                                </Badge>
                              ))}
                            </div>
                          )}

                          {/* Informações Adicionais */}
                          {(treatment.duration || treatment.recovery) && (
                            <div className="flex justify-between text-xs text-gray-500 mb-4">
                              {treatment.duration && (
                                <span>⏱️ {treatment.duration}</span>
                              )}
                              {treatment.recovery && (
                                <span>🔄 {treatment.recovery}</span>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Botões de Ação */}
                        <div className="flex flex-col gap-2 mt-4">
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-sm py-2"
                            onClick={() => openModal(treatment)}
                          >
                            Saiba mais
                          </Button>
                          <Button
                            size="sm"
                            className="bg-primary text-white hover:bg-green-900 text-sm font-semibold py-2"
                            onClick={() => handleWhatsAppClick(treatment.name)}
                          >
                            Quero este tratamento
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Container>

        {/* Modal de Detalhes do Tratamento */}
        {selectedTreatment && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white border border-gray-200 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
              {/* Header do Modal */}
              <div className="relative p-6 border-b border-gray-200">
                <button
                  onClick={closeModal}
                  className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-5 w-5 text-gray-600" />
                </button>
                <h2 className="text-2xl font-bold text-gray-800 pr-10">
                  {selectedTreatment.name}
                </h2>
              </div>

              <div className="p-6 space-y-6">
                {/* Imagem do Procedimento */}
                <div className="relative h-64 sm:h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                  {selectedTreatment.modalImage && (
                    <img
                      src={selectedTreatment.modalImage}
                      alt={selectedTreatment.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {!selectedTreatment.modalImage && selectedTreatment.image && (
                    <img
                      src={selectedTreatment.image}
                      alt={selectedTreatment.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {!selectedTreatment.modalImage && !selectedTreatment.image && (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                      </div>
                    </div>
                  )}
                  {selectedTreatment.modalSubtitle && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                      <p className="text-sm text-white">{selectedTreatment.modalSubtitle}</p>
                    </div>
                  )}
                </div>

                {/* Descrição Detalhada */}
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedTreatment.detailedDescription || selectedTreatment.description}
                  </p>
                </div>

                {/* Lista de Benefícios */}
                {selectedTreatment.detailedBenefits && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Benefícios:</h4>
                    <ul className="space-y-2">
                      {selectedTreatment.detailedBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <span className="text-primary mt-1">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Como Funciona */}
                {selectedTreatment.howItWorks && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Como funciona:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedTreatment.howItWorks}
                    </p>
                  </div>
                )}

                {/* Informações Adicionais */}
                {(selectedTreatment.duration || selectedTreatment.recovery || selectedTreatment.location) && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-slate-50 rounded-lg border border-gray-200">
                    {selectedTreatment.duration && (
                      <div className="text-center">
                        <p className="text-gray-500 text-sm">Duração</p>
                        <p className="font-semibold text-gray-800">{selectedTreatment.duration}</p>
                      </div>
                    )}
                    {selectedTreatment.recovery && (
                      <div className="text-center">
                        <p className="text-gray-500 text-sm">Recuperação</p>
                        <p className="font-semibold text-gray-800">{selectedTreatment.recovery}</p>
                      </div>
                    )}
                    {selectedTreatment.location && (
                      <div className="text-center">
                        <p className="text-gray-500 text-sm">Local</p>
                        <p className="font-semibold text-gray-800">{selectedTreatment.location}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Botão de Ação */}
                <div className="pt-4">
                  <Button
                    className="w-full bg-primary text-white hover:bg-green-900 py-3"
                    onClick={() => handleWhatsAppClick(selectedTreatment.name)}
                  >
                    Quero este tratamento
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
}