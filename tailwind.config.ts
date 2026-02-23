import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Flattened structure for better Tailwind compatibility
        'primary': '#6366f1',
        'secondary': '#8b5cf6',
        'accent': '#06b6d4',
        
        // Dark theme colors
        'dark-bg': '#0a0a0f',
        'dark-surface': '#111827',
        'dark-surface2': '#1f2937',
        'dark-primary': '#818cf8', // Lightened from 6366f1
        'dark-secondary': '#a78bfa', // Lightened from 8b5cf6
        'dark-accent': '#22d3ee', // Lightened from 06b6d4
        'dark-text-primary': '#f9fafb',
        'dark-text-secondary': '#9ca3af',
        'dark-border': '#1f2937',
        
        // Light theme colors
        'light-bg': '#fafafa',
        'light-surface': '#ffffff',
        'light-surface2': '#f3f4f6',
        'light-primary': '#4f46e5',
        'light-secondary': '#7c3aed',
        'light-accent': '#0891b2',
        'light-text-primary': '#111827',
        'light-text-secondary': '#6b7280',
        'light-border': '#e5e7eb',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'xl2': '1.25rem',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(99, 102, 241, 0.4), 0 0 60px rgba(99, 102, 241, 0.1)',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s infinite',
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'rotate-slow': 'rotate-slow 15s linear infinite',
        'blink': 'blink .75s step-end infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'blink': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#6366f1' },
        }
      },
    },
  },
  plugins: [],
};

export default config;
