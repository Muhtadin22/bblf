'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';
import { 
  Scale, 
  ShieldCheck, 
  Gavel, 
  Building2, 
  BadgeCheck, 
  FileBadge, 
  GraduationCap, 
  Briefcase, 
  ArrowRight, 
  Quote, 
  PhoneCall, 
  MessageSquare, 
  UserCheck, 
  Users, 
  FileText, 
  Lock, 
  Shield, 
  Landmark,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  HelpCircle,
  Clock,
  Compass,
  Search,
  Layers,
  Sparkles
} from 'lucide-react';

// --- TIPE FILTER HIERARKI ---
type TeamFilterTier = 'all' | 'senior' | 'middle' | 'staff';

// --- DATA ANGGOTA TIM RESMI DENGAN HIERARKI BERJENJANG ---

// 1. TIER PALING ATAS: SENIOR PARTNER
const seniorPartner = {
  name: 'Fadly Rahman, S.H., S.E., M.Si',
  role: 'Senior Partner',
  chamberTitle: 'Kepala Kamar Litigasi Pidana & Pembelaan Strategis',
  education: 'Magister Ilmu Administrasi/Hukum | Sarjana Hukum & Sarjana Ekonomi',
  license: 'PERADI DPC Jakarta & BAS Pengadilan Tinggi',
  basNumber: 'BAS PT DKI Jakarta No. W10.U/1420/HK.01/VIII/2011',
  experience: '15+ Tahun Jam Terbang Litigasi Tingkat Tinggi',
  specialties: [
    'Pidana Korporasi & White-Collar Crime',
    'Praperadilan Putusan MK No. 21/2014',
    'Tipikor & Delik Khusus',
    'Pendampingan BAP 24/7'
  ],
  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
  quote: 'Keberanian beracara di hadapan penyidik dan majelis hakim bertumpu pada ketelitian membedah alat bukti materiil serta ketegasan mengawal due process of law tanpa kompromi.'
};

