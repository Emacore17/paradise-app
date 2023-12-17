import type { Metadata } from "next";
import { Poppins, Bungee } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import { itIT } from "@clerk/localizations";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Paradise",
  description: "Paradise disco app",
};

export function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={itIT}>
      <html lang="en">
        <body className={poppins.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
