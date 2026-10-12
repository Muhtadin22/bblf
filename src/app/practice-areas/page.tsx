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
  Compass, 
  Search, 
  FileCheck, 
  Shield, 
  BadgeCheck, 
  ChevronRight,
  HelpCircle
} from 'lucide-react';

// --- DATA: SPESIALISASI UTAMA (CORE FOCUS: HUKUM LITIGASI PIDANA) ---
const criminalDefenseServices = [
  {
    id: 'white-collar',
    title: 'Tindak Pidana Bisnis & Korporasi',
    subtitle: 'White-Collar Crime Defense',
    desc: 'Pembelaan hukum strategis atas tuduhan delik bisnis yang menimpa direksi, komisaris, maupun entitas korporasi guna melindungi reputasi komersial dan kelangsungan operasional.',
    points: [
      'Dugaan Penipuan & Penggelapan Jabatan (Pasal 372 & 378 KUHP)',
      'Tindak Pidana Perbankan, Pasar Modal, & Asuransi',
      'Tindak Pidana Pencucian Uang (TPPU / Anti-Money Laundering)',
      'Pertanggungjawaban Pidana Korporasi (Corporate Criminal Liability)'
    ],
    icon: Building2
  },
  {
    id: 'special-cyber',
    title: 'Tindak Pidana Khusus & Siber',
    subtitle: 'Cyber Crimes & Special Offenses',
    desc: 'Advokasi berakurasi tinggi menghadapi investigasi kejahatan digital terorganisir, delik perpajakan, serta pemeriksaan institusi anti-korupsi dengan pendekatan bukti forensik digital.',
    points: [
      'Pelanggaran UU Informasi & Transaksi Elektronik (UU ITE)',
      'Pendampingan Perkara Tindak Pidana Korupsi (Tipikor)',
      'Tindak Pidana Perpajakan & Kepabeanan',
      'Penyalahgunaan Data Pribadi & Rahasia Dagang Elektronik'
    ],
    icon: ShieldAlert
  },
  {
    id: 'general-crime',
    title: 'Tindak Pidana Umum & Perlindungan Hak',
    subtitle: 'General Criminal Litigation',
    desc: 'Pembelaan komprehensif bagi individu yang berhadapan dengan proses hukum delik KUHP umum, memastikan seluruh hak asasi dan prosedural tersangka dihormati secara mutlak.',
    points: [
      'Delik Terhadap Nyawa, Tubuh, & Harta Benda',
      'Pencemaran Nama Baik & Fitnah KUHP',
      'Sengketa Pemalsuan Surat & Otentikasi Dokumen',
      'Pendampingan Perlindungan Saksi & Korban (LPSK Coordination)'
    ],
    icon: Gavel
  },
  {
    id: 'praperadilan',
    title: 'Praperadilan & Pembelaan Prosedural',
    subtitle: 'Pre-Trial Motion & Due Process Enforcement',
    desc: 'Uji materiil dan formal atas kewenangan aparat penegak hukum di hadapan Hakim Tunggal Praperadilan guna membatalkan tindakan penyidikan yang cacat prosedur hukum acara.',
    points: [
      'Gugatan Uji Keabsahan Penetapan Tersangka (Putusan MK No. 21/2014)',
      'Uji Keabsahan Penangkapan & Penahanan yang Melanggar SOP',
      'Uji Prosedur Penyitaan Aset & Penggeledahan Tanpa Izin Ketua PN',
      'Ganti Kerugian & Rehabilitasi Nama Baik atas Salah Tangkap'
    ],
    icon: Scale
  }
];

