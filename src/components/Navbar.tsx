'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Tentang Kami', href: '/about' },
  { name: 'Layanan Hukum', href: '/practice-areas' },
  { name: 'Tim Pengacara', href: '/team' },
  { name: 'Kontak', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-[#0a1128] text-white py-4'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* LOGO DIPERBESAR KHUSUS RESOLUSI 2048x768 PX (HORIZONTAL) */}
        <Link href="/" className="flex items-center group py-1">
          <div className="h-12 md:h-16 w-auto flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/bblffix.png" 
              alt="Bhadrika Byakta Lawfirm Logo" 
              className="h-full w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`transition-colors relative py-1 ${
                  isActive 
                    ? 'text-red-600 font-bold' 
                    : isScrolled ? 'text-slate-700 hover:text-red-600' : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 rounded-full" />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="bg-red-700 hover:bg-red-600 text-white px-6 py-2.5 rounded-xl transition-all shadow-md shadow-red-900/20 font-bold text-sm"
          >
            Konsultasi Gratis
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-[#0a1128]' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl flex flex-col items-center py-8 gap-6 md:hidden border-t border-slate-100"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-semibold text-lg ${pathname === link.href ? 'text-red-600' : 'text-slate-800'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-red-700 text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg shadow-red-900/20"
            >
              Konsultasi Gratis
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}