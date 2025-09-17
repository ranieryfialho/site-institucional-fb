import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Container } from './Container';

// Caminho para o seu logo
const LOGO_URL = '/images/logo-drFelipe.png';

const footerNavLinks = [
  { to: '/tratamentos', label: 'Tratamentos' },
  { to: '/cursos-mentoria', label: 'Cursos' },
  { to: '/blog', label: 'Blog' },
  { to: '/contato', label: 'Contato' },
];

const newsletterEndpoint = import.meta.env.VITE_FORMSPREE_NEWSLETTER_ENDPOINT;

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(newsletterEndpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <footer className="bg-brand-dark text-white border-t border-slate-800">
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-2">
              <img src={LOGO_URL} alt="Logo Dr. Felipe Brasil" className="h-8 w-auto" />
              <h3 className="text-xl font-bold text-white">Dr. Felipe Brasil</h3>
            </div>
            <p className="text-sm text-slate-400">Tratamentos modernos e minimamente invasivos para dor e articulações.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Navegação</h4>
            <ul className="space-y-2 text-sm">
              {footerNavLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-slate-400 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 md:col-span-2">
            <h4 className="font-semibold text-white">Newsletter</h4>
            <p className="text-sm text-slate-400">Receba novidades sobre ortopedia e medicina regenerativa.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex w-full max-w-sm items-start space-x-2">
              <div className="flex-grow">
                <Input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="bg-white border-slate-700 text-slate-900"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                 {status === 'success' && <p className="text-xs text-green-400 mt-2">Inscrição confirmada!</p>}
                 {status === 'error' && <p className="text-xs text-red-400 mt-2">Erro ao inscrever. Tente novamente.</p>}
              </div>
              <Button type="submit" className="bg-white text-brand-dark hover:bg-slate-200" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Aguarde...' : 'Inscrever'}
              </Button>
            </form>
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