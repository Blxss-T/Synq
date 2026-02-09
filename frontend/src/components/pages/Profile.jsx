import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../ui/Input';
import Button from '../ui/Button';

const Profile = () => {
    const navigate = useNavigate();
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: 'John Doe',
        email: 'john@synq.com',
        bio: 'Product designer passionate about creating beautiful experiences.'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        // Save logic here
        setEditing(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-brand-dark to-[#0f172a] p-4 md:p-8">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-pink/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
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
                    <h1 className="text-2xl md:text-3xl font-bold text-white">Profile</h1>
                    <div className="w-20"></div> {/* Spacer for centering */}
                </div>

                {/* Profile Card */}
                <div className="bg-glass-bg border border-glass-border backdrop-blur-xl rounded-3xl overflow-hidden">
                    {/* Cover & Avatar */}
                    <div className="relative h-32 md:h-48 bg-gradient-to-r from-brand-purple to-brand-pink">
                        <div className="absolute -bottom-12 md:-bottom-16 left-6 md:left-8">
                            <div className="relative">
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-brand-purple to-brand-pink flex items-center justify-center font-bold text-white text-4xl md:text-5xl border-4 border-brand-dark shadow-2xl">
                                    {formData.name[0]}
                                </div>
                                <button className="absolute bottom-0 right-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-brand-purple flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Profile Info */}
                    <div className="pt-16 md:pt-20 p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">{formData.name}</h2>
                                <p className="text-gray-400">{formData.email}</p>
                            </div>
                            <Button
                                variant={editing ? "ghost" : "primary"}
                                onClick={() => editing ? setEditing(false) : setEditing(true)}
                                className="mt-4 md:mt-0"
                            >
                                {editing ? 'Cancel' : 'Edit Profile'}
                            </Button>
                        </div>

                        {/* Form */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name</label>
                                <Input
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    variant="dark"
                                    disabled={!editing}
                                    className={!editing ? 'opacity-60 cursor-not-allowed' : ''}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                                <Input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    variant="dark"
                                    disabled={!editing}
                                    className={!editing ? 'opacity-60 cursor-not-allowed' : ''}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2">Bio</label>
                                <textarea
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    disabled={!editing}
                                    rows="3"
                                    className={`w-full rounded-2xl py-3 px-6 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-offset-0 bg-glass-bg border border-glass-border text-white placeholder-gray-500 focus:border-brand-purple focus:ring-brand-purple focus:shadow-[0_0_15px_rgba(139,92,246,0.3)] backdrop-blur-sm resize-none ${!editing ? 'opacity-60 cursor-not-allowed' : ''}`}
                                />
                            </div>

                            {editing && (
                                <div className="flex space-x-4">
                                    <Button
                                        variant="primary"
                                        onClick={handleSave}
                                        className="flex-1"
                                    >
                                        Save Changes
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        onClick={() => setEditing(false)}
                                        className="!text-white hover:!bg-white/10"
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Account Settings Link */}
                <div className="mt-6 bg-glass-bg border border-glass-border backdrop-blur-xl rounded-2xl p-6">
                    <button
                        onClick={() => navigate('/settings')}
                        className="w-full flex items-center justify-between text-white hover:text-brand-purple transition-colors"
                    >
                        <div className="flex items-center space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <span className="font-semibold">Account Settings</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
