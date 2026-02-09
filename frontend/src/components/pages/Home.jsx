import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Home = () => {
    const features = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
            ),
            title: 'Lightning Fast',
            description: 'Real-time messaging with instant delivery and notifications'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
            ),
            title: 'Secure & Private',
            description: 'End-to-end encryption keeps your conversations safe'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
            ),
            title: 'Team Collaboration',
            description: 'Built for teams with channels, threads, and file sharing'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-brand-dark via-[#0f172a] to-brand-dark overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-pink/10 rounded-full blur-[100px]"></div>
            </div>

            {/* Navigation */}
            <nav className="relative z-10 px-4 md:px-8 py-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purple to-brand-pink flex items-center justify-center">
                            <span className="text-white font-bold text-xl">S</span>
                        </div>
                        <span className="text-2xl font-bold text-white">Synq</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/login">
                            <Button variant="ghost" className="!text-white hover:!bg-white/10">
                                Login
                            </Button>
                        </Link>
                        <Link to="/register">
                            <Button variant="primary">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative z-10 px-4 md:px-8 py-12 md:py-20">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
                        Communication
                        <span className="block bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
                            Reimagined
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-up">
                        Connect with your team in real-time. Synq brings together messaging, collaboration, and productivity in one beautiful platform.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up delay-100">
                        <Link to="/register">
                            <Button variant="primary" className="!px-8 !py-4 !text-lg w-full sm:w-auto">
                                Start Free Trial
                            </Button>
                        </Link>
                        <Button variant="ghost" className="!text-white hover:!bg-white/10 !px-8 !py-4 !text-lg w-full sm:w-auto">
                            Watch Demo
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="relative z-10 px-4 md:px-8 py-12 md:py-20">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                        Why Choose Synq?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-glass-bg border border-glass-border backdrop-blur-xl rounded-2xl p-6 md:p-8 hover:border-brand-purple/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] animate-fade-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-purple/20 to-brand-pink/20 flex items-center justify-center text-brand-purple mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 px-4 md:px-8 py-12 md:py-20">
                <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-brand-purple/20 to-brand-pink/20 border border-brand-purple/30 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to get started?
                    </h2>
                    <p className="text-gray-300 mb-8">
                        Join thousands of teams already using Synq to collaborate better.
                    </p>
                    <Link to="/register">
                        <Button variant="primary" className="!px-8 !py-4 !text-lg">
                            Create Free Account
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 px-4 md:px-8 py-8 border-t border-glass-border">
                <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
                    <p>&copy; 2024 Synq. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
