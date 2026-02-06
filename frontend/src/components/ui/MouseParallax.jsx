import React, { useRef, useState, useEffect } from 'react';

// Container that tracks mouse measurement
export const MouseParallaxContainer = ({ children, className = '' }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();

        // Calculate center of container
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate distance from center (normalized -1 to 1)
        const x = (e.clientX - centerX) / (rect.width / 2);
        const y = (e.clientY - centerY) / (rect.height / 2);

        setMousePos({ x, y });
    };

    const handleMouseLeave = () => {
        // Optional: Reset to center on leave, or keep last position
        // setMousePos({ x: 0, y: 0 }); 
    };

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { mousePos });
                }
                return child;
            })}
        </div>
    );
};

// Child item that moves based on mousePos
export const ParallaxItem = ({ children, mousePos, strength = 20, className = '' }) => {
    const x = (mousePos?.x || 0) * strength;
    const y = (mousePos?.y || 0) * strength;

    return (
        <div
            className={`absolute transition-transform duration-100 ease-out will-change-transform ${className}`}
            style={{
                transform: `translate3d(${x}px, ${y}px, 0)`
            }}
        >
            {children}
        </div>
    );
};
