"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Apple, Play } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ITEMS = [
  { label: "Özellikler", href: "#features" },
  { label: "Uygulama", href: "#app" },
  { label: "SSS", href: "#faq" },
  { label: "İletişim", href: "#contact" },
];

export const NavbarGurbetci = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <section
      className={cn(
        "bg-background/70 absolute left-1/2 z-50 w-[min(90%,700px)] -translate-x-1/2 rounded-4xl border backdrop-blur-md transition-all duration-300",
        "top-5 lg:top-12",
      )}
    >
      <div className="flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-foreground flex items-center justify-center">
            <span className="text-background font-bold text-xl">G</span>
          </div>
          <span className="text-xl font-bold">
            Gurbetci
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="flex items-center gap-6 max-lg:hidden">
          {ITEMS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "relative bg-transparent px-1.5 text-sm font-medium transition-opacity hover:opacity-75",
                pathname === link.href && "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <Link href="#download" className="max-lg:hidden">
            <Button variant="outline">
              <span className="relative z-10">İndir</span>
            </Button>
          </Link>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            className="text-muted-foreground relative flex size-8 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/*  Mobile Menu Navigation */}
      <div
        className={cn(
          "bg-background fixed inset-x-0 top-[calc(100%+1rem)] flex flex-col rounded-2xl border p-6 transition-all duration-300 ease-in-out lg:hidden",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0",
        )}
      >
        <nav className="divide-border flex flex-1 flex-col divide-y">
          {ITEMS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-primary hover:text-primary/80 py-4 text-base font-medium transition-colors first:pt-0 last:pb-0",
                pathname === link.href && "text-muted-foreground",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-6 pt-6 border-t space-y-2">
          <Button className="w-full" asChild>
            <a href="#download">
              <Apple className="mr-2 w-4 h-4" />
              App Store
            </a>
          </Button>
          <Button className="w-full" variant="outline" asChild>
            <a href="#download">
              <Play className="mr-2 w-4 h-4 fill-current" />
              Google Play
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

