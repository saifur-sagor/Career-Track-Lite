import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <section className="py-12 bg-cyber-dark text-white relative overflow-hidden border-b border-cyber-border/50">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-neon-cyan/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Card Wrapper */}
        <div className="relative rounded-3xl bg-cyber-card border border-cyber-border/80 p-8 sm:p-12 overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.08)]">
          
          {/* Top Neon Light Bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-cyan via-cyan-300 to-neon-magenta" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-3 text-center lg:text-left">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20 px-3 py-1 rounded-full">
                ⚡ Stay Ahead In Your Career
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight pt-1">
                Get Weekly Job Search &{' '}
                <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
                  Interview Insights
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
                কোনো স্প্যাম নয়! শুধু ক্যারিয়ার হ্যাশ-টেক, রেজুমে প্রিপারেশন গাইড এবং প্ল্যাটফর্মের লেটেস্ট আপডেটের সংক্ষিপ্ত সামারি আপনার ইনবক্সে।
              </p>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center text-xs font-semibold animate-fade-in">
                  🎉 সাবস্ক্রাইব করার জন্য ধন্যবাদ! শীঘ্রই আপনার সাথে দেখা হবে।
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-cyber-dark border border-cyber-border focus:border-neon-cyan text-xs text-slate-100 placeholder-slate-500 outline-none transition-all"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-neon-cyan hover:bg-cyan-300 text-cyber-dark font-bold text-xs shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all whitespace-nowrap active:scale-95"
                  >
                    Subscribe ↗
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Newsletter;