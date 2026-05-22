import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navegacao() {
  const [rolou, setRolou] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => {
      setRolou(window.scrollY > 50);
    };
    window.addEventListener('scroll', aoRolar, { passive: true });
    // Garantir estado inicial
    aoRolar();
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  // Bloqueio de scroll no body quando o menu está aberto
  useEffect(() => {
    if (menuAberto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuAberto]);

  const links = [
    { nome: 'Sobre', href: '#sobre' },
    { nome: 'Stack', href: '#stack' },
    { nome: 'Projetos', href: '#projetos' },
    { nome: 'Experiência', href: '#experiencia' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        rolou 
          ? 'h-16 bg-bg-primario/85 backdrop-blur-xl border-b border-borda' 
          : 'h-20 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="w-full max-w-[1200px] h-full mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#inicio" className="text-xl font-mono relative group z-50">
          <span className="font-bold text-texto-primario">&lt;AR</span>
          <span className="text-destaque-primario font-bold">/</span>
          <span className="font-bold text-texto-primario">&gt;</span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.nome}
              href={link.href}
              className="font-corpo text-[0.95rem] font-medium text-texto-secundario hover:text-texto-primario transition-colors relative group"
            >
              {link.nome}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-destaque-primario transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contato"
            className="px-6 py-2.5 rounded-full border border-destaque-primario text-destaque-primario font-medium text-[0.95rem] hover:bg-destaque-primario hover:text-bg-primario transition-all duration-300 shadow-[0_0_0_0_rgba(56,189,248,0)] hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] ml-2"
          >
            Contato
          </a>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden p-2 text-texto-secundario hover:text-texto-primario z-50 relative"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
        >
          {menuAberto ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE NAV (FULLSCREEN OVERLAY) */}
      <div
        className={`fixed inset-0 bg-bg-primario/95 backdrop-blur-xl z-40 lg:hidden flex flex-col items-center justify-center gap-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuAberto 
            ? 'opacity-100 pointer-events-auto overflow-y-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {links.map((link, index) => (
          <a
            key={link.nome}
            href={link.href}
            onClick={() => setMenuAberto(false)}
            // Cascade animado para os itens entrando
            style={{ transitionDelay: menuAberto ? `${index * 0.08}s` : '0s' }}
            className={`font-display text-4xl font-semibold text-texto-primario border-b-2 border-transparent hover:text-destaque-primario transition-all duration-300 ${
              menuAberto ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {link.nome}
          </a>
        ))}
        <a
          href="#contato"
          onClick={() => setMenuAberto(false)}
          style={{ transitionDelay: menuAberto ? `${links.length * 0.08}s` : '0s' }}
          className={`px-10 py-4 mt-4 rounded-full bg-destaque-primario text-bg-primario font-display font-semibold text-xl border border-destaque-primario shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-500 hover:scale-105 active:scale-95 ${
            menuAberto ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          Contato
        </a>
      </div>
    </header>
  );
}
