'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { 
  Gavel, 
  Scale, 
  Building2, 
  ShieldCheck, 
  ShieldAlert, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall, 
  Phone, 
  MessageSquare, 
  Lock, 
  AlertTriangle, 
  Landmark, 
  Search, 
  Shield, 
  BadgeCheck, 
  ChevronRight,
  BookOpenCheck
} from 'lucide-react';

// --- DATA: SPESIALISASI UTAMA (LITIGASI PIDANA DENGAN DESKRIPSI KUHP BARU & PERATURAN TERBARU) ---
const criminalDefenseServices = [
  {
    id: 'white-collar',
    title: 'Tindak Pidana Bisnis & Korporasi',
    subtitle: 'White-Collar & Corporate Crime Defense',
    kuhpAnchor: 'UU No. 1/2023 (KUHP Baru), UU P2SK No. 4/2023, & UU TPPU No. 8/2010',
    desc: 'Pembelaan hukum strategis atas dugaan delik korporasi di bawah rezim UU No. 1 Tahun 2023 (KUHP Baru) yang mengatur pertanggungjawaban pidana korporasi secara komprehensif, diselaraskan dengan rezim tindak pidana sektor keuangan (UU No. 4/2023 - P2SK) serta penanganan tindak pidana pencucian uang (UU No. 8/2010 - TPPU) guna mengamankan hak direksi, komisaris, dan kesinambungan entitas bisnis.',
    pasalItems: [
      {
        delik: 'Penipuan Komersial & Kerugian Investasi',
        pasal: 'Pasal 492 UU No. 1/2023 (KUHP Baru)',
        ket: 'Pembelaan atas tuduhan tipu muslihat atau rangkaian narasi palsu dalam perjanjian bisnis dan pendanaan (menggantikan Pasal 378 KUHP lama).'
      },
      {
        delik: 'Penggelapan & Penggelapan dalam Hubungan Kerja',
        pasal: 'Pasal 486 & Pasal 488 UU No. 1/2023 (KUHP Baru)',
        ket: 'Penanganan dugaan penyalahgunaan dana, aset, atau kewenangan perseroan oleh pejabat internal dan eksekutif (menggantikan Pasal 372 & 374 KUHP lama).'
      },
      {
        delik: 'Pertanggungjawaban Pidana Korporasi (Corporate Liability)',
        pasal: 'Pasal 45 s/d Pasal 50 UU No. 1/2023 (KUHP Baru)',
        ket: 'Konstruksi hukum pembelaan subjek hukum korporasi, pemisahan tanggung jawab pidana fungsional pengurus (directors liability), dan pengendali korporasi.'
      },
      {
        delik: 'Tindak Pidana Pencucian Uang & Kejahatan Sektor Keuangan',
        pasal: 'Pasal 607 KUHP Baru jo. UU No. 8/2010 & UU No. 4/2023 (P2SK)',
        ket: 'Advokasi atas pemblokiran rekening operasional, sangkaan tindak pidana perbankan, transaksi pasar modal, serta penelusuran aset hasil tindak pidana.'
      }
    ],
    icon: Building2
  },
  {
    id: 'praperadilan-prosedural',
    title: 'Praperadilan & Pembelaan Hak Acara Pidana',
    subtitle: 'Pre-Trial Motion & Due Process Enforcement',
    kuhpAnchor: 'KUHAP (UU No. 8/1981) jo. Putusan Mahkamah Konstitusi No. 21/PUU-XII/2014',
    desc: 'Pengujian formil dan materiil di hadapan Hakim Tunggal Pengadilan Negeri berdasarkan Pasal 77 KUHAP jo. Putusan Mahkamah Konstitusi No. 21/PUU-XII/2014 guna menguji kepatuhan due process of law penyidik kepolisian, kejaksaan, maupun penyidik khusus, membatalkan penetapan status tersangka yang tidak berdasar, serta menghentikan upaya paksa yang melanggar prosedur hukum acara.',
    pasalItems: [
      {
        delik: 'Uji Keabsahan Penetapan Tersangka',
        pasal: 'Pasal 77 huruf a KUHAP jo. Putusan MK No. 21/PUU-XII/2014',
        ket: 'Gugatan pembatalan penetapan status tersangka yang diterbitkan tanpa didukung minimal dua alat bukti sah dan tanpa pemeriksaan calon tersangka.'
      },
      {
        delik: 'Uji Keabsahan Penangkapan & Penahanan',
        pasal: 'Pasal 17, 18, 20 & 21 KUHAP',
        ket: 'Pengujian legalitas upaya paksa penahanan yang dilakukan sewenang-wenang, tanpa surat perintah sah, atau tanpa pemenuhan syarat urgensi objektif.'
      },
      {
        delik: 'Uji Prosedur Penyitaan Dokumen & Aset Perusahaan',
        pasal: 'Pasal 33, 34, 38 & 39 KUHAP',
        ket: 'Pembatalan penyitaan berkas perseroan atau pemblokiran aset komersial yang dilakukan aparat tanpa izin resmi Ketua Pengadilan Negeri.'
      },
      {
        delik: 'Tuntutan Ganti Kerugian & Pemulihan Nama Baik',
        pasal: 'Pasal 95 s/d Pasal 97 KUHAP',
        ket: 'Tuntutan kompensasi kerugian materiil serta perintah rehabilitasi harkat dan martabat atas tindakan penegakan hukum yang dinyatakan cacat hukum.'
      }
    ],
    icon: Scale
  },
  {
    id: 'khusus-siber-tipikor',
    title: 'Pidana Khusus, Siber, Tipikor, & Perpajakan',
    subtitle: 'Special Offenses, Cyber Defense & Tax Crimes',
    kuhpAnchor: 'KUHP Baru, UU ITE No. 1/2024, UU Tipikor, UU HPP No. 7/2021',
    desc: 'Pendampingan hukum strategis menghadapi pemeriksaan dugaan tindak pidana teknologi informasi di bawah UU No. 1 Tahun 2024 (Perubahan Kedua UU ITE), tindak pidana korupsi sektor publik dan suap korporasi (Pasal 603-606 KUHP Baru), serta penanganan sanksi pidana perpajakan berdasarkan UU Harmonisasi Peraturan Perpajakan (UU No. 7/2021) dengan pendekatan audit forensik digital.',
    pasalItems: [
      {
        delik: 'Tindak Pidana Korupsi & Suap Sektor Komersial',
        pasal: 'Pasal 603 s/d Pasal 606 UU No. 1/2023 (KUHP Baru)',
        ket: 'Pembelaan atas sangkaan kerugian keuangan negara, gratifikasi, penyalahgunaan wewenang jabatan, suap aktif, dan suap pasif dalam pengadaan barang/jasa.'
      },
      {
        delik: 'Tindak Pidana Siber & Sistem Transaksi Elektronik',
        pasal: 'Pasal 332 KUHP Baru jo. Pasal 27A, 28, & 30 UU No. 1/2024 (ITE)',
        ket: 'Penanganan dugaan akses ilegal data perusahaan, manipulasi dokumen elektronik, penyebaran informasi palsu yang menimbulkan kerugian komersial, dan kebocoran data.'
      },
      {
        delik: 'Tindak Pidana Perpajakan & Cukai Kepabeanan',
        pasal: 'Pasal 39 & 39A UU No. 28/2007 jo. UU No. 7/2021 (UU HPP)',
        ket: 'Advokasi pemeriksaan bukti permulaan (Bukper) pajak, dugaan faktur pajak fiktif, serta negosiasi ultimum remedium pemulihan kerugian pendapatan negara.'
      },
      {
        delik: 'Proteksi Saksi Kunci & Whistleblower Korporasi',
        pasal: 'UU No. 31/2014 tentang Perlindungan Saksi dan Korban (LPSK)',
        ket: 'Pendampingan immunitas hukum dan kerahasiaan identitas bagi eksekutif perusahaan yang beritikad baik mengungkap praktik pelanggaran hukum internal.'
      }
    ],
    icon: ShieldAlert
  },
  {
    id: 'umum-perlindungan-hak',
    title: 'Pidana Umum & Perlindungan Hak Warga Negara',
    subtitle: 'General Criminal Defense & Constitutional Rights',
    kuhpAnchor: 'UU No. 1/2023 (KUHP Baru) & Perlindungan HAM Peradilan',
    desc: 'Pembelaan litigasi menyeluruh bagi individu yang menghadapi sangkaan delik KUHP Baru (UU No. 1 Tahun 2023) yang menggantikan WvS kolonial, memastikan pemenuhan hak-hak tersangka/terdakwa atas delik kehormatan, pemalsuan dokumen, perampasan kemerdekaan, maupun pembelaan darurat (noodweer) sejak pemeriksaan Berita Acara Pemeriksaan (BAP) di Kepolisian hingga vonis peradilan.',
    pasalItems: [
      {
        delik: 'Pencemaran Kehormatan, Menista, & Fitnah',
        pasal: 'Pasal 433 & Pasal 434 UU No. 1/2023 (KUHP Baru)',
        ket: 'Pembelaan delik aduan pencemaran kehormatan atau fitnah tertulis dengan pembuktian fakta untuk kepentingan umum (menggantikan Pasal 310 & 311 KUHP lama).'
      },
      {
        delik: 'Pemalsuan Surat & Manipulasi Dokumen Otentik',
        pasal: 'Pasal 391 & Pasal 392 UU No. 1/2023 (KUHP Baru)',
        ket: 'Pembuktian keaslian materiil surat perjanjian, akta notaris, dan sertifikat yang dituduhkan palsu (menggantikan Pasal 263 & 264 KUHP lama).'
      },
      {
        delik: 'Perampasan Kemerdekaan Fisik & Penyekapan',
        pasal: 'Pasal 446 UU No. 1/2023 (KUHP Baru)',
        ket: 'Pembelaan atas tuduhan penahanan atau pembatasan kebebasan seseorang tanpa dasar hukum yang sah (menggantikan Pasal 333 KUHP lama).'
      },
      {
        delik: 'Integritas Fisik & Pembelaan Terpaksa (Noodweer)',
        pasal: 'Pasal 466 s/d 471 jo. Alasan Pembenar Pasal 34 KUHP Baru',
        ket: 'Pembelaan atas tuduhan penganiayaan dengan pengujian alasan pembenar bela paksa guna melindungi keselamatan diri, kehormatan, atau harta benda.'
      }
    ],
    icon: Gavel
  }
];

