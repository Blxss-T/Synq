import React from 'react';
import Card from '../ui/Card';

const Sidebar = ({ chats = [], activeChat, onSelectChat }) => {
    return (
        <Card className="w-80 h-full !rounded-none !border-l-0 !border-y-0 !border-r-glass-border flex flex-col bg-brand-dark/50 p-4">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-4">Messages</h2>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search chats..."
                        className="w-full bg-glass-bg border border-glass-border rounded-lg py-2 px-4 text-sm text-gray-300 focus:outline-none focus:border-brand-purple transition-all"
                    />
                </div>
            </div>

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
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-purple to-brand-pink flex items-center justify-center font-bold text-white shadow-lg">
                                {chat.name[0]}
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-200">{chat.name}</h3>
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
