'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldCheck, 
  Briefcase, 
  Award, 
  Building2, 
  Gavel, 
  Scale, 
  Users, 
  ChevronDown, 
  Star, 
  CheckCircle2,
  HelpCircle,
  PhoneCall,
  Lock,
  FileCheck,
  BadgeAlert,
  BookOpenCheck
} from 'lucide-react';

// --- DATA MOCK: FAQ ---
const faqData = [
  {
    question: 'Bagaimana cara memulai konsultasi hukum di Bhadrika Byakta Lawfirm?',
    answer: 'Anda dapat langsung mengisi formulir pada halaman Kontak atau menjadwalkan pertemuan via WhatsApp/Telepon dengan tim partner kami. Kami akan melakukan asesmen awal terhadap pokok perkara Anda secara konfidensial.'
  },
  {
    question: 'Berapa biaya jasa hukum atau representasi litigasi?',
    answer: 'Biaya jasa hukum bervariasi tergantung pada tingkat kompleksitas perkara, ruang lingkup layanan (apakah non-litigasi atau litigasi), serta strategi penyelesaian yang disepakati secara transparan di awal perjanjian retainer.'
  },
  {
    question: 'Apakah kerahasiaan data dan dokumen klien terjamin?',
    answer: 'Tentu. Sebagai advokat berlisensi PERADI/KAI, kami terikat sumpah jabatan dan kode etik profesi yang mewajibkan kerahasiaan mutlak atas seluruh informasi serta dokumen milik klien.'
  },
  {
    question: 'Apakah firma melayani pendampingan hukum untuk korporasi skala besar?',
    answer: 'Ya, kami memiliki divisi khusus Hukum Perusahaan & Komersial yang rutin menangani restrukturisasi, kontrak bisnis, kepatuhan regulasi, hingga penyelesaian sengketa komersial korporasi nasional dan multinasional.'
  }
];

// --- DATA MOCK: TESTIMONIALS ---
const testimonials = [
  {
    name: 'Direktur Utama PT. Solusi Digital Nusantara',
    text: 'Pendampingan hukum yang luar biasa dalam urusan korporasi dan kontrak bisnis. Sangat strategis, teliti, dan profesional.',
    rating: 5
  },
  {
    name: 'Bapak Hendra W., Jakarta',
    text: 'Ketajaman analisis dan penanganan perkara perdata oleh tim Bhadrika Byakta membuahkan hasil yang sangat memuaskan dan berkeadilan.',
    rating: 5
  }
];

// --- ANIMATION VARIANTS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 60, damping: 15 } 
  }
};

