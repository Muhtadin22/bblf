'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  GraduationCap, 
  Briefcase, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Scale, 
  Gavel, 
  Building2, 
  UserCheck,
  Layers,
  FileBadge
} from 'lucide-react';
import Link from 'next/link';

const categories = [
  { id: 'all', label: 'Semua Partner & Advokat' },
  { id: 'corporate', label: 'Korporasi & Komersial' },
  { id: 'litigation', label: 'Litigasi & Pidana' },
  { id: 'civil', label: 'Sengketa Perdata' },
];

const teamMembers = [
  {
    id: 1,
    category: 'corporate',
    name: 'Bhadrika S.H., LL.M.',
    role: 'Managing Partner',
    specialty: 'Corporate & M&A Law',
    education: 'LL.M. in Corporate Law, Universitas Indonesia / Leiden University',
    experience: '18+ Tahun Pengalaman di Hukum Korporasi & Komersial',
    license: 'PERADI No. 412/PERADI/2011',
    description: 'Memimpin firma dengan keahlian mendalam dalam restrukturisasi korporasi, merger & akuisisi lintas batas, serta kepatuhan regulasi bisnis nasional maupun internasional.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
    badge: 'Senior Leadership'
  },
  {
    id: 2,
    category: 'litigation',
    name: 'Byakta S.H., M.H.',
    role: 'Senior Partner',
    specialty: 'Criminal Litigation & White-Collar Crime',
    education: 'Magister Hukum Pidana, Universitas Gadjah Mada',
    experience: '15+ Tahun Jam Terbang Litigasi Tingkat Tinggi',
    license: 'PERADI No. 659/PERADI/2014',
    description: 'Ahli strategi pembelaan hukum dalam kasus pidana korupsi, sengketa bisnis berisiko tinggi, serta pendampingan investigasi kepolisian dan kejaksaan.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
    badge: 'Litigator Utama'
  },
  {
    id: 3,
    category: 'civil',
    name: 'Arjuna S.H.',
    role: 'Senior Associate',
    specialty: 'Civil Dispute & Commercial Arbitration',
    education: 'Sarjana Hukum, Universitas Indonesia',
    experience: '10+ Tahun Menangani Sengketa Perdata & Komersial',
    license: 'PERADI No. 1024/PERADI/2017',
    description: 'Berpengalaman luas dalam penyelesaian sengketa perdata melalui jalur litigasi pengadilan maupun arbitrase komersial nasional (BANI).',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80',
    badge: 'Arbitrator & Litigator'
  },
  {
    id: 4,
    category: 'corporate',
    name: 'Dewi Lestari S.H., M.Kn.',
    role: 'Partner',
    specialty: 'Banking, Finance & Capital Markets',
    education: 'Magister Kenotariatan, Universitas Padjadjaran',
    experience: '12+ Tahun Perbankan & Hukum Keuangan',
    license: 'PERADI No. 883/PERADI/2015',
    description: 'Fokus pada penyusunan instrumen pembiayaan korporasi, hukum perbankan konvensional/syariah, serta transaksi pasar modal dan legal audit.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
    badge: 'Financial Law Expert'
  }
];

const firmStructure = [
  {
    level: 'Tier 1: Executive Leadership',
    title: 'Managing Partner',
    desc: 'Menentukan arah strategis firma, pengawasan mutu seluruh produk hukum, dan representasi utama di hadapan klien korporasi strategis.',
    icon: Scale
  },
  {
    level: 'Tier 2: Practice Group Leaders',
    title: 'Senior Partners & Partners',
    desc: 'Memimpin divisi spesifik (Litigasi, Korporasi, Perdata) dan memegang kendali langsung atas penanganan perkara berisiko tinggi.',
    icon: Gavel
  },
  {
    level: 'Tier 3: Operational Counsel',
    title: 'Senior Associates & Associates',
    desc: 'Melakukan riset hukum mendalam, due diligence, legal drafting, dan pendampingan harian klien dalam proses peradilan maupun non-litigasi.',
    icon: Briefcase
  },
  {
    level: 'Tier 4: Specialized Experts',
    title: 'Of Counsel & Consultants',
    desc: 'Pakar eksternal dan konsultan sektoral (pajak, perbankan, regulasi internasional) yang memperkuat analisis teknis perkara.',
    icon: Building2
  }
];