// 2. TIER TENGAH: MANAGING PARTNER, JUNIOR ASSOCIATE, & PARALEGAL
const middleTierMembers = [
  {
    id: 'mantri-adietia',
    name: 'Mantri Adietia, S.H., C.PLO',
    role: 'Managing Partner',
    tierBadge: 'Executive Management',
    focusArea: 'Manajemen Penanganan Perkara & Hukum Bisnis Komersial',
    education: 'Sarjana Hukum | Certified Procurement Legal Officer (C.PLO)',
    credential: 'PERADI Resmi & Tersumpah Pengadilan Tinggi',
    basNumber: 'BAS PT Jawa Barat No. W11.U/912/HK.01/V/2014',
    experience: '12+ Tahun Pengalaman Litigasi & Manajemen Kantor',
    duties: [
      'Kepemimpinan Operasional & Standar Mutu Berkas Perkara',
      'Strategi Penyelesaian Sengketa Kontrak & Wanprestasi Bisnis',
      'Negosiasi Damai Komersial & Legal Risk Assessment'
    ],
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80'
  },
  {
    id: 'farhan-rizki',
    name: 'Muhammad Farhan Rizki, S.H.',
    role: 'Junior Associate',
    tierBadge: 'Legal Counsel',
    focusArea: 'Litigasi Perdata, Pidana Umum & Legal Drafting',
    education: 'Sarjana Hukum (Konsentrasi Praktik Peradilan & Kemahiran Hukum)',
    credential: 'Anggota Perhimpunan Advokat Indonesia (PERADI)',
    basNumber: 'Tersumpah Pengadilan Tinggi & Advokat Muda',
    experience: 'Jam Terbang Asistensi Sidang & Pemberkasan Gugatan',
    duties: [
      'Riset Yurisprudensi Mahkamah Agung & Doktrin KUHP Baru',
      'Penyusunan Draf Gugatan, Eksepsi, Replik, Duplik, & Pledoi',
      'Asistensi Persidangan di Pengadilan Negeri & Pengadilan Niaga'
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80'
  },
  {
    id: 'suwarno',
    name: 'Suwarno, CLA.',
    role: 'Paralegal',
    tierBadge: 'Case Support & Evidence',
    focusArea: 'Investigasi Bukti Materiil & Tata Kelola Perkara Lapangan',
    education: 'Certified Legal Auditor / Certified Legal Assistant (CLA)',
    credential: 'Certified Legal Assistant / Registrasi Resmi Kantor Hukum',
    basNumber: 'Registrasi Paralegal Litigasi BBLF',
    experience: 'Spesialis Penelusuran Fakta & Penanganan Saksi Lapangan',
    duties: [
      'Pencarian, Verifikasi, & Pengamanan Alat Bukti Lapangan',
      'Koordinasi Administrasi Pemeriksaan di Kantor Kepolisian/Kejaksaan',
      'Penyusunan Kronologi Fakta & Matriks Bukti Perkara'
    ],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80'
  }
];

// 3. TIER PALING BAWAH: STAF OPERASIONAL & KESEKRETARIATAN
const staffMembers = [
  {
    id: 'sabilul-muhtadin',
    name: 'Sabilul Muhtadin, CPI.',
    role: 'Staf',
    subRole: 'Staf Administrasi Hukum & Penjadwalan Perkara',
    focusArea: 'Manajemen Jadwal Berperkara, Administrasi Berkas Perkara & Pelayanan Klien',
    education: 'Certified Professional Investigator (CPI) & Administrasi Hukum',
    badge: 'Legal Operations Support',
    duties: [
      'Penjadwalan Konsultasi Klien & Rapat Persiapan Sidang',
      'Registrasi Administrasi E-Court & E-Litigation Mahkamah Agung',
      'Protokol Kerahasiaan Arsip Berkas Perkara Klien'
    ],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80'
  },
  {
    id: 'irwan-malana',
    name: 'Muhammad Irwan Malana, CPI.',
    role: 'Staf',
    subRole: 'Staf Kesekretariatan & Korespondensi Resmi',
    focusArea: 'Kesekretariatan Kantor, Pengarsipan Dokumen Resmi & Registrasi Perkara',
    education: 'Certified Professional Investigator (CPI) & Kesekretariatan Legal',
    badge: 'Secretariat & Registry',
    duties: [
      'Pengelolaan Surat Masuk/Keluar, Somasi, & Surat Kuasa Khusus',
      'Pelayanan Registrasi Klien & Logistik Persidangan Peradilan',
      'Verifikasi Dokumen Kelengkapan Administrasi Lembaga'
    ],
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&q=80'
  }
];

// --- DATA: ARSITEKTUR GUGUS TUGAS PERKARA (CASE TASK FORCE ARCHITECTURE) ---
const taskForceSteps = [
  {
    step: '01',
    role: 'Senior Partner',
    actor: 'Fadly Rahman, S.H., S.E., M.Si',
    responsibility: 'Lead Legal Strategist & Trial Counsel',
    desc: 'Menentukan doktrin pembelaan hukum, memimpin sidang krusial, dan menjadi penasihat utama dalam negosiasi atau permohonan Praperadilan.',
    icon: Gavel
  },
  {
    step: '02',
    role: 'Managing Partner',
    actor: 'Mantri Adietia, S.H., C.PLO',
    responsibility: 'Case Controller & Operational Lead',
    desc: 'Mengendalikan alur kerja penanganan perkara harian, audit kualitas surat gugatan/eksepsi, serta koordinasi taktis bersama klien.',
    icon: Scale
  },
  {
    step: '03',
    role: 'Junior Associate',
    actor: 'Muhammad Farhan Rizki, S.H.',
    responsibility: 'Juridical Researcher & Legal Drafter',
    desc: 'Melakukan riset yurisprudensi Mahkamah Agung, analisis doktrin KUHP Baru, serta menyusun draf dokumen beracara peradilan.',
    icon: FileText
  },
  {
    step: '04',
    role: 'Paralegal',
    actor: 'Suwarno, CLA.',
    responsibility: 'Field Investigator & Evidence Marshaller',
    desc: 'Melakukan verifikasi faktual bukti di lapangan, pemetaan saksi, dan koordinasi cepat di kepolisian maupun kejaksaan.',
    icon: Compass
  },
  {
    step: '05',
    role: 'Staf Hukum',
    actor: 'Sabilul Muhtadin, CPI. & M. Irwan Malana, CPI.',
    responsibility: 'Registrar & E-Court Administrator',
    desc: 'Memastikan kepatuhan jadwal sidang, pengarsipan berkas rahasia, serta administrasi digital sistem peradilan online Mahkamah Agung.',
    icon: Landmark
  }
];

// --- DATA: FAQ PENUGASAN TIM HUKUM ---
const teamFaqs = [
  {
    q: 'Apakah Senior Partner atau Managing Partner langsung mendampingi saat pemeriksaan BAP atau sidang?',
    a: 'Ya. Dalam setiap perkara litigasi berisiko tinggi (tindak pidana khusus, korporasi, atau gugatan bernilai besar), Senior Partner Fadly Rahman, S.H., S.E., M.Si dan Managing Partner Mantri Adietia, S.H., C.PLO bertindak sebagai penanggung jawab utama yang langsung hadir mendampingi di kepolisian, kejaksaan, maupun memimpin persidangan di pengadilan.'
  },
  {
    q: 'Bagaimana jaminan kerahasiaan dokumen jika staf dan paralegal ikut mengurus berkas perkara?',
    a: 'Seluruh personel Bhadrika Byakta Law Firm—mulai dari Partner, Associate, Paralegal hingga Staf Administrasi—terikat secara hukum oleh Non-Disclosure Agreement (NDA) internal yang ketat serta mematuhi asas kerahasiaan jabatan (Attorney-Client Privilege) berdasarkan Pasal 19 UU No. 18 Tahun 2003 tentang Advokat.'
  },
  {
    q: 'Bagaimana mekanisme pembagian tugas tim saat menangani situasi darurat di luar jam kerja (24/7)?',
    a: 'Kami mengoperasikan unit siaga darurat penanganan BAP. Begitu kontak darurat diterima, Senior Partner dan Paralegal lapangan segera dikerahkan untuk hadir di kantor kepolisian/kejaksaan dalam hitungan jam guna memastikan tidak terjadi pelanggaran hak acara (due process of law).'
  },
  {
    q: 'Apakah calon klien dapat meminta sesi temu wicara privat khusus dengan pimpinan firma?',
    a: 'Tentu. Anda dapat menjadwalkan konsultasi langsung dengan Senior Partner Fadly Rahman, S.H., S.E., M.Si melalui formulir pendaftaran resmi atau saluran WhatsApp siaga kami untuk asesmen awal pokok perkara secara konfidensial.'
  }
];

// --- ANIMATION VARIANTS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 70, damping: 16 } 
  }
};

