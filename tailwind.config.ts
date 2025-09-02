import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			heading: [
  				'var(--font-cinzel)',
  				'serif'
  			],
  			sans: [
  				'var(--font-inter)',
  				'sans-serif'
  			],
  			mono: [
  				'var(--font-plex-mono)',
  				'monospace'
  			]
  		},
  		colors: {
  			clay: '#C27B58',
  			terracotta: '#9B5F43',
  			sand: '#E5D5C6',
  			soil: '#3B2A25',
  			olive: '#6E8B3D',
  			gold: '#C9A464',
  			amethyst: '#7A6DAF',
  			divider: '#E6E0DA',
  			badge: '#F5EFE8'
  		},
  		borderRadius: {
  			lg: '12px',
  			xl: '16px',
  			'2xl': '20px'
  		},
  		boxShadow: {
  			card: '0 4px 12px rgba(0,0,0,0.08)',
  			button: '0 2px 6px rgba(0,0,0,0.12)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
