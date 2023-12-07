"use client";
import { cn } from "@/lib/utils";
import Logo from "./icons/logo";
import { useSticky } from "@/hooks/useSticky";
import { Menu, X } from "lucide-react";
import { useModal } from "@/hooks/useModal";

const Navbar = () => {
  const { isSticky } = useSticky();
  const { isModalOpen, setIsModalOpen } = useModal();
  return (
    <nav
      className={cn(
        "z-10 w-full h-20 sticky top-0 transition-all duration-300",
        isSticky ? "bg-primary shadow-md" : "bg-transparent text-white"
      )}
    >
      <div
        className={cn(
          "transition-all duration-700",
          isModalOpen
            ? "absolute w-screen h-screen bg-primary z-10 top-0 left-0 flex flex-col px-8"
            : "static px-8 h-full w-full"
        )}
      >
        <div className="flex justify-between h-20 w-full items-center">
          <Logo
            classname={cn(
              " w-8 h-8",
              isSticky
                ? "fill-white stroke-none"
                : "fill-transparent stroke-white stroke-[28]"
            )}
          />
          <button
            className="md:hidden"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            {isModalOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
