import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ImageBB Image Upload Function
  const uploadImageToImageBB = async (file) => {
    const imageData = new FormData();
    imageData.append('image', file);
    
  // Get the API key from environment variables
    const apiKey = import.meta.env.VITE_IMAGEBB_API_KEY; 
    
    const res = await axios.post(`https://api.imgbb.com/1/upload?key=${apiKey}`, imageData);
    return res.data.data.display_url;
  };

  // 1. Manual Registration Handler
  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      let photoUrl = '';

      // Image Upload Processing
      if (imageFile) {
        photoUrl = await uploadImageToImageBB(imageFile);
      }

      const payload = {
        name,
        email,
        password,
        ...(photoUrl && { photo: photoUrl }),
      };

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/auth/register`,
        payload
      );

      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));

        navigate(from, { replace: true });
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // 2. Google Authentication Handler
  const handleGoogleSuccess = async (tokenResponse) => {
    setLoading(true);
    setError('');

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/auth/google`,
        { access_token: tokenResponse.access_token }
      );

      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));

        navigate(from, { replace: true });
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Google authentication failed!');
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: handleGoogleSuccess,
    onError: () => setError('Google Login Failed!'),
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-md w-full space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
        
        <div>
          <h2 className="text-center text-3xl font-extrabold text-cyan-400 dark:text-cyan-300">
            Create an Account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Join CareerTrack Lite to manage your applications
          </p>
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 p-4 rounded text-red-700 dark:text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={onChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:outline-none"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={onChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Profile Photo
            </label>
            <input
              type="file"
              name="photo"
              required
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
              className="w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 dark:file:bg-indigo-950 dark:file:text-indigo-300 hover:file:bg-indigo-100 dark:hover:file:bg-indigo-900 cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              minLength="8"
              placeholder="type your password"
              value={password}
              onChange={onChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:outline-none"
            
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 px-4 rounded-lg text-sm font-semibold text-white bg-neon-cyan hover:bg-cyan-600 dark:bg-cyan-500 dark:hover:bg-cyan-600 shadow-md transition duration-150 disabled:opacity-50 cursor-pointer"
          >
            {loading ? 'Creating Account...' : 'Register'}
          </button>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-700" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
              Or continue with
            </span>
          </div>
        </div>

        {/* Google Button */}
        <div>
          <button
            type="button"
            onClick={() => googleLogin()}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 dark:hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-neon-cyan cursor-pointer transition"
          >
            <FcGoogle className='w-5 h-5'/>

            Sign up with Google
          </button>
        </div>

        {/* Login Navigation Section at the bottom */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 pt-2">
          Already have an account?{' '}
          <Link
            to="/login"
            state={{ from: location.state?.from }}
            className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Sign in here
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;