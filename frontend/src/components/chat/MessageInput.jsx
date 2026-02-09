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

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <div className="p-3 md:p-4 bg-glass-bg border-t border-glass-border backdrop-blur-md">
            <form onSubmit={handleSubmit} className="flex space-x-2 md:space-x-4 items-end">
                {/* Emoji/Attachment Buttons (Optional for future) */}
                <div className="hidden sm:flex space-x-1">
                    <button
                        type="button"
                        className="p-2 text-gray-400 hover:text-brand-purple hover:bg-white/5 rounded-lg transition-colors"
                        title="Add emoji"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        className="p-2 text-gray-400 hover:text-brand-purple hover:bg-white/5 rounded-lg transition-colors"
                        title="Attach file"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                        </svg>
                    </button>
                </div>

                {/* Message Input */}
                <div className="flex-1 relative">
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type a message..."
                        rows="1"
                        className="w-full bg-brand-dark/50 border border-glass-border rounded-2xl py-3 px-4 md:px-6 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/50 transition-all placeholder-gray-500 resize-none max-h-32 custom-scrollbar"
                        style={{ minHeight: '44px' }}
                    />
                </div>

                {/* Send Button */}
                <Button
                    type="submit"
                    variant="primary"
                    disabled={!message.trim()}
                    className="!rounded-full !p-3 aspect-square flex items-center justify-center !shadow-[0_0_15px_rgba(139,92,246,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
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
