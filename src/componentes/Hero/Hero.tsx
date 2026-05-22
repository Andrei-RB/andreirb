import { useMemo } from 'react';
import { Download, ArrowRight, Terminal } from 'lucide-react';
import { useTypewriter } from '../../hooks/useTypewriter';

const SUBTITULOS = [
  'Desenvolvedor Full-Stack',
  'Entusiasta de IA Aplicada',
  'Estagiário na Prefeitura de SP',
];

export function Hero() {
  const textoAtual = useTypewriter(SUBTITULOS);

  // Gerador de Partículas
  const particulas = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duracao: Math.random() * 8 + 4,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <section id="inicio" className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-[800px] h-[80vh] bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08)_0%,transparent_70%)] pointer-events-none z-0" />

      {/* Partículas flutuantes */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden hidden md:block">
        {particulas.map((p) => (
          <div
            key={p.id}
            className="absolute bg-destaque-primario rounded-full animate-pulse-slow"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duracao}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10 relative">
        
        {/* Esquerda: Texto */}
        <div className="flex flex-col items-start justify-center gap-4 pt-10 lg:pt-0">
          <p 
            className="text-destaque-secundario font-mono text-sm md:text-base hero-animate"
            style={{ animationDelay: '100ms' }}
          >
            Olá, eu sou
          </p>
          
          <h1 
            className="text-[clamp(2.8rem,8vw,6rem)] leading-[1.1] font-display font-bold text-texto-primario tracking-tight text-balance hero-animate"
            style={{ animationDelay: '250ms' }}
          >
            Andrei <br className="hidden md:block lg:hidden" />Rodrigues
          </h1>
          
          <div 
            className="h-8 md:h-10 text-[clamp(1.2rem,2.5vw,1.5rem)] font-mono text-destaque-primario font-medium hero-animate"
            style={{ animationDelay: '400ms' }}
          >
            &gt; {textoAtual}
            <span className="inline-block w-[10px] bg-destaque-primario ml-1 h-[1.1em] align-middle animate-pulse"></span>
          </div>
          
          <p 
            className="text-[clamp(0.95rem,1.5vw,1.05rem)] text-texto-secundario text-balance max-w-xl mt-4 hero-animate"
            style={{ animationDelay: '550ms' }}
          >
            Desenvolvedor em início de carreira, focado em aprender e construir soluções Full-Stack. Gosto de trabalhar no Back-End com Python e TypeScript, tenho grande interesse por integrações com IA, e crio interfaces Front-End com React.
          </p>
          
          <div 
            className="flex flex-wrap items-center gap-4 mt-8 hero-animate"
            style={{ animationDelay: '700ms' }}
          >
            <a 
              href="#projetos"
              className="group flex items-center justify-center gap-2 bg-destaque-primario text-bg-primario px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] active:scale-95"
            >
              Ver Projetos
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="/assets/cv-andrei-rodrigues.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-bg-cartao border border-borda text-texto-primario px-8 py-3.5 rounded-full font-medium transition-all duration-300 hover:border-destaque-primario hover:bg-destaque-brilho"
            >
              <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
              Baixar CV
            </a>
          </div>
        </div>

        {/* Direita: Elemento Visual (Floating Cards) */}
        <div className="hidden lg:flex relative h-[500px] items-center justify-center">
            
            {/* Card 1: Python */}
            <div 
              className="absolute top-12 -left-4 xl:left-0 w-[300px] glass-card rounded-xl p-4 shadow-2xl animate-float-1 hero-animate border hover:border-destaque-primario transition-colors"
              style={{ animationDelay: '700ms' }}
            >
              <div className="flex gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-80" />
              </div>
              <pre className="font-mono text-xs text-blue-300 leading-relaxed">
                <span className="text-[#c678dd]">def</span> <span className="text-[#61afef]">analyze_data</span>(dataset):<br/>
                &nbsp;&nbsp;model = RAGContext(temp=<span className="text-[#d19a66]">0.3</span>)<br/>
                &nbsp;&nbsp;<span className="text-[#c678dd]">return</span> model.get_insights()
              </pre>
            </div>

            {/* Card 2: TypeScript */}
            <div 
              className="absolute top-[180px] -right-8 xl:right-0 w-[320px] glass-card rounded-xl p-4 shadow-2xl z-10 animate-float-2 hero-animate border hover:border-destaque-primario transition-colors"
              style={{ animationDelay: '900ms' }}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-80" />
                </div>
                <div className="text-[10px] text-texto-mutado font-mono flex items-center gap-1">
                  <Terminal size={10} /> types.ts
                </div>
              </div>
              <pre className="font-mono text-[11.5px] text-gray-300 leading-relaxed">
                <span className="text-[#c678dd]">interface</span> <span className="text-[#e5c07b]">AIAssistant</span> {'{'}<br/>
                &nbsp;&nbsp;role: <span className="text-[#98c379]">'system'</span> | <span className="text-[#98c379]">'user'</span>;<br/>
                &nbsp;&nbsp;content: <span className="text-[#e5c07b]">string</span>;<br/>
                &nbsp;&nbsp;stream?: <span className="text-[#e5c07b]">boolean</span>;<br/>
                {'}'}
              </pre>
            </div>

            {/* Card 3: RAG API */}
            <div 
              className="absolute bottom-6 left-8 xl:left-12 w-[280px] glass-card rounded-xl p-4 shadow-2xl animate-float-3 hero-animate border hover:border-destaque-primario transition-colors"
              style={{ animationDelay: '1100ms' }}
            >
              <div className="flex gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-80" />
              </div>
              <pre className="font-mono text-[11px] text-gray-400 leading-relaxed">
                {'{'}<br/>
                &nbsp;&nbsp;<span className="text-destaque-primario">"query"</span>: <span className="text-[#98c379]">"Como otimizar?"</span>,<br/>
                &nbsp;&nbsp;<span className="text-destaque-primario">"top_k"</span>: <span className="text-[#d19a66]">5</span>,<br/>
                &nbsp;&nbsp;<span className="text-destaque-primario">"vector_db"</span>: <span className="text-[#98c379]">"milvus_prod"</span><br/>
                {'}'}
              </pre>
            </div>
            
        </div>
      </div>
    </section>
  );
}
