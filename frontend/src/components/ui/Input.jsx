import React from 'react';

const Input = ({ type = 'text', placeholder, value, onChange, icon, name, variant = 'dark', className = '' }) => {
    const baseStyles = "w-full rounded-full py-3 pr-6 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-offset-0";

    const variants = {
        dark: "bg-glass-bg border border-glass-border text-white placeholder-gray-500 focus:border-brand-purple focus:ring-brand-purple focus:shadow-[0_0_15px_rgba(139,92,246,0.3)] backdrop-blur-sm",
        light: "bg-transparent border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-black focus:ring-black focus:shadow-none bg-white",
        // Added 'bg-white' to light variant to ensure it covers any background behind it if needed, or stick to transparent if the parent is white. 
        // Let's use bg-white/50 or just transparent if the parent is white. The design shows white inputs on white bg? No, usually inputs satisfy a slight contrast or border.
        // Image shows: White background for form. Inputs look like they have a border and maybe white or transparent background. 
    };

    const styles = variants[variant] || variants.dark;

    return (
        <div className={`relative group ${className}`}>
            {icon && (
                <span className={`absolute left-6 top-1/2 -translate-y-1/2 transition-colors duration-300 ${variant === 'light' ? 'text-gray-400 group-focus-within:text-black' : 'text-gray-500 group-focus-within:text-brand-purple'}`}>
                    {icon}
                </span>
            )}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`${baseStyles} ${styles} ${icon ? 'pl-14' : 'px-6'} ${className}`}
            />
        </div>
    );
};

export default Input;
