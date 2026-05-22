import { Navegacao } from './componentes/Navegacao/Navegacao';
import { CursorPersonalizado } from './componentes/Cursor/CursorPersonalizado';
import { Hero } from './componentes/Hero/Hero';
import { Sobre } from './componentes/Sobre/Sobre';
import { Stack } from './componentes/Stack/Stack';
import { Projetos } from './componentes/Projetos/Projetos';
import { Experiencia } from './componentes/Experiencia/Experiencia';
import { Contato } from './componentes/Contato/Contato';
import { Footer } from './componentes/Footer/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-bg-primario text-texto-primario relative selection:bg-destaque-primario selection:text-white overflow-x-hidden">
      <CursorPersonalizado />
      <Navegacao />
      
      <main className="w-full">
        <Hero />
        <Sobre />
        <Stack />
        <Projetos />
        <Experiencia />
        <Contato />
      </main>

      <Footer />
    </div>
  );
}
