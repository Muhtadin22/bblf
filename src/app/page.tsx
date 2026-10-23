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
  CheckCircle2, 
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
  ShieldAlert, 
  AlertTriangle, 
  Search, 
  FileBadge, 
  GraduationCap, 
  PhoneCall, 
  Shield,
  FileCheck
} from 'lucide-react';

// --- DATA: TEASER BIDANG PRAKTIK STRATEGIS ---
const criminalPracticeTeasers = [
  {
    id: 'pidana-korporasi',
    title: 'Hukum Pidana Korporasi & Bisnis',
    subtitle: 'Corporate Crime & Directors Defense',
    desc: 'Pembelaan hukum strategis atas dugaan penipuan komersial, penggelapan jabatan, serta perlindungan pertanggungjawaban personal direksi dan pemegang saham perseroan.',
    icon: Building2
  },
  {
    id: 'tipikor-suap',
    title: 'Tindak Pidana Korupsi (Tipikor) & Suap',
    subtitle: 'Anti-Corruption & Procurement Counsel',
    desc: 'Advokasi berintegritas tinggi menghadapi investigasi KPK, Kejaksaan, dan Kepolisian terkait pengadaan barang/jasa, suap bisnis, dan pengujian audit kerugian keuangan negara.',
    icon: Scale
  },
  {
    id: 'kejahatan-siber',
    title: 'Kejahatan Siber & Informasi Elektronik',
    subtitle: 'Cyber Crime & Digital Forensics',
    desc: 'Penanganan perkara pidana digital dan pembuktian forensik elektronik atas sangkaan akses ilegal sistem perbankan, manipulasi data perusahaan, dan delik transaksi ITE.',
    icon: ShieldAlert
  },
  {
    id: 'perbankan-tppu',
    title: 'Pidana Perbankan & Pencucian Uang (TPPU)',
    subtitle: 'Banking Crimes & Anti-Money Laundering',
    desc: 'Pembelaan atas sangkaan penempatan dana ilegal, transaksi pasar modal, keberatan pemblokiran rekening operasional, serta penelusuran aset komersial perseroan.',
    icon: Landmark
  },
  {
    id: 'narkotika-khusus',
    title: 'Tindak Pidana Narkotika & Zat Terlarang',
    subtitle: 'Narcotics Law & Due Process Defense',
    desc: 'Pendampingan berlandaskan hak asasi dan keadilan hukum substantif, memastikan uji keabsahan penggeledahan, legalitas penangkapan, serta asesmen rehabilitasi medis.',
    icon: Shield
  },
  {
    id: 'praperadilan-bap',
    title: 'Praperadilan & Pembelaan Hak Tersangka',
    subtitle: 'Pre-Trial Motion & Police Investigation',
    desc: 'Pendampingan Berita Acara Pemeriksaan (BAP) 24/7 di Kepolisian dan Kejaksaan serta uji keabsahan penetapan tersangka dan penyitaan aset di hadapan Hakim Praperadilan.',
    icon: Gavel
  }
];

const civilPracticeTeasers = [
  {
    id: 'wanprestasi-kontrak',
    title: 'Sengketa Kontrak Bisnis & Wanprestasi',
    subtitle: 'Commercial Breach of Contract',
    desc: 'Penyelesaian ingkar janji perjanjian komersial, penagihan piutang macet korporasi, permohonan sita jaminan rekening, dan gugatan ganti rugi bunga komersial.',
    icon: FileText
  },
  {
    id: 'pmh-kompensasi',
    title: 'Gugatan Perbuatan Melawan Hukum (PMH)',
    subtitle: 'Tort Claims & Damages Recovery',
    desc: 'Litigasi tuntutan ganti rugi materiil dan immateriil atas perbuatan melawan hukum pihak ketiga yang menimbulkan kerugian finansial dan kerusakan reputasi usaha.',
    icon: ShieldCheck
  },
  {
    id: 'agraria-tanah',
    title: 'Hukum Kebendaan & Sengketa Tanah',
    subtitle: 'Real Estate & Agrarian Property Disputes',
    desc: 'Perlindungan aset tanah industri, penyelesaian sertifikat ganda tumpang-tindih (Hak Milik/HGB), gugatan pembatalan sertifikat di PTUN, dan eksekusi pengosongan lahan.',
    icon: Landmark
  },
  {
    id: 'keluarga-waris',
    title: 'Mediasi Bisnis & Hukum Keluarga/Waris',
    subtitle: 'Family Estate Planning & Private Mediation',
    desc: 'Penyelesaian sengketa komersial secara tertutup melalui mediasi strategis serta pengelolaan sengketa harta bersama dan pembagian waris bernilai aset tinggi.',
    icon: Users
  }
];

