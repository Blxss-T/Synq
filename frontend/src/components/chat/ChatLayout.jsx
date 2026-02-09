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
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const currentUser = { id: 'me', name: 'You', email: 'you@synq.com' };

    const handleSendMessage = (text) => {
        const newMessage = {
            senderId: currentUser.id,
            content: text,
            timestamp: new Date().toISOString(),
        };
        setMessages([...messages, newMessage]);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login';
    };

    return (
        <div className="h-screen w-full flex bg-gradient-to-br from-brand-dark to-[#0f172a] overflow-hidden">
            <div className="relative z-10 flex w-full h-full max-w-7xl mx-auto shadow-2xl overflow-hidden md:my-4 md:rounded-2xl md:border md:border-glass-border">

                {/* Mobile Sidebar Overlay */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Sidebar - Slide in on mobile */}
                <div className={`
                    fixed md:relative inset-y-0 left-0 z-50 md:z-auto
                    transform transition-transform duration-300 ease-in-out
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                    h-full
                `}>
                    <Sidebar
                        chats={DUMMY_CHATS}
                        activeChat={activeChat}
                        onSelectChat={(chat) => {
                            setActiveChat(chat);
                            setSidebarOpen(false); // Close sidebar on mobile after selecting
                        }}
                        onClose={() => setSidebarOpen(false)}
                        currentUser={currentUser}
                    />
                </div>

                {/* Main Chat Area */}
                <div className="flex-1 flex flex-col bg-brand-dark/40 backdrop-blur-md relative">
                    {/* Chat Header */}
                    <div className="h-16 border-b border-glass-border flex items-center px-4 md:px-6 bg-glass-bg justify-between">
                        <div className="flex items-center space-x-3">
                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="md:hidden text-gray-300 hover:text-white transition-colors p-2 -ml-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>

                            <h2 className="text-lg font-bold text-white flex items-center">
                                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                                {activeChat.name}
                            </h2>
                        </div>

                        {/* User Menu */}
                        <div className="relative">
                            <button
                                onClick={() => setUserMenuOpen(!userMenuOpen)}
                                className="flex items-center space-x-2 hover:bg-white/5 rounded-lg px-3 py-2 transition-colors"
                            >
                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-purple to-brand-pink flex items-center justify-center font-bold text-white text-sm">
                                    {currentUser.name[0]}
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {userMenuOpen && (
                                <>
                                    <div
                                        className="fixed inset-0 z-30"
                                        onClick={() => setUserMenuOpen(false)}
                                    />
                                    <div className="absolute right-0 mt-2 w-56 bg-glass-bg border border-glass-border rounded-xl shadow-2xl overflow-hidden z-40 animate-fade-in">
                                        <div className="p-3 border-b border-glass-border">
                                            <p className="text-sm font-semibold text-white">{currentUser.name}</p>
                                            <p className="text-xs text-gray-400">{currentUser.email}</p>
                                        </div>
                                        <div className="py-1">
                                            <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-white/5 transition-colors flex items-center space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                                </svg>
                                                <span>Profile</span>
                                            </button>
                                            <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-white/5 transition-colors flex items-center space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>
                                                <span>Settings</span>
                                            </button>
                                        </div>
                                        <div className="border-t border-glass-border py-1">
                                            <button
                                                onClick={handleLogout}
                                                className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors flex items-center space-x-2"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                                </svg>
                                                <span>Logout</span>
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    <MessageList messages={messages} currentUser={currentUser} />

                    <MessageInput onSendMessage={handleSendMessage} />
                </div>
            </div>
        </div>
    );
};

export default ChatLayout;
