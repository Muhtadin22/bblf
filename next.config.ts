import type { NextConfig } from 'next';

// 1. Content Security Policy (CSP) untuk mencegah serangan XSS & Injeksi Data
const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://images.unsplash.com https://*.google.com https://*.googleapis.com;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self' https://api.whatsapp.com;
    frame-src 'self' https://maps.google.com https://www.google.com;
    connect-src 'self';
    upgrade-insecure-requests;
`;

const nextConfig: NextConfig = {
  // Sembunyikan identitas mesin Next.js
  poweredByHeader: false,

  // Izinkan foto eksternal Unsplash
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  async headers() {
    return [
      {
        // Terapkan ke seluruh rute halaman
        source: '/(.*)',
        headers: [
          // 1. Content Security Policy (Wajib untuk Grade A+)
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, '').trim(),
          },
          // 2. Anti-Clickjacking
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // 3. Anti-MIME Sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // 4. Referrer Policy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // 5. Matikan sensor perangkat yang tidak digunakan
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
          // 6. Enkripsi HTTPS Wajib (HSTS)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          // 7. Isolasi Browser (Upcoming Security Standard)
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;