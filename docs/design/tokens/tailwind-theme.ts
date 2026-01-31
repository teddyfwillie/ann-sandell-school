/**
 * SchoolHub Design System - Tailwind CSS v4 Theme Configuration
 *
 * This file exports theme tokens formatted for Tailwind CSS v4
 * Use with the @theme directive in your CSS
 */

export const tailwindTheme = {
  // ============================================================================
  // COLORS
  // ============================================================================
  colors: {
    // Primary Navy
    'navy-50': '#E8EBF0',
    'navy-100': '#C5CDD9',
    'navy-200': '#9FAFC2',
    'navy-300': '#7991AB',
    'navy-400': '#5D7B9A',
    'navy-500': '#416589',
    'navy-600': '#385A7D',
    'navy-700': '#2D4A6A',
    'navy-800': '#233B58',
    'navy-900': '#0D1B2A',
    'navy-950': '#080F18',

    // Accent Gold
    'gold-50': '#FEF9E7',
    'gold-100': '#FCF0C3',
    'gold-200': '#FAE69B',
    'gold-300': '#F8DC73',
    'gold-400': '#F6D455',
    'gold-500': '#F4B41A',
    'gold-600': '#DCA016',
    'gold-700': '#B88312',
    'gold-800': '#94670E',
    'gold-900': '#6B4A0A',
    'gold-950': '#3D2A06',

    // Semantic
    'success': '#10B981',
    'success-light': '#D1FAE5',
    'success-dark': '#047857',
    'warning': '#F59E0B',
    'warning-light': '#FEF3C7',
    'warning-dark': '#B45309',
    'error': '#EF4444',
    'error-light': '#FEE2E2',
    'error-dark': '#B91C1C',
    'info': '#3B82F6',
    'info-light': '#DBEAFE',
    'info-dark': '#1D4ED8',
  },

  // ============================================================================
  // TYPOGRAPHY
  // ============================================================================
  fontFamily: {
    'display': '"Playfair Display", Georgia, "Times New Roman", serif',
    'body': '"Source Sans 3", "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    'mono': '"JetBrains Mono", "Fira Code", Consolas, monospace',
  },

  fontSize: {
    'xs': ['0.75rem', { lineHeight: '1.4' }],
    'sm': ['0.875rem', { lineHeight: '1.5' }],
    'base': ['1rem', { lineHeight: '1.5' }],
    'lg': ['1.125rem', { lineHeight: '1.6' }],
    'xl': ['1.25rem', { lineHeight: '1.5' }],
    '2xl': ['1.5rem', { lineHeight: '1.35' }],
    '3xl': ['1.875rem', { lineHeight: '1.3' }],
    '4xl': ['2.25rem', { lineHeight: '1.2' }],
    '5xl': ['3rem', { lineHeight: '1.15' }],
    '6xl': ['3.75rem', { lineHeight: '1.1' }],
    '7xl': ['4.5rem', { lineHeight: '1.1' }],
    '8xl': ['6rem', { lineHeight: '1' }],
  },

  // ============================================================================
  // SPACING (extends default)
  // ============================================================================
  spacing: {
    '18': '4.5rem',
    '22': '5.5rem',
    '26': '6.5rem',
    '30': '7.5rem',
    '34': '8.5rem',
    '38': '9.5rem',
    '42': '10.5rem',
    '46': '11.5rem',
    '50': '12.5rem',
    '54': '13.5rem',
    '58': '14.5rem',
    '62': '15.5rem',
    '66': '16.5rem',
    '70': '17.5rem',
    '74': '18.5rem',
    '78': '19.5rem',
    '82': '20.5rem',
    '86': '21.5rem',
    '90': '22.5rem',
    '94': '23.5rem',
    '100': '25rem',

    // Section spacing
    'section-xs': '3rem',
    'section-sm': '4rem',
    'section-md': '6rem',
    'section-lg': '8rem',
    'section-xl': '10rem',
  },

  // ============================================================================
  // BORDERS
  // ============================================================================
  borderRadius: {
    '4xl': '2rem',
    '5xl': '2.5rem',
  },

  borderWidth: {
    '3': '3px',
    '5': '5px',
  },

  // ============================================================================
  // SHADOWS
  // ============================================================================
  boxShadow: {
    'card': '0 1px 3px rgba(13, 27, 42, 0.08), 0 4px 12px rgba(13, 27, 42, 0.05)',
    'card-hover': '0 4px 12px rgba(13, 27, 42, 0.12), 0 8px 24px rgba(13, 27, 42, 0.08)',
    'button-primary': '0 4px 14px rgba(13, 27, 42, 0.25)',
    'button-gold': '0 4px 14px rgba(244, 180, 26, 0.35)',
    'glow-gold': '0 0 20px rgba(244, 180, 26, 0.3)',
    'glow-navy': '0 0 20px rgba(13, 27, 42, 0.2)',
  },

  // ============================================================================
  // TRANSITIONS
  // ============================================================================
  transitionTimingFunction: {
    'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    'elegant': 'cubic-bezier(0.23, 1, 0.32, 1)',
    'snappy': 'cubic-bezier(0.5, 0, 0.1, 1)',
  },

  transitionDuration: {
    '400': '400ms',
    '500': '500ms',
    '600': '600ms',
    '700': '700ms',
  },

  // ============================================================================
  // ANIMATIONS
  // ============================================================================
  animation: {
    'fade-in': 'fadeIn 0.3s ease-out forwards',
    'fade-in-up': 'fadeInUp 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards',
    'fade-in-down': 'fadeInDown 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards',
    'slide-in-left': 'slideInLeft 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards',
    'slide-in-right': 'slideInRight 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards',
    'scale-in': 'scaleIn 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards',
    'float': 'float 3s ease-in-out infinite',
    'shimmer': 'shimmer 2s linear infinite',
  },

  keyframes: {
    fadeIn: {
      from: { opacity: '0' },
      to: { opacity: '1' },
    },
    fadeInUp: {
      from: { opacity: '0', transform: 'translateY(20px)' },
      to: { opacity: '1', transform: 'translateY(0)' },
    },
    fadeInDown: {
      from: { opacity: '0', transform: 'translateY(-20px)' },
      to: { opacity: '1', transform: 'translateY(0)' },
    },
    slideInLeft: {
      from: { opacity: '0', transform: 'translateX(-30px)' },
      to: { opacity: '1', transform: 'translateX(0)' },
    },
    slideInRight: {
      from: { opacity: '0', transform: 'translateX(30px)' },
      to: { opacity: '1', transform: 'translateX(0)' },
    },
    scaleIn: {
      from: { opacity: '0', transform: 'scale(0.95)' },
      to: { opacity: '1', transform: 'scale(1)' },
    },
    float: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' },
    },
    shimmer: {
      '0%': { backgroundPosition: '-200% 0' },
      '100%': { backgroundPosition: '200% 0' },
    },
  },

  // ============================================================================
  // CONTAINER
  // ============================================================================
  container: {
    center: true,
    padding: {
      DEFAULT: '1rem',
      sm: '1.5rem',
      md: '2rem',
      lg: '3rem',
      xl: '4rem',
    },
  },

  // ============================================================================
  // SCREENS (Breakpoints)
  // ============================================================================
  screens: {
    'xs': '475px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  },
} as const;

export default tailwindTheme;
