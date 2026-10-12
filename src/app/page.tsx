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
  HelpCircle, 
  PhoneCall, 
  Lock, 
  FileText, 
  Clock, 
  Compass, 
  BadgeCheck, 
  ChevronRight, 
  Quote, 
  Phone, 
  MessageSquare,
  Landmark,
  UserCheck,
  ShieldAlert,
  AlertTriangle,
  FileCheck,
  Search,
  BookOpenCheck,
  Layers,
  CheckCircle2
} from 'lucide-react';

// --- DATA: KLASIFIKASI AREA PRAKTIK (BERLANDASKAN REGULASI TERBARU) ---
type PracticeCategory = 'all' | 'criminal' | 'civil';

interface PracticeArea {
  id: string;
  category: 'criminal' | 'civil';
  chamber: 'Fokus Utama: Litigasi Pidana' | 'Fokus Pendukung: Perdata & Komersial';
  title: string;
  englishTitle: string;
  badge: string;
  legalAnchor: string;
  desc: string;
  subScopes: string[];
  icon: typeof Gavel;
  priorityHighlight?: boolean;
}

const practiceAreasData: PracticeArea[] = [
  // --- FOKUS UTAMA: HUKUM LITIGASI PIDANA (KUHP BARU UU NO. 1/2023 & SEKTORAL) ---
  {
    id: 'white-collar',
    category: 'criminal',
    chamber: 'Fokus Utama: Litigasi Pidana',
    title: 'Tindak Pidana Bisnis & Korporasi',
    englishTitle: 'White-Collar & Corporate Crime Defense',
    badge: 'Core Practice • KUHP Baru',
    legalAnchor: 'UU No. 1/2023 (KUHP Baru), UU P2SK No. 4/2023, & UU TPPU',
    desc: 'Pembelaan hukum tingkat tinggi atas dugaan delik korporasi berdasarkan rezim UU No. 1 Tahun 2023 (KUHP Baru) yang mengatur subjek hukum korporasi secara terpadu, disinergikan dengan penanganan delik perbankan/pasar modal (UU P2SK No. 4/2023) dan tindak pidana pencucian uang.',
    subScopes: [
      'Penipuan Komersial (Pasal 492 KUHP Baru) & Penggelapan Jabatan (Pasal 486 & 488 KUHP Baru)',
      'Pertanggungjawaban Pidana Korporasi, Direksi & Pengendali (Pasal 45 s/d 50 KUHP Baru)',
      'Tindak Pidana Sektor Jasa Keuangan, Pasar Modal & Perbankan (UU No. 4/2023 - P2SK)',
      'Tindak Pidana Pencucian Uang & Penelusuran Aset (Pasal 607 KUHP Baru jo. UU No. 8/2010)'
    ],
    icon: Building2,
    priorityHighlight: true
  },
  {
    id: 'praperadilan-bap',
    category: 'criminal',
    chamber: 'Fokus Utama: Litigasi Pidana',
    title: 'Praperadilan & Hak Acara Pidana',
    englishTitle: 'Pre-Trial Motion & Due Process Enforcement',
    badge: 'Prosedural • Hak Konstitusional',
    legalAnchor: 'KUHAP (UU No. 8/1981) jo. Putusan MK No. 21/PUU-XII/2014',
    desc: 'Pengujian materiil dan formil di hadapan Hakim Tunggal Pengadilan Negeri guna membatalkan tindakan penyidik aparat penegak hukum yang melanggar hukum acara dan prosedur penetapan status hukum.',
    subScopes: [
      'Uji Keabsahan Penetapan Tersangka Tanpa 2 Alat Bukti Sah (Putusan MK No. 21/PUU-XII/2014)',
      'Uji Keabsahan Penangkapan & Penahanan Sewenang-wenang (Pasal 17 s/d 21 KUHAP)',
      'Uji Legalitas Penyitaan Aset & Penggeledahan Tanpa Izin Ketua PN (Pasal 38 KUHAP)',
      'Tuntutan Ganti Kerugian & Pemulihan Rehabilitasi Nama Baik (Pasal 95 s/d 97 KUHAP)'
    ],
    icon: Scale,
    priorityHighlight: true
  },
  {
    id: 'pidus-siber',
    category: 'criminal',
    chamber: 'Fokus Utama: Litigasi Pidana',
    title: 'Pidana Khusus, Siber, & Tipikor',
    englishTitle: 'Special Offenses, Cyber & Anti-Corruption',
    badge: 'Digital Forensik • UU ITE Terkini',
    legalAnchor: 'KUHP Baru, UU ITE No. 1/2024, UU HPP No. 7/2021',
    desc: 'Advokasi berakurasi pembuktian tinggi menghadapi investigasi delik teknologi informasi di bawah UU No. 1 Tahun 2024 (Revisi Kedua UU ITE), tindak pidana korupsi sektor publik dan swasta (Pasal 603-606 KUHP Baru), serta audit kepatuhan pidana perpajakan.',
    subScopes: [
      'Tindak Pidana Korupsi & Suap Sektor Komersial/Publik (Pasal 603 s/d 606 KUHP Baru)',
      'Kejahatan Siber, Akses Ilegal & Bukti Elektronik (UU No. 1/2024 tentang ITE)',
      'Penyidikan Bukti Permulaan & Pidana Perpajakan (UU No. 7/2021 tentang Harmonisasi Perpajakan)',
      'Perlindungan Saksi Kunci & Whistleblower Korporasi (UU No. 31/2014 tentang LPSK)'
    ],
    icon: ShieldAlert
  },
  {
    id: 'pidum-perlindungan',
    category: 'criminal',
    chamber: 'Fokus Utama: Litigasi Pidana',
    title: 'Pidana Umum & Perlindungan Hak Warga',
    englishTitle: 'General Criminal Defense & Personal Rights',
    badge: 'Litigasi Peradilan • KUHP Baru',
    legalAnchor: 'UU No. 1/2023 (KUHP Baru)',
    desc: 'Pembelaan komprehensif bagi individu yang berhadapan dengan tuduhan delik umum di bawah kodifikasi KUHP Baru, menjamin perlakuan adil dan perlindungan hak asasi tersangka/terdakwa sejak pemeriksaan BAP awal di kepolisian hingga persidangan.',
    subScopes: [
      'Pencemaran Kehormatan & Fitnah Tertulis (Pasal 433 & 434 KUHP Baru)',
      'Pemalsuan Surat, Dokumen Otentik & Akta Komersial (Pasal 391 & 392 KUHP Baru)',
      'Perampasan Kemerdekaan Fisik & Penyekapan (Pasal 446 KUHP Baru)',
      'Pembelaan Terpaksa / Bela Paksa Noodweer (Alasan Pembenar Pasal 34 KUHP Baru)'
    ],
    icon: Gavel
  },

  // --- FOKUS PENDUKUNG: SENGKETA PERDATA, KOMERSIAL, AGRARIA & NIAGA ---
  {
    id: 'wanprestasi-bisnis',
    category: 'civil',
    chamber: 'Fokus Pendukung: Perdata & Komersial',
    title: 'Wanprestasi & Sengketa Kontrak Bisnis',
    englishTitle: 'Breach of Contract & Commercial Litigation',
    badge: 'Perdata Komersial • E-Litigation',
    legalAnchor: 'Buku III KUHPerdata jo. Perma No. 7/2022',
    desc: 'Penyelesaian sengketa ingkar janji komersial berlandaskan asas itikad baik (Pasal 1338 ayat 3 KUHPerdata), penuntutan pemulihan kerugian bunga moratoir, eksekusi sita jaminan, serta beracara melalui sistem peradilan elektronik modern Mahkamah Agung (E-Litigation).',
    subScopes: [
      'Somasi Peringatan Hukum Resmi (Ingebrekestelling - Pasal 1238 KUHPerdata)',
      'Gugatan Ganti Biaya, Rugi, & Bunga Komersial (Pasal 1243 s/d 1246 KUHPerdata)',
      'Pembatalan Kontrak Kerjasama Sepihak (Pasal 1266 KUHPerdata)',
      'Penyelesaian Klausul Arbitrase Komersial (UU No. 30/1999 tentang AAPS)'
    ],
    icon: FileText
  },
  {
    id: 'pmh-kompensasi',
    category: 'civil',
    chamber: 'Fokus Pendukung: Perdata & Komersial',
    title: 'Perbuatan Melawan Hukum (PMH)',
    englishTitle: 'Tort Law & Material/Immaterial Damages Claims',
    badge: 'Ganti Rugi • Sita Jaminan',
    legalAnchor: 'Pasal 1365, 1366, & 1367 Kitab Undang-Undang Hukum Perdata',
    desc: 'Litigasi gugatan kompensasi atas tindakan melawan hukum yang menimbulkan kerugian finansial nyata, kerusakan reputasi komersial bisnis, persaingan usaha tidak sehat, serta permohonan sita jaminan atas aset lawan sengketa.',
    subScopes: [
      'Gugatan Pembuktian 5 Unsur PMH Melawan Hukum (Pasal 1365 KUHPerdata)',
      'Tuntutan Pertanggungjawaban Akibat Kelalaian Fatal (Pasal 1366 KUHPerdata)',
      'Pertanggungjawaban Korporasi atas Perbuatan Pegawai (Pasal 1367 KUHPerdata)',
      'Permohonan Sita Jaminan Aset Rekening & Properti (Conservatoir Beslag - HIR/RBg)'
    ],
    icon: ShieldCheck
  },
  {
    id: 'agraria-properti',
    category: 'civil',
    chamber: 'Fokus Pendukung: Perdata & Komersial',
    title: 'Sengketa Pertanahan & Agraria Komersial',
    englishTitle: 'Real Estate & Land Disputes',
    badge: 'Aset Strategis • PP No. 18/2021',
    legalAnchor: 'UUPA No. 5/1960 jo. PP No. 18/2021 & UU PTUN',
    desc: 'Advokasi pengamanan aset tanah industri dan properti komersial berdasarkan PP No. 18 Tahun 2021, penyelesaian sengketa sertifikat ganda tumpang-tindih, gugatan pembatalan sertifikat di PTUN, dan eksekusi pengosongan lahan.',
    subScopes: [
      'Perlindungan Hak Milik & HGB Korporasi (Pasal 20 & 35 UUPA No. 5/1960)',
      'Gugatan Pembatalan Sertifikat Cacat Administrasi di PTUN (Pasal 53 UU PTUN)',
      'Penyelesaian Wanprestasi Perjanjian Pengikatan Jual Beli (PPJB Tanah Industri)',
      'Eksekusi Riil Pengosongan Fisik Lahan Tanpa Hak (HIR/RBg)'
    ],
    icon: Landmark
  },
  {
    id: 'pkpu-pailit',
    category: 'civil',
    chamber: 'Fokus Pendukung: Perdata & Komersial',
    title: 'Kepailitan, PKPU, & Restrukturisasi',
    englishTitle: 'Bankruptcy & Commercial Insolvency',
    badge: 'Pengadilan Niaga • Restrukturisasi',
    legalAnchor: 'UU No. 37 Tahun 2004 tentang Kepailitan & PKPU',
    desc: 'Representasi strategis debitur maupun kreditur dalam perkara Penundaan Kewajiban Pembayaran Utang (PKPU) di Pengadilan Niaga guna mencapai kesepakatan restrukturisasi perdamaian (homologasi) serta menghindari likuidasi kepailitan.',
    subScopes: [
      'Permohonan & Pembelaan PKPU Sengketa Utang-Piutang (Pasal 222 UU No. 37/2004)',
      'Penyusunan Rencana Perdamaian & Homologasi Utang (Pasal 265 UU No. 37/2004)',
      'Pendampingan Verifikasi Piutang Kurator & Pengurus Pengadilan Niaga',
      'Perlindungan Hak Separatis Kreditur Pemegang Hak Tanggungan & Jaminan Fidusia'
    ],
    icon: Users
  }
];

