import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-cyber-dark text-slate-400 pt-16 pb-8 border-t border-cyber-border relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-neon-cyan/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-cyber-border/60">
          
          {/* 🌟 Column 1 & 2: Branding & Social Links */}
          <div className="lg:col-span-2 space-y-4">
            
            {/* Colorful & Larger Title */}
            <Link to="/" className="inline-flex items-center gap-2 group">
              <span className="text-2xl sm:text-3xl font-black font-mono tracking-wider bg-gradient-to-r from-neon-cyan via-cyan-300 to-neon-magenta bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                ⚡ CareerTrack
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
              ডেভেলপার ও জব সিকারদের জন্য স্মার্ট ক্যারিয়ার ও জব অ্যাপ্লিকেশন ট্র্যাকিং প্ল্যাটফর্ম। আপনার ইন্টারভিউ, নোটস এবং গ্রোথ এক জায়গায় অর্গানাইজড রাখুন।
            </p>

            {/* Social Media Badges */}
            <div className="pt-2 flex items-center gap-3">
              {[
                { name: "GitHub", url: "#", icon: "🐙" },
                { name: "LinkedIn", url: "#", icon: "💼" },
                { name: "Twitter/X", url: "#", icon: "🌐" },
                { name: "Discord", url: "#", icon: "💬" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  title={social.name}
                  className="w-9 h-9 rounded-xl bg-cyber-card border border-cyber-border flex items-center justify-center text-sm hover:border-neon-cyan hover:text-neon-cyan hover:shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-all duration-300 active:scale-95"
                >
                  {social.icon}
                </a>
              ))}
            </div>

          </div>

          {/* 🔗 Column 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan" /> Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-neon-cyan transition-colors hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-neon-cyan transition-colors hover:translate-x-1 inline-block">
                  Job Dashboard
                </Link>
              </li>
              <li>
                <Link to="/add-job" className="hover:text-neon-cyan transition-colors hover:translate-x-1 inline-block">
                  Log New Application
                </Link>
              </li>
              <li>
                <Link to="/analytics" className="hover:text-neon-cyan transition-colors hover:translate-x-1 inline-block">
                  Career Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* 📚 Column 4: Useful Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-magenta" /> Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/resources" className="hover:text-neon-cyan transition-colors hover:translate-x-1 inline-block">
                  Interview Cheatsheets
                </Link>
              </li>
              <li>
                <Link to="/templates" className="hover:text-neon-cyan transition-colors hover:translate-x-1 inline-block">
                  Resume Tips & Guides
                </Link>
              </li>
              <li>
                <a href="#faq" className="hover:text-neon-cyan transition-colors hover:translate-x-1 inline-block">
                  Help & FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* 🛡️ Column 5: System Status & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Platform Status
            </h4>
            
            {/* Live Status Badge */}
            <div className="p-3 rounded-xl bg-cyber-card border border-cyber-border/80 space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono font-medium text-slate-200">
                  Systems Operational
                </span>
              </div>
              <p className="text-[10px] text-slate-500">
                v2.4.0 • Cloud Sync Active
              </p>
            </div>

            <ul className="space-y-1.5 text-xs pt-1">
              <li><a href="#" className="hover:text-slate-200 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-200 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* ⚡ Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} CareerTrack. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Handcrafted for Developers 🚀
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;