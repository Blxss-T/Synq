import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../ui/Input';
import Button from '../ui/Button';
import api from '../../services/api';

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

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setLoading(true);
        setError('');

        try {
            await api.post('/auth/register', { email: formData.email, password: formData.password });
            navigate('/login'); // Redirect to login after success
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-white overflow-hidden font-sans">
            {/* LEFT SIDE - FORM */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 relative z-10 bg-white">
                <div className="w-full max-w-md animate-slide-up">
                    <div className="mb-10">
                        <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">Create Account 🚀</h1>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            Join Synq today and experience the future of chat. It's free and easy.
                        </p>
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-xl mb-6 text-sm text-center animate-fade-in">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-5">
                            <Input
                                name="email"
                                type="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                variant="light"
                                className="delay-100 animate-slide-up"
                            />
                            <Input
                                name="password"
                                type="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                variant="light"
                                className="delay-200 animate-slide-up"
                            />
                            <Input
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                variant="light"
                                className="delay-300 animate-slide-up"
                            />
                        </div>

                        <Button type="submit" variant="black" className="w-full !py-4 text-base mt-2 delay-300 animate-slide-up" disabled={loading}>
                            {loading ? 'Creating Account...' : 'Sign Up'}
                        </Button>
                    </form>

                    <div className="my-8 flex items-center justify-between delay-500 animate-fade-in">
                        <div className="h-px bg-gray-200 w-full"></div>
                        <span className="px-4 text-gray-500 text-xs whitespace-nowrap">or sign up with</span>
                        <div className="h-px bg-gray-200 w-full"></div>
                    </div>

                    <div className="flex justify-center space-x-6 delay-500 animate-fade-in">
                        <Button variant="social" className="!bg-black !border-black hover:!bg-gray-800"><GoogleIcon /></Button>
                        <Button variant="social" className="!bg-black !border-black hover:!bg-gray-800"><AppleIcon /></Button>
                        <Button variant="social" className="!bg-black !border-black hover:!bg-gray-800"><FacebookIcon /></Button>
                    </div>

                    <p className="text-center mt-8 text-sm text-gray-500 delay-500 animate-fade-in">
                        Already have an account?{' '}
                        <Link to="/login" className="text-gray-900 font-bold hover:underline">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>

            {/* RIGHT SIDE - HERO */}
            <div className="hidden lg:flex w-1/2 relative bg-[#F8F3F5] items-center justify-center p-12 overflow-hidden">
                <div className="relative w-full max-w-lg aspect-square flex flex-col items-center justify-center">

                    {/* Social/Connect Illustration Scene */}
                    <div className="relative w-full h-96">

                        {/* Central Connection Hub */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full shadow-xl flex items-center justify-center z-10 animate-pulse">
                            <div className="w-32 h-32 bg-purple-50 rounded-full flex items-center justify-center">
                                <div className="text-4xl">✨</div>
                            </div>
                        </div>

                        {/* Orbiting User Avatars (CSS Shapes) */}
                        {/* Avatar 1 */}
                        <div className="absolute top-10 left-1/4 w-16 h-16 bg-white p-1 rounded-full shadow-lg animate-float-slow">
                            <div className="w-full h-full bg-blue-100 rounded-full flex items-center justify-center text-xl">👨‍💻</div>
                        </div>
                        {/* Chat Bubble 1 */}
                        <div className="absolute top-6 left-1/2 bg-white px-4 py-2 rounded-xl rounded-bl-none shadow-md border border-purple-100 animate-float-medium delay-700">
                            <span className="text-xs font-bold text-gray-600">Hello! 👋</span>
                        </div>

                        {/* Avatar 2 */}
                        <div className="absolute bottom-20 right-10 w-20 h-20 bg-white p-1 rounded-full shadow-lg animate-float-medium delay-100">
                            <div className="w-full h-full bg-pink-100 rounded-full flex items-center justify-center text-2xl">👩‍🎨</div>
                        </div>
                        {/* Chat Bubble 2 */}
                        <div className="absolute bottom-36 right-0 bg-white px-4 py-2 rounded-xl rounded-br-none shadow-md border border-pink-100 animate-float-slow delay-500">
                            <span className="text-xs font-bold text-gray-600">Great work! 🚀</span>
                        </div>

                        {/* Avatar 3 */}
                        <div className="absolute bottom-0 left-10 w-14 h-14 bg-white p-1 rounded-full shadow-lg animate-float-fast delay-200">
                            <div className="w-full h-full bg-green-100 rounded-full flex items-center justify-center text-lg">🦸‍♂️</div>
                        </div>

                        {/* Decorative Lines/Paths connecting them */}
                        <svg className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none">
                            <path d="M150 100 Q 250 200 350 150" fill="none" stroke="#d8b4fe" strokeWidth="2" strokeDasharray="5,5" />
                            <path d="M100 300 Q 250 200 400 300" fill="none" stroke="#f9a8d4" strokeWidth="2" strokeDasharray="5,5" />
                        </svg>

                        {/* Background blobs */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                    </div>

                    <div className="mt-12 text-center max-w-md relative z-10">
                        <h2 className="text-2xl font-bold text-black mb-2">Connect with your team instantly</h2>
                        <p className="text-gray-500 text-sm"> Collaborate, share, and innovate together in one seamless platform.</p>
                        <div className="flex justify-center space-x-1 mt-6">
                            <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"></div>
                            <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce delay-100"></div>
                            <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce delay-200"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