// --- DATA: FAQ BERDASARKAN KATEGORI REGULASI TERBARU ---
const faqCategories = ['Semua', 'KUHP Baru & Pidana', 'Praperadilan', 'Sengketa Perdata'];

const faqData = [
  {
    category: 'KUHP Baru & Pidana',
    question: 'Bagaimana penanganan perkara pidana korporasi di bawah rezim UU No. 1 Tahun 2023 (KUHP Baru)?',
    answer: 'Di bawah UU No. 1 Tahun 2023 (KUHP Baru), korporasi diakui secara tegas sebagai subjek tindak pidana (Pasal 45–50). Pembelaan kami mencakup pembuktian apakah tindak pidana dilakukan untuk kepentingan korporasi, memisahkan tanggung jawab fungsional pribadi pengurus (directors liability) dari perseroan, serta merumuskan tata kelola mitigasi risiko kepatuhan untuk mencegah sanksi pidana denda maupun penutupan usaha.'
  },
  {
    category: 'Praperadilan',
    question: 'Kapan langkah Praperadilan relevan untuk ditempuh saat klien ditetapkan sebagai tersangka?',
    answer: 'Praperadilan diajukan ke Pengadilan Negeri berdasarkan Pasal 77 KUHAP jo. Putusan Mahkamah Konstitusi No. 21/PUU-XII/2014 apabila penetapan status tersangka dilakukan tanpa didukung minimal 2 (dua) alat bukti yang sah, tanpa pemeriksaan calon tersangka, atau apabila penangkapan, penahanan, serta penyitaan aset perusahaan dilakukan aparat tanpa surat perintah dan tanpa izin Ketua Pengadilan Negeri.'
  },
  {
    category: 'KUHP Baru & Pidana',
    question: 'Bagaimana pendampingan BBLF saat klien menerima panggilan pemeriksaan atau BAP dari penyidik?',
    answer: 'Kami menyediakan pendampingan langsung (Direct Legal Counsel) sejak panggilan pertama di tingkat Penyelidikan maupun Penyidikan (Kepolisian, Kejaksaan, atau Penyidik Khusus). Advokat kami memastikan pemeriksaan berjalan sesuai koridor hukum acara pidana (KUHAP), mencegah pertanyaan yang menjerat, serta menuangkan bantahan yuridis ke dalam Berita Acara Pemeriksaan (BAP).'
  },
  {
    category: 'Sengketa Perdata',
    question: 'Bagaimana firma mengintegrasikan sistem peradilan elektronik (E-Court / E-Litigation) dalam sengketa perdata?',
    answer: 'Selaras dengan Perma No. 7 Tahun 2022 tentang Administrasi Perkara dan Persidangan Secara Elektronik, seluruh gugatan perdata wanprestasi, PMH, dan kepailitan kami kelola melalui sistem E-Court Mahkamah Agung. Hal ini memastikan penanganan perkara lebih efisien, transparan, cepat, dan termonitor secara real-time demi pemulihan hak komersial klien.'
  }
];

