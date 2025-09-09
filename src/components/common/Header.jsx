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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-brand-dark/95 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-lg text-white">Dr. Felipe Brasil</span>
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link
            to="/contato"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-white/20 bg-transparent text-white font-medium hover:bg-white/5 hover:border-white/30 transition-all duration-300"
          >
            Agendar Consulta
          </Link>
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
                <Link
                  to="/contato"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center w-full mt-4 px-6 py-3 rounded-lg border-2 border-white bg-transparent text-white font-medium hover:bg-white hover:border-white transition-all duration-300"
                >
                  Agendar Consulta
                </Link>

              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}