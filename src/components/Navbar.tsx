'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  PhoneCall, 
  MapPin, 
  Scale, 
  ShieldCheck, 
  ArrowRight,
  Clock,
  Phone
} from 'lucide-react';
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tutup menu mobile ketika rute berpindah
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans">
      
      {/* 1. TOP UTILITY BAR (INFORMASI RESMI & EMERGENCY HOTLINE) */}
      <div 
        className={`bg-[#0A1424] text-[#F8F6F0]/80 border-b border-[#C5A880]/15 text-[11px] font-mono transition-all duration-300 ${
          isScrolled ? 'h-0 opacity-0 overflow-hidden py-0 border-none' : 'py-2 px-6 md:px-12 block'
        }`}
      >
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-2">
          
          <div className="flex items-center gap-4 text-[#F8F6F0]/70">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-[#C5A880]" />
              Advokat Berlisensi PERADI & Tunduk KEAI
            </span>
            <span className="hidden lg:inline-block text-[#C5A880]/40">&bull;</span>
            <span className="hidden lg:flex items-center gap-1.5">
              <MapPin size={13} className="text-[#C5A880]" />
              Silktown Avenue, Tangerang Selatan
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:flex items-center gap-1.5 text-[#F8F6F0]/70">
              <Clock size={12} className="text-[#C5A880]" />
              Senin &ndash; Jumat: 09:00 &ndash; 18:00 WIB
            </span>
            <span className="hidden sm:inline-block text-[#C5A880]/40">&bull;</span>
            <a 
              href="tel:+6285697259015"
              className="flex items-center gap-1.5 text-[#C5A880] hover:text-white transition-colors font-bold"
            >
              <PhoneCall size={12} className="text-[#C5A880]" />
              Hotline 24/7: +62 856-9725-9015
            </a>
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <nav
        className={`w-full transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-[#0F1E36]/95 backdrop-blur-md shadow-2xl py-3 border-[#C5A880]/30'
            : 'bg-[#0F1E36] py-4 border-[#C5A880]/20'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo Horizontal Firma (Resolusi 2048x768 px) */}
          <Link href="/" className="flex items-center group py-0.5">
            <div className="h-11 md:h-14 w-auto flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/bblffix.png" 
                alt="Bhadrika Byakta Law Firm Logo" 
                className="h-full w-auto object-contain group-hover:opacity-95 transition-opacity"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`relative py-1.5 transition-colors ${
                    isActive 
                      ? 'text-[#C5A880] font-bold' 
                      : 'text-[#F8F6F0]/80 hover:text-[#C5A880]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-underline" 
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A880] rounded-full shadow-sm" 
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right Action: Jadwalkan Konsultasi Awal */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="group bg-[#C5A880] hover:bg-[#b8996e] text-[#0F1E36] px-5 py-2.5 rounded-xl transition-all shadow-md font-bold text-xs uppercase tracking-wider flex items-center gap-2 border border-[#C5A880]"
            >
              <span>Jadwalkan Konsultasi Awal</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a 
              href="tel:+6285697259015"
              className="p-2 rounded-lg bg-[#142847] border border-[#C5A880]/30 text-[#C5A880] flex items-center justify-center"
              aria-label="Panggil Hotline"
            >
              <Phone size={18} />
            </a>
            
            <button
              className="p-2 rounded-lg text-[#F8F6F0] bg-[#142847] border border-[#C5A880]/30 hover:border-[#C5A880] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Buka Menu"
            >
              {isMobileMenuOpen ? <X size={22} className="text-[#C5A880]" /> : <Menu size={22} className="text-[#C5A880]" />}
            </button>
          </div>

        </div>
      </nav>

      {/* 3. MOBILE MENU DROPDOWN (FULL-WIDTH LUXURY DRAWER) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#0F1E36] border-b border-[#C5A880]/30 shadow-2xl overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              
              {/* Info Singkat Lembaga */}
              <div className="flex items-center gap-2 pb-4 border-b border-[#C5A880]/20 text-xs font-mono text-[#C5A880]">
                <Scale size={16} />
                <span>Bhadrika Byakta Law Firm &bull; Client Portal</span>
              </div>

              {/* Tautan Menu */}
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`py-2 text-sm font-semibold tracking-wide uppercase transition-colors flex items-center justify-between border-b border-[#142847] ${
                        isActive ? 'text-[#C5A880] font-bold pl-2 border-l-2 border-[#C5A880]' : 'text-[#F8F6F0]/85 hover:text-[#C5A880]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight size={14} className={isActive ? 'text-[#C5A880]' : 'text-slate-600'} />
                    </Link>
                  );
                })}
              </div>

              {/* Tombol Aksi di Menu Mobile */}
              <div className="pt-2 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="w-full bg-[#C5A880] hover:bg-[#b8996e] text-[#0F1E36] py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-center shadow-lg border border-[#C5A880] flex items-center justify-center gap-2"
                >
                  <span>Jadwalkan Konsultasi Awal</span>
                  <ArrowRight size={15} />
                </Link>

                <a
                  href="tel:+6285697259015"
                  className="w-full bg-[#142847] text-[#F8F6F0] py-3 rounded-xl font-semibold text-xs uppercase tracking-wider text-center border border-[#C5A880]/30 flex items-center justify-center gap-2"
                >
                  <PhoneCall size={14} className="text-[#C5A880]" />
                  <span>Hotline Darurat 24/7</span>
                </a>
              </div>

              {/* Footer Mini Mobile Drawer */}
              <div className="pt-2 text-center text-[10px] font-mono text-[#F8F6F0]/60">
                <span>Ruko Silktown Avenue Blok RK/5A-05, Tangerang Selatan</span>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}