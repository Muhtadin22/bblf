'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';
import {
  GraduationCap,
  Briefcase,
  ArrowRight,
  ShieldCheck,
  Scale,
  Gavel,
  Building2,
  BadgeCheck,
  FileBadge,
  CheckCircle2,
  Lock,
  Landmark,
  Compass,
  FileText,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

// --- DATA FILTER KATEGORI ---
const categories = [
  { id: 'all', label: 'Seluruh Partner & Advokat' },
  { id: 'litigation', label: 'Litigasi Pidana & Pembelaan' },
  { id: 'dispute', label: 'Sengketa Perdata & Komersial' },
  { id: 'corporate', label: 'Kepatuhan & Korporasi' }
];

// --- DATA ANGGOTA TIM ADVOKAT LENGKAP & SPESIALISASI ---
const teamMembers = [
  {
    id: 1,
    category: 'litigation',
    name: 'FADLY RAHMAN, S.H.,S.E,M.Si',
    role: 'Senior Managing Partner',
    practiceLead: 'Kepala Divisi Litigasi Pidana Strategis',
    education: 'Doktor Ilmu Hukum, Universitas Indonesia | LL.M. in International Criminal Law, Leiden University',
    experience: '18+ Tahun Pengalaman Litigasi Mahkamah Agung & Pengadilan Niaga',
    license: 'PERADI DPC Jakarta Selatan No. 412/PERADI/2011',
    description: 'Memimpin firma dengan fokus utama pada penanganan tindak pidana korporasi berisiko tinggi (white-collar crime), sengketa perbankan, dan pengujian praperadilan atas tindakan penyidik.',
    competencies: ['White-Collar Crime Defense', 'Praperadilan & Due Process', 'Tindak Pidana Pencucian Uang (TPPU)', 'Audit Risiko Investigasi'],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
    tier: 'Executive Board',
    status: 'Advokat Tersumpah Aktif'
  },
  {
    id: 2,
    category: 'litigation',
    name: 'MANTRI ADIETIA S.H.,C.PLO',
    role: 'Managing Partners',
    practiceLead: 'Kepala Litigasi Pidana Khusus & Siber',
    education: 'Magister Hukum Pidana, Universitas Gadjah Mada (UGM)',
    experience: '15+ Tahun Jam Terbang Pembelaan Pidana & Investigasi Resmi',
    license: 'PERADI No. 659/PERADI/2014',
    description: 'Spesialis dalam advokasi perkara tindak pidana siber (UU ITE), dugaan tindak pidana korupsi (Tipikor), tindak pidana perpajakan, serta pendampingan langsung pemeriksaan BAP kepolisian/kejaksaan.',
    competencies: ['Cyber Crime & UU ITE', 'Litigasi Pidana Khusus (Tipikor)', 'Pendampingan BAP Darurat', 'Forensik Pembuktian Materiil'],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
    tier: 'Executive Board',
    status: 'Advokat Tersumpah Aktif'
  },
  {
    id: 3,
    category: 'dispute',
    name: 'Muhammad Farhan Rizki S.H',
    role: 'Junior Associate',
    practiceLead: 'Kepala Praktik Sengketa Perdata & Arbitrase Bisnis',
    education: 'Sarjana Hukum & Magister Kenotariatan, Universitas Indonesia',
    experience: '12+ Tahun Penyelesaian Sengketa Komersial & Pertanahan',
    license: 'PERADI No. 1024/PERADI/2016',
    description: 'Menangani sengketa wanprestasi kontrak skala besar, perbuatan melawan hukum (PMH), sengketa kepemilikan aset properti/agraria, serta representasi sidang arbitrase di BANI dan SIAC.',
    competencies: ['Gugatan Wanprestasi Kontrak', 'Sengketa Pertanahan & Agraria', 'Arbitrase Komersial (BANI)', 'Eksekusi Jaminan & Sita Asset'],
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80',
    tier: 'Practice Partner',
    status: 'Advokat Tersumpah Aktif'
  },
  {
    id: 4,
    category: 'PARALEGAL.',
    name: 'SUWARNO. CLA.',
    role: 'Paralegal',
    practiceLead: 'Bantusan Operasional ',
    description: 'Fokus pada restrukturisasi utang (Kepailitan & PKPU), uji kepatuhan regulasi korporasi (Legal Due Diligence), perancangan perjanjian joint venture, dan mitigasi risiko pidana korporasi internal.',
    competencies: ['Restrukturisasi PKPU & Pailit', 'Due Diligence Transaksi', 'Kepatuhan Regulasi Bisnis', 'Mitigasi Risiko Direksi'],
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80',
    tier: ' Paralegal',
    status: 'Paralegalo Bersertifikasi'
  }
];

// --- DATA STRUKTUR HIERARKI TATA KELOLA KANTOR HUKUM ---
const firmStructure = [
  {
    tier: 'Tingkat I',
    badge: 'Executive Leadership',
    title: 'Managing Partner',
    desc: 'Menentukan doktrin penanganan perkara, memastikan standar integritas KEAI, serta memimpin langsung mandat litigasi paling krusial.',
    icon: Scale
  },
  {
    tier: 'Tingkat II',
    badge: 'Chamber Leadership',
    title: 'Senior Partners & Partners',
    desc: 'Memimpin divisi penanganan perkara spesifik (Litigasi Pidana, Sengketa Komersial, Tata Kelola Korporasi) dan merumuskan taktik persidangan.',
    icon: Gavel
  },
  {
    tier: 'Tingkat III',
    badge: 'Case Counsel',
    title: 'Senior Associates & Associates',
    desc: 'Melakukan penelaahan alat bukti materiil, riset yurisprudensi Mahkamah Agung, legal drafting dokumen sidang, dan asistensi BAP.',
    icon: Briefcase
  },
  {
    tier: 'Tingkat IV',
    badge: 'Specialized Board',
    title: 'Of Counsel & Konsultan Ahli',
    desc: 'Pakar hukum akademisi, mantan penegak hukum, dan ahli forensik independen yang memberikan keterangan keahlian (Expert Witness Opinion).',
    icon: Landmark
  }
];

// --- ANIMATION VARIANTS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 70, damping: 16 }
  }
};

