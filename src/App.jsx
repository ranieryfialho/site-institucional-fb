import { Routes, Route } from 'react-router-dom';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { HomePage } from './pages/HomePage';
import { SobrePage } from './pages/SobrePage';
import { TratamentosPage } from './pages/TratamentosPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/tratamentos" element={<TratamentosPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;