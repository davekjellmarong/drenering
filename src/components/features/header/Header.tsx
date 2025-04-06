"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/src/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Hjem", path: "/" },
    // { name: "Selskaper", path: "/selskaper" },
    { name: "Hvordan Det Fungerer", path: "/hvordan-funker-det" },
    // { name: "Kontrollpanel", path: "/kontrollpanel" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* <span className="inline-block mr-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 4C12.5029 4 8.63636 6.33333 7 8V14C7 18.4183 10 26 16 26C22 26 25 18.4183 25 14V8C23.3636 6.33333 19.4971 4 16 4Z"
                  fill="#E0F2FE"
                  stroke="#0284C7"
                  strokeWidth="2"
                />
                <path
                  d="M10 14.5C10 14.5 12 18.5 16 18.5C20 18.5 22 14.5 22 14.5"
                  stroke="#0284C7"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="font-bold text-xl">DinDrenering</span> */}
            <Image
              src="/logo.png"
              alt="DinDrenering Logo"
              width={150}
              height={150}
              // className="ml-2 h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  pathname === link.path ? "text-blue-600" : "text-gray-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Link href="/tilbud">Få Gratis Tilbud</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-sm animate-in fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-base py-2 font-medium transition-colors hover:text-blue-600 ${
                  pathname === link.path ? "text-blue-600" : "text-gray-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Link href="/tilbud">Få Gratis Tilbud</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