// --- DATA: 3 TAHAPAN ALUR PENANGANAN PERKARA ---
const litigationWorkflows = [
  {
    step: '01',
    title: 'Analisis Awal Dokumen & Fakta Yuridis',
    desc: 'Penelaahan komprehensif atas surat panggilan pemeriksaan, dokumen BAP, bukti materiil, dan konstruksi pasal yang disangkakan guna memetakan kedudukan hukum.',
    icon: Search
  },
  {
    step: '02',
    title: 'Formulasi Strategi Hukum & Mitigasi Risiko',
    desc: 'Perumusan rencana aksi taktis: menentukan apakah menempuh jalur koreksi prosedural (Praperadilan), pembuktian di persidangan (Eksepsi & Pledoi), atau mediasi.',
    icon: FileCheck
  },
  {
    step: '03',
    title: 'Pendampingan Formal & Persidangan',
    desc: 'Advokasi langsung di hadapan penyidik kepolisian, kejaksaan, majelis hakim Pengadilan Negeri hingga Mahkamah Agung guna memastikan hak hukum terlindungi penuh.',
    icon: Gavel
  }
];

// --- DATA: STUDI KASUS ANONIM ETIS ---
const anonymousMilestones = [
  {
    category: 'Praperadilan & Due Process',
    title: 'Pembatalan Penetapan Tersangka Dugaan Delik Jabatan',
    challenge: 'Klien ditetapkan sebagai tersangka tanpa pemenuhan minimal dua alat bukti sah yang relevan serta tanpa pemeriksaan calon tersangka terlebih dahulu.',
    solution: 'Mengajukan permohonan Praperadilan di Pengadilan Negeri berlandaskan Putusan MK No. 21/PUU-XII/2014. Hakim mengabulkan permohonan dan membatalkan status penetapan tersangka.',
    tag: 'Hakim Tunggal Praperadilan PN'
  },
  {
    category: 'Litigasi Pidana Korporasi',
    title: 'Pendampingan BAP & Penangguhan Penahanan Eksekutif Bisnis',
    challenge: 'Direksi perseroan menghadapi pemanggilan mendadak atas sangkaan fraud komersial dan ancaman upaya paksa penahanan oleh penyidik.',
    solution: 'Mendampingi BAP 24 jam dengan argumentasi Business Judgment Rule dan mengajukan penjaminan penangguhan penahanan, menghasilkan pembebasan tanpa penahanan fisik.',
    tag: 'Tingkat Penyidikan Polda & Mabes'
  },
  {
    category: 'Sengketa Perdata Komersial',
    title: 'Mediasi Strategis & Sita Jaminan Pemulihan Piutang Bisnis',
    challenge: 'Mitra usaha melakukan cedera janji kontrak bernilai puluhan miliar rupiah dengan indikasi pengalihan aset secara melawan hukum.',
    solution: 'Mengajukan gugatan wanprestasi disertai permohonan sita jaminan (conservatoir beslag), mendorong tercapainya kesepakatan damai restrukturisasi pembayaran penuh.',
    tag: 'Pengadilan Negeri & Perdamaian Akta'
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

export default function Home() {
  const [caseType, setCaseType] = useState<'pidana' | 'perdata'>('pidana');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [caseSummary, setCaseSummary] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleQuickIntake = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const waNumber = '6285697259015';
    const messageLines = [
      '*KONSULTASI PERKARA // BHADRIKA BYAKTA LAW FIRM*',
      '--------------------------------------------------',
      `*Kategori Perkara*: ${caseType === 'pidana' ? 'LITIGASI PIDANA (URGENT / BAP)' : 'SENGKETA PERDATA & KOMERSIAL'}`,
      `*Nama Klien / Kuasa*: ${clientName.trim() || '-'}`,
      `*Nomor WhatsApp*: ${clientPhone.trim() || '-'}`,
      '',
      '*RINGKASAN PERSOALAN:*',
      caseSummary.trim() || '(Kronologi disampaikan langsung saat temu bicara)',
      '--------------------------------------------------',
      '_Dikirimkan melalui Portal Resmi BBLF_'
    ];

    const encodedText = encodeURIComponent(messageLines.join('\n'));
    const generatedUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodedText}`;

    setIsSubmitting(false);

    try {
      const win = window.open(generatedUrl, '_blank');
      if (!win || win.closed || typeof win.closed === 'undefined') {
        window.location.href = generatedUrl;
      }
    } catch {
      window.location.href = generatedUrl;
    }
  };

  return (
    <div className="selection:bg-[#C5A880] selection:text-[#0F1E36] bg-[#F8F6F0] text-[#0F1E36] overflow-hidden font-sans">
      
      {/* =========================================================================
          1. HERO SECTION: OTORITAS INSTAN & TOMBOL AKSI GANDA
      ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-[#0F1E36] overflow-hidden pt-36 pb-20 border-b border-[#C5A880]/20">
        
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <div className="absolute -top-40 -right-32 w-[650px] h-[650px] bg-[#C5A880]/10 rounded-full blur-[140px]" />
          <div className="absolute -bottom-40 -left-32 w-[550px] h-[550px] bg-[#0A1424] rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#C5A88015_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#142847] border border-[#C5A880]/30 shadow-inner mb-6">
                <Gavel className="text-[#C5A880] shrink-0" size={16} />
                <span className="text-[#C5A880] text-xs font-semibold tracking-widest uppercase font-mono">
                  Bhadrika Byakta Law Firm &bull; Advocates & Trial Counsel
                </span>
              </motion.div>

              <motion.h1 variants={itemVariants} className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F8F6F0] font-bold mb-6 leading-[1.14]">
                Benteng Pembelaan Pidana Tangguh, <br />
                <span className="text-[#C5A880] relative inline-block font-serif italic mt-1">
                  Keahlian Litigasi Tanpa Kompromi.
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C5A880] to-transparent" />
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-[#F8F6F0]/85 text-base md:text-lg font-normal mb-10 leading-relaxed max-w-3xl mx-auto">
                Mendedikasikan kompetensi utama pada pembelaan perkara pidana sejak tahap penyelidikan kepolisian, kejaksaan, praperadilan, hingga persidangan Mahkamah Agung, didukung kemahiran taktis dalam penyelesaian sengketa perdata bisnis dan pemulihan aset.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
                <a 
                  href="https://wa.me/6285697259015?text=Halo%20BBLF,%20saya%20membutuhkan%20pendampingan%20hukum%20pidana%20darurat%20untuk%20panggilan%20pemeriksaan/BAP/penahanan."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#b8996e] text-[#0F1E36] font-bold px-7 py-4 rounded-xl transition-all shadow-xl shadow-black/20 flex items-center justify-center gap-2.5 border border-[#C5A880] text-xs uppercase tracking-wider group"
                >
                  <PhoneCall size={16} className="text-[#0F1E36] animate-pulse" />
                  <span>Konsultasi Pidana Darurat 24/7</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href="#konsultasi-langsung"
                  className="w-full sm:w-auto bg-[#142847]/95 hover:bg-[#142847] text-[#F8F6F0] font-semibold px-7 py-4 rounded-xl transition-all border border-[#C5A880]/40 flex items-center justify-center gap-2 hover:border-[#C5A880] text-xs uppercase tracking-wider"
                >
                  <Scale size={16} className="text-[#C5A880]" />
                  <span>Jadwal Konsultasi Perdata</span>
                </a>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-8 text-[11px] font-mono text-[#F8F6F0]/60 flex items-center justify-center gap-2">
                <Lock size={12} className="text-[#C5A880]" />
                <span>Konsultasi Dilindungi Hak Tolak & Rahasia Jabatan Advokat</span>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. CREDIBILITY & TRUST BAR (DIPERBARUI: PENDEKATAN KUALITATIF & LEGALITAS RESMI)
      ========================================================================= */}
      <section className="relative z-20 -mt-8 px-6 md:px-12 mb-16">
        <div className="container mx-auto">
          <div className="bg-[#0F1E36] rounded-2xl shadow-2xl p-6 md:p-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-2 border-[#C5A880]/30">
            
            {/* Pilar 1: Legalitas & Lisensi Sah */}
            <div className="flex items-center gap-3.5 p-1 border-b sm:border-b-0 sm:border-r border-[#C5A880]/15 pb-4 sm:pb-0">
              <div className="w-11 h-11 rounded-xl bg-[#142847] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] shrink-0">
                <BadgeCheck size={20} />
              </div>
              <div>
                <h4 className="text-sm md:text-base font-bold text-[#F8F6F0] font-serif leading-tight">Lisensi Sah PERADI</h4>
                <p className="text-[#C5A880] text-[11px] font-semibold mt-0.5">Berita Acara Sumpah PT</p>
                <p className="text-[#F8F6F0]/60 text-[10px] font-light leading-snug">Wewenang Beracara Sah di Seluruh Tingkat Pengadilan</p>
              </div>
            </div>

            {/* Pilar 2: Presisi Yuridis & Due Process */}
            <div className="flex items-center gap-3.5 p-1 border-b sm:border-b-0 lg:border-r border-[#C5A880]/15 pb-4 sm:pb-0">
              <div className="w-11 h-11 rounded-xl bg-[#142847] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] shrink-0">
                <ShieldAlert size={20} />
              </div>
              <div>
                <h4 className="text-sm md:text-base font-bold text-[#F8F6F0] font-serif leading-tight">Presisi & Integritas</h4>
                <p className="text-[#C5A880] text-[11px] font-semibold mt-0.5">Due Process of Law</p>
                <p className="text-[#F8F6F0]/60 text-[10px] font-light leading-snug">Pengawalan Ketat Hukum Acara & Norma KUHP Baru</p>
              </div>
            </div>

            {/* Pilar 3: Hak Tolak & Kerahasiaan Klien */}
            <div className="flex items-center gap-3.5 p-1 border-b sm:border-b-0 sm:border-r border-[#C5A880]/15 pb-4 sm:pb-0">
              <div className="w-11 h-11 rounded-xl bg-[#142847] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] shrink-0">
                <Lock size={20} />
              </div>
              <div>
                <h4 className="text-sm md:text-base font-bold text-[#F8F6F0] font-serif leading-tight">Kerahasiaan Mutlak</h4>
                <p className="text-[#C5A880] text-[11px] font-semibold mt-0.5">Hak Tolak Advokat</p>
                <p className="text-[#F8F6F0]/60 text-[10px] font-light leading-snug">Perlindungan Penuh Pasal 19 UU No. 18 Tahun 2003</p>
              </div>
            </div>

            {/* Pilar 4: Jangkauan Forum Peradilan */}
            <div className="flex items-center gap-3.5 p-1">
              <div className="w-11 h-11 rounded-xl bg-[#142847] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] shrink-0">
                <Landmark size={20} />
              </div>
              <div>
                <h4 className="text-sm md:text-base font-bold text-[#F8F6F0] font-serif leading-tight">Yurisdiksi Nasional</h4>
                <p className="text-[#C5A880] text-[11px] font-semibold mt-0.5">Seluruh Kamar Peradilan</p>
                <p className="text-[#F8F6F0]/60 text-[10px] font-light leading-snug">Litigasi PN, Pengadilan Niaga, Tipikor, PTUN, & MA</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. STRATEGIC PRACTICE AREAS TEASER (PIDANA PRIORITAS DI ATAS PERDATA)
      ========================================================================= */}
      <section className="py-20 bg-[#F8F6F0] border-b border-[#0F1E36]/10">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="max-w-3xl mb-14">
            <span className="text-[#0F1E36] font-bold tracking-widest uppercase text-xs px-3.5 py-1.5 bg-[#C5A880]/20 border border-[#C5A880]/40 rounded-full inline-block font-mono mb-3">
              Penataan Layanan Berjenjang
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0F1E36] font-bold">
              Bidang Praktik Utama & Layanan Litigasi
            </h2>
            <p className="text-[#0F1E36]/75 text-sm font-normal mt-2">
              Memprioritaskan pembelaan perkara hukum pidana berisiko tinggi tanpa mengesampingkan kapabilitas strategis dalam sengketa perdata bisnis.
            </p>
          </div>

          {/* BLOK UTAMA: SPESIALISASI PIDANA */}
          <div className="mb-14">
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#0F1E36]/15">
              <div className="flex items-center gap-2.5">
                <Gavel className="text-[#0F1E36]" size={20} />
                <h3 className="font-serif text-xl md:text-2xl font-bold text-[#0F1E36]">
                  Fokus Spesialisasi: Hukum Pidana & Pembelaan
                </h3>
              </div>
              <span className="text-[11px] font-mono text-[#0F1E36]/60 font-semibold uppercase">
                Prioritas Penanganan &bull; 6 Bidang
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {criminalPracticeTeasers.map((service) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={service.id}
                    className="bg-[#0F1E36] text-[#F8F6F0] rounded-2xl p-6 border-2 border-[#C5A880]/40 hover:border-[#C5A880] shadow-xl transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[#142847] border border-[#C5A880]/40 text-[#C5A880] flex items-center justify-center group-hover:bg-[#C5A880] group-hover:text-[#0F1E36] transition-all">
                          <Icon size={22} />
                        </div>
                        <span className="text-[10px] font-mono text-[#C5A880] uppercase tracking-wider bg-[#142847] px-2.5 py-1 rounded border border-[#C5A880]/20 font-bold">
                          Core Practice
                        </span>
                      </div>

                      <h4 className="font-serif text-lg font-bold text-[#F8F6F0] mb-1 leading-snug">
                        {service.title}
                      </h4>
                      <p className="text-[11px] font-mono text-[#C5A880] mb-3">
                        {service.subtitle}
                      </p>
                      <p className="text-xs text-[#F8F6F0]/80 leading-relaxed font-light mb-6">
                        {service.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#C5A880]/20 flex items-center justify-between">
                      <Link 
                        href="/practice-areas"
                        className="text-xs font-bold text-[#C5A880] group-hover:text-white uppercase tracking-wider inline-flex items-center gap-1 transition-colors"
                      >
                        <span>Lihat Detail Layanan</span>
                        <ChevronRight size={14} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* BLOK PENDUKUNG: HUKUM PERDATA & SENGKETA KOMERSIAL */}
          <div>
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#0F1E36]/15">
              <div className="flex items-center gap-2.5">
                <Scale className="text-[#0F1E36]" size={20} />
                <h3 className="font-serif text-xl md:text-2xl font-bold text-[#0F1E36]">
                  Layanan Pendukung: Sengketa Perdata & Bisnis
                </h3>
              </div>
              <span className="text-[11px] font-mono text-[#0F1E36]/60 font-semibold uppercase">
                Aset & Kontrak &bull; 4 Bidang
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {civilPracticeTeasers.map((service) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={service.id}
                    className="bg-white text-[#0F1E36] rounded-2xl p-6 border border-[#0F1E36]/15 hover:border-[#C5A880] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-11 h-11 rounded-xl bg-[#0F1E36] text-[#C5A880] flex items-center justify-center mb-4 group-hover:bg-[#C5A880] group-hover:text-[#0F1E36] transition-colors">
                        <Icon size={20} />
                      </div>

                      <h4 className="font-serif text-base font-bold text-[#0F1E36] mb-1 leading-snug">
                        {service.title}
                      </h4>
                      <p className="text-[10px] font-mono text-[#0F1E36]/60 mb-2">
                        {service.subtitle}
                      </p>
                      <p className="text-xs text-[#0F1E36]/75 leading-relaxed font-normal mb-5">
                        {service.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#0F1E36]/10">
                      <Link 
                        href="/practice-areas"
                        className="text-xs font-bold text-[#0F1E36] group-hover:text-[#C5A880] uppercase tracking-wider inline-flex items-center gap-1 transition-colors"
                      >
                        <span>Lihat Detail Layanan</span>
                        <ChevronRight size={14} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. BRIEF FIRM IDENTITY & CORE VALUES
      ========================================================================= */}
      <section className="py-20 bg-white border-b border-[#0F1E36]/10">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          
          <div className="bg-[#F8F6F0] rounded-3xl p-8 md:p-12 border border-[#0F1E36]/15 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#0F1E36]/10">
              <span className="text-[#0F1E36] font-bold tracking-widest uppercase text-xs font-mono px-3 py-1 bg-[#C5A880]/20 border border-[#C5A880]/40 rounded-full inline-block">
                Identitas & Filosofi Firma
              </span>
              <span className="text-xs font-mono text-[#0F1E36]/60">
                ATURAN PROFESI: PASAL 19 UU ADVOKAT
              </span>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0F1E36] leading-tight">
              Menjunjung Tinggi Hak Tolak, Kehati-Hatian Pembelaan, & Kepatuhan Hukum Tanpa Kompromi.
            </h3>

            <p className="text-[#0F1E36]/80 text-sm md:text-base leading-relaxed font-normal">
              Bhadrika Byakta Law Firm beroperasi dengan memegang teguh integritas etik advokat, jaminan perlindungan kerahasiaan hubungan advokat-klien (*attorney-client privilege*), serta ketegasan mengawal asas praduga tak bersalah. Setiap perkara diperjuangkan dengan kehati-hatian riset materiil guna memastikan kepastian hukum dan perlindungan hak asasi klien terlindungi seutuhnya.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#0F1E36]/10">
              <div className="flex items-center gap-3 text-xs text-[#0F1E36]/80 font-medium">
                <CheckCircle2 size={16} className="text-[#C5A880]" />
                <span>Kerahasiaan Mutlak</span>
                <span className="text-[#C5A880]">&bull;</span>
                <span>Zealous Advocacy</span>
                <span className="text-[#C5A880]">&bull;</span>
                <span>Transparansi Prosedural</span>
              </div>

              <Link 
                href="/about"
                className="text-xs font-bold text-[#0F1E36] hover:text-[#C5A880] inline-flex items-center gap-1.5 uppercase tracking-wider transition-colors"
              >
                <span>Pelajari Riwayat & Legalitas Firma</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. LITIGATION WORKFLOW (ALUR PENANGANAN PERKARA 3 TAHAP)
      ========================================================================= */}
      <section className="py-20 bg-[#0F1E36] text-[#F8F6F0] relative overflow-hidden border-b border-[#C5A880]/20">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#C5A880] font-bold tracking-widest uppercase text-xs px-3.5 py-1.5 bg-[#142847] border border-[#C5A880]/30 rounded-full inline-block font-mono">
              Alur Penanganan Prosedural
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#F8F6F0] font-bold mt-3">
              Tahapan Penanganan Perkara yang Terukur
            </h2>
            <p className="text-[#F8F6F0]/75 text-sm mt-2 font-normal">
              Langkah transparan sejak awal demi menenangkan dan memberikan kepastian hukum bagi Anda yang sedang menghadapi tekanan peradilan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {litigationWorkflows.map((flow, idx) => {
              const Icon = flow.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#142847]/80 border-2 border-[#C5A880]/30 hover:border-[#C5A880] rounded-2xl p-7 flex flex-col justify-between transition-colors group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-2xl font-bold text-[#C5A880]">
                        {flow.step}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-[#0F1E36] border border-[#C5A880]/40 text-[#C5A880] flex items-center justify-center">
                        <Icon size={20} />
                      </div>
                    </div>

                    <h4 className="font-serif text-lg font-bold text-[#F8F6F0] mb-2 leading-snug">
                      {flow.title}
                    </h4>

                    <p className="text-xs text-[#F8F6F0]/75 leading-relaxed font-normal">
                      {flow.desc}
                    </p>
                  </div>

                  <div className="w-full h-1 bg-[#0F1E36] rounded-full mt-6 overflow-hidden">
                    <div className="w-1/3 h-full bg-[#C5A880] group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. LEAD COUNSEL HIGHLIGHT (FADLY RAHMAN, S.H., S.E., M.Si)
      ========================================================================= */}
      <section className="py-20 bg-white border-b border-[#0F1E36]/10">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          
          <div className="bg-[#F8F6F0] rounded-3xl p-8 md:p-12 border border-[#0F1E36]/15 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-5">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#0F1E36] border-2 border-[#C5A880]/50 shadow-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" 
                    alt="Fadly Rahman, S.H., S.E., M.Si - Senior Partner"
                    className="w-full h-full object-cover grayscale-[10%]" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36] via-transparent to-transparent opacity-70" />
                  <div className="absolute bottom-3 left-3 right-3 bg-[#0F1E36]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#C5A880]/30 text-center">
                    <span className="text-[10px] font-mono text-[#C5A880] font-bold">
                      PERADI RESMI &bull; BAS PENGADILAN TINGGI
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 space-y-5">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A880] font-bold block mb-1">
                    Senior Partner & Lead Counsel
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0F1E36]">
                    Fadly Rahman, S.H., S.E., M.Si
                  </h3>
                  <p className="text-xs font-semibold text-[#0F1E36]/70 mt-0.5">
                    Senior Partner & Advokat Litigasi
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#0F1E36]/10 relative">
                  <Quote className="text-[#C5A880]/20 absolute top-3 right-3" size={28} />
                  <p className="text-xs sm:text-sm text-[#0F1E36] italic leading-relaxed font-normal">
                    &ldquo;Keadilan substantif dan kepastian hukum klien adalah mandat mutlak. Di hadapan penyidik maupun persidangan, keunggulan advokasi kami bertumpu pada ketelitian membedah alat bukti materiil dan ketegasan mengawal hukum acara tanpa kompromi.&rdquo;
                  </p>
                </div>

                <div className="space-y-1.5 text-xs text-[#0F1E36]/80 font-medium">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={15} className="text-[#C5A880]" />
                    <span>Magister Ilmu Administrasi / Hukum | Sarjana Hukum & Sarjana Ekonomi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileBadge size={15} className="text-[#C5A880]" />
                    <span>Advokat Tersumpah Pengadilan Tinggi & Anggota Resmi PERADI</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link 
                    href="/team"
                    className="inline-flex items-center gap-2 bg-[#0F1E36] hover:bg-[#142847] text-[#C5A880] px-6 py-3 rounded-xl text-xs uppercase tracking-wider font-bold transition-colors border border-[#C5A880]/30 shadow-md"
                  >
                    <span>Lihat Profil Seluruh Rekanan Advokat</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. TRACK RECORD & CASE MILESTONES (PENDEKATAN ETIS & ANONIM)
      ========================================================================= */}
      <section className="py-20 bg-[#F8F6F0] border-b border-[#0F1E36]/10">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#0F1E36] font-bold tracking-widest uppercase text-xs px-3.5 py-1.5 bg-[#C5A880]/20 border border-[#C5A880]/40 rounded-full inline-block font-mono">
              Rekam Jejak Taktis Litigasi
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0F1E36] font-bold mt-3">
              Studi Kasus & Capaian Berperkara
            </h2>
            <p className="text-[#0F1E36]/75 text-sm mt-2 font-normal">
              Ikhtisar pengalaman representasi hukum riil yang disajikan secara anonim guna melindungi kerahasiaan identitas klien serta mematuhi etika profesi advokat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {anonymousMilestones.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-7 rounded-2xl border border-[#0F1E36]/15 hover:border-[#C5A880] transition-colors flex flex-col justify-between shadow-sm space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase font-bold text-[#C5A880] bg-[#0F1E36] px-2.5 py-1 rounded">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#0F1E36]/50">
                      CONFIDENTIAL
                    </span>
                  </div>

                  <h4 className="font-serif font-bold text-base text-[#0F1E36] leading-snug mb-3">
                    {item.title}
                  </h4>

                  <div className="space-y-2 text-xs text-[#0F1E36]/75 leading-relaxed font-normal">
                    <p>
                      <strong className="text-[#0F1E36] font-semibold">Tantangan: </strong>
                      {item.challenge}
                    </p>
                    <p>
                      <strong className="text-[#0F1E36] font-semibold">Solusi Yuridis: </strong>
                      {item.solution}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#0F1E36]/10 flex items-center justify-between text-[11px] font-mono text-[#0F1E36]/70">
                  <span>Yurisdiksi: {item.tag}</span>
                  <CheckCircle2 size={14} className="text-[#C5A880]" />
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[11px] font-mono text-[#0F1E36]/50 mt-8">
            *Berdasarkan Kode Etik Advokat Indonesia (KEAI), kami tidak menjanjikan kemenangan mutlak atas setiap perkara. Hasil penanganan bergantung pada fakta yuridis dan independensi majelis peradilan.
          </p>

        </div>
      </section>

      {/* =========================================================================
          8. DIRECT CONSULTATION BOOKING & URGENT CONTACT
      ========================================================================= */}
      <section id="konsultasi-langsung" className="py-20 bg-[#0F1E36] text-[#F8F6F0] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#C5A880] font-bold tracking-widest uppercase text-xs px-3.5 py-1.5 bg-[#142847] border border-[#C5A880]/30 rounded-full inline-block font-mono">
              Pusat Registrasi & Hotline Siaga
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#F8F6F0] font-bold mt-3">
              Inisiasi Konsultasi Awal & Sambungan Cepat
            </h2>
            <p className="text-[#F8F6F0]/75 text-sm mt-2 font-normal">
              Isi formulir esensial di bawah ini untuk penjadwalan awal, atau hubungi saluran telepon darurat 24 jam untuk pendampingan pemeriksaan segera.
            </p>
          </div>

          <div className="bg-[#142847] border-2 border-[#C5A880]/40 rounded-3xl shadow-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="pb-3 border-b border-[#C5A880]/20 flex items-center justify-between">
                <span className="text-xs font-mono text-[#C5A880] flex items-center gap-1.5 font-bold">
                  <Lock size={14} /> FORMULIR KONSULTASI AWAL
                </span>
                <span className="text-[10px] font-mono text-[#F8F6F0]/60">ENCRYPTED WHATSAPP</span>
              </div>

              <form onSubmit={handleQuickIntake} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono text-[#F8F6F0]/80 uppercase mb-1.5">
                    1. Jenis Perkara *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setCaseType('pidana')}
                      className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-2 ${
                        caseType === 'pidana'
                          ? 'bg-[#C5A880] text-[#0F1E36] border-[#C5A880] shadow'
                          : 'bg-[#0F1E36] text-[#F8F6F0] border-[#C5A880]/30 hover:border-[#C5A880]'
                      }`}
                    >
                      <Gavel size={15} />
                      <span>Litigasi Pidana (Mendesak)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setCaseType('perdata')}
                      className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-2 ${
                        caseType === 'perdata'
                          ? 'bg-[#C5A880] text-[#0F1E36] border-[#C5A880] shadow'
                          : 'bg-[#0F1E36] text-[#F8F6F0] border-[#C5A880]/30 hover:border-[#C5A880]'
                      }`}
                    >
                      <Scale size={15} />
                      <span>Sengketa Perdata & Bisnis</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-[#F8F6F0]/80 uppercase mb-1">
                      Nama Lengkap *
                    </label>
                    <input 
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Nama Pemohon / Klien"
                      className="w-full bg-[#0F1E36] border border-[#C5A880]/30 rounded-xl px-4 py-3 text-xs text-[#F8F6F0] focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#F8F6F0]/80 uppercase mb-1">
                      Nomor WhatsApp / Telepon *
                    </label>
                    <input 
                      type="tel"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="+62 812-3456-7890"
                      className="w-full bg-[#0F1E36] border border-[#C5A880]/30 rounded-xl px-4 py-3 text-xs text-[#F8F6F0] focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#F8F6F0]/80 uppercase mb-1">
                    Ringkasan Singkat Persoalan Hukum *
                  </label>
                  <textarea 
                    rows={3}
                    required
                    value={caseSummary}
                    onChange={(e) => setCaseSummary(e.target.value)}
                    placeholder="Contoh: Panggilan BAP penyidik Polsek/Polda, sengketa wanprestasi kontrak bisnis, atau permohonan Praperadilan..."
                    className="w-full bg-[#0F1E36] border border-[#C5A880]/30 rounded-xl px-4 py-3 text-xs text-[#F8F6F0] focus:outline-none focus:border-[#C5A880] resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C5A880] hover:bg-[#b8996e] text-[#0F1E36] font-bold py-3.5 rounded-xl transition-all shadow-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-[#C5A880]"
                >
                  <MessageSquare size={16} />
                  <span>{isSubmitting ? 'Menyiapkan Jalur Aman...' : 'Kirim Konsultasi Terenkripsi ke WhatsApp Partner'}</span>
                </button>
              </form>
            </div>

            <div className="lg:col-span-5 bg-[#0F1E36] p-7 rounded-2xl border border-[#C5A880]/30 space-y-6 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#C5A880] font-bold mb-2">
                  <AlertTriangle size={14} /> Saluran Penanganan Mendesak
                </div>

                <h4 className="font-serif text-xl font-bold text-[#F8F6F0] leading-snug">
                  Pendampingan Penangkapan, Penahanan, atau BAP Mendadak
                </h4>

                <p className="text-xs text-[#F8F6F0]/75 mt-2 leading-relaxed font-normal">
                  Jika Anda atau kerabat sedang menghadapi pemanggilan kepolisian atau tindakan upaya paksa yang memerlukan kehadiran penasihat hukum seketika, hubungi hotline 24 jam:
                </p>

                <div className="pt-4 space-y-3">
                  <a 
                    href="tel:+6285697259015"
                    className="w-full bg-[#C5A880] hover:bg-[#b8996e] text-[#0F1E36] font-bold px-5 py-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-[#C5A880]"
                  >
                    <Phone size={15} /> Panggil Hotline (+62 856-9725-9015)
                  </a>

                  <a 
                    href="https://wa.me/6285697259015?text=Halo%20BBLF,%20saya%20membutuhkan%20pendampingan%20hukum%20pidana%20darurat%20segera."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#142847] hover:bg-[#1c365f] text-[#F8F6F0] font-semibold px-5 py-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-[#C5A880]/30"
                  >
                    <MessageSquare size={15} className="text-[#C5A880]" /> WhatsApp Darurat 24 Jam
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-[#C5A880]/20 text-[11px] text-[#F8F6F0]/60 leading-relaxed font-light">
                <p>
                  *Peta lokasi kantor fisik di Ruko Silktown Avenue, jam kerja tatap muka, dan email resmi departemen tersedia lengkap di menu{' '}
                  <Link href="/contact" className="text-[#C5A880] hover:underline font-semibold">
                    Kontak Kami
                  </Link>.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}