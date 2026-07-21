import { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(true); // Cyberpunk থিমের জন্য ডিফল্ট ডার্ক
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Light/Dark Theme Toggle Effect
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      document.body.style.backgroundColor = '#0B0F17';
      document.body.style.color = '#F3F4F6';
    } else {
      root.classList.remove('dark');
      document.body.style.backgroundColor = '#F8FAFC';
      document.body.style.color = '#0F172A';
    }
  }, [isDarkMode]);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `font-medium text-sm transition-all ${
            isActive
              ? 'text-neon-cyan font-semibold drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]'
              : 'text-slate-400 hover:text-slate-200 dark:hover:text-white'
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/tracks"
        className={({ isActive }) =>
          `font-medium text-sm transition-all ${
            isActive
              ? 'text-neon-cyan font-semibold drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]'
              : 'text-slate-400 hover:text-slate-200 dark:hover:text-white'
          }`
        }
      >
        Career Tracks
      </NavLink>
      <NavLink
        to="/resources"
        className={({ isActive }) =>
          `font-medium text-sm transition-all ${
            isActive
              ? 'text-neon-cyan font-semibold drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]'
              : 'text-slate-400 hover:text-slate-200 dark:hover:text-white'
          }`
        }
      >
        Resources
      </NavLink>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-cyber-dark/80 backdrop-blur-md border-b border-cyber-border/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* 🎯 Career Track Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-neon-cyan/40 transition-all">
              <div className="w-full h-full bg-cyber-dark rounded-[11px] flex items-center justify-center">
                {/* Career Track Growth Icon */}
                <svg
                  className="w-5 h-5 text-neon-cyan group-hover:scale-110 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-wide text-white leading-tight">
                Career<span className="text-neon-cyan">Track</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">
                Path to Success
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks}
          </div>

          {/* Right Section: Theme Toggle, User Profile / Auth Action */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* 🌓 Light / Dark Mode Toggle Icon Button */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              title="Toggle Theme"
              className="p-2 rounded-xl bg-cyber-card border border-cyber-border text-slate-300 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all active:scale-95"
            >
              {isDarkMode ? (
                /* Sun Icon for Light Mode switch */
                <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                /* Moon Icon for Dark Mode switch */
                <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Auth Buttons or User Profile */}
            {user ? (
              <div className="flex items-center gap-3 bg-cyber-card p-1.5 pl-3 rounded-full border border-cyber-border">
                <span className="text-xs font-medium text-slate-200">
                  {user.name}
                </span>
                <img
                  src={user.photo || 'https://i.ibb.co/MBtjqXQ/no-avatar.png'}
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-neon-cyan"
                />
                <button
                  onClick={logoutUser}
                  className="text-xs bg-red-500/20 hover:bg-red-500 text-red-300 hover:text-white px-3 py-1.5 rounded-full transition-all border border-red-500/30"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className="text-sm font-semibold text-cyber-dark bg-neon-cyan hover:bg-cyan-300 px-5 py-2 rounded-xl shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] active:scale-95"
                >
                  Login
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Navigation Toggle Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-cyber-card border border-cyber-border text-slate-300"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-300 hover:text-neon-cyan"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-cyber-card border-b border-cyber-border px-4 pt-3 pb-5 space-y-3">
          <div className="flex flex-col gap-3">
            {navLinks}
          </div>
          <div className="pt-3 border-t border-cyber-border">
            {user ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={user.photo || 'https://i.ibb.co/MBtjqXQ/no-avatar.png'}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover ring-1 ring-neon-cyan"
                  />
                  <span className="text-sm font-medium text-slate-200">{user.name}</span>
                </div>
                <button
                  onClick={logoutUser}
                  className="text-xs bg-red-500/20 text-red-300 px-3 py-1.5 rounded-lg border border-red-500/30"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="w-full block text-center text-sm font-semibold text-cyber-dark bg-neon-cyan py-2 rounded-xl"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
