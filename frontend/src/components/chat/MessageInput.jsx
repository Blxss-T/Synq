import React, { useState } from 'react';
import Button from '../ui/Button';

const MessageInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <div className="p-4 bg-glass-bg border-t border-glass-border backdrop-blur-md">
            <form onSubmit={handleSubmit} className="flex space-x-4 items-center">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 bg-brand-dark/50 border border-glass-border rounded-full py-3 px-6 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/50 transition-all placeholder-gray-500"
                />
                <Button
                    type="submit"
                    variant="primary"
                    className="!rounded-full !p-3 aspect-square flex items-center justify-center !shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                    </svg>
                </Button>
            </form>
        </div>
    );
};

export default MessageInput;
