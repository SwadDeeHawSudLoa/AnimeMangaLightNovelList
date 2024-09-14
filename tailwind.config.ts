import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        bounceIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
  
          '50%': { transform: 'scale(1.4)', opacity: '1' },
         
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        bounceIn: 'bounceIn 10s ease-out infinite',
      },
    
    },
  },
  plugins: [],
};
export default config;
