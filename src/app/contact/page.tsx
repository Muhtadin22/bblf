'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  Calendar,
  Scale,
  ShieldCheck,
  Lock,
  Building2,
  AlertTriangle,
  BadgeCheck,
  Video,
  Users,
  Compass,
  FileText,
  PhoneCall,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

// --- DATA: KLASIFIKASI POKOK PERKARA ---
const consultationTopics = [
  { id: 'pidana-bisnis', label: 'Litigasi Pidana & White-Collar Crime', badge: 'Core Focus' },
  { id: 'bap-darurat', label: 'Pendampingan BAP / Pemeriksaan Darurat', badge: '24/7 Hotline' },
  { id: 'sengketa-bisnis', label: 'Sengketa Kontrak & Wanprestasi Bisnis', badge: 'Perdata' },
  { id: 'sengketa-tanah', label: 'Sengketa Properti & Agraria Komersial', badge: 'Aset' },
  { id: 'pkpu-pailit', label: 'Kepailitan, PKPU & Restrukturisasi Utang', badge: 'Niaga' },
  { id: 'korporasi', label: 'Tata Kelola Korporasi & Legal Due Diligence', badge: 'Advisory' }
];

// --- DATA: METODE KONSULTASI RESMI ---
const consultationMethods = [
  { id: 'chamber', label: 'Tatap Muka di Kantor Firma', icon: Building2, desc: 'Pertemuan di Private Conference Chamber (Silktown Avenue, Serpong Utara)' },
  { id: 'virtual', label: 'Virtual Conference Terenkripsi', icon: Video, desc: 'Sesi video conference privat via platform berstandar enkripsi tinggi' },
  { id: 'onsite', label: 'Pendampingan di Lokasi Klien', icon: Users, desc: 'Khusus pemeriksaan kepolisian, kantor korporasi, atau situasi mendesak' }
];