// --- DATA: SPESIALISASI PENDUKUNG (SENGKETA PERDATA & KOMERSIAL) ---
const civilCommercialServices = [
  {
    id: 'wanprestasi',
    title: 'Sengketa Kontrak & Wanprestasi Bisnis',
    subtitle: 'Breach of Contract & Commercial Disputes',
    desc: 'Penyelesaian sengketa ingkar janji kontraktual, restrukturisasi kewajiban komersial, pembatalan perjanjian, serta eksekusi jaminan fidusia dan hak tanggungan.',
    points: [
      'Gugatan Wanprestasi Perjanjian Kerjasama & Joint Venture',
      'Sengketa Pengadaan Barang/Jasa & Distribusi Komersial',
      'Penyelesaian Kemelut Utang-Piutang Korporasi',
      'Eksekusi Grosse Akta & Sita Jaminan (Conservatoir Beslag)'
    ],
    icon: FileText
  },
  {
    id: 'pmh',
    title: 'Perbuatan Melawan Hukum (PMH) & Ganti Rugi',
    subtitle: 'Tort Law & Damages Claims',
    desc: 'Litigasi gugatan ganti rugi berdasarkan Pasal 1365 KUHPerdata atas tindakan pihak ketiga yang menimbulkan kerugian finansial nyata maupun kerusakan reputasi usaha.',
    points: [
      'Gugatan Ganti Rugi Materiil & Immateriil Komprehensif',
      'PMH atas Tindakan Persaingan Usaha Tidak Sehat',
      'Sengketa Pelanggaran Kewajiban Fudusia Direksi (Ultra Vires)',
      'Gugatan Perdata Turunan dari Delik Pidana (Adhesie Process)'
    ],
    icon: ShieldCheck
  },
  {
    id: 'agraria',
    title: 'Sengketa Properti & Agraria Komersial',
    subtitle: 'Real Estate & Agrarian Disputes',
    desc: 'Advokasi pengamanan aset tanah komersial, penyelesaian sertifikat ganda, gugatan pembatalan sertifikat di PTUN, dan mitigasi pengadaan lahan industri.',
    points: [
      'Sengketa Tumpang Tindih Hak Milik & HGB Perusahaan',
      'Gugatan Pembatalan Sertifikat di Pengadilan Tata Usaha Negara',
      'Sengketa Perjanjian Jual Beli (PPJB) & Sewa Properti Komersial',
      'Mitigasi Penguasaan Lahan Ilegal & Eksekusi Pengosongan Lahan'
    ],
    icon: Landmark
  }
];

