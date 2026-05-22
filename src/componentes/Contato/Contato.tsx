import { ScrollReveal } from '../ui/ScrollReveal';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

export function Contato() {
  return (
    <section id="contato" className="w-full max-w-[1200px] mx-auto px-6 py-24 lg:py-32">
      <ScrollReveal>
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-display font-bold text-texto-primario relative inline-block mb-6">
            Vamos conversar?
            <span className="block w-1/3 h-1 bg-destaque-primario mt-0.5 mx-auto rounded-full" />
          </h2>
          <p className="text-[clamp(0.95rem,1.5vw,1.05rem)] text-texto-secundario max-w-2xl leading-relaxed">
            Estou aberto a oportunidades de estágio, projetos freelance e conexões profissionais.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-stretch">
        <ScrollReveal delay={0} className="h-full">
          <a 
            href="mailto:andreirdebarros.contato@gmail.com"
            className="group h-full flex flex-col items-center p-8 bg-bg-cartao border border-borda rounded-2xl hover:border-destaque-primario hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-bg-primario border border-borda rounded-full flex items-center justify-center mb-6 text-texto-secundario group-hover:text-destaque-primario group-hover:border-destaque-primario transition-colors shrink-0">
              <Mail size={24} />
            </div>
            <h3 className="font-display font-bold text-xl text-texto-primario mb-2">Email</h3>
            <p className="text-sm font-mono text-texto-mutado mb-6 text-center truncate w-full">andreirdebarros.contato<br/>@gmail.com</p>
            <span className="flex items-center gap-2 text-sm font-semibold text-destaque-primario group-hover:underline mt-auto pt-4">
              Enviar email <ExternalLink size={14} />
            </span>
          </a>
        </ScrollReveal>

        <ScrollReveal delay={100} className="h-full">
          <a 
            href="https://www.linkedin.com/in/andreirdebarros"
            target="_blank"
            rel="noopener noreferrer"
            className="group h-full flex flex-col items-center p-8 bg-bg-cartao border border-borda rounded-2xl hover:border-destaque-primario hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-bg-primario border border-borda rounded-full flex items-center justify-center mb-6 text-texto-secundario group-hover:text-[#0077b5] group-hover:border-[#0077b5] transition-colors shrink-0">
              <i className="devicon-linkedin-plain text-2xl" />
            </div>
            <h3 className="font-display font-bold text-xl text-texto-primario mb-2">LinkedIn</h3>
            <p className="text-sm font-mono text-texto-mutado mb-6 text-center">/in/andreirdebarros</p>
            <span className="flex items-center gap-2 text-sm font-semibold text-destaque-primario group-hover:underline mt-auto pt-4">
              Ver perfil <ExternalLink size={14} />
            </span>
          </a>
        </ScrollReveal>

        <ScrollReveal delay={200} className="h-full">
          <a 
            href="https://github.com/Andrei-RB"
            target="_blank"
            rel="noopener noreferrer"
            className="group h-full flex flex-col items-center p-8 bg-bg-cartao border border-borda rounded-2xl hover:border-destaque-primario hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-bg-primario border border-borda rounded-full flex items-center justify-center mb-6 text-texto-secundario group-hover:text-texto-primario group-hover:border-texto-primario transition-colors shrink-0">
              <Github size={24} />
            </div>
            <h3 className="font-display font-bold text-xl text-texto-primario mb-2">GitHub</h3>
            <p className="text-sm font-mono text-texto-mutado mb-6 text-center">/Andrei-RB</p>
            <span className="flex items-center gap-2 text-sm font-semibold text-destaque-primario group-hover:underline mt-auto pt-4">
              Ver repositórios <ExternalLink size={14} />
            </span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
