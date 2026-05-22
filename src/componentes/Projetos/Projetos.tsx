import { ScrollReveal } from '../ui/ScrollReveal';
import { ExternalLink, Github } from 'lucide-react';

const PROJETOS = [
  {
    nome: 'EasyDownload',
    linguagem: 'Python',
    descricao: 'Baixe seus vídeos e músicas de maneira rápida e fácil! Uma ferramenta prática construída para facilitar o download de mídias.',
    tags: ['#python', '#download', '#utilitário', '#automação'],
    icone: '⬇️',
    link: 'https://github.com/Andrei-RB/EasyDownload',
    destaque: true
  },
  {
    nome: 'Legendas Automáticas',
    linguagem: 'Python',
    descricao: 'Ferramenta Python para geração automática de legendas em vídeos, aplicando técnicas de processamento de áudio e transcrição.',
    tags: ['#python', '#automação', '#transcrição', '#audio'],
    icone: '💬',
    link: 'https://github.com/Andrei-RB/LegendasAutomaticas',
    destaque: true
  },
  {
    nome: 'Crie Seu Grafo',
    linguagem: 'JavaScript',
    descricao: 'Visualizador interativo de grafos. O usuário cria vértices e arestas, define origem e destino, e o sistema executa e exibe Busca em Largura (BFS) e Busca em Profundidade (DFS) visualmente.',
    tags: ['#algoritmos', '#grafos', '#visualização', '#BFS', '#DFS'],
    icone: '🕸️',
    link: 'https://github.com/Andrei-RB/Crie-Seu-Grafo',
    destaque: false
  },
  {
    nome: 'Unipet',
    linguagem: 'Python',
    descricao: 'Sistema desenvolvido em Python para gestão de uma clínica veterinária, com funcionalidades de cadastro, agendamento e controle de consultas.',
    tags: ['#python', '#sistema', '#gestão', '#backend'],
    icone: '🐾',
    link: 'https://github.com/Andrei-RB/Unipet',
    destaque: false
  },
  {
    nome: 'Portfólio de IA',
    linguagem: 'TypeScript',
    descricao: 'Coleção de projetos desenvolvidos na disciplina de Fundamentos de Inteligência Artificial, explorando algoritmos de aprendizado de máquina e modelos preditivos.',
    tags: ['#typescript', '#machine-learning', '#IA', '#algoritmos'],
    icone: '🧠',
    link: 'https://github.com/Andrei-RB/portfolio-andrei-rodrigues-de-barros',
    destaque: false
  },
  {
    nome: 'QR Code Clone',
    linguagem: 'TypeScript',
    descricao: 'Clone funcional de um gerador de QR Code com interface responsiva, desenvolvido em TypeScript com foco em fidelidade ao design original e experiência do usuário.',
    tags: ['#typescript', '#frontend', '#clone', '#UI'],
    icone: '📱',
    link: 'https://github.com/Andrei-RB/QR-Code-Clone',
    destaque: false
  },
  {
    nome: 'Página ODS',
    linguagem: 'HTML/CSS',
    descricao: 'Página web que apresenta um projeto de robótica para coleta de lixo inteligente e autônoma, alinhado aos Objetivos de Desenvolvimento Sustentável (ODS) da ONU.',
    tags: ['#robótica', '#sustentabilidade', '#ODS', '#frontend'],
    icone: '🍃',
    link: 'https://github.com/Andrei-RB/pagina_ods',
    destaque: false
  }
];

export function Projetos() {
  return (
    <section id="projetos" className="w-full max-w-[1200px] mx-auto px-6 py-24 lg:py-32">
      <div className="flex flex-col items-center lg:items-start mb-16">
        <ScrollReveal>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-display font-bold text-texto-primario relative inline-block">
            Projetos
            <span className="block w-1/3 h-1 bg-destaque-primario mt-0.5 rounded-full" />
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-texto-secundario mt-2 font-mono text-sm uppercase tracking-widest">
            Seleção de trabalhos do GitHub
          </p>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {PROJETOS.map((projeto, index) => (
          <ScrollReveal key={projeto.nome} delay={index * 100} className="h-full">
            <div className={`group h-full flex flex-col bg-bg-cartao border rounded-2xl p-6 lg:p-8 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden ${
              projeto.destaque 
                ? 'border-[#FFD700]/40 shadow-[0_0_15px_rgba(255,215,0,0.15)] hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:bg-[#1a1c29]' 
                : 'border-borda hover:border-t-destaque-primario hover:shadow-[0_10px_30px_rgba(56,189,248,0.1)] hover:bg-[#1a1c29]'
            }`}>
              
              {/* Highlight superior no hover */}
              <div className={`absolute top-0 left-0 w-full h-[3px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                projeto.destaque ? 'bg-[#FFD700]' : 'bg-destaque-primario'
              }`} />

              <div className="flex justify-between items-start mb-6">
                <span className={`text-4xl bg-bg-primario w-14 h-14 rounded-full flex items-center justify-center border transition-colors ${
                  projeto.destaque ? 'border-[#FFD700]/30 group-hover:border-[#FFD700]/60 shadow-[0_0_10px_rgba(255,215,0,0.2)]' : 'border-borda group-hover:border-destaque-primario/30'
                }`}>
                  {projeto.icone}
                </span>
                <div className="flex flex-col items-end gap-2">
                  {projeto.destaque && (
                    <span className="px-3 py-1 bg-[#FFD700]/10 text-[#FFD700] border border-[#FFD700]/30 rounded-full font-mono text-xs font-semibold flex items-center gap-1 shadow-[0_0_10px_rgba(255,215,0,0.2)]">
                      ⭐ Projeto Completo
                    </span>
                  )}
                  <span className={`px-3 py-1 rounded-full font-mono text-xs font-semibold border ${
                    projeto.destaque 
                      ? 'bg-[#FFD700]/5 text-[#FFD700]/80 border-[#FFD700]/20'
                      : 'bg-destaque-primario/10 text-destaque-primario border-destaque-primario/20'
                  }`}>
                    {projeto.linguagem}
                  </span>
                </div>
              </div>

              <h3 className={`text-2xl font-display font-bold mb-3 transition-colors ${
                projeto.destaque ? 'text-texto-primario group-hover:text-[#FFD700]' : 'text-texto-primario group-hover:text-destaque-primario'
              }`}>
                {projeto.nome}
              </h3>
              
              <p className="text-texto-secundario line-clamp-3 text-[15px] leading-relaxed flex-grow">
                {projeto.descricao}
              </p>

              <div className="flex flex-wrap gap-2 mt-6 mb-8">
                {projeto.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-texto-mutado group-hover:text-texto-secundario transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-5 border-t border-borda flex items-center">
                <a 
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                    projeto.destaque ? 'text-texto-primario hover:text-[#FFD700]' : 'text-texto-primario hover:text-destaque-primario'
                  }`}
                >
                  <Github size={18} />
                  Ver no GitHub
                  <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
