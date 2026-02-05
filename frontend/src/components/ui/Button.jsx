import React from 'react';

const Button = ({ children, onClick, type = 'button', variant = 'primary', className = '' }) => {
    const baseStyles = "relative px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark flex items-center justify-center";

    const variants = {
        primary: "bg-gradient-to-r from-brand-purple to-brand-pink text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)]",
        secondary: "bg-glass-bg border border-glass-border text-gray-200 hover:bg-white/10 hover:border-white/20 backdrop-blur-md",
        ghost: "bg-transparent text-gray-400 hover:text-white",
        social: "bg-brand-dark border border-gray-700 hover:border-gray-500 text-white w-12 h-12 !px-0 !py-0 !rounded-full",
        black: "bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-xl"
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
