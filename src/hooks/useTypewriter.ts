import { useState, useEffect } from 'react';

export function useTypewriter(words: string[]) {
  const [text, setText] = useState('');
  
  useEffect(() => {

    let isMounted = true;
    let wordIndex = 0;
    let isDeleting = false;
    let charIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      if (!isMounted) return;

      const currentWord = words[wordIndex % words.length];

      if (!isDeleting) {
        charIndex++;
        setText(currentWord.substring(0, charIndex));
        
        if (charIndex === currentWord.length) {
          isDeleting = true;
          timeoutId = setTimeout(type, 2500); // tempo visível
          return;
        }
        timeoutId = setTimeout(type, 80); // velocidade digitando
      } else {
        charIndex--;
        setText(currentWord.substring(0, charIndex));
        
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex++;
          timeoutId = setTimeout(type, 400); // tempo antes da próxima
          return;
        }
        timeoutId = setTimeout(type, 40); // velocidade apagando
      }
    };

    timeoutId = setTimeout(type, 80);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [words]);

  return text;
}
