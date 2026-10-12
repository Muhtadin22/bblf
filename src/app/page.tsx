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
  CheckCircle2 // <-- Tambahkan ini
} from 'lucide-react';

// --- DATA: KLASIFIKASI AREA PRAKTIK (PIDANA CORE & PERDATA KOMERSIAL) ---
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
  // --- FOKUS UTAMA: HUKUM LITIGASI PIDANA ---
  {
    id: 'white-collar',
    category: 'criminal',
    chamber: 'Fokus Utama: Litigasi Pidana',
    title: 'Tindak Pidana Bisnis & Korporasi',
    englishTitle: 'White-Collar & Corporate Crime',
    badge: 'Core Practice • High Risk',
    legalAnchor: 'KUHP, UU Perbankan, UU TPPU',
    desc: 'Pembelaan hukum tingkat tinggi atas dugaan delik korporasi yang menyasar jajaran direksi, komisaris, pemegang saham, serta entitas bisnis.',
    subScopes: [
      'Dugaan Penipuan & Penggelapan Jabatan (Pasal 372 & 378 KUHP)',
      'Tindak Pidana Pencucian Uang (TPPU / Anti-Money Laundering)',
      'Tindak Pidana Perbankan, Pasar Modal, & Kejahatan Asuransi',
      'Pertanggungjawaban Pidana Korporasi (Corporate Criminal Liability)'
    ],
    icon: Building2,
    priorityHighlight: true
  },
  {
    id: 'praperadilan-bap',
    category: 'criminal',
    chamber: 'Fokus Utama: Litigasi Pidana',
    title: 'Praperadilan & Hak Acara Pidana',
    englishTitle: 'Pre-Trial Motion & Due Process',
    badge: 'Prosedural • Hak Asasi',
    legalAnchor: 'KUHAP & Putusan MK No. 21/2014',
    desc: 'Uji keabsahan materiil dan formil atas tindakan aparat penegak hukum guna membatalkan penetapan status hukum yang melanggar prosedur.',
    subScopes: [
      'Gugatan Uji Keabsahan Penetapan Tersangka Tanpa 2 Alat Bukti',
      'Uji Keabsahan Penangkapan, Penahanan, & Penahanan Lanjutan',
      'Uji Prosedur Penyitaan Barang Bukti & Penggeledahan Tanpa Izin PN',
      'Tuntutan Ganti Kerugian & Rehabilitasi Nama Baik atas Tindakan Cacat SOP'
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
    badge: 'Investigasi • Bukti Digital',
    legalAnchor: 'UU ITE, UU Tipikor, UU KUP',
    desc: 'Pendampingan advokasi berakurasi tinggi menghadapi investigasi kejahatan digital terorganisir, sengketa perpajakan, dan delik anti-korupsi.',
    subScopes: [
      'Pelanggaran Informasi & Transaksi Elektronik (UU ITE Forensik)',
      'Pendampingan Penanganan Tindak Pidana Korupsi (Tipikor)',
      'Tindak Pidana Perpajakan, Cukai, & Kepabeanan',
      'Perlindungan Saksi Kunci, Ahli, & Whistleblower'
    ],
    icon: ShieldAlert
  },
  {
    id: 'pidum-perlindungan',
    category: 'criminal',
    chamber: 'Fokus Utama: Litigasi Pidana',
    title: 'Pidana Umum & Perlindungan Hak',
    englishTitle: 'General Criminal Defense',
    badge: 'Litigasi Peradilan • KUHP',
    legalAnchor: 'Kitab Undang-Undang Hukum Pidana',
    desc: 'Representasi tangguh bagi individu yang berhadapan dengan tuduhan delik umum guna memastikan perlakuan adil di muka hukum.',
    subScopes: [
      'Pencemaran Nama Baik, Fitnah, & Penghinaan Materiil',
      'Pemalsuan Surat, Dokumen Otentik, & Keterangan Palsu',
      'Delik Terhadap Kemerdekaan, Harta Benda, & Tubuh',
      'Pendampingan Terstruktur Mulai Tingkat BAP Polsek hingga Polda'
    ],
    icon: Gavel
  },

  // --- FOKUS PENDUKUNG: SENGKETA PERDATA & KOMERSIAL ---
  {
    id: 'wanprestasi-bisnis',
    category: 'civil',
    chamber: 'Fokus Pendukung: Perdata & Komersial',
    title: 'Wanprestasi & Sengketa Kontrak Bisnis',
    englishTitle: 'Breach of Contract Litigation',
    badge: 'Perdata Komersial • Pemulihan Hak',
    legalAnchor: 'Buku III KUHPerdata (Hukum Perikatan)',
    desc: 'Penyelesaian sengketa ingkar janji komersial, pemulihan kerugian kontrak bernilai tinggi, dan penuntutan pembatalan perjanjian usaha.',
    subScopes: [
      'Gugatan Wanprestasi Perjanjian Kerjasama, Suplai, & Joint Venture',
      'Pemulihan Piutang Macet Korporasi & Sita Jaminan (Conservatoir Beslag)',
      'Penyelesaian Konflik Pemegang Saham & Pelanggaran RUPS',
      'Eksekusi Klausul Arbitrase & Pelaksanaan Putusan Arbitrase (BANI/SIAC)'
    ],
    icon: FileText
  },
  {
    id: 'pmh-kompensasi',
    category: 'civil',
    chamber: 'Fokus Pendukung: Perdata & Komersial',
    title: 'Perbuatan Melawan Hukum (PMH)',
    englishTitle: 'Tort Law & Damages Claims',
    badge: 'Tuntutan Ganti Rugi',
    legalAnchor: 'Pasal 1365 Kitab Undang-Undang Hukum Perdata',
    desc: 'Litigasi gugatan kompensasi atas tindakan melawan hukum pihak ketiga yang menimbulkan kerugian finansial nyata dan kerusakan reputasi komersial.',
    subScopes: [
      'Tuntutan Ganti Kerugian Materiil (Kerugian Nyata) & Immateriil',
      'Gugatan PMH Akibat Praktik Persaingan Usaha Tidak Sehat',
      'Pelanggaran Kewajiban Fudusia Direksi (Ultra Vires & Breach of Duty)',
      'Gugatan Perdata Turunan dari Delik Pidana (Adhesie Process)'
    ],
    icon: ShieldCheck
  },
  {
    id: 'agraria-properti',
    category: 'civil',
    chamber: 'Fokus Pendukung: Perdata & Komersial',
    title: 'Sengketa Pertanahan & Agraria Komersial',
    englishTitle: 'Real Estate & Land Disputes',
    badge: 'Aset Strategis • Agraria',
    legalAnchor: 'UUPA No. 5/1960 & Hukum Acara Perdata',
    desc: 'Perlindungan kepemilikan aset tanah industri, penyelesaian sertifikat tumpang tindih, sengketa kepemilikan gedung, dan eksekusi pengosongan.',
    subScopes: [
      'Penyelesaian Sertifikat Ganda (Sertifikat Hak Milik & HGB Perusahaan)',
      'Gugatan Pembatalan Sertifikat di Pengadilan Tata Usaha Negara (PTUN)',
      'Sengketa Perjanjian Pengikatan Jual Beli (PPJB) & Sewa Komersial',
      'Eksekusi Pengosongan Lahan & Mitigasi Penguasaan Fisik Tanpa Hak'
    ],
    icon: Landmark
  },
  {
    id: 'pkpu-pailit',
    category: 'civil',
    chamber: 'Fokus Pendukung: Perdata & Komersial',
    title: 'Kepailitan, PKPU, & Restrukturisasi',
    englishTitle: 'Bankruptcy & Commercial Restructuring',
    badge: 'Pengadilan Niaga • Solusi Utang',
    legalAnchor: 'UU No. 37 Tahun 2004 tentang Kepailitan & PKPU',
    desc: 'Representasi debitur maupun kreditur dalam perkara Penundaan Kewajiban Pembayaran Utang (PKPU) guna menghindari likuidasi kepailitan.',
    subScopes: [
      'Permohonan & Pembelaan PKPU di Pengadilan Niaga',
      'Penyusunan Rencana Perdamaian (Homologasi) & Negosiasi Kreditur',
      'Pendampingan Verifikasi Piutang Kurator & Pengurus Terdaftar',
      'Eksekusi Hak Separatis Kreditur Pemegang Jaminan Kebendaan'
    ],
    icon: Users
  }
];

