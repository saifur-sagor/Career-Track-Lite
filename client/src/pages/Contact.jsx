import { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20 px-3 py-1 rounded-full">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Have Questions? <span className="text-neon-cyan">Let's Talk!</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          আপনার কোনো মতামত, বাগ রিপোর্ট বা ফিচারের আইডিয়া থাকলে আমাদের সরাসরি মেসেজ পাঠাতে পারেন।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Contact Info Sidebar */}
        <div className="md:col-span-5 bg-cyber-card border border-cyber-border rounded-2xl p-6 space-y-6">
          <h2 className="text-lg font-bold text-slate-100 border-b border-cyber-border pb-3">
            Contact Information
          </h2>

          <div className="space-y-4 text-xs sm:text-sm">
            <div className="flex items-start gap-3">
              <span className="text-lg">📧</span>
              <div>
                <p className="font-semibold text-slate-200">Email Us</p>
                <p className="text-slate-400">support@careertrack.dev</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-lg">⏱️</span>
              <div>
                <p className="font-semibold text-slate-200">Response Time</p>
                <p className="text-slate-400">Within 24 Hours</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-lg">💬</span>
              <div>
                <p className="font-semibold text-slate-200">Community Support</p>
                <p className="text-slate-400">Join our Discord server</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7 bg-cyber-card border border-cyber-border rounded-2xl p-6 sm:p-8">
          {submitted ? (
            <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center text-sm font-medium">
              🎉 আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে! আমরা দ্রুত উত্তর দেব।
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">YOUR NAME</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 rounded-xl bg-cyber-dark border border-cyber-border focus:border-neon-cyan text-xs text-slate-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">EMAIL ADDRESS</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-cyber-dark border border-cyber-border focus:border-neon-cyan text-xs text-slate-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">MESSAGE</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Type your message here..."
                  className="w-full px-4 py-2.5 rounded-xl bg-cyber-dark border border-cyber-border focus:border-neon-cyan text-xs text-slate-100 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-neon-cyan hover:bg-cyan-300 text-cyber-dark font-bold text-xs shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all active:scale-95"
              >
                Send Message ↗
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};

export default Contact;