// --- DATA MOCK: TESTIMONIALS ---
const testimonials = [
  {
    role: 'Direktur Legal & Kepatuhan Korporasi',
    sector: 'Sektor Teknologi Finansial & Pembayaran Digital',
    company: 'PT Solusi Finansial Mandiri Nusantara',
    text: 'Dalam menghadapi investigasi delik siber komersial dan penyesuaian regulasi KUHP Baru, tim litigasi pidana Bhadrika Byakta menghadirkan strategi pembelaan prosedural yang sangat matang. Hak-hak hukum perseroan dan direksi terlindungi secara paripurna.',
    rating: 5,
    tag: 'Pembelaan Pidana Korporasi'
  },
  {
    role: 'General Counsel & VP Corporate Affairs',
    sector: 'Sektor Investasi Energi & Infrastruktur Komersial',
    company: 'Indo Global Asset Advisory',
    text: 'Penyelesaian sengketa wanprestasi kontrak dan sita jaminan komersial kami dipimpin dengan ketajaman analisis hukum perdata yang luar biasa. Pendampingan yang strategis, berintegritas tinggi, dan transparan.',
    rating: 5,
    tag: 'Sengketa Perdata & Kontrak'
  }
];

// --- DATA MOCK: 4 PILAR METODOLOGI HUKUM ---
const methodologies = [
  {
    step: '01',
    title: 'Audit & Analisis Yuridis Materiil',
    desc: 'Pembedahan menyeluruh fakta materiil di bawah norma KUHP Baru (UU No. 1/2023), keabsahan alat bukti forensik, risiko sanksi pidana/perdata, serta kedudukan hukum (legal standing) para pihak.',
    icon: Compass
  },
  {
    step: '02',
    title: 'Formulasi Strategi Taktis & Prosedural',
    desc: 'Perumusan peta jalan pembelaan terukur yang memadukan opsi uji prosedural formil (Praperadilan MK No. 21/2014) dengan kesiapan konstruksi pembuktian di persidangan penuh.',
    icon: FileText
  },
  {
    step: '03',
    title: 'Representasi & Eksekusi di Pengadilan',
    desc: 'Advokasi tangguh di hadapan penyidik kepolisian, kejaksaan, majelis hakim persidangan perdata/pidana, maupun majelis arbitrase nasional (BANI).',
    icon: Gavel
  },
  {
    step: '04',
    title: 'Mitigasi Berkelanjutan & Eksekusi Hak',
    desc: 'Pengawalan eksekusi putusan yang telah berkekuatan hukum tetap (inkrah), pemulihan aset (asset recovery), dan audit mitigasi kepatuhan hukum jangka panjang.',
    icon: ShieldCheck
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

export default function Home() {
  const [activePracticeFilter, setActivePracticeFilter] = useState<PracticeCategory>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeFaqFilter, setActiveFaqFilter] = useState<string>('Semua');

  const filteredPracticeAreas = practiceAreasData.filter(item => {
    if (activePracticeFilter === 'all') return true;
    return item.category === activePracticeFilter;
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const filteredFaqs = faqData.filter(faq => 
    activeFaqFilter === 'Semua' ? true : faq.category === activeFaqFilter
  );

  return (
    <div className="selection:bg-[#C5A880] selection:text-[#0F1E36] bg-[#F8F6F0] text-[#0F1E36] overflow-hidden font-sans">
      
      {/* 1. HERO SECTION (NAVY BLUE #0F1E36, CHAMPAGNE GOLD #C5A880, & IVORY CONTRAST) */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#0F1E36] overflow-hidden pt-36 pb-28 border-b border-[#C5A880]/20">
        
        {/* Dekorasi Latar Lembut Berwibawa */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <div className="absolute -top-40 -right-32 w-[650px] h-[650px] bg-[#C5A880]/10 rounded-full blur-[140px]" />
          <div className="absolute -bottom-40 -left-32 w-[550px] h-[550px] bg-[#0A1424] rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#C5A88015_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Kolom Kiri: Teks Prestisius & Penegasan Regulasi Terbaru */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 text-left"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#142847] border border-[#C5A880]/30 shadow-inner mb-7">
                <Scale className="text-[#C5A880] shrink-0" size={16} />
                <span className="text-[#C5A880] text-xs font-semibold tracking-widest uppercase">
                  Bhadrika Byakta Law Firm &bull; Advocates & Legal Counsel
                </span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F8F6F0] font-bold mb-6 leading-[1.15]">
                Advokasi Litigasi Tegas & <br />
                <span className="text-[#C5A880] relative inline-block font-serif italic">
                  Strategi Hukum Presisi Tinggi.
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-[#C5A880] via-[#C5A880]/60 to-transparent" />
                </span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-[#F8F6F0]/85 text-base md:text-lg font-normal mb-10 leading-relaxed max-w-2xl">
                Menyediakan pembelaan perkara litigasi tingkat tinggi berlandaskan kodifikasi hukum pidana nasional modern <strong>UU No. 1 Tahun 2023 (KUHP Baru)</strong>, kepatuhan KUHAP, regulasi siber <strong>UU No. 1 Tahun 2024 (Revisi UU ITE)</strong>, dan delik sektor keuangan <strong>UU No. 4 Tahun 2023 (P2SK)</strong>, diselaraskan dengan advokasi strategis <strong>Sengketa Perdata & Komersial</strong> serta kepatuhan Kode Etik Advokat Indonesia.
              </motion.p>
              
              {/* Tombol Aksi Utama */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="group bg-[#C5A880] hover:bg-[#b8996e] text-[#0F1E36] font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-black/20 flex items-center justify-center gap-3 border border-[#C5A880]"
                >
                  Jadwalkan Konsultasi Awal 
                  <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                </Link>
                <a 
                  href="#area-praktik" 
                  className="bg-[#142847]/90 hover:bg-[#142847] text-[#F8F6F0] font-medium px-8 py-4 rounded-xl transition-all border border-[#C5A880]/40 flex items-center justify-center hover:border-[#C5A880]"
                >
                  Eksplorasi Bidang Praktik
                </a>
              </motion.div>

              {/* Status Baris Akreditasi & Komitmen Etika */}
              <motion.div variants={itemVariants} className="mt-10 pt-6 border-t border-[#C5A880]/15 flex flex-wrap items-center gap-6 text-xs text-[#F8F6F0]/70">
                <div className="flex items-center gap-2">
                  <BadgeCheck size={16} className="text-[#C5A880]" />
                  <span>Advokat Berlisensi PERADI</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpenCheck size={15} className="text-[#C5A880]" />
                  <span>Kepatuhan Regulasi KUHP Baru & UU P2SK</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={15} className="text-[#C5A880]" />
                  <span>Hotline BAP Siaga 24/7</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Kolom Kanan: Executive Leadership & Chamber Profile Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="bg-[#142847] border-2 border-[#C5A880]/40 rounded-2xl shadow-2xl p-7 md:p-8 relative backdrop-blur-md">
                
                {/* Header Profil Kantor Hukum */}
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#C5A880]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0F1E36] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880]">
                      <Landmark size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-serif font-bold text-[#F8F6F0] tracking-wide">
                        Profil Kamar Advokat
                      </h4>
                      <p className="text-[11px] text-[#C5A880]">Bhadrika Byakta Law Firm</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium text-[#F8F6F0]/80 bg-[#0F1E36] px-3 py-1 rounded-full border border-[#C5A880]/20">
                    Silktown &bull; Tangerang Selatan
                  </span>
                </div>

                {/* Komitmen Integritas Managing Partner */}
                <div className="space-y-5">
                  <div className="p-5 rounded-xl bg-[#0F1E36]/90 border border-[#C5A880]/20 relative">
                    <Quote className="text-[#C5A880]/20 absolute top-4 right-4" size={32} />
                    <p className="text-xs text-[#F8F6F0]/90 leading-relaxed italic mb-4 relative z-10">
                      &ldquo;Di hadapan dinamika kodifikasi KUHP Baru dan hukum acara peradilan, keunggulan advokasi tidak hanya ditentukan oleh keberanian beracara, melainkan ketelitian dalam membedah alat bukti materiil dan ketegasan mengawal hak konstitusional klien tanpa kompromi.&rdquo;
                    </p>
                    
                    <div className="flex items-center gap-3 pt-3 border-t border-[#C5A880]/15">
                      <div className="w-9 h-9 rounded-full bg-[#142847] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] shrink-0 font-serif font-bold text-xs">
                        BB
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-[#F8F6F0]">Dr. Bhadrika Daniswara, S.H., LL.M.</h5>
                        <p className="text-[10px] text-[#C5A880]">Managing Partner & Advokat Litigasi</p>
                      </div>
                    </div>
                  </div>

                  {/* Ringkasan Akreditasi & Layanan Terdaftar */}
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-[#0F1E36]/60 border border-[#C5A880]/10">
                      <div className="flex items-center gap-2 text-[#F8F6F0]">
                        <Gavel size={15} className="text-[#C5A880]" />
                        <span>Fokus Utama Praktik</span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#C5A880]">Litigasi Pidana & Praperadilan</span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-[#0F1E36]/60 border border-[#C5A880]/10">
                      <div className="flex items-center gap-2 text-[#F8F6F0]">
                        <Scale size={15} className="text-[#C5A880]" />
                        <span>Fokus Pendukung</span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#C5A880]">Perdata, Bisnis & Agraria</span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-[#0F1E36]/60 border border-[#C5A880]/10">
                      <div className="flex items-center gap-2 text-[#F8F6F0]">
                        <UserCheck size={15} className="text-[#C5A880]" />
                        <span>Lisensi & Sumpah</span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#C5A880]">PERADI / Pengadilan Tinggi</span>
                    </div>
                  </div>
                </div>

                {/* Footer Kartu Profil */}
                <div className="pt-5 mt-6 border-t border-[#C5A880]/20 flex items-center justify-between">
                  <span className="text-[11px] text-[#F8F6F0]/70 flex items-center gap-1.5">
                    <Lock size={12} className="text-[#C5A880]" /> Konsultasi Bersifat Rahasia
                  </span>
                  <Link 
                    href="/contact" 
                    className="text-[11px] font-bold text-[#C5A880] hover:text-[#F8F6F0] inline-flex items-center gap-1 transition-colors"
                  >
                    Hubungi Tim Advokat <ChevronRight size={13} />
                  </Link>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* STATS BANNER PRESTISIUS */}
      <section className="relative z-20 -mt-12 px-6 md:px-12 mb-14">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0F1E36] rounded-2xl shadow-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 border-2 border-[#C5A880]/30"
          >
            {[
              { 
                icon: Briefcase, 
                title: '500+', 
                subtitle: 'Perkara Ditangani Secara Komprehensif' 
              },
              { 
                icon: Building2, 
                title: '50+', 
                subtitle: 'Klien Korporasi & Entitas Bisnis' 
              },
              { 
                icon: Award, 
                title: '15+ Tahun', 
                subtitle: 'Pengalaman Advokasi Kumulatif' 
              },
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-5 p-2 group">
                <div className="w-14 h-14 rounded-xl bg-[#142847] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] shrink-0 group-hover:bg-[#C5A880] group-hover:text-[#0F1E36] transition-all">
                  <stat.icon size={26} />
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-[#F8F6F0] font-serif">{stat.title}</h4>
                  <p className="text-[#C5A880] text-sm font-medium mt-0.5 tracking-wide">{stat.subtitle}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. DUAL-CHAMBER PRACTICE AREAS SECTION (DIPERBARUI DENGAN REGULASI TERKINI) */}
      <section id="area-praktik" className="py-24 bg-[#F8F6F0] border-b border-[#0F1E36]/10">
        <div className="container mx-auto px-6 md:px-12">
          
          {/* Header Area Praktik */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6 border-b border-[#0F1E36]/10 pb-8">
            <div className="max-w-2xl">
              <span className="text-[#0F1E36] font-bold tracking-widest uppercase text-xs px-3.5 py-1.5 bg-[#C5A880]/20 border border-[#C5A880]/40 rounded-full inline-block mb-3">
                Keahlian Yuridis Khusus &bull; Dual-Chamber Focus
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-[#0F1E36] font-bold">
                Spesialisasi Litigasi Pidana & Sengketa Perdata
              </h2>
              <p className="text-[#0F1E36]/80 text-sm md:text-base font-normal mt-3 leading-relaxed">
                Menghadirkan pembelaan perkara dengan pendekatan kodifikasi <strong>KUHP Baru (UU No. 1/2023)</strong> dan kepatuhan hukum acara KUHAP. Mengawal hak konstitusional klien dari ancaman delik pidana serta memulihkan hak aset komersial melalui peradilan perdata dan niaga.
              </p>
            </div>

            {/* Filter Interaktif Dual-Chamber */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                onClick={() => setActivePracticeFilter('all')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                  activePracticeFilter === 'all'
                    ? 'bg-[#0F1E36] text-[#C5A880] border-[#C5A880] shadow-md'
                    : 'bg-white text-[#0F1E36] border-[#0F1E36]/15 hover:border-[#C5A880]'
                }`}
              >
                Seluruh Bidang ({practiceAreasData.length})
              </button>
              <button
                onClick={() => setActivePracticeFilter('criminal')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
                  activePracticeFilter === 'criminal'
                    ? 'bg-[#0F1E36] text-[#C5A880] border-[#C5A880] shadow-md'
                    : 'bg-white text-[#0F1E36] border-[#0F1E36]/15 hover:border-[#C5A880]'
                }`}
              >
                <Gavel size={14} className="text-[#C5A880]" />
                Fokus Utama: Pidana (4)
              </button>
              <button
                onClick={() => setActivePracticeFilter('civil')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
                  activePracticeFilter === 'civil'
                    ? 'bg-[#0F1E36] text-[#C5A880] border-[#C5A880] shadow-md'
                    : 'bg-white text-[#0F1E36] border-[#0F1E36]/15 hover:border-[#C5A880]'
                }`}
              >
                <Scale size={14} className="text-[#C5A880]" />
                Fokus Pendukung: Perdata (4)
              </button>
            </div>
          </div>

          {/* Banner Peringatan Hotline BAP & Konsultasi Darurat */}
          <div className="mb-12 bg-[#0F1E36] text-[#F8F6F0] rounded-2xl p-6 md:p-8 border-2 border-[#C5A880]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#142847] border border-[#C5A880]/30 text-[#C5A880] flex items-center justify-center shrink-0">
                <AlertTriangle size={24} />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#C5A880] font-bold block">
                  Protokol Perlindungan Hak Acara Pidana
                </span>
                <h4 className="font-serif font-bold text-lg text-[#F8F6F0] mt-0.5">
                  Mendapat Panggilan BAP atau Menghadapi Ancaman Penahanan?
                </h4>
                <p className="text-xs text-[#F8F6F0]/75 mt-1 font-normal max-w-2xl">
                  Berdasarkan KUHAP jo. Putusan Mahkamah Konstitusi No. 21/PUU-XII/2014, Anda berhak didampingi penasihat hukum di setiap tahap penyelidikan dan penyidikan. Hubungi advokat kami sebelum memberikan keterangan resmi.
                </p>
              </div>
            </div>

            <a
              href="tel:+6285697259015"
              className="bg-[#C5A880] hover:bg-[#b8996e] text-[#0F1E36] font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 border border-[#C5A880]"
            >
              <Phone size={15} /> Panggil Hotline BAP 24/7
            </a>
          </div>

          {/* Grid Kartu Area Praktik Kompleks */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16"
          >
            <AnimatePresence>
              {filteredPracticeAreas.map((area) => {
                const Icon = area.icon;
                const isCriminal = area.category === 'criminal';

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.3 }}
                    key={area.id}
                    className={`rounded-3xl p-8 transition-all flex flex-col justify-between relative overflow-hidden group border-2 ${
                      isCriminal
                        ? 'bg-[#0F1E36] text-[#F8F6F0] border-[#C5A880]/50 shadow-2xl hover:border-[#C5A880]'
                        : 'bg-white text-[#0F1E36] border-[#0F1E36]/15 hover:border-[#C5A880] shadow-md hover:shadow-xl'
                    }`}
                  >
                    {/* Watermark Ornamen Sudut */}
                    <div className="absolute top-0 right-0 w-36 h-36 bg-[#C5A880]/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />

                    <div>
                      {/* Baris Kategori & Landasan Hukum */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-1 rounded-md border ${
                            isCriminal
                              ? 'bg-[#142847] text-[#C5A880] border-[#C5A880]/30'
                              : 'bg-[#F8F6F0] text-[#0F1E36] border-[#0F1E36]/15'
                          }`}>
                            {area.chamber}
                          </span>
                          <span className={`text-[10px] font-mono px-2 py-1 rounded ${
                            isCriminal ? 'text-[#F8F6F0]/60 bg-[#0A1424]' : 'text-[#0F1E36]/60 bg-[#F8F6F0]'
                          }`}>
                            {area.badge}
                          </span>
                        </div>

                        <span className={`text-[11px] font-mono font-medium flex items-center gap-1 ${
                          isCriminal ? 'text-[#C5A880]' : 'text-[#0F1E36]/70'
                        }`}>
                          <BookOpenCheck size={13} />
                          {area.legalAnchor}
                        </span>
                      </div>

                      {/* Header Kartu: Ikon & Judul */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border transition-all ${
                          isCriminal
                            ? 'bg-[#142847] text-[#C5A880] border-[#C5A880]/40 group-hover:bg-[#C5A880] group-hover:text-[#0F1E36]'
                            : 'bg-[#0F1E36] text-[#C5A880] border-[#C5A880]/30 group-hover:bg-[#C5A880] group-hover:text-[#0F1E36]'
                        }`}>
                          <Icon size={26} />
                        </div>
                        <div>
                          <span className={`text-[11px] font-mono tracking-wider uppercase block font-semibold ${
                            isCriminal ? 'text-[#C5A880]' : 'text-[#0F1E36]/60'
                          }`}>
                            {area.englishTitle}
                          </span>
                          <h3 className={`font-serif text-2xl font-bold mt-0.5 leading-snug ${
                            isCriminal ? 'text-[#F8F6F0]' : 'text-[#0F1E36]'
                          }`}>
                            {area.title}
                          </h3>
                        </div>
                      </div>

                      {/* Deskripsi Yuridis */}
                      <p className={`text-xs sm:text-sm leading-relaxed mb-6 font-normal ${
                        isCriminal ? 'text-[#F8F6F0]/80' : 'text-[#0F1E36]/75'
                      }`}>
                        {area.desc}
                      </p>

                      {/* Cakupan Sub-Perkara & Delik Materiil Berdasarkan Regulasi */}
                      <div className={`space-y-2.5 pt-5 pb-6 border-t ${
                        isCriminal ? 'border-[#C5A880]/20' : 'border-[#0F1E36]/10'
                      }`}>
                        <span className={`text-[10px] font-mono uppercase tracking-wider block font-bold ${
                          isCriminal ? 'text-[#C5A880]' : 'text-[#0F1E36]/70'
                        }`}>
                          Ruang Lingkup Delik & Sengketa Terkait:
                        </span>
                        {area.subScopes.map((scope, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2.5 text-xs">
                            <CheckCircle2 size={15} className="text-[#C5A880] shrink-0 mt-0.5" />
                            <span className={isCriminal ? 'text-[#F8F6F0]/90 font-light' : 'text-[#0F1E36]/85 font-normal'}>
                              {scope}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tombol Aksi Penjadwalan */}
                    <div className="pt-4 flex items-center justify-between border-t border-inherit">
                      <Link
                        href="/contact"
                        className={`text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-all ${
                          isCriminal
                            ? 'text-[#C5A880] hover:text-[#F8F6F0]'
                            : 'text-[#0F1E36] hover:text-[#C5A880]'
                        }`}
                      >
                        <span>Konsultasi Perkara Ini</span>
                        <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <span className={`text-[11px] font-mono ${
                        isCriminal ? 'text-[#F8F6F0]/50' : 'text-[#0F1E36]/50'
                      }`}>
                        BBLF-LITIGATION
                      </span>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Link Eksekutif ke Halaman Seluruh Layanan */}
          <div className="text-center pt-2">
            <Link 
              href="/practice-areas" 
              className="inline-flex items-center gap-3 bg-[#0F1E36] hover:bg-[#142847] text-[#C5A880] font-bold px-8 py-4 rounded-xl transition-all shadow-xl text-xs uppercase tracking-wider border border-[#C5A880]/40 group"
            >
              <span>Pelajari Rincian Lengkap Seluruh Layanan & Perkara</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* 3. METODOLOGI PENANGANAN PERKARA */}
      <section className="py-24 bg-[#0F1E36] text-[#F8F6F0] relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#C5A880] font-bold tracking-widest uppercase text-xs px-3.5 py-1.5 bg-[#142847] border border-[#C5A880]/30 rounded-full inline-block">
              Alur Kerja Standar Operasional
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#F8F6F0] font-bold mt-3">Metodologi Advokasi Presisi</h2>
            <p className="text-[#F8F6F0]/75 text-sm mt-3 font-normal">
              Setiap mandat litigasi pidana di bawah KUHP Baru maupun sengketa perdata dikawal melalui protokol empat tahap yang sistematis demi menjamin kecermatan analisis yuridis dan perlindungan kepentingan klien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((m, idx) => (
              <div 
                key={idx}
                className="bg-[#142847]/70 border border-[#C5A880]/20 rounded-2xl p-6 relative hover:border-[#C5A880] transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-mono text-2xl font-bold text-[#C5A880]">{m.step}</span>
                    <div className="w-10 h-10 rounded-lg bg-[#0F1E36] border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880]">
                      <m.icon size={20} />
                    </div>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#F8F6F0] mb-2">{m.title}</h4>
                  <p className="text-xs text-[#F8F6F0]/70 leading-relaxed font-normal">{m.desc}</p>
                </div>
                
                <div className="w-full h-1 bg-[#0F1E36] rounded-full mt-6 overflow-hidden">
                  <div className="w-1/3 h-full bg-[#C5A880] group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. INTERACTIVE FAQ ACCORDION SECTION (BERBASIS REGULASI TERBARU) */}
      <section className="py-24 bg-[#F8F6F0] border-t border-[#0F1E36]/10">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          
          <div className="text-center mb-12">
            <span className="text-[#0F1E36] font-bold tracking-widest uppercase text-xs px-3.5 py-1.5 bg-[#C5A880]/20 border border-[#C5A880]/40 rounded-full inline-flex items-center gap-1.5">
              <HelpCircle size={14} className="text-[#0F1E36]" /> Tanya Jawab & Regulasi
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0F1E36] font-bold mt-3">Informasi & Pedoman Layanan Hukum</h2>
            <p className="text-[#0F1E36]/70 text-sm mt-2">Klarifikasi terkait penerapan KUHP Baru (UU No. 1/2023), hak uji praperadilan, dan sistem litigasi perdata modern.</p>
          </div>

          {/* Filter Tab Kategori FAQ */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFaqFilter(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeFaqFilter === cat 
                    ? 'bg-[#0F1E36] text-[#C5A880] shadow' 
                    : 'bg-white text-[#0F1E36] border border-[#0F1E36]/15 hover:border-[#C5A880]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl border border-[#0F1E36]/10 hover:border-[#C5A880]/60 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 font-serif text-base md:text-lg font-bold text-[#0F1E36] hover:text-[#C5A880] transition-colors"
                  >
                    <span>{faq.question}</span>
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
                        <div className="p-6 pt-0 text-[#0F1E36]/80 text-sm font-normal leading-relaxed border-t border-[#0F1E36]/5">
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

      {/* 5. CLIENT TESTIMONIALS SECTION */}
      <section className="py-24 bg-white border-t border-[#0F1E36]/10">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#0F1E36] font-bold tracking-widest uppercase text-xs px-3.5 py-1.5 bg-[#C5A880]/20 border border-[#C5A880]/40 rounded-full">
              Reputasi & Hubungan Klien
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0F1E36] font-bold mt-3">Apresiasi Klien & Korporasi</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#F8F6F0] p-8 rounded-2xl border border-[#0F1E36]/10 hover:border-[#C5A880] transition-colors flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-1 text-[#C5A880]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={15} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0F1E36] bg-[#C5A880]/20 px-2.5 py-1 rounded border border-[#C5A880]/30">
                      {item.tag}
                    </span>
                  </div>
                  
                  <p className="text-[#0F1E36] text-sm font-normal leading-relaxed italic mb-8">
                    &ldquo;{item.text}&rdquo;
                  </p>
                </div>

                <div className="border-t border-[#0F1E36]/10 pt-4">
                  <h4 className="font-bold text-[#0F1E36] text-sm">{item.role}</h4>
                  <p className="text-xs text-[#0F1E36]/70 mt-0.5">{item.sector}</p>
                  <p className="text-[11px] font-mono text-[#C5A880] mt-1 font-semibold">{item.company}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. EMERGENCY CONTACT CALLOUT (DIRECT CALL & WHATSAPP HOTLINE 24/7) */}
      <section className="py-16 bg-[#0F1E36] text-[#F8F6F0] relative overflow-hidden border-t border-[#C5A880]/30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-[110px] pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-[#142847] border-2 border-[#C5A880]/40 text-[#C5A880] flex items-center justify-center shrink-0 shadow-lg">
              <PhoneCall size={28} />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold mb-1 text-[#F8F6F0]">Kebutuhan Tindakan Hukum Mendesak?</h3>
              <p className="text-[#F8F6F0]/75 text-sm font-normal max-w-xl">
                Kanal komunikasi darurat (Emergency Counsel) siaga 24/7 untuk pendampingan pemeriksaan mendadak, penahanan, penggeledahan, atau sengketa darurat korporasi.
              </p>
            </div>
          </div>
          
          {/* Tombol Direct Call & Direct WhatsApp */}
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a 
              href="tel:+6285697259015"
              className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#b8996e] text-[#0F1E36] font-bold px-7 py-3.5 rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 border border-[#C5A880] text-sm"
            >
              <Phone size={17} /> Panggil Hotline (+62 856-9725-9015)
            </a>
            <a 
              href="https://wa.me/6285697259015?text=Halo%20BBLF,%20saya%20membutuhkan%20pendampingan%20hukum%20darurat."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#142847] hover:bg-[#1c365f] text-[#F8F6F0] font-semibold px-6 py-3.5 rounded-xl transition-all border border-[#C5A880]/40 flex items-center justify-center gap-2 text-sm"
            >
              <MessageSquare size={17} className="text-[#C5A880]" /> WhatsApp Concierge
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}