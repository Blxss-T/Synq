import React, { useEffect, useRef } from 'react';

const MessageList = ({ messages = [], currentUser }) => {
    const scrollRef = useRef();

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
            {messages.map((msg, index) => {
                const isMe = msg.senderId === currentUser.id;
                return (
                    <div
                        key={index}
                        className={`flex ${isMe ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
                    >
                        <div
                            className={`max-w-[70%] rounded-2xl p-4 shadow-lg backdrop-blur-md ${isMe
                                    ? 'bg-gradient-to-br from-brand-purple to-brand-blue text-white rounded-tr-none'
                                    : 'bg-glass-bg border border-glass-border text-gray-200 rounded-tl-none'
                                }`}
                        >
                            <p className="text-sm">{msg.content}</p>
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