// --- DATA: FAQ BERDASARKAN KATEGORI ---
const faqCategories = ['Semua', 'Litigasi Pidana', 'Sengketa Perdata', 'Konsultasi & Biaya'];

const faqData = [
  {
    category: 'Litigasi Pidana',
    question: 'Bagaimana penanganan BBLF saat klien menerima panggilan pemeriksaan atau BAP dari penyidik?',
    answer: 'Kami menyediakan pendampingan langsung (Direct Counsel) sejak panggilan pertama di tingkat Penyelidikan maupun Penyidikan (Kepolisian, Kejaksaan, atau Penyidik Khusus). Advokat kami memastikan pemeriksaan berjalan sesuai koridor KUHAP, mencegah intimidasi atau pertanyaan yang menjerat, serta menuangkan klarifikasi hukum tertulis ke dalam Berita Acara Pemeriksaan.'
  },
  {
    category: 'Litigasi Pidana',
    question: 'Kapan langkah Praperadilan relevan untuk ditempuh dalam suatu perkara pidana?',
    answer: 'Praperadilan diajukan apabila terdapat pelanggaran prosedur formal yang dilakukan aparat penegak hukum, seperti penetapan tersangka tanpa didukung minimal dua alat bukti sah (Putusan Mahkamah Konstitusi No. 21/PUU-XII/2014), penangkapan/penahanan sewenang-wenang tanpa surat perintah sah, atau penggeledahan dan penyitaan aset tanpa izin Ketua Pengadilan Negeri.'
  },
  {
    category: 'Sengketa Perdata',
    question: 'Bagaimana pendekatan firma jika suatu sengketa komersial melibatkan potensi delik pidana dan gugatan perdata sekaligus?',
    answer: 'Kami menerapkan strategi analisis yurisprudensi terpadu (Integrated Litigation Strategy). Kami membedah apakah pokok perkara merupakan murni ranah wanprestasi perdata ataukah memenuhi unsur pidana penipuan/penggelapan (Pasal 378/372 KUHP). Langkah dapat dikombinasikan melalui gugatan ganti rugi perdata, proses penggabungan perkara gugatan ganti kerugian dalam pidana (Adhesie), atau negosiasi penyelesaian sengketa tertutup.'
  },
  {
    category: 'Konsultasi & Biaya',
    question: 'Bagaimana struktur penetapan honorarium dan jaminan kerahasiaan dokumen di BBLF?',
    answer: 'Honorarium ditetapkan secara transparan dan proporsional berdasarkan kompleksitas pembuktian, tingkat risiko perkara, dan ruang lingkup pembelaan—disepakati resmi melalui Perjanjian Jasa Hukum (Letter of Engagement). Seluruh dokumen dan informasi perkara klien dilindungi secara mutlak di bawah asas Legal Professional Privilege (Pasal 19 UU No. 18/2003 tentang Advokat) yang tidak dapat dibuka kepada pihak manapun.'
  }
];

