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
  UserCheck, 
  ShieldAlert, 
  FileBadge, 
  GraduationCap, 
  Briefcase, 
  PhoneCall, 
  MessageSquare, 
  Shield
} from 'lucide-react';

// --- DATA: MISI OPERASIONAL (4 PILAR) ---
const missionPoints = [
  {
    title: 'Penegakan Due Process of Law',
    desc: 'Mengawal kepatuhan ketat hukum acara pidana (KUHAP) dan KUHP Baru (UU No. 1/2023) guna melindungi hak asasi dan kemerdekaan hukum klien dari kesewenang-wenangan aparat penegak hukum.'
  },
  {
    title: 'Kerahasiaan Mutlak (Attorney-Client Privilege)',
    desc: 'Menegakkan asas hak tolak dan kerahasiaan jabatan advokat tanpa batas waktu berdasarkan Pasal 19 UU No. 18 Tahun 2003 tentang Advokat.'
  },
  {
    title: 'Riset Bukti Yuridis & Forensik Mendalam',
    desc: 'Mendasarkan setiap strategi pembelaan pada uji materiil alat bukti yang sah, audit dokumen forensik, dan yurisprudensi Mahkamah Agung teruji.'
  },
  {
    title: 'Mitigasi Risiko Litigasi Terukur',
    desc: 'Memadukan ketangguhan beracara di persidangan dengan kecermatan negosiasi preventif guna mengamankan aset komersial dan reputasi bisnis klien.'
  }
];

// --- DATA: NILAI-NILAI UTAMA (CORE VALUES) ---
const coreValues = [
  {
    title: 'Integritas & Kerahasiaan Mutlak',
    subtitle: 'Strict Confidentiality & Privilege',
    icon: Lock,
    desc: 'Komitmen perlindungan tanpa batas atas seluruh informasi dan dokumen perkara klien berdasarkan sumpah advokat serta perjanjian kerahasiaan (NDA) yang mengikat secara yuridis.'
  },
  {
    title: 'Ketegasan Berperkara (Zealous Advocacy)',
    subtitle: 'Uncompromising Trial Defense',
    icon: ShieldAlert,
    desc: 'Sikap pantang mundur dan gigih dalam memperjuangkan hak hukum klien di hadapan kepolisian, kejaksaan, majelis hakim persidangan, maupun forum mediasi bilateral.'
  },
  {
    title: 'Transparansi Tanpa Biaya Tersembunyi',
    subtitle: 'Procedural & Financial Transparency',
    icon: FileText,
    desc: 'Keterbukaan penuh mengenai kalkulasi peluang perkara, peta jalan tahapan hukum acara, serta struktur honorarium advokat yang disepakati resmi dalam Letter of Engagement.'
  },
  {
    title: 'Presisi Analisis & Riset Yurisprudensi',
    subtitle: 'High Juridical Acumen',
    icon: Compass,
    desc: 'Pembedahan setiap anatomi perkara menggunakan doktrin hukum pidana dan perdata modern, mengantisipasi celah argumen lawan demi hasil persidangan optimal.'
  }
];

// --- DATA: PROFIL TUNGGAL MITRA UTAMA (FADLY RAHMAN) ---
const leadPartner = {
  name: 'Fadly Rahman, S.H., S.E., M.Si.',
  role: 'Managing Partner & Pendiri Firma',
  chamberRole: 'Ketua Kamar Litigasi Pidana & Penyelesaian Sengketa Komersial',
  education: 'Sarjana Hukum (Konsentrasi Hukum Pidana & Acara Peradilan)',
  license: 'PERADI DPC Jakarta & Tunduk Kode Etik Advokat Indonesia (KEAI)',
  basNumber: 'Berita Acara Sumpah (BAS) Resmi Pengadilan Tinggi',
  experience: '15+ Tahun Jam Terbang Praktik Litigasi Peradilan',
  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
  quote: 'Keadilan hukum bukan sekadar retorika di atas kertas, melainkan hasil nyata dari keberanian mengawal due process of law di ruang periksa penyidik dan ketajaman menguji pembuktian materiil di hadapan majelis hakim tanpa kompromi.'
};

