import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        // Ini memberi tahu Tailwind untuk membaca semua class CSS di dalam folder src
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // Mendaftarkan variabel font agar bisa dipanggil lewat class font-sans / font-serif
                sans: ['var(--font-inter)'],
                serif: ['var(--font-playfair)'],
            },
        },
    },
    plugins: [],
};

export default config;