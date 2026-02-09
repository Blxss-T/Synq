import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const Settings = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('account');
    const [notifications, setNotifications] = useState({
        messages: true,
        mentions: true,
        updates: false
    });

    const tabs = [
        {
            id: 'account', name: 'Account', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            )
        },
        {
            id: 'notifications', name: 'Notifications', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
            )
        },
        {
            id: 'privacy', name: 'Privacy', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
            )
        }
    ];

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-brand-dark to-[#0f172a] p-4 md:p-8">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-pink/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={() => navigate('/chat')}
                        className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        <span>Back to Chat</span>
                    </button>
                    <h1 className="text-2xl md:text-3xl font-bold text-white">Settings</h1>
                    <div className="w-20"></div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    {/* Tabs - Sidebar on desktop, horizontal on mobile */}
                    <div className="md:w-64 flex-shrink-0">
                        <div className="bg-glass-bg border border-glass-border backdrop-blur-xl rounded-2xl p-2 flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all whitespace-nowrap ${activeTab === tab.id
                                            ? 'bg-gradient-to-r from-brand-purple/20 to-transparent border-l-4 border-brand-purple text-white'
                                            : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    {tab.icon}
                                    <span className="font-semibold">{tab.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-glass-bg border border-glass-border backdrop-blur-xl rounded-2xl p-6 md:p-8">
                        {activeTab === 'account' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-2">Account Settings</h2>
                                    <p className="text-gray-400">Manage your account preferences</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="p-4 bg-brand-dark/30 rounded-xl border border-glass-border">
                                        <h3 className="font-semibold text-white mb-1">Change Password</h3>
                                        <p className="text-sm text-gray-400 mb-3">Update your password to keep your account secure</p>
                                        <Button variant="ghost" className="!text-brand-purple hover:!bg-brand-purple/10">
                                            Update Password
                                        </Button>
                                    </div>

                                    <div className="p-4 bg-brand-dark/30 rounded-xl border border-glass-border">
                                        <h3 className="font-semibold text-white mb-1">Two-Factor Authentication</h3>
                                        <p className="text-sm text-gray-400 mb-3">Add an extra layer of security to your account</p>
                                        <Button variant="ghost" className="!text-brand-purple hover:!bg-brand-purple/10">
                                            Enable 2FA
                                        </Button>
                                    </div>

                                    <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/30">
                                        <h3 className="font-semibold text-red-400 mb-1">Delete Account</h3>
                                        <p className="text-sm text-gray-400 mb-3">Permanently delete your account and all data</p>
                                        <Button variant="ghost" className="!text-red-400 hover:!bg-red-500/10">
                                            Delete Account
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'notifications' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-2">Notification Preferences</h2>
                                    <p className="text-gray-400">Choose what notifications you want to receive</p>
                                </div>

                                <div className="space-y-4">
                                    {Object.entries(notifications).map(([key, value]) => (
                                        <div key={key} className="flex items-center justify-between p-4 bg-brand-dark/30 rounded-xl border border-glass-border">
                                            <div>
                                                <h3 className="font-semibold text-white capitalize">{key}</h3>
                                                <p className="text-sm text-gray-400">Receive notifications for {key}</p>
                                            </div>
                                            <button
                                                onClick={() => setNotifications({ ...notifications, [key]: !value })}
                                                className={`relative w-14 h-7 rounded-full transition-colors ${value ? 'bg-brand-purple' : 'bg-gray-600'
                                                    }`}
                                            >
                                                <span
                                                    className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${value ? 'translate-x-7' : 'translate-x-0'
                                                        }`}
                                                />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'privacy' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-2">Privacy & Security</h2>
                                    <p className="text-gray-400">Control your privacy settings</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="p-4 bg-brand-dark/30 rounded-xl border border-glass-border">
                                        <h3 className="font-semibold text-white mb-1">Profile Visibility</h3>
                                        <p className="text-sm text-gray-400">Who can see your profile</p>
                                        <select className="mt-3 w-full bg-glass-bg border border-glass-border rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-purple">
                                            <option>Everyone</option>
                                            <option>Team Members Only</option>
                                            <option>Private</option>
                                        </select>
                                    </div>

                                    <div className="p-4 bg-brand-dark/30 rounded-xl border border-glass-border">
                                        <h3 className="font-semibold text-white mb-1">Data & Privacy</h3>
                                        <p className="text-sm text-gray-400 mb-3">Download or manage your data</p>
                                        <Button variant="ghost" className="!text-brand-purple hover:!bg-brand-purple/10">
                                            Download My Data
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Logout Button */}
                        <div className="mt-8 pt-6 border-t border-glass-border">
                            <Button
                                variant="ghost"
                                onClick={handleLogout}
                                className="!text-red-400 hover:!bg-red-500/10 w-full md:w-auto"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                </svg>
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