export default function Home() {
  // State untuk Interaktif FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  
  // State untuk Interaktif Legal Dossier Tab di Banner Hero
  const [activeHeroTab, setActiveHeroTab] = useState<'litigasi' | 'korporasi' | 'arbitrase'>('litigasi');

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="selection:bg-red-700 selection:text-white bg-slate-50 overflow-hidden font-sans">
      
      {/* 1. HERO SECTION (FORMAL, BERNUANSA HUKUM, KOMPLEKS & INTERAKTIF) */}
      <section className="relative min-h-[96vh] flex items-center justify-center bg-[#070e20] overflow-hidden pt-32 pb-24">
        {/* Background Formal Legal Patterns & Glows */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 right-12 w-[550px] h-[550px] bg-red-700/10 rounded-full blur-[160px]"></div>
          <div className="absolute bottom-10 left-12 w-[450px] h-[450px] bg-blue-900/15 rounded-full blur-[140px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Kolom Kiri: Teks Otoritatif & Formal */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 text-left"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-slate-900/90 border border-slate-700/80 shadow-xl mb-6">
                <Scale className="text-amber-400 shrink-0" size={18} />
                <span className="text-slate-200 text-xs font-semibold tracking-widest uppercase">
                  Bhadrika Byakta Law Firm &bull; Advocates & Legal Consultants
                </span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-[1.15]">
                Menjunjung Tinggi Kepastian Hukum & <br />
                <span className="text-amber-400 relative inline-block">
                  Keadilan Tanpa Kompromi.
                  <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-amber-500/80 rounded-full"></span>
                </span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-slate-300 text-base md:text-lg font-light mb-10 leading-relaxed max-w-2xl">
                Menyediakan representasi litigasi tingkat tinggi, advis hukum korporasi strategis, dan perlindungan aset menyeluruh berdasarkan kode etik advokat dan perundang-undangan Republik Indonesia.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="group bg-red-700 hover:bg-red-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-xl shadow-red-950/40 flex items-center justify-center gap-3">
                  Jadwalkan Konsultasi Resmi <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/practice-areas" className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-xl transition-all border border-slate-700/80 flex items-center justify-center">
                  Cakupan Bidang Hukum
                </Link>
              </motion.div>
            </motion.div>

            {/* Kolom Kanan: Kompleks & Interaktif (Legal Dossier Banner Box) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="bg-slate-900/95 border border-slate-700/80 rounded-2xl shadow-2xl p-6 md:p-8 relative backdrop-blur-xl">
                
                {/* Header Dossier */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse"></div>
                    <span className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">Interactive Dossier // Divisi</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">ID: BBLF-2026</span>
                </div>

                {/* Tab Switcher Interaktif */}
                <div className="grid grid-cols-3 gap-2 p-1.5 bg-slate-950 rounded-xl mb-6 border border-slate-800">
                  {[
                    { id: 'litigasi', label: 'Litigasi' },
                    { id: 'korporasi', label: 'Korporasi' },
                    { id: 'arbitrase', label: 'Arbitrase' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveHeroTab(tab.id as any)}
                      className={`py-2.5 text-xs font-bold rounded-lg transition-all capitalize ${
                        activeHeroTab === tab.id 
                          ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Isi Konten Tab Interaktif */}
                <div className="min-h-[220px] flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    {activeHeroTab === 'litigasi' && (
                      <motion.div 
                        key="litigasi"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 10 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <div className="flex items-start gap-3">
                          <Gavel className="text-amber-400 shrink-0 mt-1" size={20} />
                          <div>
                            <h4 className="font-serif font-bold text-white text-base">Perwakilan Perkara Pidana & Perdata</h4>
                            <p className="text-slate-400 text-xs leading-relaxed mt-1">Pembelaan hukum komprehensif di tingkat Kepolisian, Kejaksaan, Pengadilan Negeri, hingga Mahkamah Agung dengan strategi terukur.</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-300 font-mono bg-slate-950/80 p-3 rounded-lg border border-slate-800">
                          <CheckCircle2 size={14} className="text-emerald-400" /> Rasio Keberhasilan Klien: 98%
                        </div>
                      </motion.div>
                    )}

                    {activeHeroTab === 'korporasi' && (
                      <motion.div 
                        key="korporasi"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 10 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <div className="flex items-start gap-3">
                          <Building2 className="text-amber-400 shrink-0 mt-1" size={20} />
                          <div>
                            <h4 className="font-serif font-bold text-white text-base">Hukum Bisnis & Kepatuhan Korporasi</h4>
                            <p className="text-slate-400 text-xs leading-relaxed mt-1">Penyusunan kontrak komersial, due diligence, restrukturisasi perusahaan, dan mitigasi risiko hukum operasional.</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-300 font-mono bg-slate-950/80 p-3 rounded-lg border border-slate-800">
                          <CheckCircle2 size={14} className="text-emerald-400" /> Melayani 50+ Entitas Korporasi
                        </div>
                      </motion.div>
                    )}

                    {activeHeroTab === 'arbitrase' && (
                      <motion.div 
                        key="arbitrase"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 10 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <div className="flex items-start gap-3">
                          <FileCheck className="text-amber-400 shrink-0 mt-1" size={20} />
                          <div>
                            <h4 className="font-serif font-bold text-white text-base">Penyelesaian Sengketa Alternatif</h4>
                            <p className="text-slate-400 text-xs leading-relaxed mt-1">Negosiasi, mediasi, dan arbitrase komersial (BANI) untuk penyelesaian sengketa bisnis yang konfidensial dan efisien.</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-300 font-mono bg-slate-950/80 p-3 rounded-lg border border-slate-800">
                          <CheckCircle2 size={14} className="text-emerald-400" /> Mediator & Arbiter Tersertifikasi
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Footer Box Banner */}
                  <div className="pt-4 mt-6 border-t border-slate-800 flex justify-between items-center text-[11px] text-slate-400 font-mono">
                    <span>SOP: STRICT CONFIDENTIAL</span>
                    <span className="text-amber-400 font-bold uppercase">Authorized Counsel</span>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="relative z-20 -mt-10 px-6 md:px-12 mb-12">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl shadow-slate-200/60 p-8 grid grid-cols-1 md:grid-cols-3 gap-8 border border-slate-100"
          >
            {[
              { icon: Briefcase, title: '500+', subtitle: 'Kasus Diselesaikan Tuntas' },
              { icon: ShieldCheck, title: '98%', subtitle: 'Tingkat Kemenangan Klien' },
              { icon: Award, title: '15+ Tahun', subtitle: 'Pengalaman Advokasi Elit' },
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-5 p-2 group hover:translate-x-1 transition-transform">
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-red-700 shrink-0 group-hover:bg-red-700 group-hover:text-white transition-colors">
                  <stat.icon size={26} />
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-[#0a1128] font-serif">{stat.title}</h4>
                  <p className="text-slate-500 text-sm font-medium mt-0.5">{stat.subtitle}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. PRACTICE AREAS PREVIEW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-red-700 font-bold tracking-widest uppercase text-xs px-3 py-1 bg-red-50 rounded-md">
                Keahlian Profesional
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#0a1128] font-bold mt-3">Area Praktik Utama</h2>
            </div>
            <Link href="/practice-areas" className="text-red-700 font-bold text-sm inline-flex items-center gap-2 hover:translate-x-1 transition-transform">
              Lihat Seluruh Layanan <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Hukum Perusahaan', desc: 'Pendampingan korporasi, kontrak, merger & akuisisi.', icon: Building2, link: '/practice-areas' },
              { title: 'Litigasi Pidana', desc: 'Pembelaan hukum tangguh di setiap tingkat peradilan.', icon: Gavel, link: '/practice-areas' },
              { title: 'Sengketa Perdata', desc: 'Penyelesaian konflik wanprestasi dan properti.', icon: Scale, link: '/practice-areas' },
              { title: 'Hukum Keluarga', desc: 'Perceraian, hak asuh anak, dan sengketa waris.', icon: Users, link: '/practice-areas' },
            ].map((item, idx) => (
              <motion.div 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                key={idx} 
                className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-red-200 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 bg-[#0a1128] text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-700 transition-colors shadow-md">
                    <item.icon size={26} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0a1128] mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm font-light leading-relaxed mb-6">{item.desc}</p>
                </div>
                <Link href={item.link} className="text-xs font-bold text-red-700 uppercase tracking-wider inline-flex items-center gap-1 group-hover:underline">
                  Pelajari Detail <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE FAQ ACCORDION SECTION */}
      <section className="py-24 bg-slate-100/70 border-y border-slate-200/60">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-red-700 font-bold tracking-widest uppercase text-xs px-3 py-1 bg-red-50 rounded-md inline-flex items-center gap-1.5">
              <HelpCircle size={14} /> Pertanyaan Umum
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0a1128] font-bold mt-3">Informasi & Tanya Jawab Hukum</h2>
            <p className="text-slate-600 text-sm font-light mt-2">Klik pada pertanyaan di bawah untuk melihat penjelasan lengkap dari tim advokat kami.</p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 font-serif text-lg font-bold text-[#0a1128] hover:text-red-700 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-red-50 text-red-700' : 'text-slate-500'}`}>
                      <ChevronDown size={18} />
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-6 pt-0 text-slate-600 text-sm font-light leading-relaxed border-t border-slate-100">
                          {faq.answer}
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

      {/* 4. CLIENT TESTIMONIALS SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-red-700 font-bold tracking-widest uppercase text-xs px-3 py-1 bg-red-50 rounded-md">
              Kepercayaan Klien
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0a1128] font-bold mt-3">Testimoni & Rekomendasi</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-amber-500 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm font-light leading-relaxed italic mb-6">
                    &ldquo;{item.text}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3 border-t border-slate-200 pt-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center text-xs">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0a1128] text-sm">{item.name}</h4>
                    <p className="text-xs text-slate-500">Klien Terverifikasi</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EMERGENCY CONTACT CALLOUT BAR */}
      <section className="py-16 bg-[#0a1128] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-700/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-red-700 text-white flex items-center justify-center shrink-0 shadow-lg">
              <PhoneCall size={26} />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold mb-1">Butuh Pendampingan Hukum Darurat?</h3>
              <p className="text-slate-300 text-sm font-light">Tim hotline advokat kami siap siaga membantu Anda 24/7.</p>
            </div>
          </div>
          <Link href="/contact" className="bg-white hover:bg-slate-100 text-[#0a1128] font-bold px-8 py-4 rounded-xl transition-all shadow-xl whitespace-nowrap">
            Hubungi Hotline Sekarang
          </Link>
        </div>
      </section>

    </div>
  );
}