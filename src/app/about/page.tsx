'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Award, 
  Target, 
  Eye, 
  CheckCircle2, 
  ArrowRight, 
  History, 
  Scale, 
  Briefcase,
  Gavel,
  FileCheck,
  Building2,
  Lock,
  UserCheck
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState<'all' | 'history' | 'vision' | 'ethics' | 'awards'>('all');
  const [selectedMilestone, setSelectedMilestone] = useState<number>(0);

  const coreValues = [
    { title: 'Integritas Mutlak', desc: 'Menjunjung tinggi standar etika profesi advokat dan kejujuran tanpa kompromi dalam setiap penanganan perkara.', icon: ShieldCheck },
    { title: 'Keunggulan Strategis', desc: 'Menghadirkan taktik hukum yang tajam, terukur, dan berorientasi penuh pada kemenangan serta perlindungan klien.', icon: Award },
    { title: 'Kerahasiaan Klien', desc: 'Menjamin perlindungan mutlak atas seluruh data, privasi, dan dokumen rahasia perusahaan maupun individu berdasarkan sumpah jabatan.', icon: Lock },
    { title: 'Responsif & Proaktif', desc: 'Siaga sedia mendampingi dan memberikan solusi hukum dengan kecepatan serta ketepatan analisis yang tinggi 24/7.', icon: Eye }
  ];

  const milestones = [
    { year: '2011', title: 'Pendirian Firma', desc: 'Bhadrika Byakta Lawfirm didirikan di Jakarta Selatan oleh para partner berpengalaman di bidang litigasi dan korporasi.' },
    { year: '2015', title: 'Perluasan Divisi Korporasi', desc: 'Membuka divisi khusus Merger & Akuisisi (M&A) untuk melayani klien korporasi multinasional dan nasional.' },
    { year: '2020', title: 'Penghargaan Hukum Nasional', desc: 'Diakui sebagai salah satu firma hukum berkembang dengan tingkat penyelesaian perkara korporasi tertinggi.' },
    { year: '2026', title: 'Transformasi Layanan Digital', desc: 'Meluncurkan platform konsultasi hukum terpadu guna mempercepat respons dan akses layanan bagi klien.' }
  ];

  const ethicsStandards = [
    { title: 'Sumpah Jabatan Advokat', desc: 'Seluruh partner dan advokat bernaung di bawah payung hukum resmi dengan lisensi praktik sah yang tunduk pada Undang-Undang Advokat.' },
    { title: 'Mitigasi Konflik Kepentingan', desc: 'Penerapan protokol pemeriksaan internal yang ketat guna memastikan tidak ada benturan kepentingan dalam setiap penanganan perkara.' },
    { title: 'Transparansi Retainer & Biaya', desc: 'Skema pembiayaan jasa hukum dan litigasi disampaikan secara terbuka, terstruktur, dan disepakati melalui perjanjian resmi.' }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50 selection:bg-red-700 selection:text-white font-sans overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Title dengan Nuansa Formal */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-[#070e20] text-amber-400 border border-slate-800 shadow-xl mb-4">
            <Scale size={16} />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-200">Profil & Tata Kelola Firma Hukum</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-[#0a1128] font-bold mt-2 mb-4 leading-tight">
            Tentang Bhadrika Byakta Lawfirm
          </h1>
          <p className="text-slate-600 text-base font-light leading-relaxed">
            Firma hukum terkemuka di Jakarta yang berdiri di atas fondasi kepercayaan, ketajaman analisis hukum, dan keberanian membela keadilan tanpa kompromi.
          </p>
        </motion.div>

        {/* INTERACTIVE NAVIGATION FILTER (MENU PINTAS) */}
        <div className="flex justify-center mb-16 sticky top-24 z-30 py-2">
          <div className="inline-flex p-1.5 bg-white rounded-2xl border border-slate-200 gap-1.5 shadow-lg backdrop-blur-md">
            {[
              { id: 'all', label: 'Semua Profil' },
              { id: 'history', label: 'Sejarah & Filosofi', icon: History },
              { id: 'vision', label: 'Visi & Misi', icon: Scale },
              { id: 'ethics', label: 'Kepatuhan & Etik', icon: ShieldCheck },
              { id: 'awards', label: 'Jejak Langkah', icon: Briefcase }
            ].map((tab) => {
              const isActive = activeSection === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id as any)}
                  className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#070e20] text-amber-400 shadow-md font-bold' 
                      : 'text-slate-600 hover:text-[#0a1128] hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* KONTEN UTAMA YANG KOMPREHENSIF */}
        <div className="space-y-20">

          {/* SECTION 1: SEJARAH & FILOSOFI + QUOTE MANAGING PARTNER */}
          {(activeSection === 'all' || activeSection === 'history') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 md:p-14 rounded-3xl border border-slate-200/80 shadow-xl"
            >
              <div className="lg:col-span-7">
                <span className="text-red-700 font-bold tracking-widest uppercase text-xs">01. Perjalanan & Latar Belakang</span>
                <h2 className="font-serif text-3xl md:text-4xl text-[#0a1128] font-bold mt-2 mb-6 leading-tight">
                  Membangun Standar Baru Advokasi & Perlindungan Hukum di Indonesia.
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed font-light text-base">
                  Bhadrika Byakta Lawfirm hadir untuk menjawab kompleksitas tantangan hukum modern, baik bagi entitas korporasi multinasional maupun klien individu. Kami percaya bahwa penanganan perkara yang prima memerlukan perpaduan antara penguasaan regulasi yang mendalam dan kelihaian berstrategi di dalam maupun di luar ruang sidang.
                </p>
                <div className="space-y-3.5 pt-2 border-t border-slate-100">
                  {[
                    'Tim Partner dan Advokat Berlisensi dengan Jam Terbang Tinggi',
                    'Pendekatan Berbasis Solusi Komprehensif (Litigasi & Non-Litigasi)',
                    'Komitmen Penuh Terhadap Transparansi dan Kepentingan Klien'
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-800 text-sm font-medium">
                      <CheckCircle2 className="text-red-700 shrink-0" size={20} /> {text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Box Kutipan Managing Partner */}
              <div className="lg:col-span-5">
                <div className="bg-[#070e20] text-white p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden border border-slate-800">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-red-700/20 rounded-full blur-[100px]"></div>
                  <div className="flex items-center gap-2 mb-6">
                    <Gavel className="text-amber-400" size={24} />
                    <span className="text-xs font-mono uppercase tracking-wider text-amber-400">Pernyataan Managing Partner</span>
                  </div>
                  <blockquote className="font-serif italic text-slate-200 text-base leading-relaxed mb-6">
                    &ldquo;Keadilan bukanlah sekadar pasal di atas kertas, melainkan hasil nyata dari keberanian, ketelitian, dan integritas seorang advokat dalam memperjuangkan hak kliennya.&rdquo;
                  </blockquote>
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-white text-sm">Dr. Bhadrika Byakta, S.H., M.H.</h4>
                      <p className="text-xs text-slate-400">Senior Managing Partner</p>
                    </div>
                    <span className="text-amber-400/80 font-mono text-xs">BBLF-EXEC</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* SECTION 2: VISI & MISI */}
          {(activeSection === 'all' || activeSection === 'vision') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-red-700 font-bold tracking-widest uppercase text-xs">02. Arah & Tujuan</span>
                <h2 className="font-serif text-3xl text-[#0a1128] font-bold mt-1">Visi & Misi Strategis Firma</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#070e20] text-white p-10 rounded-3xl shadow-xl flex flex-col justify-between border border-slate-800">
                  <div>
                    <div className="w-14 h-14 bg-red-700 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <Target size={28} />
                    </div>
                    <h3 className="font-serif text-2xl font-bold mb-4">Visi Utama Firma</h3>
                    <p className="text-slate-300 text-sm leading-relaxed font-light">
                      Menjadi pilar institusi hukum terdepan dan paling dipercaya di Indonesia, dikenal karena keunggulan profesional, integritas tanpa kompromi, serta kontribusi nyata dalam menegakkan keadilan bagi dunia usaha dan masyarakat luas.
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-400 font-mono flex justify-between items-center">
                    <span>STATUS: ACTIVE INSTITUTION</span>
                    <span className="text-amber-400">EST. 2011</span>
                  </div>
                </div>

                <div className="bg-white p-10 rounded-3xl border border-slate-200/80 shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-red-50 text-red-700 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                      <Scale size={28} />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#0a1128] mb-4">Misi Strategis</h3>
                    <ul className="space-y-3.5 text-slate-600 text-sm font-light">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-red-700 shrink-0 mt-1" />
                        <span>Memberikan representasi hukum berkualitas tinggi yang berorientasi pada hasil kemenangan klien.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-red-700 shrink-0 mt-1" />
                        <span>Menjunjung tinggi kode etik advokat serta standar transparansi penuh dalam setiap penanganan perkara.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-red-700 shrink-0 mt-1" />
                        <span>Mengembangkan solusi hukum inovatif yang adaptif terhadap perkembangan regulasi nasional dan global.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 font-semibold">
                    Standar Pelayanan Prima 24/7 untuk Korporasi & Individu
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* SECTION 3: KEPATUHAN & ETIK PROFESI (BARU & KOMPLEKS) */}
          {(activeSection === 'all' || activeSection === 'ethics') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#0a1128] text-white p-8 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
              
              <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
                <span className="text-amber-400 font-bold tracking-widest uppercase text-xs font-mono">03. Professional Standards</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mt-1 text-white">Tata Kelola & Kepatuhan Etik Advokat</h2>
                <p className="text-slate-300 text-sm font-light mt-2">Komitmen mutlak kami dalam menjaga marwah profesi dan perlindungan hukum yang bersih.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {ethicsStandards.map((item, idx) => (
                  <div key={idx} className="bg-slate-900/90 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between shadow-lg">
                    <div>
                      <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center mb-6">
                        <UserCheck size={24} />
                      </div>
                      <h4 className="font-serif font-bold text-white text-lg mb-3">{item.title}</h4>
                      <p className="text-slate-300 text-xs leading-relaxed font-light">{item.desc}</p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-amber-400">
                      VERIFIED COMPLIANCE
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* SECTION 4: JEJAK LANGKAH (MILESTONE INTERAKTIF) */}
          {(activeSection === 'all' || activeSection === 'awards') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200/80 shadow-xl"
            >
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-red-700 font-bold tracking-widest uppercase text-xs">04. Rekam Jejak</span>
                <h2 className="font-serif text-3xl font-bold text-[#0a1128] mt-1">Jejak Langkah & Perkembangan Firma</h2>
                <p className="text-slate-600 text-sm font-light mt-1">Klik pada tahun di bawah untuk melihat rincian pencapaian.</p>
              </div>

              {/* Milestone Selector Tabs */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {milestones.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedMilestone(idx)}
                    className={`px-6 py-3 rounded-xl font-serif text-lg font-bold transition-all ${
                      selectedMilestone === idx 
                        ? 'bg-red-700 text-white shadow-lg scale-105' 
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {item.year}
                  </button>
                ))}
              </div>

              {/* Selected Milestone Detail Box */}
              <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-200 max-w-2xl mx-auto text-center shadow-inner">
                <span className="text-xs font-mono font-bold text-red-700 uppercase tracking-widest mb-2 block">Pencapaian Tahun {milestones[selectedMilestone].year}</span>
                <h3 className="font-serif text-2xl font-bold text-[#0a1128] mb-3">{milestones[selectedMilestone].title}</h3>
                <p className="text-slate-600 text-sm font-light leading-relaxed">{milestones[selectedMilestone].desc}</p>
              </div>
            </motion.div>
          )}

        </div>

        {/* Core Values Grid */}
        <div className="mt-28 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-red-700 font-bold tracking-widest uppercase text-xs px-3 py-1 bg-red-50 rounded-md">Prinsip Kerja</span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0a1128] font-bold mt-3">Nilai-Nilai Utama Firma</h2>
            <p className="text-slate-600 text-sm font-light mt-2">Prinsip yang menjadi pedoman operasional dan moral kami setiap hari.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 bg-red-50 text-red-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-700 group-hover:text-white transition-colors shadow-sm">
                    <Icon size={26} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0a1128] mb-3">{val.title}</h3>
                  <p className="text-slate-600 text-sm font-light leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner CTA */}
        <div className="bg-[#070e20] text-white rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-red-700/20 rounded-full blur-[120px]"></div>
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h3 className="font-serif text-3xl font-bold mb-3">Siap Mendiskusikan Perkara Anda?</h3>
            <p className="text-slate-300 text-sm font-light leading-relaxed">Tim partner advokat kami siap memberikan asesmen dan langkah hukum terarah untuk perlindungan terbaik bisnis maupun hak pribadi Anda.</p>
          </div>
          <div className="relative z-10">
            <Link href="/contact" className="bg-red-700 hover:bg-red-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-xl inline-flex items-center gap-2 text-sm whitespace-nowrap">
              Jadwalkan Konsultasi Resmi <ArrowRight size={16} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}