// --- DATA: SPESIALISASI PENDUKUNG (SENGKETA PERDATA, KOMERSIAL, AGRARIA DENGAN REGULASI TERBARU) ---
const civilCommercialServices = [
  {
    id: 'wanprestasi-kontrak',
    title: 'Sengketa Kontrak & Wanprestasi Bisnis',
    subtitle: 'Breach of Contract & Commercial Dispute Litigation',
    legalAnchor: 'Pasal 1238, 1243 s/d 1246 KUHPerdata jo. Perma No. 7/2022',
    desc: 'Penanganan ingkar janji kontraktual komersial berlandaskan asas itikad baik (Pasal 1338 ayat 3 KUHPerdata), penuntutan ganti rugi bunga moratoir, eksekusi sita jaminan perdata, serta beracara melalui sistem peradilan elektronik modern Mahkamah Agung (E-Litigation).',
    pasalDetails: [
      'Penyusunan Somasi Peringatan Yuridis (Ingebrekestelling - Pasal 1238 KUHPerdata)',
      'Gugatan Ganti Biaya, Rugi, & Bunga Komersial (Pasal 1243 s/d 1246 KUHPerdata)',
      'Gugatan Pembatalan Kontrak Timbal Balik Sepihak (Pasal 1266 KUHPerdata)',
      'Penyelesaian Sengketa Klausul Arbitrase Bisnis (UU No. 30/1999 tentang AAPS)'
    ],
    icon: FileText
  },
  {
    id: 'pmh-kompensasi',
    title: 'Perbuatan Melawan Hukum (PMH) & Ganti Rugi',
    subtitle: 'Tort Law, Vicarious Liability & Damages Claims',
    legalAnchor: 'Pasal 1365, 1366, & 1367 Kitab Undang-Undang Hukum Perdata',
    desc: 'Litigasi gugatan kompensasi atas tindakan melawan hukum yang menimbulkan kerugian komersial nyata, pencemaran reputasi usaha (*goodwill damage*), persaingan usaha tidak sehat, serta permohonan sita jaminan atas aset kebendaan lawan sengketa.',
    pasalDetails: [
      'Gugatan Pembuktian 5 Unsur PMH Melawan Hukum (Pasal 1365 KUHPerdata)',
      'Tuntutan Pertanggungjawaban Akibat Kelalaian Fatal (Pasal 1366 KUHPerdata)',
      'Tanggung Jawab Korporasi atas Perbuatan Karyawan (Pasal 1367 KUHPerdata)',
      'Permohonan Sita Jaminan Aset Likuid & Properti (Conservatoir Beslag - HIR/RBg)'
    ],
    icon: ShieldCheck
  },
  {
    id: 'sengketa-agraria',
    title: 'Sengketa Pertanahan & Agraria Komersial',
    subtitle: 'Real Estate, Agrarian Title & PTUN Litigation',
    legalAnchor: 'UUPA No. 5/1960 jo. PP No. 18/2021 & Peratun No. 2/2019',
    desc: 'Advokasi perlindungan aset tanah industri dan properti komersial berdasarkan regulasi pertanahan modern (PP No. 18/2021), penyelesaian tumpang-tindih sertifikat Hak Milik/HGB, gugatan pembatalan sertifikat di PTUN, hingga eksekusi pengosongan fisik lahan.',
    pasalDetails: [
      'Perlindungan Yuridis Hak Milik & HGB Korporasi (Pasal 20 & 35 UUPA No. 5/1960)',
      'Gugatan Pembatalan Sertifikat Cacat Hukum Administrasi (Pasal 53 UU PTUN)',
      'Penyelesaian Wanprestasi Perjanjian Pengikatan Jual Beli (PPJB Tanah Industri)',
      'Eksekusi Pengosongan Lahan & Pembongkaran Bangunan Tanpa Hak (HIR/RBg)'
    ],
    icon: Landmark
  },
  {
    id: 'pkpu-kepailitan',
    title: 'Kepailitan, PKPU & Restrukturisasi Utang',
    subtitle: 'Commercial Insolvency & Debt Restructuring',
    legalAnchor: 'UU No. 37 Tahun 2004 tentang Kepailitan & PKPU',
    desc: 'Representasi strategis debitur maupun kreditur dalam perkara Penundaan Kewajiban Pembayaran Utang (PKPU) di Pengadilan Niaga guna menyusun proposal perdamaian (homologasi) yang mengikat, menata kembali kewajiban utang komersial, serta mencegah likuidasi kepailitan.',
    pasalDetails: [
      'Syarat Pembuktian Sederhana 2 Kreditur (Pasal 2 ayat 1 UU No. 37/2004)',
      'Pengajuan Permohonan PKPU Debitur/Kreditur (Pasal 222 UU No. 37/2004)',
      'Penyusunan Rencana Perdamaian & Homologasi Utang (Pasal 265 UU No. 37/2004)',
      'Verifikasi Piutang Kurator & Proteksi Kreditur Separatis Pemegang Jaminan'
    ],
    icon: Scale
  }
];

