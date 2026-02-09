import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Home = () => {
    const features = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
            ),
            title: 'Lightning Fast',
            description: 'Real-time messaging with instant delivery and notifications'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
            ),
            title: 'Secure & Private',
            description: 'End-to-end encryption keeps your conversations safe'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
            ),
            title: 'Team Collaboration',
            description: 'Built for teams with channels, threads, and file sharing'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="px-4 md:px-8 py-6 border-b border-gray-200">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-xl bg-brand-cta flex items-center justify-center shadow-md">
                            <span className="text-white font-bold text-xl">S</span>
                        </div>
                        <span className="text-2xl font-display font-bold text-gray-900">
                            Synq<span className="inline-block w-2 h-2 rounded-full bg-brand-purple ml-0.5 mb-1"></span>
                        </span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Link to="/login">
                            <Button variant="ghost" className="!text-gray-700 hover:!bg-gray-100 !border-gray-300">
                                Login
                            </Button>
                        </Link>
                        <Link to="/register">
                            <Button className="!bg-brand-cta hover:!bg-[#5a1a6b] !text-white !shadow-lg hover:!shadow-xl">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="px-4 md:px-8 py-16 md:py-24">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-gray-900 mb-6 leading-tight">
                        Communication
                        <span className="block mt-2">
                            <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
                                Reimagined
                            </span>
                            <span className="inline-block w-3 h-3 md:w-4 md:h-4 rounded-full bg-brand-purple ml-1 mb-2 md:mb-4 animate-pulse"></span>
                        </span>
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Connect with your team in real-time. Synq brings together messaging, collaboration, and productivity in one beautiful platform.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link to="/register">
                            <Button className="!bg-brand-cta hover:!bg-[#5a1a6b] !text-white !px-8 !py-4 !text-base !shadow-lg hover:!shadow-xl w-full sm:w-auto">
                                Start Free Trial
                            </Button>
                        </Link>
                        <Button variant="ghost" className="!text-gray-700 hover:!bg-gray-100 !border-gray-300 !px-8 !py-4 !text-base w-full sm:w-auto">
                            Watch Demo
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="px-4 md:px-8 py-16 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 text-center mb-4">
                        Why Choose <span className="font-display">Synq<span className="inline-block w-2 h-2 rounded-full bg-brand-purple ml-0.5 mb-1"></span></span>
                    </h2>
                    <p className="text-center text-gray-600 mb-12 text-sm md:text-base max-w-2xl mx-auto">
                        Everything you need to communicate and collaborate effectively with your team.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-brand-purple/50 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-xl bg-brand-cta/10 flex items-center justify-center text-brand-cta mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 md:px-8 py-16 md:py-20">
                <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-brand-cta to-[#5a1a6b] rounded-3xl p-8 md:p-12 shadow-2xl">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                        Ready to get started?
                    </h2>
                    <p className="text-white/90 mb-8 text-sm md:text-base">
                        Join thousands of teams already using Synq to collaborate better.
                    </p>
                    <Link to="/register">
                        <Button className="!bg-white !text-brand-cta hover:!bg-gray-100 !px-8 !py-4 !text-base !shadow-lg hover:!shadow-xl font-semibold">
                            Create Free Account
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="px-4 md:px-8 py-8 border-t border-gray-200">
                <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
                    <p>&copy; 2024 <span className="font-display font-semibold">Synq<span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-purple ml-0.5"></span></span> All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
