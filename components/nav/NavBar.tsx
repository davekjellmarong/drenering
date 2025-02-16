"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navItems, type NavItem } from "./items";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderNavItem = (item: NavItem) => {
    if (item.children) {
      return (
        <DropdownMenu key={item.href}>
          <DropdownMenuTrigger className="text-brand-700 hover:text-brand-900 px-3 py-2 rounded-md text-sm font-medium flex items-center">
            {item.title} <ChevronDown className="ml-1 h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {item.children.map((child) => (
              <DropdownMenuItem key={child.href}>
                <Link href={child.href} className="w-full">
                  {child.title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <Link
        key={item.href}
        href={item.href}
        className="text-brand-700 hover:text-brand-900 px-3 py-2 rounded-md text-sm font-medium"
      >
        {item.title}
      </Link>
    );
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              {/* <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              /> */}
              <span className="ml-2 text-xl font-semibold text-brand-900">
                DreneringsExperten
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map(renderNavItem)}
            </div>
            <div className="sm:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-brand-400 hover:text-brand-500 hover:bg-brand-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Åpne hovedmeny</span>
                {/* Icon when menu is closed */}
                <svg
                  className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Icon when menu is open */}
                <svg
                  className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-brand-700 hover:text-brand-900 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          {navItems
            .filter((item) => item.children)
            .flatMap((item) => item.children || [])
            .map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="text-brand-700 hover:text-brand-900 block pl-6 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {child.title}
              </Link>
            ))}
        </div>
      </div>
    </nav>
  );
}
