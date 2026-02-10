import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import heroImage from '../../assets/organized.jpg';

const Home = () => {
    const [email, setEmail] = useState('');

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

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log('Subscribe:', email);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="px-4 md:px-8 py-6 bg-[#1a1a2e] border-b border-gray-800">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                            <span className="text-[#1a1a2e] font-bold text-lg">S</span>
                        </div>
                        <span className="text-xl font-display font-bold text-white">
                            <span className="text-brand-purple">Synq</span><span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-purple ml-0.5 mb-1"></span>
                        </span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8 text-sm text-gray-300">
                        <a href="#" className="hover:text-white transition-colors">Home</a>
                        <a href="#" className="hover:text-white transition-colors">Jobs</a>
                        <a href="#" className="hover:text-white transition-colors">Companies</a>
                        <a href="#" className="hover:text-white transition-colors">Community</a>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Link to="/login">
                            <Button variant="ghost" className="!text-white hover:!bg-white/10 !border-white/20">
                                Login
                            </Button>
                        </Link>
                        <Link to="/register">
                            <Button className="!bg-white !text-[#1a1a2e] hover:!bg-gray-100 !shadow-lg">
                                Apply Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="bg-[#1a1a2e] relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[600px]">
                        {/* Left Content */}
                        <div className="px-4 md:px-8 py-12 lg:py-20">
                            <div className="mb-6">
                                <span className="text-gray-400 text-sm uppercase tracking-wider">Welcome to</span>
                                <h1 className="text-white font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mt-2">
                                    Unlock Your Next
                                    <br />
                                    <span className="relative inline-block mt-2">
                                        Career Move
                                        <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 10C50 2 100 2 150 6C200 10 250 8 298 6" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                </h1>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
                                Explore thousands of opportunities tailored to your skills and aspirations. Connect with top employers and take the next step in your professional journey.
                            </p>

                            {/* Email Subscribe Form */}
                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 mb-8 max-w-lg">
                                <div className="relative flex-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your email address"
                                        className="w-full bg-[#3a3a4f] border-0 rounded-lg py-3.5 pl-12 pr-4 text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-brand-purple/30 transition-all"
                                    />
                                </div>
                                <Button type="submit" className="!bg-brand-purple hover:!bg-brand-purple/90 !text-white !px-8 !py-3.5 !rounded-lg whitespace-nowrap !shadow-none">
                                    Subscribe
                                </Button>
                            </form>

                            {/* User Avatars & Rating */}
                            <div className="flex items-center space-x-4">
                                <div className="flex -space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-[#1a1a2e]"></div>
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-[#1a1a2e]"></div>
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-400 border-2 border-[#1a1a2e]"></div>
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 border-2 border-[#1a1a2e]"></div>
                                </div>
                                <div className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                        </svg>
                                    ))}
                                    <span className="text-gray-400 text-xs ml-2 font-medium">4.9/5</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative h-full min-h-[500px] lg:min-h-[650px]">
                            <img
                                src={heroImage}
                                alt="Professional workspace"
                                className="w-full h-full object-cover"
                            />
                            {/* Floating Decorative Elements */}
                            <div className="absolute top-16 right-12 w-16 h-16 opacity-20">
                                <svg viewBox="0 0 100 100" className="text-white">
                                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
                                    <path d="M50 20 L50 80 M20 50 L80 50" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                            <div className="absolute top-32 left-8 w-12 h-12 opacity-20">
                                <svg viewBox="0 0 100 100" className="text-white">
                                    <path d="M50 10 L90 90 L10 90 Z" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </div>
                            <div className="absolute bottom-24 right-20 w-10 h-10 opacity-20">
                                <svg viewBox="0 0 100 100" className="text-white">
                                    <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="px-4 md:px-8 py-16 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 text-center mb-4">
                        Why Choose <span className="text-brand-purple font-display">Synq<span className="inline-block w-2 h-2 rounded-full bg-brand-purple ml-0.5 mb-1"></span></span>
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
            <footer className="px-4 md:px-8 py-8 border-t border-gray-200 bg-[#1a1a2e]">
                <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
                    <p>&copy; 2024 <span className="font-display font-semibold text-brand-purple">Synq<span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-purple ml-0.5"></span></span> All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
