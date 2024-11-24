import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
        
        neutral: {
          100: '#f0f0f0',
          200: '#d9d9d9',
          300: '#b3b3b3',
          400: '#808080',
          500: '#4d4d4d',
          600: '#333333',
          700: '#1a1a1a',
          800: '#000000',
        },

        others1: {
          100: '#d9f0ff',
          200: '#b3e1ff',
          300: '#80cfff',
          400: '#4db8ff',
          500: '#1a99ff',
          600: '#1786e6',
          700: '#1273cc',
          800: '#0d60b3',
          900: '#094d99',
        },
        others2: {
          100: '#fcd0d0',
          200: '#fab1b1',
          300: '#f78c8c',
          400: '#f56868',
          500: '#f24444',
          600: '#e53838',
          700: '#d72c2c',
          800: '#c62121',
          900: '#b11818',
        },
  			primary: {
  				100: '#CCFACD',
          200: '#9CF3AA',
          300: '#66DF82',
          400: '#0E9749',
          500: '#0A8049',
          600: '#086C48',
          700: '#045841',
          800: '#02483D',
          900: '#000000',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			
  			secondary: {
  				900: '#7B5701',
          800: '#936D00',
          700: '#B68B00',
          600: '#DAAA00',
          500: '#FFCD00',
          400: '#FFDC40',
          300: '#FFE668',
          200: '#FFF099',
          100: '#FFF9CC',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
