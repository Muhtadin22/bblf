'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  Sparkles,
  MessageSquare,
  Calendar
} from 'lucide-react';

const consultationTopics = [
  'Hukum Perusahaan & Komersial',
  'Litigasi Pidana',
  'Sengketa Perdata & Arbitrase',
  'Hukum Keluarga & Waris',
  'Kepailitan & PKPU',
  'Lainnya'
];

const timeSlots = ['09:00 - 11:00 WIB', '13:00 - 15:00 WIB', '15:30 - 17:30 WIB'];

export default function ContactPage() {
  const [selectedTopic, setSelectedTopic] = useState('Hukum Perusahaan & Komersial');
  const [selectedSlot, setSelectedSlot] = useState(timeSlots[0]);
  const [preferredDate, setPreferredDate] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format pesan WhatsApp otomatis ke nomor 085697259015
    const waNumber = '6285697259015';
    const messageText = `Halo Admin Bhadrika Byakta Lawfirm,%0A%0ASaya ingin menjadwalkan konsultasi hukum dengan detail berikut:%0A%0A* *Nama Lengkap*: ${formData.name}%0A* *Email*: ${formData.email}%0A* *No. Telepon/WA*: ${formData.phone}%0A* *Topik Hukum*: ${selectedTopic}%0A* *Preferensi Tanggal*: ${preferredDate || 'Segera'}%0A* *Slot Waktu*: ${selectedSlot}%0A* *Pokok Perkara*: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${waNumber}?text=${messageText}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Membuka tab WhatsApp otomatis ke nomor admin
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  return (
    <div className="pt-28 pb-24 bg-slate-50 selection:bg-red-700 selection:text-white">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-red-700 font-bold tracking-widest uppercase text-xs px-3 py-1 bg-red-50 rounded-md inline-flex items-center gap-1.5">
            <Sparkles size={14} /> Pusat Layanan Klien & Jadwal Pertemuan
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-[#0a1128] font-bold mt-3 mb-4">
            Hubungi Kantor Kami
          </h1>
          <p className="text-slate-600 text-base font-light leading-relaxed">
            Jadwalkan konsultasi privat langsung dengan partner hukum kami atau sampaikan permasalahan Anda agar terhubung langsung via WhatsApp Admin.
          </p>
        </motion.div>

        {/* STATIC INFO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 bg-red-50 text-red-700 rounded-2xl flex items-center justify-center shrink-0">
              <MapPin size={22} />
            </div>
            <div>
              <h3 className="font-bold text-[#0a1128] text-sm mb-1">Kantor Pusat</h3>
              <p className="text-slate-600 text-xs leading-relaxed font-light">
                Ruko Silktown Avenue Blok.RK/5A-05, East Pondok Jagung, Serpong Utara, South Tangerang City, Banten 15326
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 bg-red-50 text-red-700 rounded-2xl flex items-center justify-center shrink-0">
              <Phone size={22} />
            </div>
            <div>
              <h3 className="font-bold text-[#0a1128] text-sm mb-1">WhatsApp Admin</h3>
              <p className="text-slate-600 text-xs leading-relaxed font-light">
                +62 856-9725-9015<br />
                
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 bg-red-50 text-red-700 rounded-2xl flex items-center justify-center shrink-0">
              <Mail size={22} />
            </div>
            <div>
              <h3 className="font-bold text-[#0a1128] text-sm mb-1">Email Resmi</h3>
              <p className="text-slate-600 text-xs leading-relaxed font-light">
                contact@bhadrikabyakta.law<br />
                partner@bhadrikabyakta.law
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 bg-red-50 text-red-700 rounded-2xl flex items-center justify-center shrink-0">
              <Clock size={22} />
            </div>
            <div>
              <h3 className="font-bold text-[#0a1128] text-sm mb-1">Jam Operasional</h3>
              <p className="text-slate-600 text-xs leading-relaxed font-light">
                Senin - Jumat: 09:00 - 18:00 WIB<br />
                WhatsApp Admin: Siaga 24/7
              </p>
            </div>
          </div>
        </div>

        {/* FORM & MAP SECTION */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-200/80 mb-20">
          
          {/* Interactive Form */}
          <div className="p-8 md:p-14 lg:w-3/5">
            <h3 className="font-serif text-2xl md:text-3xl text-[#0a1128] font-bold mb-2">Formulir Penjadwalan & WhatsApp</h3>
            <p className="text-slate-500 text-xs mb-8">Isi data di bawah ini untuk langsung mengirimkan detail konsultasi ke WhatsApp Admin kami.</p>
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center py-16"
                >
                  <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-emerald-900 mb-2">Dialihkan ke WhatsApp Admin!</h4>
                  <p className="text-emerald-700 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                    Browser Anda telah membuka aplikasi WhatsApp untuk mengirimkan data konsultasi ke nomor <strong className="text-emerald-900">085697259015</strong>.
                  </p>
                  <button 
                    onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', phone: '', message: '' }); }}
                    className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md"
                  >
                    Kirim Pesan Lain
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Topic Selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">1. Pilih Bidang / Topik Hukum *</label>
                    <div className="flex flex-wrap gap-2">
                      {consultationTopics.map((topic) => {
                        const isSelected = selectedTopic === topic;
                        return (
                          <button
                            key={topic}
                            type="button"
                            onClick={() => setSelectedTopic(topic)}
                            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                              isSelected 
                                ? 'bg-[#0a1128] text-white shadow-md scale-105' 
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                          >
                            {topic}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Date & Time Slot Picker */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">2. Preferensi Tanggal *</label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                          <Calendar size={16} />
                        </span>
                        <input 
                          type="date" 
                          required
                          value={preferredDate}
                          onChange={(e) => setPreferredDate(e.target.value)}
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-red-700 bg-slate-50 text-sm transition-colors text-slate-700" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">3. Pilih Slot Waktu *</label>
                      <select 
                        value={selectedSlot}
                        onChange={(e) => setSelectedSlot(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-red-700 bg-slate-50 text-sm transition-colors text-slate-700"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Personal Inputs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Nama Lengkap *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-red-700 bg-slate-50 text-sm transition-colors" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email Profesional *</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-red-700 bg-slate-50 text-sm transition-colors" 
                        placeholder="john@example.com" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Nomor Telepon / WhatsApp *</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-red-700 bg-slate-50 text-sm transition-colors" 
                      placeholder="+62 812 3456 7890" 
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Rincian Pokok Perkara *</label>
                    <textarea 
                      rows={4} 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-red-700 bg-slate-50 text-sm resize-none transition-colors" 
                      placeholder="Ceritakan kronologi atau pokok permasalahan hukum yang Anda hadapi..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-emerald-600/20 text-sm flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Menyiapkan Pesan WhatsApp...</span>
                    ) : (
                      <>
                        <MessageSquare size={18} />
                        <span>Kirim Konsultasi ke WhatsApp Admin</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Map & Emergency Fast-Track */}
          <div className="lg:w-2/5 flex flex-col bg-[#0a1128] text-white">
            <div className="p-10 border-b border-white/10">
              <span className="text-red-400 font-bold uppercase tracking-widest text-xs">Akses Cepat Darurat</span>
              <h4 className="font-serif text-2xl font-bold mt-1 mb-2">Butuh Respon Hukum Mendesak?</h4>
              <p className="text-slate-300 text-xs font-light leading-relaxed mb-6">
                Hubungi langsung admin via WhatsApp di nomor <strong className="text-white">085697259015</strong> untuk mendapatkan respons instan 24/7.
              </p>
              <a 
                href="https://wa.me/6285697259015" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
              >
                <MessageSquare size={16} /> Chat Langsung ke WhatsApp
              </a>
            </div>

            {/* Map Container */}
            <div className="relative flex-1 min-h-[350px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.2407519124!2d106.75871261353134!3d-6.2297464627918075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
                className="absolute inset-0 w-full h-full border-0 filter grayscale-[30%] contrast-125" 
                allowFullScreen={false} 
                loading="lazy" 
                title="Peta Lokasi Kantor Pusat Bhadrika Byakta Lawfirm"
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}