export default function TeamPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeStructureTab, setActiveStructureTab] = useState(0);

  const filteredTeam = selectedCategory === 'all'
    ? teamMembers
    : teamMembers.filter(member => member.category === selectedCategory);

  return (
    <div className="selection:bg-[#C5A880] selection:text-[#0F1E36] bg-[#F8F6F0] text-[#0F1E36] font-sans overflow-hidden">

      {/* 1. HERO SECTION: AUTORITAS & PRESTISE PARTNER */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-[#0F1E36] overflow-hidden pt-36 pb-24 border-b border-[#C5A880]/20">

        {/* Latar Belakang Geometris & Radial Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <div className="absolute -top-36 -right-24 w-[600px] h-[600px] bg-[#C5A880]/10 rounded-full blur-[140px]" />
          <div className="absolute -bottom-36 -left-24 w-[500px] h-[500px] bg-[#0A1424] rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#C5A88015_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center max-w-4xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#142847] border border-[#C5A880]/30 shadow-inner mb-7">
              <Scale className="text-[#C5A880] shrink-0" size={16} />
              <span className="text-[#C5A880] text-xs font-semibold tracking-widest uppercase">
                Dewan Advokat Tersumpah &bull; Bhadrika Byakta Law Firm
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F8F6F0] font-bold mb-6 leading-[1.15]">
              Keahlian Yuridis Teruji, <br />
              <span className="text-[#C5A880] relative inline-block font-serif italic mt-1">
                Dedikasi Advokasi Berintegritas.
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C5A880] to-transparent" />
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-[#F8F6F0]/85 text-base md:text-lg font-normal mb-10 leading-relaxed max-w-3xl mx-auto">
              Setiap partner dan advokat di Bhadrika Byakta Law Firm menggabungkan kedalaman akademis hukum tingkat magister dan doktoral dengan jam terbang beracara tinggi di pengadilan, bersandarkan pada sumpah profesi dan Kode Etik Advokat Indonesia.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#F8F6F0]/75 font-mono pt-4 border-t border-[#C5A880]/20">
              <span className="flex items-center gap-2">
                <BadgeCheck size={16} className="text-[#C5A880]" /> 100% Berlisensi  Resmi
              </span>
              <span className="flex items-center gap-2">
                <Lock size={15} className="text-[#C5A880]" /> Attorney-Client Privilege Terjamin
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={15} className="text-[#C5A880]" /> Bebas Benturan Kepentingan
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. TATA KELOLA ORGANISASI & HIERARKI KANTOR HUKUM */}
      <section className="py-20 bg-[#F8F6F0] border-b border-[#0F1E36]/10">
        <div className="container mx-auto px-6 md:px-12">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#0F1E36] font-bold tracking-widest uppercase text-xs px-3.5 py-1.5 bg-[#C5A880]/20 border border-[#C5A880]/40 rounded-full inline-block">
              Tata Kelola Organisasi
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0F1E36] font-bold mt-3">
              Struktur Hierarki Penanganan Perkara
            </h2>
            <p className="text-[#0F1E36]/70 text-sm mt-2">
              Sistem manajerial bertingkat untuk menjamin setiap berkas perkara diteliti secara berlapis sebelum diajukan ke peradilan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {firmStructure.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = activeStructureTab === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStructureTab(idx)}
                  className={`p-7 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${isSelected
                      ? 'bg-[#0F1E36] text-[#F8F6F0] border-[#C5A880] shadow-2xl scale-[1.02]'
                      : 'bg-white text-[#0F1E36] border-[#0F1E36]/10 hover:border-[#C5A880]/60 shadow-sm'
                    }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-colors ${isSelected
                          ? 'bg-[#142847] border-[#C5A880]/40 text-[#C5A880]'
                          : 'bg-[#F8F6F0] border-[#0F1E36]/10 text-[#0F1E36]'
                        }`}>
                        <Icon size={22} />
                      </div>
                      <span className={`text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded border ${isSelected
                          ? 'bg-[#142847] border-[#C5A880]/30 text-[#C5A880]'
                          : 'bg-[#F8F6F0] border-[#0F1E36]/10 text-[#0F1E36]/60'
                        }`}>
                        {item.tier}
                      </span>
                    </div>

                    <span className={`text-[11px] font-mono tracking-wider uppercase block mb-1 font-semibold ${isSelected ? 'text-[#C5A880]' : 'text-[#0F1E36]/60'
                      }`}>
                      {item.badge}
                    </span>

                    <h4 className="font-serif font-bold text-xl mb-3 leading-snug">
                      {item.title}
                    </h4>

                    <p className={`text-xs leading-relaxed font-normal ${isSelected ? 'text-[#F8F6F0]/80' : 'text-[#0F1E36]/75'
                      }`}>
                      {item.desc}
                    </p>
                  </div>

                  <div className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-mono ${isSelected ? 'border-[#C5A880]/20 text-[#C5A880]' : 'border-[#0F1E36]/10 text-[#0F1E36]/60'
                    }`}>
                    <span>AUDIT MUTU</span>
                    <BadgeCheck size={15} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. DIREKTORI ADVOKAT & KARTU PROFIL EKSKLUSIF BERBORDER MEWAH */}
      <section className="py-24 bg-white border-b border-[#0F1E36]/10">
        <div className="container mx-auto px-6 md:px-12">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#0F1E36] font-bold tracking-widest uppercase text-xs px-3.5 py-1.5 bg-[#C5A880]/20 border border-[#C5A880]/40 rounded-full inline-block">
              Direktori Counsel & Partner
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0F1E36] font-bold mt-3">
              Profil Partner & Advokat
            </h2>
            <p className="text-[#0F1E36]/70 text-sm mt-2">
              Pilih kategori spesialisasi untuk melihat kualifikasi yuridis dan kepemimpinan penanganan perkara.
            </p>
          </div>

          {/* Filter Tab Berdesain Formal */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-16 max-w-4xl mx-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all ${isActive
                      ? 'bg-[#0F1E36] text-[#C5A880] shadow-md border-2 border-[#C5A880] font-bold'
                      : 'bg-[#F8F6F0] text-[#0F1E36] border border-[#0F1E36]/15 hover:border-[#C5A880]'
                    }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Grid Profil Partner: Kartu Berborder Berlapis Mewah */}
          <motion.div
            layout
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto"
          >
            <AnimatePresence>
              {filteredTeam.map((member) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  key={member.id}
                  /* BORDER EKSKLUSIF: Double Layer Border dengan Frame Champagne Gold & Hairline Inset */
                  className="relative rounded-3xl p-2 bg-gradient-to-b from-[#C5A880]/40 via-[#0F1E36]/15 to-[#C5A880]/30 shadow-xl hover:shadow-2xl transition-all group"
                >
                  {/* Ornamen Sudut Eksklusif (Corner Brackets) */}
                  <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t-2 border-l-2 border-[#C5A880] pointer-events-none z-20" />
                  <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C5A880] pointer-events-none z-20" />
                  <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b-2 border-l-2 border-[#C5A880] pointer-events-none z-20" />
                  <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b-2 border-r-2 border-[#C5A880] pointer-events-none z-20" />

                  {/* Kontainer Dalam Kartu */}
                  <div className="bg-white rounded-[22px] border border-[#C5A880]/20 p-7 md:p-8 flex flex-col justify-between h-full relative overflow-hidden">

                    <div>
                      {/* Baris Atas: Foto Paspartu & Header Kualifikasi */}
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start mb-6">

                        {/* Bingkai Foto Portrait Beraksen Emas */}
                        <div className="sm:col-span-5 relative">
                          <div className="relative rounded-2xl p-1 bg-[#0F1E36] border-2 border-[#C5A880]/50 shadow-md overflow-hidden aspect-[3/4]">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={member.image}
                              alt={member.name}
                              className="object-cover w-full h-full rounded-xl grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36] via-transparent to-transparent opacity-60" />

                            {/* Status Lisensi Bar di Atas Foto */}
                            <div className="absolute bottom-2 left-2 right-2 bg-[#0F1E36]/90 backdrop-blur-md px-2 py-1 rounded border border-[#C5A880]/30 text-center">
                              <span className="text-[10px] font-mono text-[#C5A880] uppercase tracking-wider flex items-center justify-center gap-1">
                                <BadgeCheck size={12} /> {member.status}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Kolom Informasi & Jabatan */}
                        <div className="sm:col-span-7 flex flex-col justify-between h-full space-y-3">
                          <div>
                            <span className="inline-block px-3 py-1 rounded-md bg-[#0F1E36] text-[#C5A880] font-mono text-[10px] uppercase font-bold tracking-wider mb-2 border border-[#C5A880]/30">
                              {member.tier}
                            </span>
                            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F1E36] leading-snug">
                              {member.name}
                            </h3>
                            <p className="text-xs font-bold text-[#C5A880] uppercase tracking-wide mt-1">
                              {member.role}
                            </p>
                            <p className="text-[11px] text-[#0F1E36]/70 italic mt-0.5">
                              {member.practiceLead}
                            </p>
                          </div>

                          {/* Lisensi Resmi Bar PERADI */}
                          <div className="bg-[#F8F6F0] p-3 rounded-xl border border-[#0F1E36]/10 text-xs">
                            <span className="text-[10px] font-mono text-[#0F1E36]/60 uppercase block mb-0.5">
                              Nomor Registrasi Advokat Resmi:
                            </span>
                            <span className="font-mono font-bold text-[#0F1E36] text-[11px] flex items-center gap-1.5">
                              <FileBadge size={14} className="text-[#C5A880]" /> {member.license}
                            </span>
                          </div>
                        </div>

                      </div>

                      {/* Deskripsi Kepemimpinan & Praktik */}
                      <p className="text-[#0F1E36]/80 text-xs sm:text-sm leading-relaxed font-normal mb-6 pb-6 border-b border-[#0F1E36]/10">
                        {member.description}
                      </p>

                      {/* Riwayat Pendidikan & Pengalaman */}
                      <div className="space-y-2.5 mb-6 text-xs text-[#0F1E36]/80">
                        <div className="flex items-start gap-2.5">
                          <GraduationCap size={16} className="text-[#C5A880] shrink-0 mt-0.5" />
                          <span className="leading-snug">{member.education}</span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <Briefcase size={16} className="text-[#C5A880] shrink-0 mt-0.5" />
                          <span className="leading-snug">{member.experience}</span>
                        </div>
                      </div>

                      {/* Kompetensi Yuridis (Badges) */}
                      <div className="mb-6">
                        <span className="text-[10px] font-mono uppercase text-[#0F1E36]/60 tracking-wider block mb-2 font-semibold">
                          Fokus Penanganan Perkara:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {member.competencies.map((comp, cIdx) => (
                            <span
                              key={cIdx}
                              className="px-2.5 py-1 rounded-md bg-[#F8F6F0] border border-[#0F1E36]/10 text-[11px] text-[#0F1E36] font-medium"
                            >
                              {comp}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Tombol Aksi Langsung ke Konsultasi Resmi */}
                    <div className="pt-4 border-t border-[#0F1E36]/10 flex flex-col sm:flex-row gap-2.5">
                      <Link
                        href="/contact"
                        className="w-full bg-[#0F1E36] hover:bg-[#142847] text-[#C5A880] font-bold py-3 px-4 rounded-xl transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-[#C5A880]/30 shadow-md"
                      >
                        <span>Jadwalkan Konsultasi dengan Partner</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* 4. CREDENTIALS & INTEGRITAS BAR ADVOKAT (NAVY & GOLD BANNER) */}
      <section className="py-20 bg-[#0F1E36] text-[#F8F6F0] relative overflow-hidden border-t border-[#C5A880]/30">
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#C5A880]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-5xl mx-auto bg-[#142847] border-2 border-[#C5A880]/40 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">

            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C5A880] tracking-widest uppercase">
                <ShieldCheck size={16} /> Kepatuhan Standar Perhimpunan Advokat Indonesia
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#F8F6F0]">
                Legalitas Penuh & Sumpah Jabatan Advokat
              </h3>
              <p className="text-[#F8F6F0]/75 text-sm font-normal leading-relaxed">
                Seluruh Partner dan Associate di Bhadrika Byakta Law Firm memiliki Berita Acara Sumpah (BAS) resmi Pengadilan Tinggi, memegang lisensi aktif , dan tunduk mutlak pada Kode Etik Advokat Indonesia (KEAI).
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#b8996e] text-[#0F1E36] font-bold px-8 py-4 rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 border border-[#C5A880] text-sm whitespace-nowrap"
              >
                Inisiasi Penanganan Perkara <ArrowRight size={17} />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}