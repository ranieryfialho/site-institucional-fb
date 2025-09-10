import { useState } from 'react';
import { Container } from "@/components/common/Container";
import { PageTransition } from "@/components/common/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContatoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
    alert("Mensagem enviada com sucesso! (Simulação)");
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <PageTransition>
      <div className="bg-white">
        <div className="bg-slate-50 py-16 sm:py-24">
          <Container className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-800">Contato e Agendamento</h1>
            <p className="mt-6 text-lg max-w-3xl mx-auto text-muted-foreground">
              Estou à disposição para avaliar seu caso. Utilize um dos canais abaixo ou envie uma mensagem pelo formulário.
            </p>
          </Container>
        </div>

        <Container className="py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800">Entre em Contato</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Minha equipe e eu estamos prontos para te atender.
                </p>
              </div>
              <div className="space-y-4 text-lg">
                <a href="tel:+5585994326619" className="flex items-center gap-4 text-gray-800 hover:text-primary">
                  <Phone />
                  <span>(85) 98119-1467</span>
                </a>
                <a href="mailto:contato@drfelipebrasil.com" className="flex items-center gap-4 text-gray-800 hover:text-primary">
                  <Mail />
                  <span>contato@drfelipebrasil.com</span>
                </a>
                <div className="flex items-start gap-4 text-gray-800">
                  <MapPin className="mt-1 flex-shrink-0" />
                  <span>Rua Felipe Nery, 1012 - Guararapes, Fortaleza - CE, 60810-310</span>
                </div>
              </div>
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.282924190184!2d-38.48785842525501!3d-3.748203544414341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74619a9103c8b%3A0x1d904324f0ffb578!2sR.%20Felipe%20Nery%2C%201012%20-%20Guararapes%2C%20Fortaleza%20-%20CE%2C%2060810-310!5e0!3m2!1spt-BR!2sbr!4v1694220000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-800">Envie uma Mensagem</h2>
              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input type="text" id="name" placeholder="Seu nome" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" placeholder="seu@email.com" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="phone">Telefone / WhatsApp</Label>
                  <Input type="tel" id="phone" placeholder="(99) 99999-9999" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea id="message" placeholder="Escreva sua mensagem aqui..." value={formData.message} onChange={handleChange} required />
                </div>
                <Button type="submit" size="lg" className="w-full">Enviar Mensagem</Button>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </PageTransition>
  );
}