// --- DATA MOCK: TESTIMONIALS ---
const testimonials = [
  {
    role: 'Direktur Legal & Kepatuhan Korporasi',
    sector: 'Sektor Teknologi Finansial & Pembayaran Digital',
    company: 'PT Solusi Finansial Mandiri Nusantara',
    text: 'Dalam menghadapi investigasi delik siber komersial yang kompleks, tim litigasi pidana Bhadrika Byakta menghadirkan strategi pembelaan prosedural yang sangat matang. Hak-hak hukum perseroan dan direksi terlindungi secara paripurna.',
    rating: 5,
    tag: 'Pembelaan Pidana Bisnis'
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
    desc: 'Pembedahan menyeluruh fakta materiil, keabsahan alat bukti, risiko sanksi pidana/perdata, serta kedudukan hukum (legal standing) para pihak.',
    icon: Compass
  },
  {
    step: '02',
    title: 'Formulasi Strategi Taktis & Prosedural',
    desc: 'Perumusan peta jalan pembelaan terukur yang memadukan opsi uji prosedural (Praperadilan/Mediasi) dengan kesiapan konstruksi hukum persidangan penuh.',
    icon: FileText
  },
  {
    step: '03',
    title: 'Representasi & Eksekusi di Pengadilan',
    desc: 'Advokasi tangguh di hadapan penyidik kepolisian, kejaksaan, majelis hakim persidangan perdata/pidana, maupun majelis arbitrase nasional.',
    icon: Gavel
  },
  {
    step: '04',
    title: 'Mitigasi Berkelanjutan & Eksekusi Hak',
    desc: 'Pengawalan eksekusi putusan yang telah berkekuatan hukum tetap (inkrah), pemulihan aset (asset recovery), dan audit mitigasi risiko hukum jangka panjang.',
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
        
        {/* Dekorasi Latar Lembut Berwibawa (Non-Cyber) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <div className="absolute -top-40 -right-32 w-[650px] h-[650px] bg-[#C5A880]/10 rounded-full blur-[140px]" />
          <div className="absolute -bottom-40 -left-32 w-[550px] h-[550px] bg-[#0A1424] rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#C5A88015_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Kolom Kiri: Teks Prestisius & Penegasan Spesialisasi */}
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
                Menitikberatkan keahlian utama pada pembelaan <strong>Litigasi Pidana Korporasi & Praperadilan</strong>, diperkuat keandalan dalam <strong>Sengketa Perdata & Komersial</strong> berisiko tinggi berdasarkan Kode Etik Advokat Indonesia dan KUHAP.
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
                  <Lock size={15} className="text-[#C5A880]" />
                  <span>Legal Professional Privilege (Pasal 19 UU Advokat)</span>
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
                      &ldquo;Di hadapan hukum peradilan, keunggulan advokasi tidak hanya ditentukan oleh keberanian berbicara, melainkan ketelitian dalam membedah alat bukti materiil dan ketegasan mengawal hukum acara tanpa kompromi.&rdquo;
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

      {/* STATS BANNER PRESTISIUS (KAPASITAS & JAM TERBANG TANPA KLAIM KEMENANGAN) */}
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

      {/* 2. DUAL-CHAMBER PRACTICE AREAS SECTION (KOMPLEKS, BERBOBOT PIDANA & PERDATA) */}
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
                Menghadirkan pembelaan perkara dengan pendekatan yurisprudensi menyeluruh. Mengawal hak konstitusional klien dari ancaman delik pidana serta memulihkan hak aset komersial melalui peradilan perdata dan niaga.
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
                  Sesuai KUHAP, Anda berhak didampingi penasihat hukum di setiap tahap penyelidikan dan penyidikan. Hubungi tim litigasi pidana kami sebelum memberikan keterangan resmi.
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

                      {/* Cakupan Sub-Perkara & Delik Materiil */}
                      <div className={`space-y-2.5 pt-5 pb-6 border-t ${
                        isCriminal ? 'border-[#C5A880]/20' : 'border-[#0F1E36]/10'
                      }`}>
                        <span className={`text-[10px] font-mono uppercase tracking-wider block font-bold ${
                          isCriminal ? 'text-[#C5A880]' : 'text-[#0F1E36]/70'
                        }`}>
                          Ruang Lingkup Penanganan Perkara:
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

      {/* 3. METODOLOGI PENANGANAN PERKARA (4 TAHAP PROTOKOL RESMI) */}
      <section className="py-24 bg-[#0F1E36] text-[#F8F6F0] relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#C5A880] font-bold tracking-widest uppercase text-xs px-3.5 py-1.5 bg-[#142847] border border-[#C5A880]/30 rounded-full inline-block">
              Alur Kerja Standar Operasional
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#F8F6F0] font-bold mt-3">Metodologi Advokasi Presisi</h2>
            <p className="text-[#F8F6F0]/75 text-sm mt-3 font-normal">
              Setiap mandat litigasi pidana maupun gugatan perdata dikawal melalui protokol empat tahap yang sistematis demi menjamin kecermatan analisis yuridis dan perlindungan kepentingan klien.
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

      {/* 4. INTERACTIVE FAQ ACCORDION SECTION (FILTERABLE & BERBOBOT YURIDIS) */}
      <section className="py-24 bg-[#F8F6F0] border-t border-[#0F1E36]/10">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          
          <div className="text-center mb-12">
            <span className="text-[#0F1E36] font-bold tracking-widest uppercase text-xs px-3.5 py-1.5 bg-[#C5A880]/20 border border-[#C5A880]/40 rounded-full inline-flex items-center gap-1.5">
              <HelpCircle size={14} className="text-[#0F1E36]" /> Tanya Jawab & Regulasi
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0F1E36] font-bold mt-3">Informasi & Pedoman Layanan Hukum</h2>
            <p className="text-[#0F1E36]/70 text-sm mt-2">Klarifikasi terkait mekanisme inisiasi konsultasi, kerahasiaan dokumen perkara, dan skema pendampingan hukum pidana maupun perdata.</p>
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

      {/* 5. CLIENT TESTIMONIALS SECTION (FORMAT EKSEKUTIF & RELEVANSI INDUSTRI) */}
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