// --- DATA: IKHTISAR REKAM JEJAK LITIGASI (ANONIM & KEPATUHAN ETIKA) ---
const trackRecords = [
  {
    category: 'Litigasi Pidana Korporasi',
    headline: 'Pembelaan Perkara Dugaan Fraud Perbankan & TPPU Senilai Puluhan Miliar',
    context: 'Representasi hukum bagi jajaran direksi perseroan jasa keuangan dalam pemeriksaan kepolisian dan kejaksaan. Membuktikan ketiadaan niat jahat (mens rea) dan terpenuhinya Business Judgment Rule di bawah norma KUHP Baru dan UU P2SK No. 4/2023, menghasilkan penghentian penyidikan perkara.',
    tag: 'Tindak Pidana Perbankan & TPPU'
  },
  {
    category: 'Praperadilan & Due Process',
    headline: 'Pembatalan Penetapan Tersangka Dugaan Penggelapan dalam Jabatan',
    context: 'Mengajukan permohonan Praperadilan di Pengadilan Negeri atas penetapan tersangka tanpa didukung minimal dua alat bukti sah yang relevan (Putusan MK No. 21/2014). Hakim Tunggal mengabulkan permohonan dan menyatakan penetapan status tersangka tidak sah secara hukum.',
    tag: 'Hakim Tunggal Praperadilan PN'
  },
  {
    category: 'Pidana Khusus Siber',
    headline: 'Pendampingan Investigasi Delik Manipulasi Sistem Elektronik Perusahaan',
    context: 'Mengawal eksekutif korporasi dalam pemeriksaan siber di tingkat Polda atas tuduhan akses ilegal data komersial (UU No. 1/2024 tentang ITE). Berhasil membuktikan keabsahan audit internal dan integritas dokumen elektronik melalui saksi ahli forensik digital.',
    tag: 'UU ITE 2024 & Forensik Digital'
  },
  {
    category: 'Sengketa Perdata Komersial',
    headline: 'Pemulihan Piutang Kontrak Bisnis & Eksekusi Sita Jaminan Aset Komersial',
    context: 'Menangani gugatan wanprestasi sengketa pengadaan industri bernilai puluhan miliar rupiah di Pengadilan Negeri hingga tingkat Kasasi. Majelis mengabulkan gugatan ganti rugi bunga moratoir dan meletakkan sita jaminan (conservatoir beslag) atas aset tidak bergerak debitur.',
    tag: 'Wanprestasi & Sita Jaminan'
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
  hidden: { opacity: 0, y: 18 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 70, damping: 16 } 
  }
};

