import Image from "next/image";
import "./../app/gradient-background.css";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { bungee } from "@/app/layout";
import { currentUser } from "@clerk/nextjs";

const Header = async () => {
  const user = await currentUser();
  return (
    <header className="min-h-[calc(100vh-6rem)] w-full flex flex-col justify-center items-center gap-14">
      <Image
        src="https://images.unsplash.com/photo-1579125305607-15279d30d370?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="sfondo"
        fill
        className="absolute object-cover object-center -z-10 opacity-40"
      />
      <div className="gradient absolute -z-10"></div>
      <div className="space-y-20">
        <div className="space-y-2 xl:space-y-4 flex flex-col justify-center items-center">
          <p
            className={cn(
              "text-3xl md:text-5xl xl:text-7xl font-semibold tracking-wider",
              bungee.className
            )}
          >
            WELCOME TO
          </p>
          <h1 className="text-5xl md:text-7xl xl:text-9xl text-transparent font-black font-outline-2 xl:font-outline-4">
            P A R A D I S E
          </h1>
        </div>
        <div className="flex flex-col md:flex-row md:items-start items-center justify-center gap-8 xl:gap-10">
          <Link
            href="#upcoming-events"
            className={cn(
              "text-sm md:text-base w-48 xl:text-lg rounded-lg border-2 border-primary bg-gradient-to-r from-primary to-rose-500 py-3 px-6 whitespace-nowrap flex items-center justify-center hover:to-primary transition-all duration-300",
              bungee.className
            )}
          >
            EVENTS
          </Link>
          {user ? (
            <Link
              href="/reservation"
              className={cn(
                "text-sm md:text-base w-48 xl:text-lg rounded-lg border-2 border-white bg-transparent py-3 px-6 whitespace-nowrap flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300",
                bungee.className
              )}
            >
              MY TICKETS
            </Link>
          ) : (
            <Link
              href="/sign-up"
              className={cn(
                "text-sm md:text-base w-48 xl:text-lg rounded-lg border-2 border-white bg-transparent py-3 px-6 whitespace-nowrap flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300",
                bungee.className
              )}
            >
              SIGN UP
            </Link>
          )}
        </div>
      </div>
      <Link href="#upcoming-events">
        <ChevronDown className="animate-bounce md:w-8 md:h-8 xl:w-10 xl:h-10" />
      </Link>
    </header>
  );
};

export default Header;
