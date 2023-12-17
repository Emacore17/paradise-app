"use client";
import { cn } from "@/lib/utils";
import Logo from "./icons/logo";
import { useSticky } from "@/hooks/useSticky";
import { Menu, X } from "lucide-react";
import { useMenu } from "@/hooks/useMenu";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavbarList from "./NavbarList";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const pathname = usePathname();
  const { isSticky } = useSticky();
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  return (
    <nav
      className={cn(
        "z-10 w-full h-24 sticky top-0 transition-all duration-300 font-bungee",
        isSticky ? "bg-primary  shadow-md" : "bg-transparent text-white",
        pathname != "/" && "bg-primary shadow-md"
      )}
    >
      <div
        className={cn(
          "transition-all duration-700 px-8 md:px-0",
          isMenuOpen
            ? "absolute bg-primary w-full h-auto pb-8 z-10 top-0 left-0"
            : "static h-24 w-full"
        )}
      >
        <div className="flex justify-between h-24 w-full items-center md:w-4/5 md:mx-auto fade-in">
          {isMenuOpen ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Link href="/">
              <Logo
                classname={cn(
                  " w-8 h-8 md:h-10 md:w-10",
                  isSticky || pathname != "/"
                    ? "fill-white stroke-none"
                    : "fill-transparent stroke-white stroke-[28]"
                )}
              />
            </Link>
          )}

          <ul className="hidden md:flex uppercase items-center gap-8 font-bold">
            {<NavbarList isSticky={isSticky} />}
          </ul>
          {/* HAMBURGER */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <ul className="space-y-4 flex flex-col justify-center fade-in">
            <NavbarList setIsMenuOpen={setIsMenuOpen} isSticky={isSticky} />
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
