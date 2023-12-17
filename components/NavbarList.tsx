"use client";
import { cn } from "@/lib/utils";
import { UserButton, useUser } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

interface NavbarListProps {
  isSticky: boolean;
  setIsMenuOpen?: Dispatch<SetStateAction<boolean>>;
}
const NavbarList = ({ isSticky, setIsMenuOpen }: NavbarListProps) => {
  const { isSignedIn } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  const authenticatedRoutes = [
    {
      label: "My Tickets",
      path: "/reservation",
    },
    {
      label: "Home",
      path: "/",
    },
  ];

  const unauthenticatedRoutes = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Sign Up",
      path: "/sign-up",
    },
    {
      label: "Sign In",
      path: "/sign-in",
    },
  ];

  const handleClick = (path: string) => {
    if (setIsMenuOpen) {
      setIsMenuOpen(false);
    }
    router.push(path);
  };

  if (isSignedIn) {
    return (
      <>
        {authenticatedRoutes.map((route) => (
          <li
            onClick={() => handleClick(route.path)}
            key={route.path}
            className={cn(
              "cursor-pointer text-xl font-bold px-4 py-2 text-white rounded-lg hover:text-black hover:bg-white transition-all duration-300",
              pathname === route.path && "bg-white text-black",
              !isSticky &&
              pathname === "/" &&
              route.path === "/reservation" &&
              "md:hidden"
            )}
          >
            {route.label}
          </li>
        ))}
        <li className="hidden md:block">
          <UserButton afterSignOutUrl="/" />
        </li>
      </>
    );
  }

  return (
    <>
      {unauthenticatedRoutes.map((route) => (
        <li
          onClick={() => handleClick(route.path)}
          key={route.path}
          className={cn(
            "cursor-pointer text-xl font-bold px-4 py-2 text-white rounded-lg hover:text-black hover:bg-white transition-all duration-300",
            pathname === route.path && "bg-white text-black",
            !isSticky &&
              pathname === "/" &&
              route.path === "/sign-up" &&
              "md:hidden"
          )}
        >
          {route.label}
        </li>
      ))}
    </>
  );
};

export default NavbarList;
