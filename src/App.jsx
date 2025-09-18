import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';

// Lazy loading para todas as páginas do site
const HomePage = lazy(() => import('./pages/HomePage'));
const SobrePage = lazy(() => import('./pages/SobrePage'));
const TratamentosPage = lazy(() => import('./pages/TratamentosPage'));
const ReabilitacaoPage = lazy(() => import('./pages/ReabilitacaoPage'));
const CursosPage = lazy(() => import('./pages/CursosPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const ContatoPage = lazy(() => import('./pages/ContatoPage'));

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Adiciona o componente para rolar a página para o topo */}
      <ScrollToTop />

      <Header />
      <main className="flex-grow">
        {/* Adiciona o Suspense para gerenciar o carregamento das páginas */}
        <Suspense fallback={<div className="flex justify-center items-center h-screen">Carregando...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/tratamentos" element={<TratamentosPage />} />
            <Route path="/reabilitacao" element={<ReabilitacaoPage />} />
            <Route path="/cursos-mentoria" element={<CursosPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contato" element={<ContatoPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;