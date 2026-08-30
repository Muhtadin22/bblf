import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

// FIX: Menggunakan relative path '../' sebagai ganti '@/'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Fonts setup
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Bhadrika Byakta Lawfirm | Keadilan & Integritas',
  description: 'Firma hukum terkemuka di Jakarta yang berdedikasi memberikan solusi hukum profesional dan terpercaya.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-slate-50 text-slate-800`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}