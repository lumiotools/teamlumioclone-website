"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import { Ubuntu } from "next/font/google";

interface HeaderProps {
  setCurrentPage: (page: string) => void;
  currentPage: string;
}

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export function Header({ setCurrentPage, currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Solutions", href: "#features", page: "home" },
    { label: "About", href: "#about", page: "home" },
    { label: "Testimonials", href: "#testimonials", page: "home" },
    { label: "Methodology", href: "#methodology", page: "home" },
    { label: "Blogs", href: "/blogs", page: "blogs" },
    { label: "Careers", href: "/careers", page: "careers" },
  ];

  interface NavItem {
    label: string;
    href: string;
    page: string;
  }

  interface HandleNavClickEvent
    extends React.MouseEvent<HTMLElement, MouseEvent> {}

  const handleNavClick = (item: NavItem, e: HandleNavClickEvent) => {
    e.preventDefault();
    setCurrentPage(item.page);
    if (item.href.startsWith("#") && item.page === "home") {
      const element = document.querySelector(item.href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={(e) =>
              handleNavClick({ label: "Home", href: "#", page: "home" }, e)
            }
          >
            <div className="h-8 w-8">
              <img src="/images/logos/Lumio AI.png" />
            </div>
            <span
              className={`text-xl font-bold text-primary ${ubuntu.className}`}
            >
              Lumio AI
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`text-sm font-medium hover:text-primary ${
                  currentPage === item.href ? "text-primary" : ""
                }`}
                onClick={(e) => handleNavClick(item, e)}
                id={`q5dn4m_${index}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Button>Let's Talk</Button>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container flex flex-col gap-4 py-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`text-sm font-medium hover:text-primary ${
                  currentPage === item.page ? "text-primary" : ""
                }`}
                onClick={(e) => handleNavClick(item, e)}
                id={`o2mipr_${index}`}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t">
              <Button>Let's Talk</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
