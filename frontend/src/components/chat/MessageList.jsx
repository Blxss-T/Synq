import React, { useEffect, useRef } from 'react';

const MessageList = ({ messages = [], currentUser }) => {
    const scrollRef = useRef();

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    if (messages.length === 0) {
        return (
            <div className="flex-1 flex items-center justify-center p-6">
                <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-glass-bg border border-glass-border flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-300 mb-2">No messages yet</h3>
                    <p className="text-sm text-gray-500">Start the conversation!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 custom-scrollbar">
            {messages.map((msg, index) => {
                const isMe = msg.senderId === currentUser.id;
                return (
                    <div
                        key={index}
                        className={`flex ${isMe ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
                    >
                        <div
                            className={`max-w-[85%] sm:max-w-[75%] md:max-w-[70%] rounded-2xl p-3 md:p-4 shadow-lg backdrop-blur-md ${isMe
                                    ? 'bg-gradient-to-br from-brand-purple to-brand-blue text-white rounded-tr-none'
                                    : 'bg-glass-bg border border-glass-border text-gray-200 rounded-tl-none'
                                }`}
                        >
                            <p className="text-sm break-words">{msg.content}</p>
                            <span className="text-[10px] opacity-70 mt-1 block text-right">
                                {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        </div>
                    </div>
                );
            })}
            <div ref={scrollRef} />
        </div>
    );
};

export default MessageList;
