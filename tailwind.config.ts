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
        bouncesIn: {
        '0%': { transform: 'translateY(100vh) scale(0.5)', opacity: '0' },
        '60%': { transform: 'translateY(-30px) scale(1.1)', opacity: '1' },
        '80%': { transform: 'translateY(10px) scale(1)' },
        '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
      },
        bounceIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
  
          '50%': { transform: 'scale(1.4)', opacity: '1' },
         
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        bounceIn: 'bounceIn 10s ease-out infinite',
        bouncesIn: 'bounceIn 10s ease-out infinite',
      },
    
    },
  },
  plugins: [],
};
export default config;
