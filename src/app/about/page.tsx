'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { 
  Scale, 
  ShieldCheck, 
  Lock, 
  FileText, 
  Compass, 
  Gavel, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Quote, 
  BadgeCheck, 
  Landmark, 
  ChevronRight, 
  Clock, 
  Award,
  Search,
  EyeOff,
  UserCheck
} from 'lucide-react';

// --- DATA: NILAI-NILAI INTI OPERASIONAL ---
const coreValues = [
  {
    title: 'Kerahasiaan Mutlak',
    englishTitle: 'Strict Confidentiality',
    desc: 'Menegakkan asas Legal Professional Privilege tanpa batas waktu atas seluruh data, fakta materiil, dan dokumen perkara klien.',
    subdesc: 'Setiap informasi dilindungi protokol kerahasiaan berlapis dan perjanjian kerahasiaan non-disclosure (NDA) yang mengikat secara hukum.',
    icon: Lock
  },
  {
    title: 'Ketajaman Analisis Yuridis',
    englishTitle: 'Juridical Acumen',
    desc: 'Membedah setiap permasalahan hukum melalui riset doktrinal mendalam, preseden peradilan terbaru, dan kalkulasi risiko multidimensi.',
    subdesc: 'Menghasilkan opini serta strategi hukum yang presisi guna melindungi kepentingan komersial maupun reputasi jangka panjang klien.',
    icon: Compass
  },
  {
    title: 'Integritas Tanpa Kompromi',
    englishTitle: 'Fiduciary Duty & Integrity',
    desc: 'Menjalankan mandat profesi dengan kejujuran mutlak dan dedikasi penuh pada perlindungan hak hukum klien tanpa konflik kepentingan.',
    subdesc: 'Memegang teguh sumpah advokat serta Kode Etik Advokat Indonesia (KEAI) dalam setiap interaksi di dalam maupun di luar peradilan.',
    icon: ShieldCheck
  },
  {
    title: 'Transparansi Penanganan',
    englishTitle: 'Procedural Transparency',
    desc: 'Menyajikan penilaian perkara secara objektif, struktur honorarium yang transparan, dan laporan perkembangan status secara berkala.',
    subdesc: 'Klien senantiasa memperoleh kejelasan atas setiap tahapan hukum yang ditempuh, dasar regulasi, serta alokasi langkah kerja tim.',
    icon: FileText
  }
];

// --- DATA: METODOLOGI PENDEKATAN STRATEGIS 4 LANGKAH ---
const strategicSteps = [
  {
    number: '01',
    title: 'Asesmen Pokok Perkara & Verifikasi Dokumen',
    subtitle: 'Preliminary Legal Audit',
    desc: 'Pemeriksaan komprehensif atas fakta yuridis, validitas alat bukti, kedudukan hukum para pihak (legal standing), serta penyaringan ketat potensi benturan kepentingan (conflict check).',
    icon: Search
  },
  {
    number: '02',
    title: 'Formulasi Strategi Yuridis & Mitigasi Risiko',
    subtitle: 'Strategic Roadmap Design',
    desc: 'Perumusan rencana aksi hukum yang memetakan opsi penyelesaian terbaik—mengombinasikan pendekatan non-litigasi preventif dengan kesiapan konstruksi hukum litigasi yang kokoh.',
    icon: FileText
  },
  {
    number: '03',
    title: 'Advokasi Terukur & Eksekusi Taktis',
    subtitle: 'Representation & Enforcement',
    desc: 'Pelaksanaan representasi hukum di hadapan otoritas regulasi, forum negosiasi komersial, majelis arbitrase (BANI/internasional), maupun di setiap tingkatan sidang pengadilan.',
    icon: Gavel
  },
  {
    number: '04',
    title: 'Pendampingan Berkelanjutan & Pelaporan Berkala',
    subtitle: 'Continuous Counsel & Reporting',
    desc: 'Penyampaian laporan perkembangan resmi secara transparan, pendampingan eksekusi putusan atau kesepakatan, serta penguatan tata kelola mitigasi risiko hukum paska-perkara.',
    icon: Clock
  }
];

