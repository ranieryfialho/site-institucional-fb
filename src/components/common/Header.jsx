import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#tratamentos', label: 'Tratamentos' },
  { href: '#reabilitacao', label: 'Reabilitação' },
  { href: '#cursos', label: 'Cursos & Mentoria' },
  { href: '#blog', label: 'Blog' },
  { href: '#contato', label: 'Contato' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-brand-dark/95 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <span className="font-bold text-lg text-white">Dr. Felipe Brasil</span>
        </a>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
           <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-brand-dark">Agendar Consulta</Button>
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="bg-transparent border-slate-700 text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-brand-dark text-white border-l-slate-800">
              <nav className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-primary-light">
                    {link.label}
                  </a>
                ))}
                 <Button className="w-full mt-4 bg-white text-brand-dark hover:bg-slate-200">Agendar Consulta</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}