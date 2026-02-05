import React from 'react';

const Card = ({ children, className = '' }) => {
    return (
        <div className={`bg-glass-bg backdrop-blur-xl border border-glass-border rounded-2xl p-8 shadow-2xl ${className}`}>
            {children}
        </div>
    );
};

export default Card;