// --- DATA: PILAR STANDAR PROFESI & KEPATUHAN ETIKA ---
const compliancePillars = [
  {
    title: 'Landasan UU Advokat & KEAI',
    desc: 'Advokat dan partner kami berpraktik secara sah di bawah naungan UU No. 18 Tahun 2003 tentang Advokat dan terikat penuh pada Kode Etik Advokat Indonesia (KEAI).',
    icon: Landmark
  },
  {
    title: 'Protokol Uji Konflik Kepentingan',
    desc: 'Penerapan audit independen internal sebelum menerima kuasa perkara guna memastikan tidak ada kontradiksi kepentingan dengan klien yang sedang maupun pernah kami wakili.',
    icon: EyeOff
  },
  {
    title: 'Larangan Penjaminan Hasil Perkara',
    desc: 'Selaras dengan standar etik advokat Indonesia, kami berkomitmen memberikan upaya pembelaan maksimal dan objektif tanpa memberikan janji atau garansi kemenangan yang menyesatkan.',
    icon: Scale
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
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 70, damping: 16 } 
  }
};

export default function AboutPage() {
  return (
    <div className="selection:bg-[#C5A880] selection:text-[#0F1E36] bg-[#F8F6F0] text-[#0F1E36] font-sans overflow-hidden">
      
      {/* 1. HERO SECTION: AUTORITATIF & PRESTISIUS */}
      <section className="relative min-h-[75vh] flex items-center justify-center bg-[#0F1E36] overflow-hidden pt-36 pb-24 border-b border-[#C5A880]/20">
        
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
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#142847] border border-[#C5A880]/30 shadow-inner mb-7">
              <Scale className="text-[#C5A880] shrink-0" size={16} />
              <span className="text-[#C5A880] text-xs font-semibold tracking-widest uppercase">
                Profil & Filosofi Advokasi &bull; Bhadrika Byakta Law Firm
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F8F6F0] font-bold mb-6 leading-[1.15]">
              Integritas Advokasi, Keunggulan Strategi Hukum, & <br />
              <span className="text-[#C5A880] relative inline-block font-serif italic mt-1">
                Kepastian Keadilan.
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C5A880] to-transparent" />
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-[#F8F6F0]/85 text-base md:text-lg font-normal mb-10 leading-relaxed max-w-3xl mx-auto">
              Bhadrika Byakta Law Firm didirikan sebagai firma hukum korporasi dan penyelesaian sengketa terpercaya di Jakarta. Kami memadukan ketajaman yuridis tingkat tinggi dengan kepatuhan etika tanpa kompromi untuk melindungi aset, keberlangsungan bisnis, dan hak fundamental klien.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#b8996e] text-[#0F1E36] font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-black/20 flex items-center justify-center gap-3 border border-[#C5A880] text-sm"
              >
                Jadwalkan Konsultasi Awal 
                <ArrowRight size={17} />
              </Link>
              <a 
                href="#metodologi" 
                className="w-full sm:w-auto bg-[#142847]/90 hover:bg-[#142847] text-[#F8F6F0] font-medium px-8 py-4 rounded-xl transition-all border border-[#C5A880]/40 flex items-center justify-center hover:border-[#C5A880] text-sm"
              >
                Pelajari Metodologi Kerja
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. FIRM OVERVIEW & FILOSOFI FIRMA (EXECUTIVE STATEMENT & FIDUCIARY DUTY) */}
      <section className="py-24 bg-[#F8F6F0] border-b border-[#0F1E36]/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Kolom Narasi Filosofi */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#C5A880]/20 border border-[#C5A880]/40 text-[#0F1E36] text-xs font-bold tracking-widest uppercase">
                Dedikasi Yuridis
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl text-[#0F1E36] font-bold leading-tight">
                Menegakkan Kewajiban Fudusia dengan Presisi Analisis dan Loyalitas Penuh pada Hak Klien.
              </h2>
              
              <p className="text-[#0F1E36]/80 text-base leading-relaxed font-normal">
                Di tengah dinamika regulasi komersial dan kompleksitas sengketa di Indonesia, Bhadrika Byakta Law Firm hadir tidak sekadar sebagai penasihat teknis hukum, melainkan sebagai mitra strategis yang mengawal perlindungan aset dan reputasi klien. Kami memegang teguh <span className="font-semibold text-[#0F1E36]">kewajiban fidusia (fiduciary duty)</span> yang menempatkan kepentingan hukum sah klien sebagai prioritas tertinggi.
              </p>

              <p className="text-[#0F1E36]/80 text-base leading-relaxed font-normal">
                Bagi kami, keunggulan advokasi bukanlah retorika sesaat, melainkan hasil perpaduan antara audit dokumen yang ketat, penguasaan doktrin hukum perdata-niaga maupun kepidanaan, serta keberanian beracara yang terukur di hadapan otoritas peradilan maupun meja negosiasi bilateral.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#0F1E36]/10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#C5A880] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0F1E36]">Perlindungan Komprehensif</h4>
                    <p className="text-xs text-[#0F1E36]/70 mt-0.5">Penanganan sengketa yang memitigasi dampak komersial & operasional.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#C5A880] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0F1E36]">Kerahasiaan Mutlak</h4>
                    <p className="text-xs text-[#0F1E36]/70 mt-0.5">Jaminan perlindungan data rahasia korporasi dan individu berstatus HNWIs.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Kolom Box Kutipan Managing Partner (Elegan & Berwibawa) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="bg-[#0F1E36] text-[#F8F6F0] p-8 md:p-10 rounded-2xl border-2 border-[#C5A880]/40 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A880]/10 rounded-full blur-[100px] pointer-events-none" />
                
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#C5A880]/20">
                  <div className="flex items-center gap-2">
                    <Gavel size={20} className="text-[#C5A880]" />
                    <span className="text-xs font-serif tracking-widest text-[#C5A880] uppercase">Prinsip Kepemimpinan Firma</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#F8F6F0]/60">EST. JAKARTA</span>
                </div>

                <Quote className="text-[#C5A880]/20 mb-3" size={36} />

                <blockquote className="font-serif italic text-[#F8F6F0]/90 text-base md:text-lg leading-relaxed mb-8">
                  &ldquo;Keahlian hukum seorang advokat diuji dari kemampuannya melihat celah risiko sebelum menjadi sengketa, dan ketenangannya dalam merumuskan pembelaan ketika keadilan klien sedang dipertaruhkan.&rdquo;
                </blockquote>

                <div className="pt-4 border-t border-[#C5A880]/20 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#142847] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] shrink-0 font-serif font-bold text-sm">
                    BB
                  </div>
                  <div>
                    <h4 className="font-bold text-[#F8F6F0] text-sm">Bhadrika Daniswara, S.H., LL.M.</h4>
                    <p className="text-xs text-[#C5A880]">Managing Partner & Advokat Senior</p>
                    <p className="text-[10px] text-[#F8F6F0]/60 mt-0.5">Lisensi  / Kurator & Pengurus Terdaftar</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. CORE VALUES: 4 KARTU NILAI OPERASIONAL ELEGAN */}
      <section className="py-24 bg-white border-b border-[#0F1E36]/10">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#0F1E36] font-bold tracking-widest uppercase text-xs px-3.5 py-1.5 bg-[#C5A880]/20 border border-[#C5A880]/40 rounded-full inline-block">
              Fondasi Operasional
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0F1E36] font-bold mt-3">Nilai-Nilai Inti Firma</h2>
            <p className="text-[#0F1E36]/70 text-sm mt-2">Prinsip dasar yang memandu setiap langkah advokasi, konsultasi, dan interaksi kami bersama klien.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#F8F6F0] p-8 rounded-2xl border border-[#0F1E36]/10 hover:border-[#C5A880] transition-all shadow-sm hover:shadow-lg flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-13 h-13 p-3 bg-[#0F1E36] text-[#C5A880] rounded-xl border border-[#C5A880]/30 flex items-center justify-center group-hover:bg-[#C5A880] group-hover:text-[#0F1E36] transition-colors shadow">
                        <Icon size={24} />
                      </div>
                      <span className="text-[11px] font-mono tracking-wider text-[#0F1E36]/60 uppercase font-semibold">
                        {val.englishTitle}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#0F1E36] mb-3">{val.title}</h3>
                    <p className="text-[#0F1E36]/80 text-sm font-normal leading-relaxed mb-3">
                      {val.desc}
                    </p>
                    <p className="text-[#0F1E36]/60 text-xs font-normal leading-relaxed">
                      {val.subdesc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#0F1E36]/10 flex items-center justify-between text-xs text-[#C5A880] font-semibold">
                    <span>Standar Kepatuhan Aktif</span>
                    <BadgeCheck size={16} />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. PENDEKATAN & METODOLOGI KERJA: STEP-BY-STEP WORKFLOW */}
      <section id="metodologi" className="py-24 bg-[#0F1E36] text-[#F8F6F0] relative overflow-hidden border-b border-[#C5A880]/20">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#C5A880] font-bold tracking-widest uppercase text-xs px-3.5 py-1.5 bg-[#142847] border border-[#C5A880]/30 rounded-full inline-block">
              Alur Kerja Standar Operasional
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#F8F6F0] font-bold mt-3">Pendekatan Strategis Kami</h2>
            <p className="text-[#F8F6F0]/75 text-sm mt-3 font-normal">
              Setiap perkara ditangani melalui empat tahap terstruktur guna memastikan kepatuhan regulasi, kecermatan bukti, dan efektivitas hasil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategicSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#142847]/80 border border-[#C5A880]/20 hover:border-[#C5A880] rounded-2xl p-6 relative flex flex-col justify-between transition-colors group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="font-mono text-2xl font-bold text-[#C5A880]">{step.number}</span>
                      <div className="w-10 h-10 rounded-lg bg-[#0F1E36] border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880]">
                        <Icon size={20} />
                      </div>
                    </div>
                    
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A880] block mb-1">
                      {step.subtitle}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#F8F6F0] mb-3 leading-snug">{step.title}</h4>
                    <p className="text-xs text-[#F8F6F0]/70 leading-relaxed font-normal">{step.desc}</p>
                  </div>

                  <div className="w-full h-1 bg-[#0F1E36] rounded-full mt-6 overflow-hidden">
                    <div className="w-1/4 h-full bg-[#C5A880] group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. KEPATUHAN STANDAR HUKUM & ETIKA (ETHICS & COMPLIANCE BADGE SECTION) */}
      <section className="py-20 bg-[#F8F6F0] border-b border-[#0F1E36]/10">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#0F1E36]/15 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#0F1E36]/10">
              <div>
                <span className="text-[#0F1E36] font-bold tracking-widest uppercase text-xs px-3 py-1 bg-[#C5A880]/20 border border-[#C5A880]/40 rounded-full inline-block">
                  Ethics & Professional Conduct
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0F1E36] mt-2">
                  Komitmen Kepatuhan Standar Etika Profesi
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#0F1E36]/70 bg-[#F8F6F0] px-4 py-2 rounded-xl border border-[#0F1E36]/10">
                <BadgeCheck size={16} className="text-[#C5A880]" />
                <span>KEAI COMPLIANT PRACTICE</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {compliancePillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="space-y-3">
                    <div className="w-11 h-11 rounded-xl bg-[#0F1E36] text-[#C5A880] flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <h4 className="font-serif font-bold text-[#0F1E36] text-base">{pillar.title}</h4>
                    <p className="text-xs text-[#0F1E36]/75 leading-relaxed font-normal">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Disclaimer Resmi */}
            <div className="mt-8 pt-6 border-t border-[#0F1E36]/10 text-center">
              <p className="text-[11px] text-[#0F1E36]/60 leading-relaxed font-normal max-w-3xl mx-auto italic">
                *Pernyataan Hukum: Informasi yang disajikan pada situs ini semata-mata bersifat edukatif dan pengenalan institusional, bukan merupakan nasihat hukum formal (formal legal advice) yang menciptakan hubungan advokat-klien sebelum ditandatanganinya Perjanjian Jasa Hukum (Letter of Engagement) secara sah.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. CLOSING CALL-TO-ACTION (CTA SECTION KE /contact) */}
      <section className="py-20 bg-[#0F1E36] text-[#F8F6F0] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto bg-[#142847] border-2 border-[#C5A880]/40 rounded-3xl p-8 md:p-14 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs text-[#C5A880] font-mono tracking-wider uppercase">
                <Lock size={14} /> Konsultasi Konfidensial & Terproteksi
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#F8F6F0]">
                Diskusikan Pokok Perkara Anda Bersama Partner Kami.
              </h3>
              <p className="text-[#F8F6F0]/75 text-sm font-normal leading-relaxed">
                Jadwalkan pertemuan pendahuluan untuk asesmen yuridis yang objektif, aman, dan menyeluruh demi perlindungan kepentingan hukum Anda.
              </p>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <Link 
                href="/contact" 
                className="w-full md:w-auto bg-[#C5A880] hover:bg-[#b8996e] text-[#0F1E36] font-bold px-8 py-4 rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 border border-[#C5A880] text-sm whitespace-nowrap"
              >
                Jadwalkan Konsultasi Awal <ArrowRight size={17} />
              </Link>
              <p className="text-[11px] text-[#F8F6F0]/50 text-center mt-2.5">
                Respons evaluasi &le; 24 jam kerja
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}