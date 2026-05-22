import { ScrollReveal } from '../ui/ScrollReveal';
import { Database, Network, Terminal, BrainCircuit, Sparkles, Workflow, LayoutDashboard, PieChart, Share2 } from 'lucide-react';

type StackItem = {
  name: string;
  type: 'devicon' | 'lucide';
  class?: string;
  color?: string;
  icon?: any;
};

const STACK_GROUPS: { title: string, items: StackItem[] }[] = [
  {
    title: 'FRONT-END',
    items: [
      { name: 'React', type: 'devicon', class: 'devicon-react-original colored' },
      { name: 'Next.js', type: 'devicon', class: 'devicon-nextjs-plain', color: '#fff' },
      { name: 'TypeScript', type: 'devicon', class: 'devicon-typescript-plain colored' },
      { name: 'Vite', type: 'devicon', class: 'devicon-vitejs-plain colored' },
      { name: 'HTML5', type: 'devicon', class: 'devicon-html5-plain colored' },
      { name: 'CSS3', type: 'devicon', class: 'devicon-css3-plain colored' },
    ]
  },
  {
    title: 'BACK-END',
    items: [
      { name: 'Python', type: 'devicon', class: 'devicon-python-plain colored' },
      { name: 'Node.js', type: 'devicon', class: 'devicon-nodejs-plain colored' },
      { name: 'API REST', type: 'lucide', icon: Network, color: '#38bdf8' },
      { name: 'SQL', type: 'lucide', icon: Database, color: '#60a5fa' },
      { name: 'MongoDB', type: 'devicon', class: 'devicon-mongodb-plain colored' },
      { name: 'FastAPI', type: 'devicon', class: 'devicon-fastapi-plain colored' },
    ]
  },
  {
    title: 'DEVOPS & INFRA',
    items: [
      { name: 'Docker', type: 'devicon', class: 'devicon-docker-plain colored' },
      { name: 'Linux', type: 'devicon', class: 'devicon-linux-plain', color: '#fff' },
      { name: 'Git', type: 'devicon', class: 'devicon-git-plain colored' },
      { name: 'GitHub', type: 'devicon', class: 'devicon-github-original', color: '#fff' },
      { name: 'SSH', type: 'lucide', icon: Terminal, color: '#cbd5e1' },
      { name: 'Firebase', type: 'devicon', class: 'devicon-firebase-plain colored' },
    ]
  },
  {
    title: 'IA & PLATAFORMAS',
    items: [
      { name: 'OpenAI API', type: 'lucide', icon: Sparkles, color: '#10a37f' },
      { name: 'RAG', type: 'lucide', icon: BrainCircuit, color: '#818cf8' },
      { name: 'Power Automate', type: 'lucide', icon: Workflow, color: '#0066FF' },
      { name: 'Power Apps', type: 'lucide', icon: LayoutDashboard, color: '#742774' },
      { name: 'Power BI', type: 'lucide', icon: PieChart, color: '#F2C811' },
      { name: 'SharePoint', type: 'lucide', icon: Share2, color: '#038387' },
    ]
  }
];

export function Stack() {
  const renderIcon = (item: StackItem) => {
    if (item.type === 'devicon') {
      return (
        <i 
          className={`${item.class} text-[2.5rem] transition-transform duration-300 group-hover:scale-110 drop-shadow-md`} 
          style={item.color ? { color: item.color } : {}}
        />
      );
    }
    if (item.type === 'lucide' && item.icon) {
      const LucideIcon = item.icon;
      return <LucideIcon size={40} color={item.color} strokeWidth={1.5} className="transition-transform duration-300 group-hover:scale-110 drop-shadow-md" />;
    }
    return null;
  };

  return (
    <section id="stack" className="w-full max-w-[1200px] mx-auto px-6 py-24 lg:py-32">
      <ScrollReveal>
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-display font-bold text-texto-primario relative inline-block">
            Stack Tecnológico
            <span className="block w-1/3 h-1 bg-destaque-primario mt-0.5 mx-auto rounded-full" />
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
        {STACK_GROUPS.map((group, groupIndex) => (
          <div key={group.title} className="flex flex-col">
            <ScrollReveal delay={groupIndex * 100}>
              <h3 className="font-mono text-sm tracking-wider text-destaque-primario mb-6">
                {group.title}
              </h3>
            </ScrollReveal>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {group.items.map((item, itemIndex) => (
                <ScrollReveal 
                  key={item.name} 
                  delay={(groupIndex * 100) + (itemIndex * 50)}
                  animation="reveal-scale"
                  className="h-full"
                >
                  <div className="group h-[120px] sm:h-[130px] flex flex-col items-center justify-center p-3 sm:p-4 bg-bg-cartao border border-borda rounded-xl hover:border-destaque-primario hover:bg-destaque-brilho hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all duration-300">
                    
                    <div className="flex-1 flex items-center justify-center mb-2">
                      {renderIcon(item)}
                    </div>

                    <span className="text-[11px] sm:text-xs font-medium font-mono text-texto-secundario group-hover:text-texto-primario text-center w-full leading-tight px-1">
                      {item.name}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
