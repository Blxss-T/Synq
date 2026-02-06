import React, { useState, useEffect } from 'react';

const ShuffleCard = ({ children, interval = 4000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const count = React.Children.count(children);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % count);
        }, interval);
        return () => clearInterval(timer);
    }, [count, interval]);

    const getStyles = (index) => {
        // Calculate position relative to key index
        // We want 3 positions: Active, Next, and "Waiting" (or just dynamic stack)
        // Let's keep it simple: Active is front. Next is slightly behind. Others hidden or stacked.

        let offset = (index - currentIndex + count) % count;

        if (offset === 0) {
            // Front Card
            return 'z-20 opacity-100 scale-100 translate-y-0 translate-x-0 rotate-0 pointer-events-auto';
        } else if (offset === 1) {
            // Second Card (Behind)
            return 'z-10 opacity-60 scale-95 translate-y-4 translate-x-4 rotate-3 pointer-events-none blur-[1px]';
        } else if (offset === count - 1) {
            // Last Card (About to enter from back/hidden) - or just simulating stack depth
            return 'z-0 opacity-0 scale-90 translate-y-8 translate-x-8 rotate-6 pointer-events-none';
        } else {
            // Hidden
            return 'z-0 opacity-0 scale-90 translate-y-8 translate-x-8 pointer-events-none';
        }
    };

    return (
        <div className="relative w-full h-full flex items-center justify-center perspective-1000">
            {React.Children.map(children, (child, index) => (
                <div
                    className={`absolute w-full h-full transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${getStyles(index)}`}
                >
                    {child}
                </div>
            ))}
        </div>
    );
};

export default ShuffleCard;
