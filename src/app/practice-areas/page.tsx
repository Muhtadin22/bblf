'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Gavel, 
  Scale, 
  Users, 
  ShieldAlert, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  Briefcase,
  Layers,
  Sparkles,
  ShieldCheck,
  Lock,
  BookOpenCheck
} from 'lucide-react';
import Link from 'next/link';

const categories = [
  { id: 'all', label: 'Semua Layanan' },
  { id: 'korporasi', label: 'Korporasi & Komersial' },
  { id: 'litigasi', label: 'Litigasi & Pidana' },
  { id: 'privat', label: 'Perdata & Keluarga' },
  { id: 'keuangan', label: 'Kepailitan & Restrukturisasi' },
];

const services = [
  {
    id: 1,
    category: 'korporasi',
    title: 'Hukum Perusahaan & Komersial',
    desc: 'Pendampingan komprehensif untuk entitas bisnis dari berbagai skala dalam operasional harian maupun aksi korporasi strategis nasional dan internasional.',
    points: ['Merger & Akuisisi (M&A)', 'Restrukturisasi Perusahaan', 'Legal Audit & Due Diligence', 'Kontrak & Perjanjian Komersial'],
    icon: Building2,
    badge: 'Populer Korporasi'
  },
  {
    id: 2,
    category: 'litigasi',
    title: 'Litigasi Pidana & White-Collar Crime',
    desc: 'Pembelaan hukum yang gigih, strategis, dan berintegritas tinggi di setiap tingkat peradilan guna melindungi hak-hak klien dari tuduhan hukum.',
    points: ['Tindak Pidana Khusus (Korupsi/Fraud)', 'Pidana Umum & Kepolisian', 'Pencemaran Nama Baik & UU ITE', 'Pendampingan Pemeriksaan Penyidikan'],
    icon: Gavel,
    badge: 'High Stakes Defense'
  },
  {
    id: 3,
    category: 'privat',
    title: 'Sengketa Perdata & Arbitrase',
    desc: 'Penyelesaian konflik wanprestasi, perbuatan melawan hukum, sengketa properti, hingga arbitrase nasional dan internasional secara efektif.',
    points: ['Sengketa Kontrak & Wanprestasi', 'Gugatan Ganti Rugi Material/Immaterial', 'Sengketa Tanah & Properti Komersial', 'Arbitrase (BANI & Alternatif Penyelesaian)'],
    icon: Scale,
    badge: 'Penyelesaian Sengketa'
  },
  {
    id: 4,
    category: 'privat',
    title: 'Hukum Keluarga & Waris',
    desc: 'Penanganan perkara privat dengan pendekatan humanis, menjaga kerahasiaan penuh, dan mengutamakan hasil terbaik bagi masa depan keluarga.',
    points: ['Pengurusan Perceraian & Hak Asuh', 'Pembagian Harta Gono-Gini', 'Sengketa & Pembagian Waris', 'Penyusunan Wasiat Sah'],
    icon: Users,
    badge: 'Privat & Sensitif'
  },
  {
    id: 5,
    category: 'keuangan',
    title: 'Kepailitan & PKPU',
    desc: 'Membantu debitur maupun kreditur dalam menyelesaikan kemelut utang-piutang melalui Pengadilan Niaga secara profesional dan terukur.',
    points: ['Penundaan Kewajiban Pembayaran Utang (PKPU)', 'Pengurusan Kepailitan Perusahaan', 'Negosiasi Restrukturisasi Utang', 'Eksekusi Jaminan Kebendaan'],
    icon: ShieldAlert,
    badge: 'Restrukturisasi'
  },
  {
    id: 6,
    category: 'korporasi',
    title: 'Legal Drafting & Kontrak Bisnis',
    desc: 'Penyusunan dan review dokumen perjanjian bisnis guna mengantisipasi celah hukum dan melindungi aset korporasi di masa depan.',
    points: ['Perjanjian Kerja Sama (MoU)', 'Kontrak Ketenagakerjaan & HR', 'Perjanjian Lisensi & Franchise', 'Legal Opinion (Pendapat Hukum)'],
    icon: FileText,
    badge: 'Preventif Hukum'
  }
];

