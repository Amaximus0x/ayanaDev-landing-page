/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
      },

      colors: {
        // Brand colors
        'brand': {
          'red': '#EB434A',

        },
        // Light theme colors
        'light': {
          'bg': {
            'primary': '#FFFFFF',
            'secondary': '#FFF2F3',
            'tertiary': '#EDFEFF'
          },
          'text': {
            'primary': '#000000',
            'secondary': '#494848',
            'tertiary': '#A3A3A3',
          },
          'border': 'rgba(0, 0, 0, 0.05)'
        },
        // Dark theme colors
        'dark': {
          'bg': {
            'primary': '#000000',
            'secondary': '#241015',
            'tertiary': '#000000'
          },
          'text': {
            'primary': '#FFFFFF',
            'secondary': '#DDDADA',
            'tertiary': '#797979'
          },
          'border': 'rgba(255, 255, 255, 0.10)'
        },
        // Your new color palette
        "GreenHover": "#1E3443",
        "ButtonHover": "#C3373C",

      },

      fontSize: {
        // Heading 1 Variants
        'h1-bold': ['77px', { lineHeight: '88px', fontWeight: '700' }],
        'h1-xl': ['77px', { lineHeight: '78px', fontWeight: '700' }],
        'h1-lg': ['68px', { lineHeight: '78px', fontWeight: '700' }],
        'h1-md': ['36px', { lineHeight: '44px', fontWeight: '700' }],
        'h1-sm': ['36px', { lineHeight: '32px', fontWeight: '700' }],
        'h1-sm-nunito': ['32px', { lineHeight: '44px', fontWeight: '700'}],
        'h1-xs': ['26px', { lineHeight: '32px', fontWeight: '700' }],
        
        // Heading 2 Variants
        'h2': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'h2-italic': ['20px', { lineHeight: '28px', fontWeight: '700', fontStyle: 'italic' }],
        'h2-italic-lg': ['24px', { lineHeight: '32px', fontWeight: '700', fontStyle: 'italic' }],
        
        // Heading 3 Variants
        'h3-nunito': ['20px', { lineHeight: '28px', fontWeight: '400' }],
        'h3-nunito-bold': ['20px', { lineHeight: '28px', fontWeight: '700' }],
        'h3-montserrat': ['20px', { lineHeight: '28px', fontWeight: '500' }],
        'h3-semibold': ['20px', { lineHeight: '24px', fontWeight: '600' }],
        'h3-semibold-lg': ['24px', { lineHeight: '28px', fontWeight: '600' }],
        
        // Body Text Variants
        'body-lg': ['18px', { lineHeight: '26px', fontWeight: '500' }],
        'body-italic': ['16px', { lineHeight: '28px', fontWeight: '400', fontStyle: 'italic' }],
        'body-medium': ['16px', { lineHeight: '22px', fontWeight: '500' }],
        'body-bold': ['16px', { lineHeight: '24px', fontWeight: '700' }],
        'body-montserrat': ['16px', { lineHeight: '28px', fontWeight: '500' }],
        
        // Small Text Variants
        'small-medium': ['14px', { lineHeight: '22px', fontWeight: '500' }],
        'small-medium-lg': ['16px', { lineHeight: '100%', fontWeight: '500' }],
        'small-bold': ['14px', { lineHeight: '22px', fontWeight: '700' }],
        'small-italic': ['14px', { lineHeight: '28px', fontWeight: '400', fontStyle: 'italic' }],
        'small': ['14px', { lineHeight: '22px', fontWeight: '400' }],
        'small-lg': ['16px', { lineHeight: '22px', fontWeight: '400' }],
        'small-xs': ['12px', { lineHeight: '20px', fontWeight: '400' }],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 