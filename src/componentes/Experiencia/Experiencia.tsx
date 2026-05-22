import { ScrollReveal } from '../ui/ScrollReveal';

export function Experiencia() {
  return (
    <section id="experiencia" className="w-full max-w-[1200px] mx-auto px-6 py-24 lg:py-32">
      <div className="flex flex-col items-center lg:items-start mb-16">
        <ScrollReveal>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-display font-bold text-texto-primario relative inline-block">
            Experiência
            <span className="block w-1/3 h-1 bg-destaque-primario mt-0.5 rounded-full" />
          </h2>
        </ScrollReveal>
      </div>

      <div className="relative border-l border-destaque-primario/30 ml-4 md:ml-6 space-y-12 pb-12">
        {/* Item de Experiência: Prefeitura */}
        <ScrollReveal animation="reveal-left">
          <div className="relative pl-8 md:pl-12">
            {/* Ponto conector na timeline */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-bg-primario border-2 border-destaque-primario" />
            
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="font-mono text-xs text-destaque-secundario tracking-widest font-semibold uppercase">
                JUNHO 2024 — PRESENTE
              </span>
              <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-[10px] font-mono font-bold uppercase tracking-wide">
                Cargo Atual
              </span>
            </div>
            
            <h3 className="text-2xl font-display font-bold text-texto-primario mb-1">
              Estagiário Desenvolvedor Full-Stack
            </h3>
            
            <h4 className="text-lg font-medium text-texto-secundario mb-6 flex items-center gap-2">
              Prefeitura de São Paulo
              <span className="w-1 h-1 rounded-full bg-texto-mutado" />
              <span className="text-sm">São Paulo, SP</span>
            </h4>
            
            <div className="space-y-4 text-[0.95rem] text-texto-secundario leading-relaxed font-corpo max-w-3xl">
              <p className="flex gap-4">
                <span className="text-destaque-primario opacity-60">▹</span>
                <span>Desenvolvimento e manutenção de sistemas internos para digitalização e automação de procedimentos administrativos</span>
              </p>
              <p className="flex gap-4">
                <span className="text-destaque-primario opacity-60">▹</span>
                <span>Stack: Python, JavaScript/TypeScript, React, Vite, Next.js — interfaces responsivas, APIs REST e arquiteturas escaláveis</span>
              </p>
              <p className="flex gap-4">
                <span className="text-destaque-primario opacity-60">▹</span>
                <span>IA Aplicada: desenvolvimento de chatbots com RAG (Retrieval-Augmented Generation), integrando modelos da OpenAI com bases de dados vetorizadas para respostas contextualizadas e precisas</span>
              </p>
              <p className="flex gap-4">
                <span className="text-destaque-primario opacity-60">▹</span>
                <span>Infraestrutura Linux (Ubuntu): administração de servidores via SSH, deploy de aplicações e serviços em nuvem</span>
              </p>
              <p className="flex gap-4">
                <span className="text-destaque-primario opacity-60">▹</span>
                <span>Microsoft 365 & Power Platform: Power Automate, Power Apps, Power BI e SharePoint para automação de fluxos internos</span>
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Item de Formação */}
        <ScrollReveal animation="reveal-left" delay={200}>
          <div className="relative pl-8 md:pl-12 mt-16">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-bg-primario border-2 border-texto-mutado" />
            
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="font-mono text-xs text-destaque-secundario tracking-widest font-semibold uppercase">
                FEVEREIRO 2023 — DEZEMBRO 2026
              </span>
              <span className="px-2 py-0.5 rounded-full bg-texto-mutado/10 text-texto-secundario border border-texto-mutado/20 text-[10px] font-mono font-bold uppercase tracking-wide">
                Previsto
              </span>
            </div>
            
            <h3 className="text-2xl font-display font-bold text-texto-primario mb-1">
              Bacharelado em Ciência da Computação
            </h3>
            
            <h4 className="text-lg font-medium text-texto-secundario mb-4 flex items-center gap-2">
              Universidade Cidade de São Paulo (UNICID)
              <span className="w-1 h-1 rounded-full bg-texto-mutado" />
              <span className="text-sm">São Paulo, SP</span>
            </h4>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
