'use client'

import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

const icons = [
  {
    id: 1,
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
  {
    id: 2,
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
    ),
  },
];

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'CONTACT', href: '/contact' },
  { name: 'TESTIMONIALS', href: '/testimonials' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-md px-4 py-3 z-50 relative">
      <div className="flex justify-between items-center max-w-7xl mx-auto border-b border-b-white pb-2">
        {/* Logo */}
        <Image src="/qs.png" width={70} height={70} alt="qs" className="max-w-[70px]" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} className="text-sm hover:underline font-medium">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Always-visible Icons (Mobile + Desktop) */}
        <div className="flex items-center gap-3">
          {icons.map((icon) => (
            <button key={icon.id} className="bg-[url(/search.png)] bg-no-repeat bg-center bg-cover w-[40px] h-[40px] flex items-center justify-center rounded">
              {icon.svg}
            </button>
          ))}

          {/* Hamburger for Mobile */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden ml-1 bg-[url(/search.png)] bg-no-repeat bg-center bg-cover w-[40px] h-[40px] flex items-center justify-center rounded">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-lg font-medium border-b border-b-white"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
