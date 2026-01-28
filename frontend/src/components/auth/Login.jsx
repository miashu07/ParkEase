// src/components/auth/Login.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaClock } from 'react-icons/fa';

const Login = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await login(email, password);
      if (result.success) {
        navigate(result.isAdmin ? '/admin/dashboard' : '/dashboard');
      }
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full flex overflow-hidden bg-white rounded-2xl shadow-2xl relative animate-in fade-in zoom-in duration-500">

        {/* Left Column: Branding & Features */}
        <div className="hidden lg:flex lg:w-1/2 bg-blue-600 p-12 text-white flex-col justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-10">
              <div className="bg-white p-2 rounded-lg shadow-inner">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight">ParkEase</span>
            </div>

            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Smart Parking <br />
              Management <br />
              Made Simple
            </h1>

            <p className="text-blue-100 text-lg mb-12 max-w-md">
              Sign in to access your dashboard and manage your parking spaces efficiently with our intuitive platform.
            </p>

            <div className="space-y-8">
              {[
                { icon: <FaEnvelope className="w-5 h-5" />, text: 'Secure & reliable platform' },
                { icon: <FaClock className="w-5 h-5" />, text: 'Real-time availability updates' },
                { icon: <FaLock className="w-5 h-5" />, text: 'Analytics & reporting tools' }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="bg-blue-500 bg-opacity-30 p-3 rounded-xl">
                    {item.icon}
                  </div>
                  <span className="text-lg font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-blue-200 text-sm mt-8">
            © 2026 ParkEase. All rights reserved. Registered trademark.
          </div>
        </div>

        {/* Right Column: Sign In Form */}
        <div className="w-full lg:w-1/2 p-10 md:p-16 relative bg-white flex flex-col justify-center">
          {/* Clock Display */}
          <div className="absolute top-6 right-8 flex items-center text-gray-500 text-xs bg-gray-50 px-4 py-1.5 rounded-full border border-gray-100 font-semibold shadow-sm">
            <FaClock className="mr-2 h-3 w-3" />
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>

          <div className="w-full max-w-sm mx-auto">
            <div className="text-center lg:text-left mb-10">
              <h2 className="text-3xl font-black text-gray-900 mb-3 tracking-tight">Sign In</h2>
              <p className="text-gray-500 text-sm font-medium">Please enter your details to continue</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-blue-500">
                      <FaEnvelope className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="appearance-none block w-full px-4 py-4 pl-12 border border-gray-200 placeholder-gray-400 text-gray-900 bg-gray-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-transparent transition-all sm:text-sm shadow-sm"
                      placeholder="user@example.com"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="password" className="block text-xs font-bold text-gray-700 uppercase tracking-widest">
                      Password
                    </label>
                    <Link to="/forgot-password" title="Forgot password?" className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-blue-500">
                      <FaLock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="appearance-none block w-full px-4 py-4 pl-12 border border-gray-200 placeholder-gray-400 text-gray-900 bg-gray-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-transparent transition-all sm:text-sm shadow-sm"
                      placeholder="••••••••••••"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-lg cursor-pointer transition-all"
                />
                <label htmlFor="remember-me" className="ml-3 block text-sm font-medium text-gray-600 cursor-pointer">
                  Stay signed in
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-black rounded-2xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-xl shadow-blue-200"
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Validating...
                  </span>
                ) : (
                  <div className="flex items-center uppercase tracking-widest font-black">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Sign In
                  </div>
                )}
              </button>

              <div className="text-center mt-8">
                <p className="text-sm text-gray-500 font-medium">
                  New to ParkEase?{' '}
                  <Link to="/register" className="font-bold text-blue-600 hover:text-blue-700 decoration-2 underline-offset-4 hover:underline transition-all">
                    Create your account
                  </Link>
                </p>
              </div>

              {/* Demo Credentials */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <div className="flex items-center space-x-2 mb-5">
                  <div className="bg-blue-100 text-blue-600 p-1.5 rounded-lg">
                    <FaLock className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Quick Access Demo</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 group hover:border-blue-200 hover:bg-white transition-all duration-300">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">User</p>
                      <button type="button" onClick={() => { setEmail('user@example.com'); setPassword('password123') }} className="text-[9px] text-blue-500 font-black hover:text-blue-700">CLICK TO FILL</button>
                    </div>
                    <p className="text-xs text-gray-700 font-mono font-bold">user@example.com</p>
                    <p className="text-[10px] text-gray-400 font-mono mt-1">password123</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 group hover:border-blue-200 hover:bg-white transition-all duration-300">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Admin</p>
                      <button type="button" onClick={() => { setEmail('admin@parkease.com'); setPassword('admin123') }} className="text-[9px] text-blue-500 font-black hover:text-blue-700">CLICK TO FILL</button>
                    </div>
                    <p className="text-xs text-gray-700 font-mono font-bold">admin@parkease.com</p>
                    <p className="text-[10px] text-gray-400 font-mono mt-1">admin123</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;