export default function AboutPage() {
  return (
    <div className="selection:bg-[#C5A880] selection:text-[#0F1E36] bg-[#F8F6F0] text-[#0F1E36] font-sans overflow-hidden">
      
      {/* 1. HERO SECTION: PENETAPAN OTORITAS & KEBERANIAN ADVOKASI */}
      <section className="relative min-h-[75vh] flex items-center justify-center bg-[#0F1E36] overflow-hidden pt-36 pb-24 border-b border-[#C5A880]/20">
        
        {/* Dekorasi Latar Lembut Berwibawa */}
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
              <span className="text-[#C5A880] text-xs font-semibold tracking-widest uppercase font-mono">
                Profil & Integritas Firma &bull; Bhadrika Byakta Law Firm
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F8F6F0] font-bold mb-6 leading-[1.15]">
              Benteng Hukum Berkeadilan, <br />
              <span className="text-[#C5A880] relative inline-block font-serif italic mt-1">
                Ketegasan Advokasi di Hadapan Hukum.
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C5A880] to-transparent" />
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-[#F8F6F0]/85 text-base md:text-lg font-normal mb-10 leading-relaxed max-w-3xl mx-auto">
              Bhadrika Byakta Law Firm didirikan sebagai kantor hukum litigasi yang memadukan keberanian beracara di hadapan instansi penegak hukum dengan kedalaman analisis yuridis materiil. Kami mendedikasikan jam terbang beracara untuk memastikan tegaknya <strong>due process of law</strong> bagi setiap klien di ranah pidana maupun sengketa perdata strategis.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#F8F6F0]/75 font-mono pt-4 border-t border-[#C5A880]/20">
              <span className="flex items-center gap-2">
                <BadgeCheck size={16} className="text-[#C5A880]" /> Advokat Tersumpah Pengadilan Tinggi
              </span>
              <span className="flex items-center gap-2">
                <Lock size={15} className="text-[#C5A880]" /> Strict Attorney-Client Privilege
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={15} className="text-[#C5A880]" /> Integritas Etika Tanpa Kompromi
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. NARASI PENGANTAR, LATAR BELAKANG & VISUAL KANTOR FISIK */}
      <section className="py-24 bg-[#F8F6F0] border-b border-[#0F1E36]/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Kolom Narasi Latar Belakang */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#C5A880]/20 border border-[#C5A880]/40 text-[#0F1E36] text-xs font-bold tracking-widest uppercase font-mono">
                Latar Belakang & Komitmen Firma
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl text-[#0F1E36] font-bold leading-tight">
                Membela Hak Konstitusional Klien dengan Integritas Yuridis yang Tak Tergoyahkan.
              </h2>
              
              <p className="text-[#0F1E36]/80 text-sm md:text-base leading-relaxed font-normal">
                Bhadrika Byakta Law Firm berakar dari keyakinan mendasar bahwa setiap subjek hukum—baik individu maupun korporasi—berhak atas perlakuan yang adil dan pembelaan terbaik saat berhadapan dengan otoritas penegak hukum. Di tengah kompleksitas sistem peradilan pidana di Indonesia, firma kami berdiri untuk mengawal agar proses penyelidikan, penyidikan, dan persidangan berlangsung strictly sesuai dengan koridor <strong>due process of law</strong>.
              </p>

              <p className="text-[#0F1E36]/80 text-sm md:text-base leading-relaxed font-normal">
                Seiring tingginya kepercayaan para pelaku usaha dan korporasi, kami memperluas kamar advokasi ke ranah <strong>Hukum Perdata & Sengketa Komersial</strong>. Perluasan ini merupakan langkah strategis untuk memberikan benteng perlindungan ganda: memitigasi risiko delik bisnis sekaligus mengamankan kepemilikan aset tanah, hak kontraktual, dan kelangsungan operasional perseroan klien.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-[#0F1E36]/10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#0F1E36]">Pengawalan Prosedural Penuh</h4>
                    <p className="text-[11px] text-[#0F1E36]/70 mt-0.5">Mencegah tindakan upaya paksa yang melanggar hukum acara (KUHAP).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#0F1E36]">Perlindungan Aset Komersial</h4>
                    <p className="text-[11px] text-[#0F1E36]/70 mt-0.5">Pemulihan kerugian wanprestasi dan pengamanan sertifikat tanah agraria.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Kolom Visual: Foto Ruang Rapat / Kantor Fisik Berwibawa */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-[#C5A880]/50 via-[#0F1E36]/20 to-[#C5A880]/40 shadow-2xl">
                
                <div className="bg-[#0F1E36] rounded-[22px] overflow-hidden p-2 border border-[#C5A880]/30">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=80" 
                      alt="Suasana Ruang Konferensi & Kamar Advokat Bhadrika Byakta Law Firm"
                      className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36] via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute bottom-4 left-4 right-4 bg-[#0F1E36]/90 backdrop-blur-md p-3 rounded-xl border border-[#C5A880]/30 text-xs">
                      <span className="text-[#C5A880] font-mono text-[10px] uppercase font-bold block">
                        Headquarters & Conference Chamber
                      </span>
                      <p className="text-[#F8F6F0] font-serif font-bold text-xs mt-0.5">
                        Ruko Silktown Avenue Blok RK/5A-05, Tangerang Selatan
                      </p>
                    </div>
                  </div>

                  <div className="p-4 text-center">
                    <p className="text-[11px] text-[#F8F6F0]/70 leading-relaxed font-light italic">
                      &ldquo;Kamar advokasi kami dirancang kedap suara dan berstandar privasi tinggi guna menjamin kenyamanan bedah berkas perkara bersama klien.&rdquo;
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. VISI & MISI STRATEGIS FIRMA */}
      <section className="py-24 bg-[#0F1E36] text-[#F8F6F0] relative overflow-hidden border-b border-[#C5A880]/20">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#C5A880] font-bold tracking-widest uppercase text-xs px-3.5 py-1.5 bg-[#142847] border border-[#C5A880]/30 rounded-full inline-block font-mono">
              Orientasi & Arah Kebijakan
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#F8F6F0] mt-3">
              Visi & Misi Kelembagaan
            </h2>
            <p className="text-[#F8F6F0]/75 text-sm mt-3 font-normal leading-relaxed">
              Komitmen jangka panjang Bhadrika Byakta Law Firm untuk hadir sebagai pilar penegakan hukum yang berwibawa, berani, dan terpercaya bagi masyarakat serta dunia usaha.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Box Visi Utama (5 Kolom) */}
            <div className="lg:col-span-5 bg-[#142847] border-2 border-[#C5A880]/40 rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#C5A880]/5 rounded-bl-full pointer-events-none" />

              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#0F1E36] border border-[#C5A880]/40 text-[#C5A880] flex items-center justify-center mb-6 shadow">
                  <Landmark size={28} />
                </div>

                <span className="text-[11px] font-mono tracking-widest uppercase text-[#C5A880] font-bold block mb-2">
                  Visi Jangka Panjang
                </span>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#F8F6F0] mb-4 leading-snug">
                  Benteng Pertahanan Hak Pidana & Rujukan Penyelesaian Sengketa Perdata.
                </h3>

                <p className="text-[#F8F6F0]/80 text-xs sm:text-sm leading-relaxed font-normal">
                  Menjadi firma hukum litigasi paling terpercaya di Indonesia yang dikenal karena keberanian membela keadilan substantif, integritas kepatuhan etika tanpa celah, serta ketajaman strategi penyelesaian sengketa komersial yang berorientasi pada kepastian hukum.
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-[#C5A880]/20 flex items-center justify-between text-xs font-mono text-[#C5A880]">
                <span>STANDAR: TIER-1 CHAMBER</span>
                <BadgeCheck size={16} />
              </div>
            </div>

            {/* Box Misi Operasional (7 Kolom) */}
            <div className="lg:col-span-7 bg-[#142847]/70 border border-[#C5A880]/20 rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#C5A880] font-bold block mb-2">
                  Misi Operasional
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#F8F6F0] mb-6">
                  Empat Pilar Praktik Advokasi Mandiri
                </h3>

                <div className="space-y-4">
                  {missionPoints.map((m, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#0F1E36]/60 border border-[#C5A880]/15">
                      <div className="w-8 h-8 rounded-xl bg-[#142847] border border-[#C5A880]/40 text-[#C5A880] font-mono font-bold flex items-center justify-center shrink-0 text-xs">
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-sm text-[#F8F6F0] mb-1">{m.title}</h4>
                        <p className="text-xs text-[#F8F6F0]/70 leading-relaxed font-light">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#C5A880]/15 text-[11px] font-mono text-[#F8F6F0]/60 flex items-center justify-between">
                <span>KEPATUHAN: KODE ETIK ADVOKAT INDONESIA</span>
                <span>SEJAK 2011</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. FILOSOFI PENDEKATAN HUKUM (SPESIALISASI PIDANA VS LAYANAN PERDATA) */}
      <section className="py-24 bg-[#F8F6F0] border-b border-[#0F1E36]/10">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#0F1E36] font-bold tracking-widest uppercase text-xs px-3.5 py-1.5 bg-[#C5A880]/20 border border-[#C5A880]/40 rounded-full inline-block font-mono">
              Our Legal Approach
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0F1E36] font-bold mt-3">
              Filosofi Penanganan Perkara
            </h2>
            <p className="text-[#0F1E36]/75 text-sm mt-2">
              Pendekatan yuridis ganda yang membedakan penanganan perkara pidana dan perdata dengan strategi hukum yang tepat sasaran.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Card Filosofi Pidana: Praduga Tak Bersalah & Agresif Bukti Materiil */}
            <div className="bg-[#0F1E36] text-[#F8F6F0] rounded-3xl p-8 md:p-10 border-2 border-[#C5A880]/40 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A880]/5 rounded-bl-full pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#142847] border border-[#C5A880]/40 text-[#C5A880] flex items-center justify-center shadow">
                    <Gavel size={26} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#C5A880] bg-[#142847] px-3 py-1 rounded-md border border-[#C5A880]/30">
                    Kamar Litigasi Pidana
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#F8F6F0] mb-3">
                  Praduga Tak Bersalah & Pengawasan Ketat Due Process
                </h3>

                <p className="text-[#F8F6F0]/80 text-xs sm:text-sm leading-relaxed font-normal mb-6">
                  Dalam hukum pidana, kemerdekaan dan martabat seseorang dipertaruhkan. Kami bertindak berdasarkan prinsip <em>presumption of innocence</em>, mengawasi secara ketat setiap tindakan penyidik sejak Berita Acara Pemeriksaan (BAP), serta melakukan pembelaan persidangan agresif yang bertumpu pada pembuktian materiil (<em>beyond reasonable doubt</em>).
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[#C5A880]/20 text-xs text-[#F8F6F0]/85">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-[#C5A880] shrink-0 mt-0.5" />
                    <span>Uji Keabsahan Upaya Paksa & Penetapan Tersangka via Praperadilan</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-[#C5A880] shrink-0 mt-0.5" />
                    <span>Penyusunan Eksepsi & Nota Pembelaan (Pledoi) Berbasis KUHP Baru (UU 1/2023)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-[#C5A880] shrink-0 mt-0.5" />
                    <span>Pemeriksaan Silang Saksi & Ahli Forensik (Cross-Examination)</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-8 border-t border-[#C5A880]/20 text-[11px] font-mono text-[#C5A880] flex items-center justify-between">
                <span>DEFENSE PROTOCOL: STRICT & ZEALOUS</span>
                <Scale size={15} />
              </div>
            </div>

            {/* Card Filosofi Perdata: Preventif & Efektivitas Mediasi/Gugatan */}
            <div className="bg-white text-[#0F1E36] rounded-3xl p-8 md:p-10 border-2 border-[#0F1E36]/15 hover:border-[#C5A880] shadow-xl flex flex-col justify-between group transition-all">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#0F1E36] text-[#C5A880] flex items-center justify-center shadow">
                    <Scale size={26} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#0F1E36] bg-[#F8F6F0] px-3 py-1 rounded-md border border-[#0F1E36]/15">
                    Kamar Sengketa Komersial
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#0F1E36] mb-3">
                  Pendekatan Preventif, Negosiasi Cermat & Sita Jaminan
                </h3>

                <p className="text-[#0F1E36]/80 text-xs sm:text-sm leading-relaxed font-normal mb-6">
                  Dalam hukum perdata dan komersial, prioritas kami adalah melindungi aset dan meminimalkan kerugian finansial. Kami mengedepankan telaah kontrak yang hati-hati, mediasi damai berdaya pukul tinggi, dan bila gugatan diperlukan, kami memastikan sita jaminan diletakkan secara cepat demi eksekusi putusan yang riil.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[#0F1E36]/10 text-xs text-[#0F1E36]/85">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-[#C5A880] shrink-0 mt-0.5" />
                    <span>Penyusunan Somasi Peringatan Yuridis Resmi (Pasal 1238 KUHPerdata)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-[#C5A880] shrink-0 mt-0.5" />
                    <span>Gugatan Wanprestasi & PMH dengan Tuntutan Sita Jaminan (Conservatoir Beslag)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-[#C5A880] shrink-0 mt-0.5" />
                    <span>Pemanfaatan Sistem Peradilan Elektronik Modern (E-Court Mahkamah Agung)</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-8 border-t border-[#0F1E36]/10 text-[11px] font-mono text-[#0F1E36]/60 flex items-center justify-between">
                <span>RECOVERY PROTOCOL: ASSET-CENTRIC</span>
                <Landmark size={15} />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. NILAI-NILAI UTAMA (CORE VALUES) */}
      <section className="py-24 bg-white border-b border-[#0F1E36]/10">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#0F1E36] font-bold tracking-widest uppercase text-xs px-3.5 py-1.5 bg-[#C5A880]/20 border border-[#C5A880]/40 rounded-full inline-block font-mono">
              Prinsip Moral & Etika
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0F1E36] font-bold mt-3">
              Nilai-Nilai Utama Firma
            </h2>
            <p className="text-[#0F1E36]/75 text-sm mt-2">
              Empat fondasi nilai yang menuntun sikap dan dedikasi advokat Bhadrika Byakta dalam membela hak klien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 max-w-6xl mx-auto">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#F8F6F0] p-7 rounded-2xl border border-[#0F1E36]/10 hover:border-[#C5A880] transition-all flex flex-col justify-between group shadow-sm"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#0F1E36] text-[#C5A880] flex items-center justify-center mb-5 group-hover:bg-[#C5A880] group-hover:text-[#0F1E36] transition-colors shadow">
                      <Icon size={22} />
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#0F1E36]/60 block mb-1 font-bold">
                      {val.subtitle}
                    </span>

                    <h3 className="font-serif font-bold text-lg text-[#0F1E36] mb-3 leading-snug">
                      {val.title}
                    </h3>

                    <p className="text-xs text-[#0F1E36]/75 leading-relaxed font-normal">
                      {val.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#0F1E36]/10 text-[10px] font-mono text-[#C5A880] font-bold flex items-center justify-between">
                    <span>KEAI CERTIFIED</span>
                    <BadgeCheck size={14} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. PROFIL MITRA UTAMA & ADVOKAT (SPOTLIGHT TUNGGAL: FADLY RAHMAN) */}
      <section className="py-24 bg-[#0F1E36] text-[#F8F6F0] relative overflow-hidden border-b border-[#C5A880]/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          <div className="max-w-3xl mb-14">
            <span className="text-[#C5A880] font-bold tracking-widest uppercase text-xs px-3.5 py-1.5 bg-[#142847] border border-[#C5A880]/30 rounded-full inline-block font-mono mb-3">
              Leadership & Lead Counsel &bull; Profil Mitra Utama
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#F8F6F0] font-bold">
              Mitra Utama & Penasihat Hukum Litigasi
            </h2>
            <p className="text-[#F8F6F0]/75 text-sm mt-2 font-normal">
              Kepemimpinan advokasi berintegritas tinggi dengan legitimasi resmi Berita Acara Sumpah (BAS) Pengadilan Tinggi dan rekam jejak beracara di peradilan pidana maupun perdata komersial.
            </p>
          </div>

          {/* Kartu Profil Tunggal Eksekutif Mewah: Fadly Rahman */}
          <div className="max-w-5xl mx-auto bg-[#142847] border-2 border-[#C5A880]/40 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A880]/5 rounded-bl-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Foto Resmi Individual Fadly Rahman */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#0F1E36] border-2 border-[#C5A880]/50 shadow-2xl group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={leadPartner.image} 
                    alt={leadPartner.name}
                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36] via-transparent to-transparent opacity-75" />
                  
                  <div className="absolute bottom-3 left-3 right-3 bg-[#0F1E36]/90 backdrop-blur-md px-3 py-2 rounded-xl border border-[#C5A880]/30 text-center">
                    <span className="text-[10px] font-mono text-[#C5A880] font-bold uppercase tracking-wider block">
                      {leadPartner.experience}
                    </span>
                    <span className="text-[10px] font-mono text-[#F8F6F0]/70 block mt-0.5">
                      Status: Advokat Aktif Tersumpah
                    </span>
                  </div>
                </div>
              </div>

              {/* Detail Kredensial, Lisensi & Kutipan Personal Fadly Rahman */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0F1E36] border border-[#C5A880]/30 text-[#C5A880] font-mono text-xs uppercase font-bold tracking-wider mb-2">
                    <BadgeCheck size={14} />
                    <span>{leadPartner.role}</span>
                  </div>
                  
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#F8F6F0] leading-tight">
                    {leadPartner.name}
                  </h3>
                  
                  <p className="text-xs sm:text-sm font-semibold text-[#C5A880] mt-1">
                    {leadPartner.chamberRole}
                  </p>
                </div>

                {/* Kutipan Personal Fadly Rahman */}
                <div className="p-5 rounded-2xl bg-[#0F1E36]/90 border border-[#C5A880]/20 relative">
                  <Quote className="text-[#C5A880]/20 absolute top-3 right-3" size={28} />
                  <p className="text-xs sm:text-sm text-[#F8F6F0]/90 italic leading-relaxed font-light">
                    &ldquo;{leadPartner.quote}&rdquo;
                  </p>
                </div>

                {/* Kredibilitas Profesi & Lisensi */}
                <div className="space-y-2.5 pt-1 text-xs text-[#F8F6F0]/80">
                  <div className="flex items-start gap-2.5">
                    <GraduationCap size={16} className="text-[#C5A880] shrink-0 mt-0.5" />
                    <span>{leadPartner.education}</span>
                  </div>
                  
                  <div className="flex items-center gap-2.5 font-mono text-[11px] text-[#C5A880]">
                    <FileBadge size={16} className="shrink-0" />
                    <span>{leadPartner.license}</span>
                  </div>

                  <div className="flex items-center gap-2.5 font-mono text-[11px] text-[#F8F6F0]/70">
                    <Landmark size={15} className="text-[#C5A880] shrink-0" />
                    <span>{leadPartner.basNumber}</span>
                  </div>
                </div>

                {/* Tombol Aksi Langsung Konsultasi dengan Fadly Rahman */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Link 
                    href="/contact"
                    className="bg-[#C5A880] hover:bg-[#b8996e] text-[#0F1E36] font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider text-center transition-all shadow-lg border border-[#C5A880] inline-flex items-center justify-center gap-2"
                  >
                    <span>Konsultasi dengan Fadly Rahman</span>
                    <ArrowRight size={14} />
                  </Link>
                  
                  <a
                    href="https://wa.me/6285697259015?text=Halo%20BBLF,%20saya%20ingin%20berkonsultasi%20langsung%20dengan%20Bapak%20Fadly%20Rahman."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0F1E36] hover:bg-[#142847] text-[#C5A880] border border-[#C5A880]/40 font-semibold px-5 py-3.5 rounded-xl text-xs uppercase tracking-wider text-center transition-all inline-flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={14} />
                    <span>WhatsApp Direct</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 7. LEGALITAS & KEABSAHAN LISENSI RESMI (MEMBEDAKAN DARI LEMBAGA NON-LITIGASI) */}
      <section className="py-20 bg-[#F8F6F0] border-b border-[#0F1E36]/10">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          
          <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-[#C5A880]/40 shadow-xl space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#0F1E36]/10">
              <div>
                <span className="text-[#0F1E36] font-bold tracking-widest uppercase text-xs font-mono px-3 py-1 bg-[#C5A880]/20 border border-[#C5A880]/40 rounded-full inline-block">
                  Keabsahan Lisensi & Legalitas
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0F1E36] mt-2">
                  Legitimasi Advokat Litigasi Bersertifikasi
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0F1E36] bg-[#F8F6F0] px-4 py-2 rounded-xl border border-[#0F1E36]/10">
                <BadgeCheck size={16} className="text-[#C5A880]" />
                <span>OFFICIAL BAR LICENSE COMPLIANT</span>
              </div>
            </div>

            <p className="text-[#0F1E36]/80 text-xs sm:text-sm leading-relaxed font-normal">
              Bhadrika Byakta Law Firm memegang standar tertinggi dalam kepatuhan izin beracara. Berbeda dari konsultan hukum non-litigasi atau badan bantuan hukum informal, seluruh advokat kami memegang <strong>Berita Acara Sumpah (BAS) resmi Pengadilan Tinggi</strong> serta kartu tanda advokat aktif <strong>Perhimpunan Advokat Indonesia (PERADI)</strong>. Hal ini memberikan hak hukum penuh untuk mendampingi klien di seluruh tingkatan kantor kepolisian, kejaksaan, pengadilan negeri, pengadilan niaga, pengadilan tinggi, hingga Mahkamah Agung RI.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-4 rounded-xl bg-[#F8F6F0] border border-[#0F1E36]/10 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0F1E36]">
                  <FileBadge size={16} className="text-[#C5A880]" />
                  <span>Berita Acara Sumpah (BAS)</span>
                </div>
                <p className="text-[11px] text-[#0F1E36]/70 leading-relaxed">
                  Terdaftar resmi di Pengadilan Tinggi dengan legalitas beracara di seluruh peradilan RI.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F6F0] border border-[#0F1E36]/10 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0F1E36]">
                  <ShieldCheck size={16} className="text-[#C5A880]" />
                  <span>Lisensi Praktik PERADI</span>
                </div>
                <p className="text-[11px] text-[#0F1E36]/70 leading-relaxed">
                  Anggota resmi organisasi advokat yang diakui sah oleh Undang-Undang Advokat.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F6F0] border border-[#0F1E36]/10 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0F1E36]">
                  <Building2 size={16} className="text-[#C5A880]" />
                  <span>Kantor Hukum Terdaftar</span>
                </div>
                <p className="text-[11px] text-[#0F1E36]/70 leading-relaxed">
                  Kamar advokasi resmi berdomisili di Ruko Silktown Avenue, Tangerang Selatan.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#0F1E36]/10 text-center">
              <span className="text-[11px] font-mono text-[#0F1E36]/60">
                *Klien berhak memverifikasi kartu identitas advokat dan salinan BAS partner kami pada sesi konsultasi perdana.
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 8. RINGKASAN PENGALAMAN & REKAM JEJAK LITIGASI (ANONIM & SESUAI KODE ETIK) */}
      <section className="py-24 bg-white border-b border-[#0F1E36]/10">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-[#0F1E36] font-bold tracking-widest uppercase text-xs px-3.5 py-1.5 bg-[#C5A880]/20 border border-[#C5A880]/40 rounded-full inline-block font-mono">
              Litigation Track Record
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0F1E36] font-bold mt-3">
              Rekam Jejak Penanganan Perkara
            </h2>
            <p className="text-[#0F1E36]/75 text-sm mt-2 font-normal">
              Ikhtisar representasi hukum riil yang disajikan secara anonim guna melindungi kerahasiaan data para klien dan mematuhi etika profesi advokat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {trackRecords.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#F8F6F0] p-8 rounded-2xl border border-[#0F1E36]/15 hover:border-[#C5A880] transition-colors flex flex-col justify-between shadow-sm space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase font-bold text-[#C5A880] bg-[#0F1E36] px-2.5 py-1 rounded">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#0F1E36]/60">
                      CONFIDENTIAL CASE
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#0F1E36] leading-snug mb-3">
                    {item.headline}
                  </h3>

                  <p className="text-xs text-[#0F1E36]/75 leading-relaxed font-normal">
                    {item.context}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#0F1E36]/10 flex items-center justify-between text-[11px] font-mono text-[#0F1E36]/70">
                  <span>Yurisdiksi: {item.tag}</span>
                  <CheckCircle2 size={14} className="text-[#C5A880]" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. CALL TO ACTION (CTA) & KERAHASIAAN KONSULTASI TATAP MUKA */}
      <section className="py-20 bg-[#0F1E36] text-[#F8F6F0] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto bg-[#142847] border-2 border-[#C5A880]/40 rounded-3xl p-8 md:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs text-[#C5A880] font-mono tracking-wider uppercase">
                <Lock size={14} /> Jaminan Kerahasiaan Sejak Kontak Pertama
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#F8F6F0]">
                Diskusikan Kasus Anda Bersama Mitra Litigasi Kami.
              </h3>
              <p className="text-[#F8F6F0]/75 text-xs sm:text-sm font-normal leading-relaxed">
                Jadwalkan temu wicara privat di ruang konferensi kantor fisik kami (Silktown Avenue) atau melalui kanal terenkripsi. Hak hukum Anda dilindungi sejak asesmen awal dimulai.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#b8996e] text-[#0F1E36] font-bold px-8 py-4 rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 border border-[#C5A880] text-xs uppercase tracking-wider whitespace-nowrap"
              >
                <span>Jadwalkan Konsultasi Awal</span>
                <ArrowRight size={16} />
              </Link>
              
              <a
                href="https://wa.me/6285697259015?text=Halo%20BBLF,%20saya%20ingin%20berkonsultasi%20mengenai%20perkara%20hukum%20secara%20rahasia."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#0F1E36] hover:bg-[#142847] text-[#C5A880] border border-[#C5A880]/40 font-semibold px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider whitespace-nowrap"
              >
                <MessageSquare size={15} />
                <span>Hotline WhatsApp 24/7</span>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}