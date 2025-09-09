import { Instagram, Youtube, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white border-t border-slate-800">
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1: Logo e Descrição */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Dr. Felipe Brasil</h3>
            <p className="text-sm text-slate-400">Tratamentos modernos e minimamente invasivos para dor e articulações.</p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#tratamentos" className="text-slate-400 hover:text-white">Tratamentos</a></li>
              <li><a href="#cursos" className="text-slate-400 hover:text-white">Cursos</a></li>
              <li><a href="#blog" className="text-slate-400 hover:text-white">Blog</a></li>
              <li><a href="#contato" className="text-slate-400 hover:text-white">Contato</a></li>
            </ul>
          </div>

          {/* Coluna 3: Newsletter */}
          <div className="space-y-4 md:col-span-2">
            <h4 className="font-semibold text-white">Newsletter</h4>
            <p className="text-sm text-slate-400">Receba novidades sobre ortopedia e medicina regenerativa.</p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Seu melhor e-mail" className="bg-white border-slate-700 text-slate-900" />
              <Button type="submit" className="bg-white text-brand-dark hover:bg-slate-200">Inscrever</Button>
            </div>
          </div>
        </div>
      </Container>
      <div className="border-t border-slate-800">
        <Container className="py-6 text-center md:text-left md:flex justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Dr. Felipe Brasil. Todos os direitos reservados.</p>
          <p>Desenvolvido por RafiWeb</p>
        </Container>
      </div>
    </footer>
  );
}