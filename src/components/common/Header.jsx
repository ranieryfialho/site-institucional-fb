import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/tratamentos', label: 'Tratamentos' },
  { to: '/reabilitacao', label: 'Reabilitação' },
  { to: '/cursos-mentoria', label: 'Cursos e Mentoria' },
  { to: '/blog', label: 'Blog' },
  { to: '/contato', label: 'Contato' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const WHATSAPP_NUMBER = "5585981191467";
  const WHATSAPP_MESSAGE = "Olá, Dr. Felipe. Gostaria de agendar uma consulta.";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-brand-dark/95 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-lg text-white">Dr. Felipe Brasil</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="group px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              <span className="relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-white after:scale-x-0 after:origin-left group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-white/20 bg-transparent text-white font-medium hover:bg-white/5 hover:border-white/30 transition-all duration-300"
          >
            Agendar Consulta
          </a>
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
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium hover:text-primary-light"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center w-full mt-4 px-6 py-3 rounded-lg border-2 border-white bg-transparent text-white font-medium hover:bg-white hover:text-brand-dark transition-all duration-300"
                >
                  Agendar Consulta
                </a>

              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}