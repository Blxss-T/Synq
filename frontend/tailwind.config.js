/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-dark': '#0a0a0f',
                'brand-purple': '#8b5cf6',
                'brand-pink': '#ec4899',
                'brand-blue': '#3b82f6',
                'brand-cta': '#441151',
                'glass-bg': 'rgba(255, 255, 255, 0.05)',
                'glass-border': 'rgba(255, 255, 255, 0.1)',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition: '200% center' },
                },
                glow: {
                    '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
                    '50%': { opacity: '0.8', filter: 'brightness(1.2)' },
                }
            },
            animation: {
                'float-slow': 'float 6s ease-in-out infinite',
                'float-medium': 'float 4s ease-in-out infinite',
                'float-fast': 'float 2.5s ease-in-out infinite',
                'slide-up': 'slideUp 0.8s ease-out forwards',
                'fade-in': 'fadeIn 1s ease-out forwards',
                'blob': 'blob 7s infinite',
                'shimmer': 'shimmer 3s linear infinite',
                'glow': 'glow 2s ease-in-out infinite',
            },
            backgroundImage: {
                'underline': "url(\"data:image/svg+xml,%3Csvg width='100%25' height='8' viewBox='0 0 100 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 4 Q 25 0, 50 4 T 100 4' stroke='%238b5cf6' stroke-width='2' fill='none'/%3E%3C/svg%3E\")",
            }
        },
    },
    plugins: [],
}
