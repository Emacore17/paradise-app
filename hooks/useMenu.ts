import { useEffect, useState } from "react";

export const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Pulizia al momento dello smontaggio del componente
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return { isMenuOpen, setIsMenuOpen };
};
