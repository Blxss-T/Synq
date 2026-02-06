import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../ui/Input';
import Button from '../ui/Button';
import api from '../../services/api';
import ShuffleCard from '../ui/ShuffleCard';
import illustrationImg from '../../assets/illustration.jpg';

// Icons
const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

const AppleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
        <path d="M17.05 20.28c-.98.95-2.05.88-3.08.39-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74s2.57-.99 3.87-.82c.46.03 1.93.18 3.16 1.9-.11.08-1.89 1.15-1.92 3.43-.04 2.65 2.27 3.56 2.37 3.6-.02.1-.36 1.83-1.56 3.12zM12.03 7.25c-.25-2.19 1.62-4.04 3.5-4.25.27 2.56-2.67 4.54-3.5 4.25z" />
    </svg>
);

const FacebookIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.88c0-2.474 1.283-4.414 4.29-4.414 1.113.003 2.152.095 2.529.145v2.953l-1.57.001c-1.222 0-1.583.773-1.583 1.868v1.327h3.354l-.604 3.667h-2.75V23.69h3.59" />
    </svg>
);

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const { data } = await api.post('/auth/login', formData);
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            navigate('/chat');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-white overflow-hidden font-sans">
            {/* LEFT SIDE - FORM */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 relative z-10 bg-white">
                <div className="w-full max-w-md">
                    {/* Header */}
                    <div className="mb-10">
                        <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">Welcome back!</h1>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            Simplify your workflow and boost your productivity with Synq. Get started for free.
                        </p>
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-xl mb-6 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <Input
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            variant="light"
                        />
                        <div className="relative">
                            <Input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                variant="light"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                            >
                                {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        <div className="flex justify-end">
                            <Link to="/forgot-password" className="text-xs font-semibold text-black hover:text-gray-600 transition-colors">
                                Forgot Password?
                            </Link>
                        </div>

                        <Button type="submit" variant="black" className="w-full !py-4 text-base" disabled={loading}>
                            {loading ? 'Logging in...' : 'Login'}
                        </Button>
                    </form>

                    <div className="my-8 flex items-center justify-between">
                        <div className="h-px bg-gray-200 w-full"></div>
                        <span className="px-4 text-gray-500 text-xs whitespace-nowrap">or continue with</span>
                        <div className="h-px bg-gray-200 w-full"></div>
                    </div>

                    <div className="flex justify-center space-x-6">
                        <Button variant="social" className="!bg-black !border-black hover:!bg-gray-800"><GoogleIcon /></Button>
                        <Button variant="social" className="!bg-black !border-black hover:!bg-gray-800"><AppleIcon /></Button>
                        <Button variant="social" className="!bg-black !border-black hover:!bg-gray-800"><FacebookIcon /></Button>
                    </div>

                    <p className="text-center mt-8 text-sm text-gray-500">
                        Not a member?{' '}
                        <Link to="/register" className="text-gray-900 font-bold hover:underline">
                            Register now
                        </Link>
                    </p>
                </div>
            </div>

            {/* RIGHT SIDE - HERO */}
            <div className="hidden lg:flex w-1/2 relative bg-gradient-to-br from-brand-dark to-[#0f172a] items-center justify-center p-12 overflow-hidden">
                <div className="relative w-full max-w-lg aspect-square">
                    <ShuffleCard interval={5000}>
                        {/* Slide 1: Main Illustration (Asset) */}
                        <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl relative border border-white/10 group">
                            <img
                                src={illustrationImg}
                                alt="Modern Workspace"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-white text-2xl font-bold mb-2">Focus on what matters</h3>
                                <p className="text-gray-300 text-sm">Automate the busywork and unleash your creativity.</p>
                            </div>
                        </div>

                        {/* Slide 2: CSS 3D Glass Composition */}
                        <div className="w-full h-full bg-[#1a1a2e] rounded-3xl border border-white/5 relative overflow-hidden flex items-center justify-center">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl animate-pulse"></div>

                            {/* Glass Card 1 */}
                            <div className="absolute top-1/4 left-1/4 w-48 h-64 bg-glass-bg border border-glass-border backdrop-blur-xl rounded-2xl p-6 transform -rotate-12 shadow-2xl">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-purple to-brand-blue mb-4"></div>
                                <div className="h-4 bg-white/10 rounded w-3/4 mb-2"></div>
                                <div className="h-4 bg-white/5 rounded w-1/2"></div>
                            </div>

                            {/* Glass Card 2 */}
                            <div className="absolute bottom-1/4 right-1/4 w-56 h-40 bg-glass-bg border border-glass-border backdrop-blur-xl rounded-2xl p-6 transform rotate-6 shadow-2xl box-border">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-brand-pink"></div>
                                    <div className="h-3 bg-white/10 rounded w-24"></div>
                                </div>
                                <div className="h-2 bg-brand-purple/50 rounded-full w-full">
                                    <div className="h-full bg-brand-purple rounded-full w-2/3"></div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 3: Task Mockup */}
                        <div className="w-full h-full bg-[#F3F8F2] rounded-3xl border border-green-100 relative overflow-hidden flex flex-col items-center justify-center p-8">
                            <div className="relative w-full h-80 flex items-center justify-center">
                                {/* "Canva Design" Card Big */}
                                <div className="bg-white p-6 rounded-3xl border-2 border-gray-100 shadow-xl w-64 animate-float-slow">
                                    <h3 className="font-bold text-black text-lg mb-1">Project Launch</h3>
                                    <p className="text-sm text-gray-500 mb-4">12 Pending Tasks</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex -space-x-2">
                                            <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white"></div>
                                            <div className="w-8 h-8 rounded-full bg-purple-400 border-2 border-white"></div>
                                            <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] text-gray-600 font-bold">+3</div>
                                        </div>
                                        <div className="relative w-10 h-10 flex items-center justify-center text-xs font-bold text-green-600 border-2 border-green-400 rounded-full">
                                            92%
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 text-center text-black">
                                <h3 className="font-bold text-xl">Stay Organized</h3>
                                <p className="text-gray-500 text-sm mt-1">Track every update in real-time.</p>
                            </div>
                        </div>
                    </ShuffleCard>
                </div>
            </div>
        </div>
    );
};

export default Login;
