import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Hero } from './components/home/Hero';
import { Differentiators } from './components/home/Differentiators';
import { Testimonials } from './components/home/Testimonials';
import { InstituteTeaser } from './components/home/InstituteTeaser';
import { BlogTeaser } from './components/home/BlogTeaser';
import { Faq } from './components/home/Faq'; // <-- Importe

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Differentiators />
        <Testimonials />
        <InstituteTeaser />
        <BlogTeaser />
        <Faq /> {/* <-- Adicione aqui */}
      </main>
      <Footer />
    </div>
  );
}

export default App;