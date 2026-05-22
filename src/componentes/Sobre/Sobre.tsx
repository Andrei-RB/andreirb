import { ScrollReveal } from '../ui/ScrollReveal';

export function Sobre() {
  return (
    <section id="sobre" className="w-full max-w-[1200px] mx-auto px-6 py-24 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Esquerda: Foto */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <ScrollReveal animation="reveal-scale">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              {/* O Gradiente que gira */}
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(var(--color-destaque-primario),var(--color-destaque-secundario),var(--color-destaque-primario))] animate-[spin_8s_linear_infinite] opacity-70 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]" />
              
              {/* O contêiner da foto/placeholder (cobre o meio do gradiente criando a borda) */}
              <div className="absolute inset-1 bg-bg-cartao rounded-full flex items-center justify-center overflow-hidden border border-borda">
                
                {/* Substitua este placeholder pela sua foto: <img src="foto.jpg" alt="Andrei Rodrigues" className="w-full h-full object-cover"> */}
                <span className="font-display font-bold text-6xl text-texto-secundario group-hover:text-destaque-primario transition-colors duration-500">
                  AR
                </span>

              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Direita: Texto */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <ScrollReveal>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-display font-bold text-texto-primario relative inline-block">
              Sobre Mim
              <span className="block w-1/3 h-1 bg-destaque-primario mt-2 rounded-full" />
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="text-[clamp(0.95rem,1.5vw,1.05rem)] text-texto-secundario leading-relaxed space-y-4">
              <p>
                Desenvolvedor Full-Stack com +1 ano de experiência prática no setor 
                público, construindo sistemas que impactam processos administrativos 
                reais na Prefeitura de São Paulo.
              </p>
              <p>
                Trabalho diariamente com Python e TypeScript no back-end, React e 
                Next.js no front-end, e tenho experiência aplicada com Inteligência 
                Artificial — desenvolvendo chatbots com RAG (Retrieval-Augmented 
                Generation) integrados a modelos da OpenAI.
              </p>
              <p>
                Formando em Ciência da Computação pela UNICID (2023–2026), com 
                foco em evoluir continuamente em desenvolvimento Full-Stack e soluções 
                com I.A.
              </p>
            </div>
          </ScrollReveal>

          {/* Badges */}
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap gap-3 mt-4">
              {[
                { icon: '🏛️', text: 'Prefeitura de São Paulo' },
                { icon: '🤖', text: 'IA & RAG' },
                { icon: '🔒', text: 'OWASP · NIST CSF' },
                { icon: '🐧', text: 'Linux · Docker' },
                { icon: '🎓', text: 'Ciência da Computação' }
              ].map((badge, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 bg-bg-cartao border border-borda rounded-full text-sm font-medium text-texto-primario hover:border-destaque-primario hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(56,189,248,0.1)] transition-all duration-300 cursor-default"
                >
                  <span>{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
