'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#081021] text-slate-300 pt-20 pb-8 relative overflow-hidden border-t-4 border-red-700">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-700/5 rounded-full blur-[140px] -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top CTA Banner */}
        <div className="border-b border-white/10 pb-12 mb-14 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-3">
              Menghadapi Permasalahan Hukum?
            </h2>
            <p className="text-blue-200/80 text-base font-light">
              Dapatkan analisis komprehensif dan strategi penanganan langsung dari advokat berpengalaman kami.
            </p>
          </div>
          <Link 
            href="/contact" 
            className="group bg-red-700 hover:bg-red-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-xl whitespace-nowrap"
          >
            Jadwalkan Konsultasi <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* LOGO DI FOOTER DENGAN UKURAN LEBIH BESAR */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6 group">
              <div className="h-16 md:h-20 w-auto flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/bblf.png" 
                  alt="Bhadrika Byakta Lawfirm Logo" 
                  className="h-full w-auto object-contain group-hover:scale-105 transition-transform" 
                />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
              Firma hukum terkemuka di Jakarta yang mendedikasikan keahlian hukum untuk membela hak korporasi dan individu dengan integritas tanpa kompromi.
            </p>
          </div>

          {/* Navigasi Menu */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-3 h-[2px] bg-red-600"></span> Navigasi
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              {[
                { name: 'Home', href: '/' },
                { name: 'Tentang Kami', href: '/about' },
                { name: 'Layanan Hukum', href: '/practice-areas' },
                { name: 'Tim Pengacara', href: '/team' },
                { name: 'Kontak', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-3 h-[2px] bg-red-600"></span> Area Praktik
            </h3>
            <ul className="space-y-3 text-sm font-medium text-slate-400">
              <li>Hukum Perusahaan & Komersial</li>
              <li>Litigasi Pidana & Khusus</li>
              <li>Sengketa Perdata & Properti</li>
              <li>Hukum Keluarga & Waris</li>
            </ul>
          </div>

          {/* Kontak */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-3 h-[2px] bg-red-600"></span> Kontak Kami
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-red-500 shrink-0 mt-1" />
                <span>Ruko Silktown Avenue Blok.RK/5A-05, East Pondok Jagung, Serpong Utara, South Tangerang City, Banten 15326</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-red-500 shrink-0" />
                <span className="text-white font-medium">+62 21 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-red-500 shrink-0" />
                <span>contact@bhadrikabyakta.law</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 pt-6">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-slate-400" />
            &copy; {currentYear} Bhadrika Byakta Lawfirm. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span>Kebijakan Privasi</span>
            <span>Syarat & Ketentuan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}