import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const DUMMY_CHATS = [
    { id: 1, name: 'General', lastMessage: 'Welcome to Synq!' },
    { id: 2, name: 'Random', lastMessage: 'Anyone here?' },
    { id: 3, name: 'Project Alpha', lastMessage: 'Meeting at 3 PM' },
];

const DUMMY_MESSAGES = [
    { senderId: 2, content: 'Hey everyone!', timestamp: new Date(Date.now() - 1000000).toISOString() },
    { senderId: 1, content: 'Welcome to the chat!', timestamp: new Date(Date.now() - 500000).toISOString() },
    { senderId: 'me', content: 'Thanks! This UI looks sick.', timestamp: new Date().toISOString() },
];

const ChatLayout = () => {
    const [activeChat, setActiveChat] = useState(DUMMY_CHATS[0]);
    const [messages, setMessages] = useState(DUMMY_MESSAGES);
    const currentUser = { id: 'me' }; // Mock current user

    const handleSendMessage = (text) => {
        const newMessage = {
            senderId: currentUser.id,
            content: text,
            timestamp: new Date().toISOString(),
        };
        setMessages([...messages, newMessage]);
    };

    return (
        <div className="h-screen w-full flex bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center overflow-hidden">
            <div className="absolute inset-0 bg-brand-dark/90 backdrop-blur-sm"></div>

            <div className="relative z-10 flex w-full h-full max-w-7xl mx-auto shadow-2xl overflow-hidden md:my-4 md:rounded-2xl md:border md:border-glass-border">
                {/* Sidebar - Hidden on mobile if chat is active (simplified responsive logic) */}
                <div className="hidden md:block h-full">
                    <Sidebar
                        chats={DUMMY_CHATS}
                        activeChat={activeChat}
                        onSelectChat={setActiveChat}
                    />
                </div>

                {/* Main Chat Area */}
                <div className="flex-1 flex flex-col bg-brand-dark/40 backdrop-blur-md relative">
                    {/* Chat Header */}
                    <div className="h-16 border-b border-glass-border flex items-center px-6 bg-glass-bg justify-between">
                        <h2 className="text-lg font-bold text-white flex items-center">
                            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                            {activeChat.name}
                        </h2>
                        <button className="md:hidden text-gray-300">
                            {/* Mobile menu toggle placeholder */}
                            Menu
                        </button>
                    </div>

                    <MessageList messages={messages} currentUser={currentUser} />

                    <MessageInput onSendMessage={handleSendMessage} />
                </div>
            </div>
        </div>
    );
};

export default ChatLayout;