// --- DATA: 4 TAHAPAN LITIGASI PROSEDURAL (KUHAP WORKFLOW) ---
const litigationStages = [
  {
    step: 'Tahap I',
    title: 'Penyelidikan & Penyidikan',
    authority: 'Kepolisian / Kejaksaan / Penyidik Khusus',
    legalBasis: 'Pasal 1 angka 1 & 2 jo. Pasal 102 - 136 KUHAP',
    desc: 'Pendampingan langsung saat Berita Acara Pemeriksaan (BAP) saksi maupun tersangka, pengawasan kepatuhan due process of law, serta penyerahan nota pembelaan hukum materiil dan bukti kontra-dokumen sejak panggilan pertama.',
    icon: Search
  },
  {
    step: 'Tahap II',
    title: 'Tindakan Praperadilan',
    authority: 'Pengadilan Negeri (Hakim Tunggal)',
    legalBasis: 'Pasal 77 s/d 83 KUHAP jo. Putusan MK No. 21/2014',
    desc: 'Langkah koreksi prosedural cepat atas penetapan tersangka tanpa minimal dua alat bukti sah, pembatalan penangkapan/penahanan sewenang-wenang, serta pengujian legalitas penyitaan barang bukti yang melanggar hukum acara.',
    icon: Shield
  },
  {
    step: 'Tahap III',
    title: 'Persidangan PN & Pengadilan Tinggi',
    authority: 'Sidang Peradilan Tingkat Pertama & Banding',
    legalBasis: 'Pasal 152 s/d 182 KUHAP (Pemeriksaan Sidang Peradilan)',
    desc: 'Penyusunan Eksepsi (Keberatan Surat Dakwaan), pemeriksaan silang saksi dan ahli forensik (Cross-Examination), pengajuan alat bukti tandingan, hingga penyusunan Pledoi (Nota Pembelaan) di hadapan Majelis Hakim.',
    icon: Gavel
  },
  {
    step: 'Tahap IV',
    title: 'Upaya Hukum Luar Biasa',
    authority: 'Mahkamah Agung Republik Indonesia',
    legalBasis: 'Pasal 244 - 258 (Kasasi) & Pasal 263 - 269 KUHAP (PK)',
    desc: 'Uji penerapan hukum di tingkat Kasasi serta pengajuan Peninjauan Kembali (PK) berlandaskan penemuan bukti baru yang menentukan (Novum) atau pertimbangan kekhilafan nyata hakim demi keadilan substantif.',
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

export default function PracticeAreasPage() {
  return (
    <div className="selection:bg-[#C5A880] selection:text-[#0F1E36] bg-[#F8F6F0] text-[#0F1E36] font-sans overflow-hidden">
      
      {/* 1. HERO SECTION: PENETAPAN REPUTASI & POSITIONING DENGAN REGULASI TERKINI */}
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
              <Gavel className="text-[#C5A880] shrink-0" size={16} />
              <span className="text-[#C5A880] text-xs font-semibold tracking-widest uppercase">
                Bidang Keahlian & Praktik Peradilan &bull; Bhadrika Byakta Law Firm
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F8F6F0] font-bold mb-6 leading-[1.15]">
              Advokasi Litigasi Berkeadilan: <br />
              <span className="text-[#C5A880] relative inline-block font-serif italic mt-1">
                Dari Pembelaan Pidana Strategis hingga Sengketa Perdata.
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C5A880] to-transparent" />
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-[#F8F6F0]/85 text-base md:text-lg font-normal mb-10 leading-relaxed max-w-3xl mx-auto">
              Bhadrika Byakta Law Firm mengintegrasikan paradigma kodifikasi hukum pidana nasional modern berdasarkan <strong>UU No. 1 Tahun 2023 (KUHP Baru)</strong>, kepatuhan hukum acara KUHAP, regulasi delik siber <strong>UU No. 1 Tahun 2024 (Revisi Kedua UU ITE)</strong>, dan penegakan hukum sektor keuangan <strong>UU No. 4 Tahun 2023 (P2SK)</strong>, bersinergi dengan penanganan sengketa perdata bernilai tinggi guna mengamankan hak konstitusional dan kelangsungan komersial klien.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#pidana" 
                className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#b8996e] text-[#0F1E36] font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-black/20 flex items-center justify-center gap-3 border border-[#C5A880] text-sm"
              >
                Fokus Spesialisasi Pidana (KUHP Baru)
                <ArrowRight size={17} />
              </a>
              <a 
                href="#perdata" 
                className="w-full sm:w-auto bg-[#142847]/90 hover:bg-[#142847] text-[#F8F6F0] font-medium px-8 py-4 rounded-xl transition-all border border-[#C5A880]/40 flex items-center justify-center hover:border-[#C5A880] text-sm"
              >
                Sengketa Perdata & Komersial
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. CORE FOCUS: HUKUM LITIGASI PIDANA (DESKRIPSI BERBASIS KUHP BARU UU NO. 1/2023) */}
      <section id="pidana" className="py-24 bg-[#0F1E36] text-[#F8F6F0] relative overflow-hidden border-b border-[#C5A880]/20">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          {/* Header Core Practice */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#C5A880]/20 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#142847] border border-[#C5A880]/40 text-[#C5A880] text-xs font-bold tracking-widest uppercase mb-3">
                <ShieldAlert size={14} /> Fokus Utama Firma &bull; Core Criminal Defense
              </div>
              <h2 className="font-serif text-3xl md:text-5xl text-[#F8F6F0] font-bold">
                Litigasi & Pembelaan Pidana Strategis
              </h2>
              <p className="text-[#F8F6F0]/75 text-sm md:text-base font-normal mt-2 max-w-2xl">
                Strategi pembelaan perkara pidana komprehensif berlandaskan norma materiil KUHP Baru (UU No. 1 Tahun 2023) dan hukum pembuktian KUHAP guna melindungi hak tersangka, terdakwa, maupun korporasi.
              </p>
            </div>
            
            <div className="hidden lg:flex items-center gap-2 text-xs text-[#C5A880] font-mono bg-[#142847]/80 px-4 py-2.5 rounded-xl border border-[#C5A880]/20">
              <BadgeCheck size={16} /> UU NO. 1/2023 (KUHP BARU) COMPLIANT
            </div>
          </div>

          {/* Grid 4 Bidang Pidana dengan Pasal Spesifik */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {criminalDefenseServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#142847] border-2 border-[#C5A880]/30 hover:border-[#C5A880] rounded-3xl p-8 flex flex-col justify-between transition-all group shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#C5A880]/5 rounded-bl-full pointer-events-none group-hover:bg-[#C5A880]/10 transition-colors" />

                  <div>
                    {/* Header Kartu: Ikon, Subtitle, & Landasan Hukum */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-[#0F1E36] text-[#C5A880] rounded-2xl border border-[#C5A880]/40 flex items-center justify-center group-hover:bg-[#C5A880] group-hover:text-[#0F1E36] transition-all shadow">
                          <Icon size={26} />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono tracking-wider text-[#C5A880] uppercase font-bold block">
                            {service.subtitle}
                          </span>
                          <h3 className="font-serif text-2xl font-bold text-[#F8F6F0] mt-0.5 group-hover:text-[#C5A880] transition-colors">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Badge Rujukan Regulasi */}
                    <div className="mb-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0F1E36] border border-[#C5A880]/20 text-[11px] font-mono text-[#C5A880]">
                      <BookOpenCheck size={13} />
                      <span>Dasar Regulasi: {service.kuhpAnchor}</span>
                    </div>
                    
                    <p className="text-[#F8F6F0]/80 text-xs sm:text-sm leading-relaxed font-normal mb-6">
                      {service.desc}
                    </p>

                    {/* Rincian Delik & Pasal KUHP Baru Spesifik */}
                    <div className="space-y-3 border-t border-[#C5A880]/20 pt-6 mb-8">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A880] font-bold block">
                        Rincian Delik & Rujukan Pasal KUHP:
                      </span>

                      {service.pasalItems.map((item, pIdx) => (
                        <div 
                          key={pIdx} 
                          className="bg-[#0F1E36]/90 p-3.5 rounded-xl border border-[#C5A880]/15 hover:border-[#C5A880]/40 transition-colors space-y-1"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-1.5">
                            <span className="text-xs font-bold text-[#F8F6F0] flex items-center gap-1.5">
                              <CheckCircle2 size={13} className="text-[#C5A880] shrink-0" />
                              {item.delik}
                            </span>
                            <span className="text-[10px] font-mono font-bold text-[#C5A880] bg-[#142847] px-2 py-0.5 rounded border border-[#C5A880]/30">
                              {item.pasal}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#F8F6F0]/70 pl-5 leading-relaxed font-light">
                            {item.ket}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link 
                    href="/contact" 
                    className="w-full bg-[#0F1E36] hover:bg-[#C5A880] text-[#C5A880] hover:text-[#0F1E36] font-bold py-3.5 rounded-xl transition-all duration-300 text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-[#C5A880]/40 group-hover:border-[#C5A880] shadow-md"
                  >
                    <span>Konsultasikan Pembelaan Pidana</span>
                    <ArrowRight size={14} />
                  </Link>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. COMPLEMENTARY DISPUTES: SENGKETA PERDATA & KOMERSIAL (DESKRIPSI REGULASI TERBARU) */}
      <section id="perdata" className="py-24 bg-[#F8F6F0] border-b border-[#0F1E36]/10">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#0F1E36]/10 pb-8">
            <div>
              <span className="text-[#0F1E36] font-bold tracking-widest uppercase text-xs px-3.5 py-1.5 bg-[#C5A880]/20 border border-[#C5A880]/40 rounded-full inline-block mb-3">
                Spesialisasi Pendukung &bull; Commercial & Civil Litigation
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#0F1E36] font-bold">
                Sengketa Perdata, Komersial, & Agraria
              </h2>
              <p className="text-[#0F1E36]/75 text-sm font-normal mt-2 max-w-2xl">
                Menyediakan proteksi dan pemulihan hak kebendaan, penagihan kerugian kontraktual, serta kepailitan melalui Pengadilan Negeri dan Pengadilan Niaga dengan dukungan sistem peradilan modern (E-Court / E-Litigation).
              </p>
            </div>
            
            <Link 
              href="/contact" 
              className="text-[#0F1E36] font-bold text-sm inline-flex items-center gap-2 hover:text-[#C5A880] transition-colors"
            >
              Evaluasi Sengketa Komersial <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {civilCommercialServices.map((service) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id}
                  className="bg-white p-7 rounded-2xl border border-[#0F1E36]/10 hover:border-[#C5A880] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-13 h-13 p-3 bg-[#0F1E36] text-[#C5A880] rounded-xl border border-[#C5A880]/30 flex items-center justify-center mb-5 group-hover:bg-[#C5A880] group-hover:text-[#0F1E36] transition-colors shadow">
                      <Icon size={24} />
                    </div>

                    <span className="text-[10px] font-mono tracking-wider text-[#0F1E36]/60 uppercase font-bold block mb-1">
                      {service.subtitle}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#0F1E36] mb-2 group-hover:text-[#C5A880] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    {/* Legal Anchor Chip */}
                    <div className="mb-4 inline-block px-2.5 py-1 rounded bg-[#F8F6F0] border border-[#0F1E36]/10 text-[10px] font-mono text-[#0F1E36]/80">
                      {service.legalAnchor}
                    </div>

                    <p className="text-[#0F1E36]/75 text-xs leading-relaxed font-normal mb-5">
                      {service.desc}
                    </p>

                    <div className="space-y-2 border-t border-[#0F1E36]/10 pt-4 mb-6">
                      <span className="text-[10px] font-mono uppercase text-[#0F1E36]/60 font-semibold block mb-1">
                        Ruang Lingkup Gugatan:
                      </span>
                      {service.pasalDetails.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-[#0F1E36]/85">
                          <CheckCircle2 size={13} className="text-[#C5A880] shrink-0 mt-0.5" />
                          <span className="text-[11px] leading-tight">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link 
                    href="/contact" 
                    className="text-xs font-bold text-[#0F1E36] uppercase tracking-wider inline-flex items-center gap-1.5 group-hover:text-[#C5A880] transition-colors pt-3 border-t border-[#0F1E36]/10"
                  >
                    Inisiasi Perkara <ChevronRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. TAHAPAN LITIGASI & PENDAMPINGAN PROSEDURAL (KUHAP WORKFLOW) */}
      <section id="tahapan-litigasi" className="py-24 bg-[#0F1E36] text-[#F8F6F0] relative overflow-hidden border-b border-[#C5A880]/20">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#C5A880] font-bold tracking-widest uppercase text-xs px-3.5 py-1.5 bg-[#142847] border border-[#C5A880]/30 rounded-full inline-block">
              Alur Hukum Acara & Pembelaan
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#F8F6F0] font-bold mt-3">
              Tahapan Litigasi & Pendampingan Berperkara
            </h2>
            <p className="text-[#F8F6F0]/75 text-sm mt-3 font-normal">
              Setiap perkara dikawal secara bertahap dengan kecermatan yuridis berdasarkan Hukum Acara Pidana (KUHAP) dan Hukum Acara Perdata (HIR/RBg/E-Court MA).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {litigationStages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#142847]/80 border border-[#C5A880]/20 hover:border-[#C5A880] rounded-2xl p-6 relative flex flex-col justify-between transition-colors group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="font-mono text-xl font-bold text-[#C5A880] bg-[#0F1E36] px-3 py-1 rounded border border-[#C5A880]/20">
                        {stage.step}
                      </span>
                      <div className="w-10 h-10 rounded-lg bg-[#0F1E36] border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880]">
                        <Icon size={20} />
                      </div>
                    </div>
                    
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A880] block mb-1">
                      {stage.authority}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#F8F6F0] mb-2 leading-snug">
                      {stage.title}
                    </h4>

                    {/* Dasar Hukum Acara */}
                    <div className="mb-3 px-2 py-1 rounded bg-[#0F1E36]/80 border border-[#C5A880]/15 text-[10px] font-mono text-[#F8F6F0]/70">
                      {stage.legalBasis}
                    </div>

                    <p className="text-xs text-[#F8F6F0]/70 leading-relaxed font-normal">
                      {stage.desc}
                    </p>
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

      {/* 5. STANDAR KEPATUHAN ETIKA & KOMITMEN HUKUM ACARA (ANTI-GUARANTEE DISCLAIMER) */}
      <section className="py-20 bg-[#F8F6F0] border-b border-[#0F1E36]/10">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-[#0F1E36]/15 shadow-sm text-center">
            
            <div className="w-12 h-12 rounded-full bg-[#0F1E36] text-[#C5A880] flex items-center justify-center mx-auto mb-4 border border-[#C5A880]/30">
              <Scale size={24} />
            </div>

            <span className="text-[#0F1E36] font-bold tracking-widest uppercase text-xs font-mono">
              Standar Etika Litigasi & Kepatuhan Regulasi
            </span>

            <h3 className="font-serif text-2xl font-bold text-[#0F1E36] mt-2 mb-4">
              Komitmen Profesional Advokat Tanpa Kompromi
            </h3>

            <p className="text-[#0F1E36]/80 text-sm leading-relaxed font-normal max-w-2xl mx-auto mb-6">
              Seluruh strategi pembelaan berlandaskan KUHP Baru (UU No. 1 Tahun 2023), KUHAP, UU No. 18 Tahun 2003 tentang Advokat, dan Kode Etik Advokat Indonesia (KEAI) guna memastikan hak-hak konstitusional klien terlindungi tanpa kompromi. 
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F8F6F0] border border-[#0F1E36]/10 text-xs text-[#0F1E36]/75">
              <BadgeCheck size={16} className="text-[#C5A880] shrink-0" />
              <span>Sesuai kode etik profesi, kami tidak pernah menjanjikan hasil atau garansi putusan bebas murni, melainkan mengedepankan pembuktian materiil objektif dan pembelaan hukum maksimal.</span>
            </div>

          </div>
        </div>
      </section>

      {/* 6. EMERGENCY CALLOUT: PENDAMPINGAN PEMERIKSAAN / BAP DARURAT 24/7 */}
      <section className="py-16 bg-[#0F1E36] text-[#F8F6F0] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-[110px] pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-[#142847] border-2 border-[#C5A880]/40 text-[#C5A880] flex items-center justify-center shrink-0 shadow-lg">
              <PhoneCall size={28} />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs text-[#C5A880] font-mono uppercase tracking-wider mb-1">
                <AlertTriangle size={14} /> Panggilan Pemeriksaan / BAP Darurat 24/7
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#F8F6F0]">
                Menerima Surat Panggilan Kepolisian atau Kejaksaan?
              </h3>
              <p className="text-[#F8F6F0]/75 text-sm font-normal max-w-xl mt-1">
                Jangan memberikan keterangan Berita Acara Pemeriksaan (BAP) tanpa didampingi penasihat hukum. Advokat kami siap hadir mendampingi hak Anda di tingkat Penyelidikan dan Penyidikan.
              </p>
            </div>
          </div>
          
          {/* Action Buttons: Direct Call & WhatsApp Concierge */}
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a 
              href="tel:+6285697259015"
              className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#b8996e] text-[#0F1E36] font-bold px-7 py-3.5 rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 border border-[#C5A880] text-sm"
            >
              <Phone size={17} /> Panggil Hotline (+62 856-9725-9015)
            </a>
            <a 
              href="https://wa.me/6285697259015?text=Halo%20BBLF,%20saya%20membutuhkan%20pendampingan%20hukum%20darurat%20untuk%20panggilan%20pemeriksaan/BAP."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#142847] hover:bg-[#1c365f] text-[#F8F6F0] font-semibold px-6 py-3.5 rounded-xl transition-all border border-[#C5A880]/40 flex items-center justify-center gap-2 text-sm"
            >
              <MessageSquare size={17} className="text-[#C5A880]" /> WhatsApp BAP Darurat
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}