// --- DATA: 4 TAHAPAN LITIGASI PROSEDURAL (KUHAP WORKFLOW) ---
const litigationStages = [
  {
    step: 'Tahap I',
    title: 'Penyelidikan & Penyidikan',
    authority: 'Kepolisian / Kejaksaan / Penyidik Khusus',
    desc: 'Pendampingan langsung saat Berita Acara Pemeriksaan (BAP) saksi maupun tersangka, pengawasan kepatuhan hukum acara, serta penyerahan legal opinion dan bukti kontra-materiil.',
    icon: Search
  },
  {
    step: 'Tahap II',
    title: 'Tindakan Praperadilan',
    authority: 'Pengadilan Negeri (Hakim Tunggal)',
    desc: 'Langkah koreksi prosedural cepat apabila terjadi penetapan tersangka tanpa bukti permulaan yang cukup, penahanan sewenang-wenang, atau penyitaan barang bukti ilegal.',
    icon: Shield
  },
  {
    step: 'Tahap III',
    title: 'Persidangan PN & Pengadilan Tinggi',
    authority: 'Sidang Tingkat Pertama & Banding',
    desc: 'Penyusunan Eksepsi (Keberatan Dakwaan), pemeriksaan silang saksi & ahli (Cross-Examination), pengajuan bukti tandingan, hingga penyusunan Pledoi (Nota Pembelaan).',
    icon: Gavel
  },
  {
    step: 'Tahap IV',
    title: 'Upaya Hukum Luar Biasa',
    authority: 'Mahkamah Agung Republik Indonesia',
    desc: 'Pemeriksaan penerapan hukum di tingkat Kasasi serta pengajuan Peninjauan Kembali (PK) berlandaskan penemuan bukti baru (Novum) atau kekhilafan nyata hakim.',
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
      
      {/* 1. HERO SECTION: PENETAPAN REPUTASI & POSITIONING LITIGASI */}
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
                Bidang Keahlian & Praktik Peradilan &bull; BBLF
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
              Bhadrika Byakta Law Firm mendedikasikan ketajaman analisis yuridis dan ketangguhan advokasi untuk membela hak hukum serta martabat klien di setiap tingkat peradilan—mulai dari tahap penyidikan kepolisian, pembuktian materiil di persidangan, hingga upaya hukum luar biasa di Mahkamah Agung.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#pidana" 
                className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#b8996e] text-[#0F1E36] font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-black/20 flex items-center justify-center gap-3 border border-[#C5A880] text-sm"
              >
                Fokus Spesialisasi Pidana 
                <ArrowRight size={17} />
              </a>
              <a 
                href="#tahapan-litigasi" 
                className="w-full sm:w-auto bg-[#142847]/90 hover:bg-[#142847] text-[#F8F6F0] font-medium px-8 py-4 rounded-xl transition-all border border-[#C5A880]/40 flex items-center justify-center hover:border-[#C5A880] text-sm"
              >
                Alur Tahapan Perkara
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. CORE FOCUS: HUKUM LITIGASI PIDANA (SPESIALIS UTAMA FIRMA) */}
      <section id="pidana" className="py-24 bg-[#0F1E36] text-[#F8F6F0] relative overflow-hidden border-b border-[#C5A880]/20">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          {/* Header Core Practice */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#C5A880]/20 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#142847] border border-[#C5A880]/40 text-[#C5A880] text-xs font-bold tracking-widest uppercase mb-3">
                <ShieldAlert size={14} /> Fokus Utama Firma &bull; Core Practice
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#F8F6F0] font-bold">
                Litigasi & Pembelaan Pidana Strategis
              </h2>
              <p className="text-[#F8F6F0]/75 text-sm font-normal mt-2 max-w-2xl">
                Penanganan perkara pidana berisiko tinggi dengan penguasaan hukum pembuktian materiil, mitigasi penyidikan agresif, dan proteksi hak tersangka/terdakwa.
              </p>
            </div>
            
            <div className="hidden lg:flex items-center gap-2 text-xs text-[#C5A880] font-mono bg-[#142847]/80 px-4 py-2.5 rounded-xl border border-[#C5A880]/20">
              <BadgeCheck size={16} /> HIGH-STAKES CRIMINAL DEFENSE
            </div>
          </div>

          {/* Grid 4 Bidang Pidana */}
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
                  className="bg-[#142847] border-2 border-[#C5A880]/30 hover:border-[#C5A880] rounded-2xl p-8 flex flex-col justify-between transition-all group shadow-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A880]/5 rounded-bl-full pointer-events-none group-hover:bg-[#C5A880]/10 transition-colors" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 bg-[#0F1E36] text-[#C5A880] rounded-xl border border-[#C5A880]/40 flex items-center justify-center group-hover:bg-[#C5A880] group-hover:text-[#0F1E36] transition-all shadow">
                        <Icon size={26} />
                      </div>
                      <span className="text-[11px] font-mono tracking-wider text-[#C5A880] uppercase font-semibold bg-[#0F1E36] px-3 py-1 rounded-md border border-[#C5A880]/20">
                        {service.subtitle}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#F8F6F0] mb-3 group-hover:text-[#C5A880] transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-[#F8F6F0]/80 text-sm leading-relaxed font-normal mb-6">
                      {service.desc}
                    </p>

                    <div className="space-y-2.5 border-t border-[#C5A880]/15 pt-5 mb-8">
                      {service.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[#F8F6F0]/90">
                          <CheckCircle2 size={15} className="text-[#C5A880] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link 
                    href="/contact" 
                    className="w-full bg-[#0F1E36] hover:bg-[#C5A880] text-[#C5A880] hover:text-[#0F1E36] font-bold py-3.5 rounded-xl transition-all duration-300 text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-[#C5A880]/40 group-hover:border-[#C5A880]"
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

      {/* 3. COMPLEMENTARY DISPUTES: SENGKETA PERDATA & KOMERSIAL */}
      <section className="py-24 bg-[#F8F6F0] border-b border-[#0F1E36]/10">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#0F1E36]/10 pb-8">
            <div>
              <span className="text-[#0F1E36] font-bold tracking-widest uppercase text-xs px-3.5 py-1.5 bg-[#C5A880]/20 border border-[#C5A880]/40 rounded-full inline-block mb-3">
                Spesialisasi Pendukung &bull; Commercial Litigation
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#0F1E36] font-bold">
                Sengketa Perdata, Komersial, & Agraria
              </h2>
              <p className="text-[#0F1E36]/75 text-sm font-normal mt-2 max-w-2xl">
                Melengkapi perlindungan aset dan hak bisnis klien melalui strategi pemulihan kerugian komersial yang taktis di Pengadilan Negeri dan Pengadilan Niaga.
              </p>
            </div>
            
            <Link 
              href="/contact" 
              className="text-[#0F1E36] font-bold text-sm inline-flex items-center gap-2 hover:text-[#C5A880] transition-colors"
            >
              Evaluasi Sengketa Komersial <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {civilCommercialServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id}
                  className="bg-white p-8 rounded-2xl border border-[#0F1E36]/10 hover:border-[#C5A880] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-13 h-13 p-3 bg-[#0F1E36] text-[#C5A880] rounded-xl border border-[#C5A880]/30 flex items-center justify-center mb-6 group-hover:bg-[#C5A880] group-hover:text-[#0F1E36] transition-colors shadow">
                      <Icon size={24} />
                    </div>

                    <span className="text-[10px] font-mono tracking-wider text-[#0F1E36]/60 uppercase font-semibold block mb-1">
                      {service.subtitle}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#0F1E36] mb-3 group-hover:text-[#C5A880] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#0F1E36]/75 text-sm leading-relaxed font-normal mb-6">
                      {service.desc}
                    </p>

                    <div className="space-y-2.5 border-t border-[#0F1E36]/10 pt-4 mb-8">
                      {service.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-[#0F1E36]/85">
                          <CheckCircle2 size={14} className="text-[#C5A880] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link 
                    href="/contact" 
                    className="text-xs font-bold text-[#0F1E36] uppercase tracking-wider inline-flex items-center gap-1.5 group-hover:text-[#C5A880] transition-colors pt-2 border-t border-[#0F1E36]/10"
                  >
                    Pelajari Prosedur Penanganan <ChevronRight size={14} />
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
              Setiap perkara dikawal secara bertahap dengan kecermatan yuridis berdasarkan Hukum Acara Pidana (KUHAP) dan Hukum Acara Perdata.
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
                    <h4 className="font-serif text-lg font-bold text-[#F8F6F0] mb-3 leading-snug">
                      {stage.title}
                    </h4>
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
              Seluruh strategi pembelaan berlandaskan KUHAP, UU No. 18 Tahun 2003 tentang Advokat, dan Kode Etik Advokat Indonesia (KEAI) guna memastikan hak-hak konstitusional klien terlindungi tanpa kompromi. 
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F8F6F0] border border-[#0F1E36]/10 text-xs text-[#0F1E36]/70">
              <BadgeCheck size={16} className="text-[#C5A880]" />
              <span>Kami tidak pernah menjanjikan hasil atau garansi putusan bebas murni, melainkan dedikasi pembelaan hukum materiil yang berintegritas dan maksimal.</span>
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
                Jangan memberikan keterangan BAP tanpa didampingi penasihat hukum. Advokat kami siap hadir mendampingi hak Anda saat pemeriksaan di tingkat Penyelidikan dan Penyidikan.
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