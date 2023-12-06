"use client"
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Imposta la navbar come sticky quando lo scroll supera l'altezza della finestra
      setIsSticky(window.scrollY > window.innerHeight - 100);
    };

    // Aggiungi l'event listener allo scroll
    window.addEventListener("scroll", handleScroll);

    // Rimuovi l'event listener quando il componente viene smontato
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={cn("z-10 w-full h-24 flex items-center px-8 sticky top-0 transition-all duration-300", isSticky ? "bg-primary shadow-md" : "bg-transparent text-white")}>
      <p className="hidden font-outline-1 text-transparent font-bold text-2xl">PARADISE</p>
    </nav>
  );
};

export default Navbar;
