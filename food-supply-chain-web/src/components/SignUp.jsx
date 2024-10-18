import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaArrowLeft } from 'react-icons/fa';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const [receiveUpdates, setReceiveUpdates] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your signup logic here
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow flex items-center justify-center">
        <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-xl p-8">
          {/* Back Button */}
          <Link to="/" className="text-gray-400 hover:text-white flex items-center mb-6">
            <FaArrowLeft className="mr-2" />
            Back to Home
          </Link>

          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="text-white text-2xl font-bold">Food Supply Chain</Link>
          </div>

          {/* Sign Up Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="text-gray-300 block mb-2">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition duration-300"
                placeholder="Jon Snow"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="text-gray-300 block mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition duration-300"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="text-gray-300 block mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition duration-300"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="updates"
                checked={receiveUpdates}
                onChange={(e) => setReceiveUpdates(e.target.checked)}
                className="w-4 h-4 bg-gray-800 border-gray-700 rounded focus:ring-purple-500 focus:ring-offset-gray-900"
              />
              <label htmlFor="updates" className="ml-2 text-gray-300">I want to receive updates via email.</label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-400 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-500 hover:to-purple-600 transition duration-300 ease-in-out"
            >
              Sign up
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="text-purple-400 hover:text-purple-300">
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-gray-500">
                <span className="bg-gray-900 px-4">or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button
                type="button"
                className="w-full flex items-center justify-center bg-gray-800 text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition duration-300"
                onClick={() => console.log('Google signup')}
              >
                <FaGoogle className="mr-2" />
                Google
              </button>
              <button
                type="button"
                className="w-full flex items-center justify-center bg-gray-800 text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition duration-300"
                onClick={() => console.log('Facebook signup')}
              >
                <FaFacebook className="mr-2" />
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;