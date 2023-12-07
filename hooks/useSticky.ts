import { useEffect, useState } from "react";

export const useSticky = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Imposta la navbar come sticky quando lo scroll supera l'altezza della finestra
      setIsSticky(window.scrollY > window.innerHeight - 300);
    };

    // Aggiungi l'event listener allo scroll
    window.addEventListener("scroll", handleScroll);

    // Rimuovi l'event listener quando il componente viene smontato
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isSticky };
};
