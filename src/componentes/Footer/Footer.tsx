import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full max-w-[1200px] mx-auto px-6 py-10 mt-10 border-t border-borda flex flex-col md:flex-row items-center justify-between gap-6">
      
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-texto-secundario text-sm mb-1">
          Desenvolvido por Andrei Rodrigues · {new Date().getFullYear()}
        </p>
      </div>

      <div className="flex items-center gap-5">
        <a 
          href="https://www.linkedin.com/in/andreirdebarros" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-texto-mutado hover:text-destaque-primario transition-colors p-2"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a 
          href="https://github.com/Andrei-RB" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-texto-mutado hover:text-destaque-primario transition-colors p-2"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a 
          href="mailto:andreirdebarros.contato@gmail.com" 
          className="text-texto-mutado hover:text-destaque-primario transition-colors p-2"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
      </div>
      
    </footer>
  );
}