export default function TeamPage() {
  const [activeTierFilter, setActiveTierFilter] = useState<TeamFilterTier>('all');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIdx(openFaqIdx === index ? null : index);
  };

  return (
    <div className="selection:bg-[#C5A880] selection:text-[#0F1E36] bg-[#F8F6F0] text-[#0F1E36] font-sans overflow-hidden">
      
      {/* 1. HERO SECTION: OTORITAS DEWAN ADVOKAT & HIERARKI KANTOR HUKUM */}
      <section className="relative min-h-[65vh] flex items-center justify-center bg-[#0F1E36] overflow-hidden pt-36 pb-20 border-b border-[#C5A880]/20">
        
        {/* Dekorasi Latar & Radial Glow */}
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
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#142847] border border-[#C5A880]/30 shadow-inner mb-6">
              <Scale className="text-[#C5A880] shrink-0" size={16} />
              <span className="text-[#C5A880] text-xs font-semibold tracking-widest uppercase font-mono">
                Dewan Advokat Tersumpah & Tim Hukum &bull; BBLF
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F8F6F0] font-bold mb-6 leading-[1.15]">
              Dewan Pengacara & <br />
              <span className="text-[#C5A880] relative inline-block font-serif italic mt-1">
                Kekuatan Tim Hukum Berintegritas.
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C5A880] to-transparent" />
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-[#F8F6F0]/85 text-base md:text-lg font-normal mb-8 leading-relaxed max-w-3xl mx-auto">
              Sinergi penanganan perkara berjenjang: dipimpin oleh <strong>Senior Partner</strong> berpengalaman, dikawal secara taktis oleh <strong>Managing Partner</strong>, <strong>Junior Associate</strong>, dan <strong>Paralegal</strong>, serta didukung ketertiban operasional para <strong>Staf Hukum</strong> resmi.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#F8F6F0]/70 font-mono pt-4 border-t border-[#C5A880]/20">
              <span className="flex items-center gap-2">
                <BadgeCheck size={16} className="text-[#C5A880]" /> Berita Acara Sumpah (BAS) Pengadilan Tinggi
              </span>
              <span className="flex items-center gap-2">
                <Lock size={15} className="text-[#C5A880]" /> Jaminan Kerahasiaan (Attorney-Client Privilege)
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={15} className="text-[#C5A880]" /> Kepatuhan Kode Etik Advokat Indonesia
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. INTERACTIVE TIER FILTER BAR (NAVIGASI TINGKATAN TIM) */}
      <section className="bg-white border-b border-[#0F1E36]/10 py-5 sticky top-20 z-30 shadow-sm backdrop-blur-md bg-white/95">
        <div className="container mx-auto px-6 md:px-12 flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase font-bold text-[#0F1E36] tracking-wider">
              Hierarki Penugasan:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'Seluruh Tim (6 Personel)' },
              { id: 'senior', label: 'Tier I: Senior Partner' },
              { id: 'middle', label: 'Tier II: Partner, Associate & Paralegal' },
              { id: 'staff', label: 'Tier III: Staf Operasional' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTierFilter(tab.id as TeamFilterTier)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                  activeTierFilter === tab.id
                    ? 'bg-[#0F1E36] text-[#C5A880] border-[#C5A880] font-bold shadow-sm'
                    : 'bg-[#F8F6F0] text-[#0F1E36]/80 border-[#0F1E36]/15 hover:border-[#C5A880]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 3. STRUKTUR HIERARKI UTAMA TIM ADVOKAT, PARALEGAL, & STAF */}
      <section className="py-20 bg-[#F8F6F0] border-b border-[#0F1E36]/10">
        <div className="container mx-auto px-6 md:px-12">

          {/* TIER 1 (PALING ATAS): SENIOR PARTNER (FADLY RAHMAN, S.H., S.E., M.Si) */}
          {(activeTierFilter === 'all' || activeTierFilter === 'senior') && (
            <div className="mb-20">
              <div className="flex items-center justify-between pb-3 mb-8 border-b border-[#0F1E36]/15 max-w-6xl mx-auto">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0F1E36] text-[#C5A880] flex items-center justify-center font-serif font-bold text-sm border border-[#C5A880]/40">
                    I
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#0F1E36]/60 font-bold block">
                      Pimpinan Utama Dewan Advokat &bull; Tier 1
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0F1E36]">
                      Senior Partner
                    </h2>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#C5A880] bg-[#0F1E36] px-3 py-1 rounded-full border border-[#C5A880]/30 hidden sm:inline-block">
                  LEAD TRIAL COUNSEL
                </span>
              </div>

              {/* KARTU PROFIL SENIOR PARTNER */}
              <div className="max-w-6xl mx-auto relative rounded-3xl p-2.5 bg-gradient-to-b from-[#C5A880] via-[#C5A880]/30 to-[#0F1E36] shadow-2xl">
                
                {/* Ornamen Sudut Emas */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#C5A880] pointer-events-none z-20" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#C5A880] pointer-events-none z-20" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#C5A880] pointer-events-none z-20" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#C5A880] pointer-events-none z-20" />

                <div className="bg-[#0F1E36] text-[#F8F6F0] rounded-[22px] border-2 border-[#C5A880]/40 p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A880]/5 rounded-bl-full pointer-events-none" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Foto Paspartu Senior Partner */}
                    <div className="lg:col-span-4">
                      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#142847] border-2 border-[#C5A880] shadow-2xl group">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={seniorPartner.image} 
                          alt={seniorPartner.name}
                          className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36] via-transparent to-transparent opacity-80" />
                        
                        <div className="absolute bottom-3 left-3 right-3 bg-[#0F1E36]/95 backdrop-blur-md px-3 py-2 rounded-xl border border-[#C5A880]/40 text-center">
                          <span className="text-[10px] font-mono text-[#C5A880] font-bold uppercase tracking-wider block">
                            {seniorPartner.experience}
                          </span>
                          <span className="text-[10px] font-mono text-[#F8F6F0]/70 block mt-0.5">
                            Status: Advokat Aktif Tersumpah
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Deskripsi & Kredibilitas Senior Partner */}
                    <div className="lg:col-span-8 space-y-6">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#142847] border border-[#C5A880]/40 text-[#C5A880] font-mono text-xs uppercase font-bold tracking-wider mb-2">
                          <BadgeCheck size={14} />
                          <span>PIMPINAN DEWAN ADVOKAT</span>
                        </div>
                        
                        <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#F8F6F0] leading-tight">
                          {seniorPartner.name}
                        </h3>
                        
                        <p className="text-sm font-semibold text-[#C5A880] mt-1">
                          {seniorPartner.role} &bull; {seniorPartner.chamberTitle}
                        </p>
                      </div>

                      {/* Kutipan Komitmen Profesional */}
                      <div className="p-5 rounded-2xl bg-[#142847]/80 border border-[#C5A880]/20 relative">
                        <Quote className="text-[#C5A880]/20 absolute top-3 right-3" size={28} />
                        <p className="text-xs sm:text-sm text-[#F8F6F0]/90 italic leading-relaxed font-light">
                          &ldquo;{seniorPartner.quote}&rdquo;
                        </p>
                      </div>

                      {/* Riwayat Pendidikan & Legalitas Lisensi */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-[#F8F6F0]/80">
                        <div className="p-3 rounded-xl bg-[#0F1E36]/90 border border-[#C5A880]/15 space-y-1">
                          <div className="flex items-center gap-2 text-[#C5A880] font-bold text-[11px] font-mono">
                            <GraduationCap size={15} /> KUALIFIKASI AKADEMIK
                          </div>
                          <p className="text-[11px] leading-relaxed text-[#F8F6F0]/85">{seniorPartner.education}</p>
                        </div>

                        <div className="p-3 rounded-xl bg-[#0F1E36]/90 border border-[#C5A880]/15 space-y-1">
                          <div className="flex items-center gap-2 text-[#C5A880] font-bold text-[11px] font-mono">
                            <FileBadge size={15} /> LISENSI RESMI BAR
                          </div>
                          <p className="text-[11px] leading-relaxed font-mono text-[#F8F6F0]/85">{seniorPartner.license}</p>
                        </div>
                      </div>

                      {/* Spesialisasi Perkara */}
                      <div>
                        <span className="text-[10px] font-mono uppercase text-[#C5A880] tracking-wider block mb-2 font-bold">
                          Fokus Penanganan Litigasi Utama:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {seniorPartner.specialties.map((spec, sIdx) => (
                            <span 
                              key={sIdx}
                              className="px-3 py-1 rounded-lg bg-[#142847] border border-[#C5A880]/30 text-xs text-[#F8F6F0] font-medium"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Tombol Aksi Konsultasi Senior Partner */}
                      <div className="pt-3 border-t border-[#C5A880]/20 flex flex-col sm:flex-row gap-3">
                        <Link 
                          href="/contact"
                          className="bg-[#C5A880] hover:bg-[#b8996e] text-[#0F1E36] font-bold px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider text-center transition-all shadow-lg border border-[#C5A880] inline-flex items-center justify-center gap-2"
                        >
                          <span>Konsultasi Khusus dengan Senior Partner</span>
                          <ArrowRight size={14} />
                        </Link>

                        <a 
                          href="https://wa.me/6285697259015?text=Halo%20BBLF,%20saya%20ingin%20berkonsultasi%20dengan%20Senior%20Partner%20Fadly%20Rahman."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#142847] hover:bg-[#1c365f] text-[#C5A880] border border-[#C5A880]/40 font-semibold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider text-center transition-all inline-flex items-center justify-center gap-2"
                        >
                          <MessageSquare size={14} />
                          <span>Direct WhatsApp</span>
                        </a>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TIER 2: MANAGING PARTNER, JUNIOR ASSOCIATE, & PARALEGAL */}
          {(activeTierFilter === 'all' || activeTierFilter === 'middle') && (
            <div className="mb-20">
              <div className="flex items-center justify-between pb-3 mb-8 border-b border-[#0F1E36]/15 max-w-6xl mx-auto">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0F1E36] text-[#C5A880] flex items-center justify-center font-serif font-bold text-sm border border-[#C5A880]/40">
                    II
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#0F1E36]/60 font-bold block">
                      Kamar Pelaksana Litigasi & Asistensi &bull; Tier 2
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0F1E36]">
                      Managing Partner, Junior Associate, & Paralegal
                    </h2>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#0F1E36]/70 bg-white px-3 py-1 rounded-full border border-[#0F1E36]/15 hidden sm:inline-block">
                  3 REKANAN HUKUM
                </span>
              </div>

              {/* GRID 3 KARTU BERBORDER TEGAS & ELEGAN */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {middleTierMembers.map((member) => (
                  <div 
                    key={member.id}
                    className="relative rounded-3xl p-1.5 bg-gradient-to-b from-[#0F1E36] via-[#C5A880]/40 to-[#0F1E36] shadow-xl hover:shadow-2xl transition-all group flex flex-col justify-between"
                  >
                    <div className="bg-white rounded-[22px] border border-[#0F1E36]/15 p-6 md:p-7 flex flex-col justify-between h-full relative overflow-hidden">
                      
                      <div>
                        {/* Foto Formal Berpaspartu Navy-Gold */}
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#0F1E36] border-2 border-[#C5A880]/40 mb-5">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36] via-transparent to-transparent opacity-70" />
                          
                          <div className="absolute top-3 left-3 bg-[#0F1E36]/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#C5A880]/30 text-[10px] font-mono text-[#C5A880] font-bold uppercase">
                            {member.tierBadge}
                          </div>

                          <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#0F1E36]/90 px-2 py-1 rounded-md border border-[#C5A880]/20 text-center">
                            <span className="text-[10px] font-mono text-[#F8F6F0]/90">
                              {member.experience}
                            </span>
                          </div>
                        </div>

                        {/* Jabatan & Nama Lengkap */}
                        <span className="text-[11px] font-mono uppercase font-bold text-[#C5A880] block mb-1">
                          {member.role}
                        </span>
                        <h3 className="font-serif font-bold text-xl text-[#0F1E36] leading-snug mb-2">
                          {member.name}
                        </h3>
                        
                        <p className="text-xs text-[#0F1E36]/80 font-medium mb-4 leading-relaxed">
                          {member.focusArea}
                        </p>

                        {/* Detail Akademik & Lisensi */}
                        <div className="space-y-1.5 py-3 border-t border-[#0F1E36]/10 text-xs text-[#0F1E36]/75">
                          <div className="flex items-start gap-2">
                            <GraduationCap size={14} className="text-[#C5A880] shrink-0 mt-0.5" />
                            <span className="text-[11px] leading-tight">{member.education}</span>
                          </div>
                          <div className="flex items-center gap-2 font-mono text-[10px] text-[#0F1E36]/85">
                            <FileBadge size={14} className="text-[#C5A880] shrink-0" />
                            <span className="truncate">{member.credential}</span>
                          </div>
                        </div>

                        {/* Rincian Tugas & Fokus Penanganan */}
                        <div className="pt-3 border-t border-[#0F1E36]/10 space-y-2 mb-6">
                          <span className="text-[10px] font-mono uppercase text-[#0F1E36]/60 font-bold block">
                            Ruang Lingkup Tugas:
                          </span>
                          {member.duties.map((duty, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2 text-xs">
                              <CheckCircle2 size={13} className="text-[#C5A880] shrink-0 mt-0.5" />
                              <span className="text-[11px] text-[#0F1E36]/80 leading-snug">{duty}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tombol Kontak Cepat */}
                      <div className="pt-3 border-t border-[#0F1E36]/10">
                        <Link 
                          href="/contact"
                          className="w-full bg-[#0F1E36] hover:bg-[#142847] text-[#C5A880] py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider text-center block transition-colors border border-[#C5A880]/30 shadow"
                        >
                          Jadwalkan Konsultasi Perkara
                        </Link>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TIER 3: STAF OPERASIONAL & ADMINISTRASI HUKUM */}
          {(activeTierFilter === 'all' || activeTierFilter === 'staff') && (
            <div>
              <div className="flex items-center justify-between pb-3 mb-8 border-b border-[#0F1E36]/15 max-w-6xl mx-auto">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0F1E36] text-[#C5A880] flex items-center justify-center font-serif font-bold text-sm border border-[#C5A880]/40">
                    III
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#0F1E36]/60 font-bold block">
                      Dukungan Operasional, Kesekretariatan & Pelayanan &bull; Tier 3
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0F1E36]">
                      Staf Operasional & Kesekretariatan Hukum
                    </h2>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#0F1E36]/70 bg-white px-3 py-1 rounded-full border border-[#0F1E36]/15 hidden sm:inline-block">
                  2 PERSONEL STAF
                </span>
              </div>

              {/* GRID 2 KARTU STAF BERBORDER BERWIBAWA & SOLID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {staffMembers.map((staff) => (
                  <div 
                    key={staff.id}
                    className="bg-white rounded-3xl p-7 border-2 border-[#0F1E36]/20 hover:border-[#C5A880] transition-all shadow-md hover:shadow-xl flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-5 mb-5">
                        <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-[#0F1E36] border-2 border-[#C5A880]/40 shrink-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img 
                            src={staff.image} 
                            alt={staff.name}
                            className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all" 
                          />
                        </div>
                        <div>
                          <span className="inline-block px-2 py-0.5 rounded bg-[#0F1E36] text-[#C5A880] text-[10px] font-mono font-bold uppercase tracking-wider mb-1">
                            {staff.role}
                          </span>
                          <h3 className="font-serif font-bold text-xl text-[#0F1E36] leading-tight">
                            {staff.name}
                          </h3>
                          <p className="text-xs text-[#0F1E36]/70 mt-0.5 font-medium">
                            {staff.subRole}
                          </p>
                        </div>
                      </div>

                      <p className="text-xs text-[#0F1E36]/80 leading-relaxed font-normal mb-5 pb-4 border-b border-[#0F1E36]/10">
                        {staff.focusArea}
                      </p>

                      <div className="space-y-2 mb-6">
                        <span className="text-[10px] font-mono uppercase text-[#0F1E36]/60 font-bold block">
                          Tanggung Jawab Operasional:
                        </span>
                        {staff.duties.map((duty, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs">
                            <CheckCircle2 size={13} className="text-[#C5A880] shrink-0 mt-0.5" />
                            <span className="text-[11px] text-[#0F1E36]/80 leading-snug">{duty}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#0F1E36]/10 flex items-center justify-between text-xs font-mono text-[#0F1E36]/60">
                      <span>{staff.badge}</span>
                      <BadgeCheck size={14} className="text-[#C5A880]" />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

        </div>
      </section>

      {/* 4. ARSITEKTUR GUGUS TUGAS PERKARA (CASE TASK FORCE ARCHITECTURE) */}
      <section className="py-24 bg-[#0F1E36] text-[#F8F6F0] relative overflow-hidden border-b border-[#C5A880]/20">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C5A880] font-bold tracking-widest uppercase text-xs px-3.5 py-1.5 bg-[#142847] border border-[#C5A880]/30 rounded-full inline-block font-mono">
              Collaborative Litigation Task Force
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#F8F6F0] font-bold mt-3">
              Mekanisme Kolaborasi Gugus Tugas Penanganan Perkara
            </h2>
            <p className="text-[#F8F6F0]/75 text-sm mt-3 font-normal leading-relaxed">
              Di Bhadrika Byakta Law Firm, klien tidak hanya ditangani oleh satu individu, melainkan didukung oleh sistem gugus tugas terpadu yang memadukan strategi pimpinan, draf yuridis mendalam, investigasi lapangan, serta ketertiban administrasi peradilan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
            {taskForceSteps.map((task, idx) => {
              const Icon = task.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#142847]/80 border-2 border-[#C5A880]/30 hover:border-[#C5A880] rounded-2xl p-6 flex flex-col justify-between transition-colors group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xl font-bold text-[#C5A880]">
                        {task.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#0F1E36] border border-[#C5A880]/40 text-[#C5A880] flex items-center justify-center">
                        <Icon size={18} />
                      </div>
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A880] font-bold block mb-1">
                      {task.role}
                    </span>
                    <h4 className="font-serif font-bold text-sm text-[#F8F6F0] mb-1">
                      {task.actor}
                    </h4>
                    <p className="text-[11px] font-mono text-[#F8F6F0]/60 mb-3">
                      {task.responsibility}
                    </p>

                    <p className="text-xs text-[#F8F6F0]/75 leading-relaxed font-light">
                      {task.desc}
                    </p>
                  </div>

                  <div className="w-full h-1 bg-[#0F1E36] rounded-full mt-5 overflow-hidden">
                    <div className="w-1/3 h-full bg-[#C5A880] group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. STANDAR INTEGRITAS & SERTIFIKASI DEWAN ADVOKAT */}
      <section className="py-20 bg-white border-b border-[#0F1E36]/10">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          
          <div className="bg-[#F8F6F0] rounded-3xl p-8 md:p-12 border border-[#0F1E36]/15 shadow-sm space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#0F1E36]/10">
              <div>
                <span className="text-[#0F1E36] font-bold tracking-widest uppercase text-xs font-mono px-3 py-1 bg-[#C5A880]/20 border border-[#C5A880]/40 rounded-full inline-block">
                  Legalitas & Standar Etika
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0F1E36] mt-2">
                  Komitmen Kepatuhan Profesi & Integritas Peradilan
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0F1E36] bg-white px-4 py-2 rounded-xl border border-[#0F1E36]/15 shadow-sm">
                <BadgeCheck size={16} className="text-[#C5A880]" />
                <span>KEAI & UU NO. 18/2003 COMPLIANT</span>
              </div>
            </div>

            <p className="text-[#0F1E36]/80 text-xs sm:text-sm leading-relaxed font-normal">
              Seluruh advokat di Bhadrika Byakta Law Firm memegang legalitas beracara penuh di bawah sumpah jabatan Pengadilan Tinggi dan tunduk mutlak pada Kode Etik Advokat Indonesia (KEAI). Kami menjunjung tinggi integritas peradilan yang bersih: menolak segala bentuk praktik transaksional ilegal dan mengedepankan pembuktian materiil yang kredibel demi melindungi kehormatan hukum klien.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-[#0F1E36]/10 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#0F1E36] text-[#C5A880] flex items-center justify-center">
                  <FileBadge size={18} />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#0F1E36]">Legalitas BAS Pengadilan Tinggi</h4>
                <p className="text-[11px] text-[#0F1E36]/70 leading-relaxed">
                  Hak imunitas dan wewenang beracara sah di seluruh peradilan negeri, pengadilan niaga, tipikor, dan Mahkamah Agung.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#0F1E36]/10 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#0F1E36] text-[#C5A880] flex items-center justify-center">
                  <Lock size={18} />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#0F1E36]">Hak Tolak & Rahasia Jabatan</h4>
                <p className="text-[11px] text-[#0F1E36]/70 leading-relaxed">
                  Perlindungan informasi klien mutlak berdasarkan Pasal 19 UU Advokat tanpa ancaman penyitaan data oleh pihak lawan.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#0F1E36]/10 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#0F1E36] text-[#C5A880] flex items-center justify-center">
                  <ShieldCheck size={18} />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#0F1E36]">Penapisan Konflik Kepentingan</h4>
                <p className="text-[11px] text-[#0F1E36]/70 leading-relaxed">
                  Audit internal independen sebelum penandatanganan Surat Kuasa untuk memastikan loyalitas penuh tanpa kontradiksi.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. FAQ PENUGASAN TIM HUKUM & REPRESENTASI PERSIDANGAN */}
      <section className="py-24 bg-[#F8F6F0] border-b border-[#0F1E36]/10">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          
          <div className="text-center mb-14">
            <span className="text-[#0F1E36] font-bold tracking-widest uppercase text-xs px-3.5 py-1.5 bg-[#C5A880]/20 border border-[#C5A880]/40 rounded-full inline-flex items-center gap-1.5 font-mono">
              <HelpCircle size={14} className="text-[#0F1E36]" /> Klarifikasi Penugasan Advokat
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0F1E36] font-bold mt-3">
              Tanya Jawab Seputar Penunjukan Tim Kuasa Hukum
            </h2>
            <p className="text-[#0F1E36]/70 text-sm mt-2">
              Kejelasan mengenai siapa yang mendampingi Anda di lapangan, penanganan perkara darurat, dan standar kerahasiaan.
            </p>
          </div>

          <div className="space-y-4">
            {teamFaqs.map((faq, index) => {
              const isOpen = openFaqIdx === index;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl border border-[#0F1E36]/10 hover:border-[#C5A880]/60 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 font-serif text-base md:text-lg font-bold text-[#0F1E36] hover:text-[#C5A880] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className={`w-8 h-8 rounded-full bg-[#F8F6F0] flex items-center justify-center shrink-0 border border-[#0F1E36]/10 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#0F1E36] text-[#C5A880]' : 'text-[#0F1E36]'}`}>
                      <ChevronDown size={18} />
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="p-6 pt-0 text-[#0F1E36]/80 text-xs sm:text-sm font-normal leading-relaxed border-t border-[#0F1E36]/5">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. CLOSING CALL TO ACTION (CTA) & INISIASI KONSULTASI PERKARA */}
      <section className="py-20 bg-[#0F1E36] text-[#F8F6F0] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto bg-[#142847] border-2 border-[#C5A880]/40 rounded-3xl p-8 md:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs text-[#C5A880] font-mono tracking-wider uppercase">
                <Lock size={14} /> Jaminan Kerahasiaan Bersama Dewan Advokat
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#F8F6F0]">
                Diskusikan Perkara Anda Bersama Dewan Pengacara Kami.
              </h3>
              <p className="text-[#F8F6F0]/75 text-xs sm:text-sm font-normal leading-relaxed">
                Jadwalkan temu wicara privat di ruang konferensi kantor fisik kami (Ruko Silktown Avenue) atau melalui sambungan langsung terenkripsi. Hak hukum Anda dilindungi sejak asesmen awal dimulai.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#b8996e] text-[#0F1E36] font-bold px-8 py-4 rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 border border-[#C5A880] text-xs uppercase tracking-wider whitespace-nowrap"
              >
                <span>Inisiasi Penanganan Perkara</span>
                <ArrowRight size={16} />
              </Link>
              
              <a
                href="https://wa.me/6285697259015?text=Halo%20BBLF,%20saya%20ingin%20berkonsultasi%20dengan%20tim%20advokat%20secara%20rahasia."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#0F1E36] hover:bg-[#142847] text-[#C5A880] border border-[#C5A880]/40 font-semibold px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider whitespace-nowrap"
              >
                <MessageSquare size={15} />
                <span>Hotline Advokat 24/7</span>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}