const timeSlots = [
  'Pagi: 09:30 - 11:30 WIB',
  'Siang: 13:30 - 15:30 WIB',
  'Sore: 16:00 - 18:00 WIB'
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

export default function ContactPage() {
  const [selectedTopic, setSelectedTopic] = useState(consultationTopics[0].label);
  const [selectedMethod, setSelectedMethod] = useState(consultationMethods[0].id);
  const [selectedSlot, setSelectedSlot] = useState(timeSlots[0]);
  const [preferredDate, setPreferredDate] = useState('');
  const [hasAgreedPrivilege, setHasAgreedPrivilege] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedWhatsappUrl, setSubmittedWhatsappUrl] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const fullAddress = 'Ruko Silktown Avenue Blok.RK/5A-05, East Pondok Jagung, Serpong Utara, South Tangerang City, Banten 15326';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const waNumber = '6285697259015';
    const chosenMethodLabel = consultationMethods.find(m => m.id === selectedMethod)?.label || 'Tatap Muka di Kantor Firma';

    // Rangkai seluruh teks dalam format string murni dengan karakter baris baru (\n)
    const rawMessage = [
      '*FORMULIR PENJADWALAN KONSULTASI // BHADRIKA BYAKTA LAW FIRM*',
      '--------------------------------------------------',
      '*1. IDENTITAS KLIEN*',
      `• Nama Lengkap: ${formData.name.trim() || '-'}`,
      `• Instansi / Korporasi: ${formData.company.trim() || '-'}`,
      `• Email Resmi: ${formData.email.trim() || '-'}`,
      `• No. Telepon / WhatsApp: ${formData.phone.trim() || '-'}`,
      '',
      '*2. DETAIL PERKARA & JADWAL*',
      `• Topik / Bidang Hukum: ${selectedTopic}`,
      `• Format Pertemuan: ${chosenMethodLabel}`,
      `• Preferensi Tanggal: ${preferredDate || 'Segera / Konfirmasi Admin'}`,
      `• Alokasi Sesi Waktu: ${selectedSlot}`,
      '',
      '*3. RINCIAN POKOK PERKARA*',
      formData.message.trim() ? formData.message.trim() : '(Belum dicantumkan)',
      '--------------------------------------------------',
      '_Status: Dikirim melalui Portal Konsultasi Resmi BBLF_'
    ].join('\n');

    // Encode seluruh teks secara utuh agar karakter &, #, ?, enter, dan spasi tidak memotong isi pesan
    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodedMessage}`;

    setSubmittedWhatsappUrl(whatsappUrl);
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Buka WhatsApp, dengan fallback jika pop-up diblokir browser
    try {
      const win = window.open(whatsappUrl, '_blank');
      if (!win || win.closed || typeof win.closed === 'undefined') {
        window.location.href = whatsappUrl;
      }
    } catch {
      window.location.href = whatsappUrl;
    }
  };

  return (
    <div className="selection:bg-[#C5A880] selection:text-[#0F1E36] bg-[#F8F6F0] text-[#0F1E36] font-sans overflow-hidden">
      
      {/* 1. HERO SECTION: PORTAL KOMUNIKASI & PRIVILEGE ADVOKAT */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#0F1E36] overflow-hidden pt-36 pb-20 border-b border-[#C5A880]/20">
        
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
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#142847] border border-[#C5A880]/30 shadow-inner mb-6">
              <Scale className="text-[#C5A880] shrink-0" size={16} />
              <span className="text-[#C5A880] text-xs font-semibold tracking-widest uppercase">
                Portal Registrasi Perkara & Client Concierge &bull; BBLF
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F8F6F0] font-bold mb-6 leading-[1.15]">
              Inisiasi Konsultasi Hukum & <br />
              <span className="text-[#C5A880] relative inline-block font-serif italic mt-1">
                Penanganan Perkara Konfidensial.
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C5A880] to-transparent" />
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-[#F8F6F0]/85 text-base md:text-lg font-normal mb-8 leading-relaxed max-w-3xl mx-auto">
              Sampaikan pokok permasalahan hukum Anda secara aman dan tertutup. Setiap informasi dilindungi sepenuhnya di bawah hak tolak dan rahasia jabatan advokat (*Attorney-Client Privilege*) sesuai amanat Undang-Undang Advokat Republik Indonesia.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#F8F6F0]/70 font-mono pt-4 border-t border-[#C5A880]/20">
              <span className="flex items-center gap-2">
                <Lock size={15} className="text-[#C5A880]" /> Kerahasiaan Terjamin Mutlak
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={15} className="text-[#C5A880]" /> Penapisan Konflik Kepentingan
              </span>
              <span className="flex items-center gap-2">
                <Clock size={15} className="text-[#C5A880]" /> Asesmen Awal &le; 24 Jam Kerja
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. CHANNELS INFORMASI RESMI (4 KARTU BERBORDER MEWAH) */}
      <section className="relative z-20 -mt-10 px-6 md:px-12 mb-14">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Kantor Pusat */}
            <div className="bg-[#0F1E36] text-[#F8F6F0] p-7 rounded-2xl border-2 border-[#C5A880]/30 shadow-xl flex flex-col justify-between group hover:border-[#C5A880] transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#142847] border border-[#C5A880]/40 text-[#C5A880] flex items-center justify-center mb-5 group-hover:bg-[#C5A880] group-hover:text-[#0F1E36] transition-all">
                  <MapPin size={22} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A880] font-bold block mb-1">
                  Chambers & Head Office
                </span>
                <h4 className="font-serif font-bold text-lg text-[#F8F6F0] mb-2">Kantor Pusat</h4>
                <p className="text-[#F8F6F0]/75 text-xs leading-relaxed font-normal">
                  {fullAddress}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#C5A880]/20 text-[11px] font-mono text-[#C5A880]">
                Private Meeting Available
              </div>
            </div>

            {/* Card 2: Hotline Advokat & BAP */}
            <div className="bg-[#0F1E36] text-[#F8F6F0] p-7 rounded-2xl border-2 border-[#C5A880]/30 shadow-xl flex flex-col justify-between group hover:border-[#C5A880] transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#142847] border border-[#C5A880]/40 text-[#C5A880] flex items-center justify-center mb-5 group-hover:bg-[#C5A880] group-hover:text-[#0F1E36] transition-all">
                  <PhoneCall size={22} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A880] font-bold block mb-1">
                  Direct Line & WhatsApp
                </span>
                <h4 className="font-serif font-bold text-lg text-[#F8F6F0] mb-2">Hotline Registrasi & BAP</h4>
                <p className="text-[#F8F6F0]/75 text-xs leading-relaxed font-normal mb-1">
                  Komunikasi langsung untuk pendaftaran perkara maupun situasi darurat kepolisian:
                </p>
                <p className="font-mono font-bold text-sm text-[#C5A880] mt-1">
                  +62 856-9725-9015
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#C5A880]/20 text-[11px] font-mono text-[#C5A880]">
                STATUS: SIAGA 24/7
              </div>
            </div>

            {/* Card 3: Email Korespondensi */}
            <div className="bg-[#0F1E36] text-[#F8F6F0] p-7 rounded-2xl border-2 border-[#C5A880]/30 shadow-xl flex flex-col justify-between group hover:border-[#C5A880] transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#142847] border border-[#C5A880]/40 text-[#C5A880] flex items-center justify-center mb-5 group-hover:bg-[#C5A880] group-hover:text-[#0F1E36] transition-all">
                  <Mail size={22} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A880] font-bold block mb-1">
                  Official Correspondence
                </span>
                <h4 className="font-serif font-bold text-lg text-[#F8F6F0] mb-2">Surat & Dokumen Formal</h4>
                <p className="text-[#F8F6F0]/75 text-xs leading-relaxed font-normal">
                  Penyampaian somasi, legal opinion request, dan proposal retainer korporasi:
                </p>
                <p className="font-mono text-xs text-[#C5A880] mt-2 truncate">
                  contact@bhadrikabyakta.law
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#C5A880]/20 text-[11px] font-mono text-[#C5A880]">
                ENCRYPTED INBOX
              </div>
            </div>

            {/* Card 4: Jam Kerja Praktik */}
            <div className="bg-[#0F1E36] text-[#F8F6F0] p-7 rounded-2xl border-2 border-[#C5A880]/30 shadow-xl flex flex-col justify-between group hover:border-[#C5A880] transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#142847] border border-[#C5A880]/40 text-[#C5A880] flex items-center justify-center mb-5 group-hover:bg-[#C5A880] group-hover:text-[#0F1E36] transition-all">
                  <Clock size={22} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A880] font-bold block mb-1">
                  Chamber Hours
                </span>
                <h4 className="font-serif font-bold text-lg text-[#F8F6F0] mb-2">Jam Konsultasi Kantor</h4>
                <p className="text-[#F8F6F0]/75 text-xs leading-relaxed font-normal">
                  Senin &ndash; Jumat: 09:00 &ndash; 18:00 WIB<br />
                  Sabtu: Berdasarkan Perjanjian Khusus<br />
                  <span className="text-[#C5A880] font-semibold">Hotline Darurat: Siaga 24 Jam</span>
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#C5A880]/20 text-[11px] font-mono text-[#C5A880]">
                BY APPOINTMENT
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. KOMPLEKS FORM INTAKE & EXECUTIVE FAST-TRACK + MAP */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="bg-white rounded-3xl shadow-2xl border border-[#0F1E36]/15 overflow-hidden flex flex-col lg:flex-row">
            
            {/* SISI KIRI: FORMULIR INTAKE RESMI (60%) */}
            <div className="p-8 md:p-14 lg:w-7/12 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0F1E36] uppercase tracking-wider bg-[#C5A880]/20 px-3 py-1.5 rounded-full border border-[#C5A880]/40 mb-4">
                  <ShieldCheck size={14} className="text-[#0F1E36]" /> Formulir Evaluasi Perkara
                </div>

                <h3 className="font-serif text-2xl md:text-3xl text-[#0F1E36] font-bold mb-2">
                  Jadwalkan Konsultasi Awal Bersama Partner
                </h3>
                <p className="text-[#0F1E36]/70 text-xs sm:text-sm font-normal mb-8 leading-relaxed">
                  Lengkapi data di bawah ini untuk menghubungkan perkara Anda secara terstruktur ke nomor WhatsApp Partner / Admin BBLF.
                </p>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-[#0F1E36] text-[#F8F6F0] border-2 border-[#C5A880] rounded-2xl p-8 text-center py-12"
                    >
                      <div className="w-16 h-16 bg-[#142847] border border-[#C5A880] text-[#C5A880] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <CheckCircle2 size={32} />
                      </div>
                      <h4 className="font-serif text-2xl font-bold text-[#F8F6F0] mb-2">
                        Data Berhasil Dirangkai & Terenkripsi!
                      </h4>
                      <p className="text-[#F8F6F0]/80 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                        Data identitas, jadwal, dan <strong>rincian pokok perkara</strong> telah di-encode secara utuh untuk dikirimkan langsung ke nomor admin resmi kami di <strong className="text-[#C5A880]">085697259015</strong>.
                      </p>

                      {/* Tombol Langsung Buka WhatsApp jika Popup Diblokir */}
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        {submittedWhatsappUrl && (
                          <a 
                            href={submittedWhatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#b8996e] text-[#0F1E36] font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md inline-flex items-center justify-center gap-2"
                          >
                            <MessageSquare size={16} />
                            <span>Buka WhatsApp Sekarang</span>
                          </a>
                        )}

                        <button 
                          onClick={() => { 
                            setIsSubmitted(false); 
                            setFormData({ name: '', company: '', email: '', phone: '', message: '' }); 
                          }}
                          className="w-full sm:w-auto bg-[#142847] hover:bg-[#1c365f] text-[#F8F6F0] font-semibold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all border border-[#C5A880]/30"
                        >
                          Ajukan Registrasi Perkara Lain
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      
                      {/* Pilihan 1: Kategori Pokok Perkara */}
                      <div>
                        <label className="block text-xs font-mono font-bold text-[#0F1E36] uppercase tracking-wider mb-2.5">
                          1. Klasifikasi Bidang Hukum / Pokok Perkara *
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {consultationTopics.map((topic) => {
                            const isSelected = selectedTopic === topic.label;
                            return (
                              <button
                                key={topic.id}
                                type="button"
                                onClick={() => setSelectedTopic(topic.label)}
                                className={`p-3 rounded-xl text-left text-xs transition-all border flex items-center justify-between ${
                                  isSelected 
                                    ? 'bg-[#0F1E36] text-[#C5A880] border-[#C5A880] font-bold shadow-sm' 
                                    : 'bg-[#F8F6F0] text-[#0F1E36] border-[#0F1E36]/10 hover:border-[#C5A880]'
                                }`}
                              >
                                <span className="truncate pr-2">{topic.label}</span>
                                <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded uppercase font-semibold ${
                                  isSelected ? 'bg-[#142847] text-[#C5A880]' : 'bg-white text-[#0F1E36]/60'
                                }`}>
                                  {topic.badge}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Pilihan 2: Format / Metode Pertemuan */}
                      <div>
                        <label className="block text-xs font-mono font-bold text-[#0F1E36] uppercase tracking-wider mb-2.5">
                          2. Format Konsultasi Yang Dikehendaki *
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          {consultationMethods.map((method) => {
                            const Icon = method.icon;
                            const isSelected = selectedMethod === method.id;
                            return (
                              <button
                                key={method.id}
                                type="button"
                                onClick={() => setSelectedMethod(method.id)}
                                className={`p-3.5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                                  isSelected 
                                    ? 'bg-[#0F1E36] text-[#F8F6F0] border-[#C5A880] shadow' 
                                    : 'bg-[#F8F6F0] text-[#0F1E36] border-[#0F1E36]/10 hover:border-[#C5A880]'
                                }`}
                              >
                                <div className="flex items-center justify-between mb-2">
                                  <Icon size={18} className={isSelected ? 'text-[#C5A880]' : 'text-[#0F1E36]'} />
                                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#C5A880]' : 'bg-[#0F1E36]/20'}`} />
                                </div>
                                <div>
                                  <h5 className="font-serif font-bold text-xs">{method.label}</h5>
                                  <p className={`text-[10px] leading-snug mt-1 ${isSelected ? 'text-[#F8F6F0]/70' : 'text-[#0F1E36]/60'}`}>
                                    {method.desc}
                                  </p>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Pilihan 3: Jadwal & Waktu */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
                        <div>
                          <label className="block text-xs font-mono font-bold text-[#0F1E36] uppercase tracking-wider mb-2">
                            3. Preferensi Tanggal Pertemuan *
                          </label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#0F1E36]/40">
                              <Calendar size={16} />
                            </span>
                            <input 
                              type="date" 
                              required
                              value={preferredDate}
                              onChange={(e) => setPreferredDate(e.target.value)}
                              className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#0F1E36]/15 focus:outline-none focus:border-[#C5A880] bg-[#F8F6F0] text-xs font-medium text-[#0F1E36] transition-colors" 
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-mono font-bold text-[#0F1E36] uppercase tracking-wider mb-2">
                            4. Alokasi Sesi Waktu *
                          </label>
                          <select 
                            value={selectedSlot}
                            onChange={(e) => setSelectedSlot(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-[#0F1E36]/15 focus:outline-none focus:border-[#C5A880] bg-[#F8F6F0] text-xs font-medium text-[#0F1E36] transition-colors"
                          >
                            {timeSlots.map((slot) => (
                              <option key={slot} value={slot}>{slot}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Pilihan 4: Identitas Personal & Korporasi */}
                      <div className="space-y-4 pt-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-mono font-bold text-[#0F1E36] uppercase tracking-wider mb-1.5">
                              Nama Lengkap Klien / Pemohon *
                            </label>
                            <input 
                              type="text" 
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              className="w-full px-4 py-3 rounded-xl border border-[#0F1E36]/15 focus:outline-none focus:border-[#C5A880] bg-[#F8F6F0] text-xs text-[#0F1E36] transition-colors" 
                              placeholder="Contoh: Hendra Wijaya, S.E." 
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-mono font-bold text-[#0F1E36] uppercase tracking-wider mb-1.5">
                              Nama Korporasi / Entitas Bisnis (Opsional)
                            </label>
                            <input 
                              type="text" 
                              value={formData.company}
                              onChange={(e) => setFormData({...formData, company: e.target.value})}
                              className="w-full px-4 py-3 rounded-xl border border-[#0F1E36]/15 focus:outline-none focus:border-[#C5A880] bg-[#F8F6F0] text-xs text-[#0F1E36] transition-colors" 
                              placeholder="Contoh: PT Surya Nusantara" 
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-mono font-bold text-[#0F1E36] uppercase tracking-wider mb-1.5">
                              Email Profesional / Korespondensi *
                            </label>
                            <input 
                              type="email" 
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              className="w-full px-4 py-3 rounded-xl border border-[#0F1E36]/15 focus:outline-none focus:border-[#C5A880] bg-[#F8F6F0] text-xs text-[#0F1E36] transition-colors" 
                              placeholder="hendra@perusahaan.com" 
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-mono font-bold text-[#0F1E36] uppercase tracking-wider mb-1.5">
                              Nomor Telepon / WhatsApp Aktif *
                            </label>
                            <input 
                              type="tel" 
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              className="w-full px-4 py-3 rounded-xl border border-[#0F1E36]/15 focus:outline-none focus:border-[#C5A880] bg-[#F8F6F0] text-xs text-[#0F1E36] transition-colors" 
                              placeholder="+62 812 3456 7890" 
                            />
                          </div>
                        </div>

                        {/* Textarea Rincian Pokok Perkara */}
                        <div>
                          <label className="block text-xs font-mono font-bold text-[#0F1E36] uppercase tracking-wider mb-1.5">
                            Rincian Pokok Perkara / Uraian Kasus *
                          </label>
                          <textarea 
                            rows={4} 
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-[#0F1E36]/15 focus:outline-none focus:border-[#C5A880] bg-[#F8F6F0] text-xs text-[#0F1E36] resize-none transition-colors" 
                            placeholder="Sampaikan kronologi atau pokok permasalahan hukum yang Anda hadapi (misal: surat panggilan penyidik, wanprestasi kontrak komersial, sengketa tanah, dll)..."
                          />
                        </div>
                      </div>

                      {/* Checkbox Perlindungan Kerahasiaan */}
                      <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8F6F0] border border-[#0F1E36]/10 text-xs text-[#0F1E36]/80">
                        <input 
                          type="checkbox"
                          id="privilege-check"
                          checked={hasAgreedPrivilege}
                          onChange={(e) => setHasAgreedPrivilege(e.target.checked)}
                          required
                          className="mt-0.5 rounded border-[#0F1E36]/20 text-[#0F1E36] focus:ring-[#C5A880]"
                        />
                        <label htmlFor="privilege-check" className="cursor-pointer text-[11px] leading-relaxed">
                          Saya memahami bahwa seluruh data yang disampaikan bersifat konfidensial dan dilindungi oleh <strong>Pasal 19 UU Advokat (Hak Tolak & Rahasia Jabatan)</strong>.
                        </label>
                      </div>

                      {/* Tombol Submit WhatsApp */}
                      <button 
                        type="submit" 
                        disabled={isSubmitting || !hasAgreedPrivilege}
                        className="w-full bg-[#0F1E36] hover:bg-[#142847] text-[#C5A880] font-bold py-4 rounded-xl transition-all shadow-xl shadow-black/20 text-xs uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-[#C5A880] disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Mengenkripsi & Menyiapkan Pesan...</span>
                        ) : (
                          <>
                            <MessageSquare size={16} />
                            <span>Inisiasi Registrasi & Teruskan ke WhatsApp Partner</span>
                          </>
                        )}
                      </button>

                    </form>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-8 pt-6 border-t border-[#0F1E36]/10 flex items-center justify-between text-[11px] text-[#0F1E36]/60">
                <span>Protokol SOP: BBLF-INTAKE-2026</span>
                <span className="font-mono text-[#0F1E36]">KEAI COMPLIANT</span>
              </div>
            </div>

            {/* SISI KANAN: EXECUTIVE FAST-TRACK & GOOGLE MAPS (40%) */}
            <div className="lg:w-5/12 bg-[#0F1E36] text-[#F8F6F0] flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#C5A880]/30 relative overflow-hidden">
              
              {/* Box Fast-Track Tindakan Mendesak */}
              <div className="p-8 md:p-10 border-b border-[#C5A880]/20 bg-[#142847]/80">
                <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#C5A880] font-bold mb-2">
                  <AlertTriangle size={14} /> Jalur Khusus Darurat
                </div>
                
                <h4 className="font-serif text-2xl font-bold text-[#F8F6F0] mb-2 leading-snug">
                  Pendampingan BAP atau Tindakan Penahanan?
                </h4>
                
                <p className="text-[#F8F6F0]/75 text-xs leading-relaxed font-normal mb-6">
                  Jika Anda atau kerabat sedang menghadapi pemanggilan mendadak di Kepolisian, Kejaksaan, atau penindakan hukum acara, segera hubungi sambungan prioritas kami:
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="tel:+6285697259015"
                    className="flex-1 bg-[#C5A880] hover:bg-[#b8996e] text-[#0F1E36] px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <Phone size={15} /> Panggil (+62 856-9725-9015)
                  </a>
                  <a 
                    href="https://wa.me/6285697259015?text=Halo%20BBLF,%20saya%20membutuhkan%20pendampingan%20hukum%20darurat%20segera."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#0F1E36] hover:bg-[#142847] text-[#C5A880] border border-[#C5A880]/50 px-4 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={15} /> Chat Darurat
                  </a>
                </div>
              </div>

              {/* Peta Lokasi Kantor Pusat: Ruko Silktown Avenue */}
              <div className="relative flex-1 min-h-[380px] bg-[#0A1424] flex flex-col justify-end">
                <iframe 
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                  className="absolute inset-0 w-full h-full border-0 filter grayscale-[20%] contrast-115 opacity-90" 
                  allowFullScreen={false} 
                  loading="lazy" 
                  title="Peta Lokasi Kantor Pusat Bhadrika Byakta Law Firm - Silktown Avenue"
                />

                {/* Overlay Card Fasilitas Akses */}
                <div className="relative z-10 p-6 m-4 bg-[#0F1E36]/95 backdrop-blur-md border border-[#C5A880]/30 rounded-2xl shadow-xl text-xs space-y-2">
                  <div className="flex items-center justify-between border-b border-[#C5A880]/20 pb-2">
                    <span className="font-serif font-bold text-[#F8F6F0]">Akses & Fasilitas Kantor</span>
                    <BadgeCheck size={14} className="text-[#C5A880]" />
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-[#F8F6F0]/80">
                    <div>&bull; Valet & Parkir Privat Luas</div>
                    <div>&bull; Ruang Konsultasi Kedap Suara</div>
                    <div>&bull; Akses Cepat Tol Kunciran-Serpong</div>
                    <div>&bull; Protokol Privasi Terjaga</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. PROTOKOL KERAHASIAAN DOKUMEN & ETIKA ADVOKAT */}
      <section className="py-20 bg-[#F8F6F0] border-t border-[#0F1E36]/10">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#0F1E36] font-bold tracking-widest uppercase text-xs px-3.5 py-1.5 bg-[#C5A880]/20 border border-[#C5A880]/40 rounded-full inline-block">
              Standar Integritas Penanganan Perkara
            </span>
            <h3 className="font-serif text-3xl font-bold text-[#0F1E36] mt-3">
              Protokol Kerahasiaan Klien (*Attorney-Client Privilege*)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-[#0F1E36]/10 shadow-sm space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#0F1E36] text-[#C5A880] flex items-center justify-center">
                <Lock size={20} />
              </div>
              <h4 className="font-serif font-bold text-base text-[#0F1E36]">Hak Tolak & Sumpah Jabatan</h4>
              <p className="text-xs text-[#0F1E36]/75 leading-relaxed font-normal">
                Berdasarkan Pasal 19 UU No. 18 Tahun 2003, advokat wajib merahasiakan segala sesuatu yang diketahui atau diperoleh dari klien karena hubungan profesinya.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#0F1E36]/10 shadow-sm space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#0F1E36] text-[#C5A880] flex items-center justify-center">
                <Compass size={20} />
              </div>
              <h4 className="font-serif font-bold text-base text-[#0F1E36]">Uji Benturan Kepentingan</h4>
              <p className="text-xs text-[#0F1E36]/75 leading-relaxed font-normal">
                Sebelum perjanjian jasa hukum ditandatangani, kami melakukan audit independen guna memastikan tidak ada pertentangan kepentingan dengan klien lain.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#0F1E36]/10 shadow-sm space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#0F1E36] text-[#C5A880] flex items-center justify-center">
                <FileText size={20} />
              </div>
              <h4 className="font-serif font-bold text-base text-[#0F1E36]">Transparansi Biaya & Retainer</h4>
              <p className="text-xs text-[#0F1E36]/75 leading-relaxed font-normal">
                Seluruh skema honorarium, operasional perkara, dan success fee disepakati secara tertulis melalui *Letter of Engagement* tanpa biaya tersembunyi.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}