export default function PracticeAreasPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(s => s.category === selectedCategory);

  return (
    <div className="pt-32 pb-24 bg-slate-50 selection:bg-red-700 selection:text-white font-sans overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section dengan Nuansa Formal */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-[#070e20] text-amber-400 border border-slate-800 shadow-xl mb-4">
            <Scale size={16} />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-200">Divisi Keahlian & Ruang Lingkup Hukum</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-[#0a1128] font-bold mt-2 mb-4 leading-tight">
            Area Praktik & Layanan Hukum
          </h1>
          <p className="text-slate-600 text-base font-light leading-relaxed">
            Menyediakan spektrum penuh layanan hukum berstandar tinggi yang dirancang khusus untuk memberikan perlindungan, mitigasi risiko, dan solusi optimal bagi personal maupun korporasi.
          </p>
        </motion.div>

        {/* INTERACTIVE CATEGORY FILTER TABS */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#070e20] text-amber-400 shadow-lg shadow-slate-900/20 scale-105 font-bold border border-slate-800' 
                    : 'bg-white text-slate-600 hover:text-[#0a1128] border border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* SERVICES GRID WITH ANIMATION */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          <AnimatePresence>
            {filteredServices.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Absolute Badge */}
                  <div className="absolute top-6 right-6 bg-red-50 text-red-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-red-100">
                    {item.badge}
                  </div>

                  <div>
                    <div className="w-14 h-14 bg-[#070e20] text-amber-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-700 group-hover:text-white transition-colors shadow-md">
                      <Icon size={26} />
                    </div>
                    
                    <h3 className="font-serif text-xl font-bold text-[#0a1128] mb-3 group-hover:text-red-700 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed font-light mb-6">
                      {item.desc}
                    </p>
                    
                    <div className="space-y-2 mb-8 border-t border-slate-100 pt-4">
                      {item.points.map((pt, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 size={14} className="text-red-700 shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link 
                    href="/contact" 
                    className="w-full bg-slate-50 hover:bg-red-700 text-[#0a1128] hover:text-white font-bold py-3.5 rounded-xl transition-all duration-300 text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-200 group-hover:border-red-700 shadow-sm"
                  >
                    <span>Konsultasi Bidang Ini</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* INFORMASI TAMBAHAN: PROTOCOL PENANGANAN PERKARA (INFORMASI KOMPLEKS & HUKUM) */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-red-700 font-bold tracking-widest uppercase text-xs">Standar Operasional (SOP)</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0a1128] mt-1">Protokol Penanganan Perkara di Bhadrika Byakta</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-red-700 text-white font-serif font-bold flex items-center justify-center mb-4 text-sm">01</div>
              <h4 className="font-serif font-bold text-[#0a1128] text-base mb-2">Asesmen & Due Diligence</h4>
              <p className="text-slate-600 text-xs leading-relaxed font-light">Analisis mendalam terhadap dokumen, fakta hukum, dan risiko tersembunyi guna merumuskan strategi penanganan paling efektif.</p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-red-700 text-white font-serif font-bold flex items-center justify-center mb-4 text-sm">02</div>
              <h4 className="font-serif font-bold text-[#0a1128] text-base mb-2">Strategi & Eksekusi</h4>
              <p className="text-slate-600 text-xs leading-relaxed font-light">Penerapan langkah hukum taktis, baik melalui jalur non-litigasi (negosiasi/mediasi) maupun representasi litigasi di pengadilan.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-red-700 text-white font-serif font-bold flex items-center justify-center mb-4 text-sm">03</div>
              <h4 className="font-serif font-bold text-[#0a1128] text-base mb-2">Mitigasi & Evaluasi Berkala</h4>
              <p className="text-slate-600 text-xs leading-relaxed font-light">Laporan progres berkala dan pengamanan jangka panjang untuk memastikan perlindungan aset serta kepentingan klien tetap stabil.</p>
            </div>
          </div>
        </div>

        {/* BOTTOM INTERACTIVE CALLOUT */}
        <div className="bg-[#070e20] text-white rounded-3xl p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-red-700/20 rounded-full blur-[120px]"></div>
          
          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <span className="text-amber-400 font-bold tracking-widest uppercase text-xs font-mono">Konsultasi Konfidensial</span>
            <h3 className="font-serif text-3xl font-bold mt-1 mb-3 text-white">Membutuhkan Analisis Kasus yang Kompleks?</h3>
            <p className="text-slate-300 text-sm font-light leading-relaxed">
              Setiap perkara memiliki keunikan dan urgensinya sendiri. Diskusikan masalah hukum Anda secara langsung dan konfidensial dengan Partner senior kami.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact" 
              className="bg-red-700 hover:bg-red-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 text-sm whitespace-nowrap"
            >
              Jadwalkan Pertemuan Resmi <ArrowRight size={16} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}