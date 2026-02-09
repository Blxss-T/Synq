import React from 'react';
import Card from '../ui/Card';

const Sidebar = ({ chats = [], activeChat, onSelectChat, onClose, currentUser }) => {
    return (
        <Card className="w-80 h-full !rounded-none md:!rounded-l-2xl !border-l-0 !border-y-0 md:!border-y !border-r-glass-border flex flex-col bg-brand-dark/50 p-4">
            {/* Header with close button for mobile */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Messages</h2>
                <button
                    onClick={onClose}
                    className="md:hidden text-gray-400 hover:text-white transition-colors p-1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* User Profile Section */}
            <div className="mb-4 p-3 bg-glass-bg border border-glass-border rounded-xl">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-purple to-brand-pink flex items-center justify-center font-bold text-white shadow-lg">
                        {currentUser?.name?.[0] || 'U'}
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white text-sm truncate">{currentUser?.name || 'User'}</h3>
                        <p className="text-xs text-gray-400 truncate">{currentUser?.email || 'user@synq.com'}</p>
                    </div>
                </div>
            </div>

            {/* Search */}
            <div className="mb-4">
                <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search chats..."
                        className="w-full bg-glass-bg border border-glass-border rounded-lg py-2 pl-10 pr-4 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                    />
                </div>
            </div>

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                {chats.map((chat) => (
                    <div
                        key={chat.id}
                        onClick={() => onSelectChat(chat)}
                        className={`p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-white/5 ${activeChat?.id === chat.id
                                ? 'bg-gradient-to-r from-brand-purple/20 to-transparent border-l-4 border-brand-purple'
                                : ''
                            }`}
                    >
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-purple to-brand-pink flex items-center justify-center font-bold text-white shadow-lg flex-shrink-0">
                                {chat.name[0]}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-gray-200 text-sm truncate">{chat.name}</h3>
                                <p className="text-xs text-gray-500 truncate">{chat.lastMessage}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default Sidebar;
