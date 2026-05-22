import { useEffect, useRef, useState } from 'react';

export function CursorPersonalizado() {
  const cursorPontoRef = useRef<HTMLDivElement>(null);
  const cursorAnelRef = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    // Se for dispositivo de toque, não exibimos o cursor customizado
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }
    
    // Mostraremos o cursor apenas ao detectar que há mouse
    const checkIfMouseExists = () => {
      setVisivel(true);
      window.removeEventListener('mousemove', checkIfMouseExists);
    };
    window.addEventListener('mousemove', checkIfMouseExists);

    const mouse = { x: -100, y: -100 };
    const anel = { x: -100, y: -100 };
    let requestRef = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (cursorPontoRef.current) {
        // Movimento instantâneo do ponto menor
        cursorPontoRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }
    };

    const onMouseDown = () => {
      if (cursorAnelRef.current) {
        cursorAnelRef.current.style.transform = `translate3d(${anel.x}px, ${anel.y}px, 0) scale(0.7)`;
      }
    };
    const onMouseUp = () => {
      if (cursorAnelRef.current) {
        cursorAnelRef.current.style.transform = `translate3d(${anel.x}px, ${anel.y}px, 0) scale(1)`;
      }
    };

    const animar = () => {
      // Lerp (interpolação linear) para suavizar a perseguição do anel ao ponteiro
      anel.x += (mouse.x - anel.x) * 0.15;
      anel.y += (mouse.y - anel.y) * 0.15;
      if (cursorAnelRef.current) {
        // Preserva a interpolação; O React lida com as classes CSS para o scale geral de hover
        cursorAnelRef.current.style.transform = `translate3d(${anel.x}px, ${anel.y}px, 0)`;
      }
      requestRef = requestAnimationFrame(animar);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    requestRef = requestAnimationFrame(animar);

    // Identificar áreas para "magnetic" hover
    const onHoverEnter = () => {
      cursorAnelRef.current?.classList.add('w-[50px]', 'h-[50px]', 'border-destaque-primario', 'bg-destaque-brilho', '-ml-[25px]', '-mt-[25px]');
      cursorAnelRef.current?.classList.remove('w-9', 'h-9', '-ml-[18px]', '-mt-[18px]', 'border-borda');
    };
    
    const onHoverLeave = () => {
         cursorAnelRef.current?.classList.remove('w-[50px]', 'h-[50px]', 'border-destaque-primario', 'bg-destaque-brilho', '-ml-[25px]', '-mt-[25px]');
         cursorAnelRef.current?.classList.add('w-9', 'h-9', '-ml-[18px]', '-mt-[18px]', 'border-borda');
    };

    const adicionarEventosHover = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.addEventListener('mouseenter', onHoverEnter);
        el.addEventListener('mouseleave', onHoverLeave);
      });
    };

    // Inicial e observador para links introduzidos dinamicamente
    adicionarEventosHover();
    const observer = new MutationObserver(() => {
      // Pequeno timeout permite a nova DOM estabilizar
      setTimeout(adicionarEventosHover, 50);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(requestRef);
      observer.disconnect();
    };
  }, []);

  if (!visivel) return null;

  return (
    <>
      {/* Ponto Rápido Central */}
      <div
        ref={cursorPontoRef}
        className="fixed top-0 left-0 w-2 h-2 bg-destaque-primario rounded-full pointer-events-none z-[9999] -ml-1 -mt-1"
      />
      
      {/* Anel Magnético Suave */}
      <div
        ref={cursorAnelRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-borda pointer-events-none z-[9998] -ml-[18px] -mt-[18px] transition-[width,height,border-color,background-color,margin] duration-300 ease-out"
      />
    </>
  );
}
