const About = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20 px-3 py-1 rounded-full">
          About CareerTrack
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Empowering Job Seekers with{' '}
          <span className="bg-gradient-to-r from-neon-cyan via-cyan-300 to-neon-magenta bg-clip-text text-transparent">
            Smart Tracking
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
          এলোমেলো স্প্রেডশিট আর নোটপ্যাডের দিন শেষ। CareerTrack হলো আপনার সমস্ত জব অ্যাপ্লিকেশন, ইন্টারভিউ সিডিউল এবং ক্যারিয়ার প্রোগ্রেস এক জায়গায় সুসংগঠিত রাখার একটি আধুনিক প্ল্যাটফর্ম।
        </p>
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-cyber-card border border-cyber-border rounded-2xl p-8 space-y-3 relative overflow-hidden group hover:border-neon-cyan/40 transition-all">
          <div className="w-12 h-12 rounded-xl bg-cyber-dark border border-cyber-border flex items-center justify-center text-2xl">
            🚀
          </div>
          <h2 className="text-xl font-bold text-slate-100">Our Mission</h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            ডেভেলপার ও জব সিকারদের জব হান্টিং প্রসেসকে ম্যানুয়াল ও ঝামেলার মুক্ত করা, যাতে তারা আবেদনের গতিবিধি সহজে পর্যবেক্ষণ করে আরও আত্মবিশ্বাসের সাথে ইন্টারভিউ প্রিপারেশন নিতে পারেন।
          </p>
        </div>

        <div className="bg-cyber-card border border-cyber-border rounded-2xl p-8 space-y-3 relative overflow-hidden group hover:border-neon-magenta/40 transition-all">
          <div className="w-12 h-12 rounded-xl bg-cyber-dark border border-cyber-border flex items-center justify-center text-2xl">
            💡
          </div>
          <h2 className="text-xl font-bold text-slate-100">Why Built For Developers</h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            একজন সফটওয়্যার ইঞ্জিনিয়ারের ক্যারিয়ারের শুরুতেই বহু জায়গায় অ্যাপ্লাই করতে হয়। কালার-কোডেড ভিজ্যুয়াল পাইপলাইন এবং অ্যানালিটিক্স দিয়ে পুরো প্রক্রিয়াটি ট্রাক করা এখন আরও সহজ।
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;