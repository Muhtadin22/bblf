'use client';

import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  Scale, 
  Lock, 
  BadgeCheck, 
  PhoneCall, 
  Clock, 
  ExternalLink,
  ChevronRight,
  Gavel
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1424] text-[#F8F6F0]/80 pt-20 pb-10 relative overflow-hidden border-t-2 border-[#C5A880]/40 font-sans">
      
      {/* Background Radial Glow & Sub-pattern */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#C5A880]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#0F1E36] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#C5A8800d_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* 1. TOP PRE-FOOTER CTA CARD (CHAMPAGNE GOLD & NAVY BLUE ACCENTS) */}
        <div className="bg-[#0F1E36] border-2 border-[#C5A880]/30 rounded-3xl p-8 md:p-12 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A880]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 relative z-10">
            <div className="text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#142847] border border-[#C5A880]/30 text-[#C5A880] text-xs font-mono uppercase tracking-wider mb-3">
                <Scale size={14} /> Solusi Hukum Strategis & Terpercaya
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#F8F6F0] font-bold mb-3 leading-tight">
                Menghadapi Permasalahan Hukum Kritis?
              </h2>
              <p className="text-[#F8F6F0]/75 text-sm md:text-base font-normal leading-relaxed">
                Dapatkan penelaahan awal (*preliminary legal assessment*) dan strategi pembelaan terukur langsung dari partner advokat kami secara aman dan rahasia.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#b8996e] text-[#0F1E36] font-bold px-8 py-4 rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 border border-[#C5A880] text-sm uppercase tracking-wider whitespace-nowrap"
              >
                <span>Jadwalkan Konsultasi Awal</span>
                <ArrowRight size={16} />
              </Link>
              
              <a
                href="tel:+6285697259015"
                className="w-full sm:w-auto bg-[#142847] hover:bg-[#1c365f] text-[#F8F6F0] font-semibold px-6 py-4 rounded-xl transition-all border border-[#C5A880]/40 flex items-center justify-center gap-2 text-sm uppercase tracking-wider whitespace-nowrap"
              >
                <PhoneCall size={16} className="text-[#C5A880]" />
                <span>Hotline 24/7</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. MAIN FOOTER MULTI-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">

          {/* Kolom 1: Profil Firma & Legal Credentials (Col 12 -> 4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block group py-1">
              <div className="h-14 md:h-16 w-auto flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/bblffix.png"
                  alt="Bhadrika Byakta Law Firm Logo"
                  className="h-full w-auto object-contain group-hover:opacity-90 transition-opacity"
                />
              </div>
            </Link>

            <p className="text-[#F8F6F0]/75 text-xs sm:text-sm leading-relaxed font-normal">
              Firma hukum litigasi dan korporasi terpercaya di Indonesia. Didedikasikan untuk membela hak konstitusional klien, integritas bisnis, dan kepatuhan regulasi berlandaskan Kode Etik Advokat Indonesia.
            </p>

            {/* Badges Akreditasi Bar Resmi */}
            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C5A880] bg-[#0F1E36] p-2.5 rounded-xl border border-[#C5A880]/20">
                <BadgeCheck size={16} className="text-[#C5A880] shrink-0" />
                <span>Advokat Terlisensi PERADI & Tersumpah</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#F8F6F0]/70 bg-[#0F1E36] p-2.5 rounded-xl border border-[#C5A880]/20">
                <Lock size={15} className="text-[#C5A880] shrink-0" />
                <span>Strict Attorney-Client Privilege Protected</span>
              </div>
            </div>
          </div>

          {/* Kolom 2: Navigasi Internal (Col 12 -> 2) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-serif font-bold text-[#F8F6F0] mb-5 pb-2 border-b border-[#C5A880]/20 flex items-center gap-2">
              <span className="w-2.5 h-[2px] bg-[#C5A880]" />
              Navigasi Utama
            </h3>
            <ul className="space-y-3 text-xs font-medium">
              {[
                { name: 'Beranda (Home)', href: '/' },
                { name: 'Tentang Firma', href: '/about' },
                { name: 'Layanan Hukum', href: '/practice-areas' },
                { name: 'Tim Advokat', href: '/team' },
                { name: 'Kontak & Konsultasi', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-[#F8F6F0]/70 hover:text-[#C5A880] transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight size={13} className="text-[#C5A880]/50 group-hover:translate-x-0.5 transition-transform" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Area Praktik Inti (Col 12 -> 3) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-serif font-bold text-[#F8F6F0] mb-5 pb-2 border-b border-[#C5A880]/20 flex items-center gap-2">
              <span className="w-2.5 h-[2px] bg-[#C5A880]" />
              Area Praktik Unggulan
            </h3>
            <ul className="space-y-3 text-xs text-[#F8F6F0]/70">
              <li className="flex items-start gap-2">
                <Gavel size={14} className="text-[#C5A880] shrink-0 mt-0.5" />
                <span>Litigasi Pidana & White-Collar Crime</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck size={14} className="text-[#C5A880] shrink-0 mt-0.5" />
                <span>Praperadilan & Pembelaan Prosedural</span>
              </li>
              <li className="flex items-start gap-2">
                <Scale size={14} className="text-[#C5A880] shrink-0 mt-0.5" />
                <span>Sengketa Kontrak & Wanprestasi Bisnis</span>
              </li>
              <li className="flex items-start gap-2">
                <Scale size={14} className="text-[#C5A880] shrink-0 mt-0.5" />
                <span>Perbuatan Melawan Hukum (PMH) & Ganti Rugi</span>
              </li>
              <li className="flex items-start gap-2">
                <Scale size={14} className="text-[#C5A880] shrink-0 mt-0.5" />
                <span>Sengketa Properti & Agraria Komersial</span>
              </li>
              <li className="flex items-start gap-2">
                <Scale size={14} className="text-[#C5A880] shrink-0 mt-0.5" />
                <span>Kepailitan, PKPU & Restrukturisasi Utang</span>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Alamat Chambers & Kontak Resmi (Col 12 -> 3) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-serif font-bold text-[#F8F6F0] mb-5 pb-2 border-b border-[#C5A880]/20 flex items-center gap-2">
              <span className="w-2.5 h-[2px] bg-[#C5A880]" />
              Chambers & Kontak
            </h3>
            <ul className="space-y-4 text-xs text-[#F8F6F0]/75">
              <li className="flex items-start gap-3">
                <MapPin size={17} className="text-[#C5A880] shrink-0 mt-1" />
                <span className="leading-relaxed">
                  Ruko Silktown Avenue Blok.RK/5A-05, East Pondok Jagung, Serpong Utara, South Tangerang City, Banten 15326
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#C5A880] shrink-0" />
                <a 
                  href="tel:+6285697259015" 
                  className="font-mono font-bold text-[#F8F6F0] hover:text-[#C5A880] transition-colors"
                >
                  +62 856-9725-9015 (Hotline 24/7)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#C5A880] shrink-0" />
                <a 
                  href="mailto:contact@bhadrikabyakta.law" 
                  className="font-mono hover:text-[#C5A880] transition-colors truncate"
                >
                  contact@bhadrikabyakta.law
                </a>
              </li>
              <li className="flex items-start gap-3 pt-1 border-t border-[#C5A880]/15">
                <Clock size={16} className="text-[#C5A880] shrink-0 mt-0.5" />
                <span className="text-[11px] text-[#F8F6F0]/65">
                  Senin &ndash; Jumat: 09:00 &ndash; 18:00 WIB<br />
                  <span className="text-[#C5A880] font-semibold">BAP & Emergency Hotline: Siaga 24 Jam</span>
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* 3. LEGAL DISCLAIMER STATEMENT (KEPATUHAN ETIKA ADVOKAT INDONESIA) */}
        <div className="border-t border-[#C5A880]/20 pt-8 pb-6 text-center lg:text-left">
          <div className="bg-[#0F1E36]/60 p-4 rounded-2xl border border-[#C5A880]/15 text-[11px] text-[#F8F6F0]/60 leading-relaxed space-y-1">
            <p className="font-semibold text-[#C5A880] uppercase tracking-wider font-mono">
              Pernyataan Hukum & Kepatuhan Etika Profesi:
            </p>
            <p>
              Seluruh informasi yang disajikan pada situs web ini disediakan semata-mata untuk tujuan informasi umum dan perkenalan kelembagaan, bukan merupakan nasihat hukum formal (*formal legal advice*). Komunikasi melalui situs ini tidak secara otomatis membentuk hubungan hukum advokat-klien (*attorney-client relationship*) sebelum ditandatanganinya Surat Kuasa dan Perjanjian Jasa Hukum (*Letter of Engagement*) resmi. Seluruh advokat berpraktik berdasarkan UU No. 18 Tahun 2003 tentang Advokat dan terikat penuh pada Kode Etik Advokat Indonesia (KEAI).
            </p>
          </div>
        </div>

        {/* 4. COPYRIGHT & STATUTORY COMPLIANCE */}
        <div className="border-t border-[#C5A880]/15 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#F8F6F0]/60">
          <p className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-[#C5A880]" />
            <span>&copy; {currentYear} Bhadrika Byakta Law Firm (BBLF). Seluruh hak cipta dilindungi.</span>
          </p>
          
          <div className="flex flex-wrap items-center gap-6 font-mono text-[11px]">
            <Link href="/contact" className="hover:text-[#C5A880] transition-colors">
              Kebijakan Kerahasiaan
            </Link>
            <span className="text-[#C5A880]/40">&bull;</span>
            <Link href="/contact" className="hover:text-[#C5A880] transition-colors">
              Protokol Kode Etik
            </Link>
            <span className="text-[#C5A880]/40">&bull;</span>
            <span className="text-[#C5A880]">
              Silktown Avenue, Tangerang Selatan
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}