export default function TeamPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeStructureTab, setActiveStructureTab] = useState(0);

  const filteredTeam = selectedCategory === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.category === selectedCategory);

  return (
    <div className="pt-32 pb-24 bg-slate-50 selection:bg-red-700 selection:text-white font-sans overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-[#070e20] text-amber-400 border border-slate-800 shadow-xl mb-4">
            <Scale size={16} />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-200">Legal Professionals & Governance</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-[#0a1128] font-bold mt-2 mb-4">
            Tim Advokat & Struktur Firma Hukum
          </h1>
          <p className="text-slate-600 text-base font-light leading-relaxed">
            Didorong oleh dedikasi tinggi, integritas mutlak, dan keahlian mendalam, para pengacara tersumpah kami siap memberikan representasi hukum terbaik untuk Anda.
          </p>
        </motion.div>

        {/* --- BAGIAN BARU: STRUKTUR FIRMA HUKUM (LAW FIRM HIERARCHY) --- */}
        <div className="mb-24 bg-white p-8 md:p-14 rounded-3xl border border-slate-200/80 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-red-700 font-bold tracking-widest uppercase text-xs">Corporate Governance</span>
            <h2 className="font-serif text-3xl font-bold text-[#0a1128] mt-1">Struktur Organisasi Firma Hukum</h2>
            <p className="text-slate-600 text-sm font-light mt-2">Sistem hierarki kolaboratif untuk memastikan ketepatan dan kualitas penanganan setiap kasus.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {firmStructure.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = activeStructureTab === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => setActiveStructureTab(idx)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected 
                      ? 'bg-[#070e20] text-white border-slate-800 shadow-xl scale-[1.02]' 
                      : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      isSelected ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-red-50 text-red-700'
                    }`}>
                      <Icon size={22} />
                    </div>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-widest block mb-1 ${
                      isSelected ? 'text-amber-400' : 'text-slate-500'
                    }`}>
                      {item.level}
                    </span>
                    <h4 className="font-serif font-bold text-lg mb-2">{item.title}</h4>
                    <p className={`text-xs leading-relaxed font-light ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                      {item.desc}
                    </p>
                  </div>
                  <div className={`mt-6 pt-4 border-t text-[11px] font-mono flex items-center justify-between ${
                    isSelected ? 'border-slate-800 text-amber-400' : 'border-slate-200 text-red-700'
                  }`}>
                    <span>TIER {idx + 1} GOVERNANCE</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

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

        {/* TEAM GRID WITH ANIMATION */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-20 max-w-5xl mx-auto"
        >
          <AnimatePresence>
            {filteredTeam.map((member) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={member.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  <div className="relative w-full h-[320px] overflow-hidden bg-slate-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent opacity-80"></div>
                    
                    {/* Badge Role */}
                    <div className="absolute top-4 right-4 bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-xl shadow">
                      {member.role}
                    </div>

                    {/* Badge Category */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#0a1128] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-lg">
                      {member.badge}
                    </div>

                    {/* License Badge */}
                    <div className="absolute bottom-4 left-4 right-4 bg-[#070e20]/90 backdrop-blur-md text-amber-400 text-xs font-mono px-3 py-1.5 rounded-lg border border-slate-800 flex items-center justify-between">
                      <span className="flex items-center gap-1.5"><FileBadge size={14}/> Lisensi Bar</span>
                      <span className="font-bold">{member.license}</span>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-red-700 text-xs font-bold uppercase tracking-widest mb-1">{member.specialty}</p>
                    <h3 className="font-serif text-2xl font-bold text-[#0a1128] mb-3">{member.name}</h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed font-light mb-6">
                      {member.description}
                    </p>

                    <div className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-600 font-medium">
                      <div className="flex items-start gap-2.5">
                        <GraduationCap size={16} className="text-red-700 shrink-0 mt-0.5" />
                        <span>{member.education}</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Briefcase size={16} className="text-red-700 shrink-0 mt-0.5" />
                        <span>{member.experience}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-0">
                  <Link 
                    href="/contact" 
                    className="w-full bg-[#070e20] hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition-all duration-300 text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm border border-slate-800"
                  >
                    <span>Jadwalkan Konsultasi dengan Partner</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* BOTTOM CREDENTIALS BANNER */}
        <div className="bg-[#070e20] text-white rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-red-700/20 rounded-full blur-[120px]"></div>
          
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-amber-400 font-bold uppercase tracking-widest text-xs mb-2 font-mono">
              <ShieldCheck size={16} /> Lisensi Resmi PERADI & KAI
            </div>
            <h3 className="font-serif text-3xl font-bold mb-3 text-white">Advokat Berlisensi & Tersumpah</h3>
            <p className="text-slate-300 text-sm font-light leading-relaxed">
              Seluruh Partner dan Associate di Bhadrika Byakta Lawfirm memiliki izin resmi beracara di seluruh wilayah yurisdiksi Republik Indonesia serta terikat penuh pada sumpah jabatan dan kode etik advokat nasional.
            </p>
          </div>

          <div className="relative z-10">
            <Link 
              href="/contact" 
              className="bg-red-700 hover:bg-red-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-xl flex items-center gap-2 text-sm whitespace-nowrap"
            >
              Hubungi Tim Kami <ArrowRight size={16} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}