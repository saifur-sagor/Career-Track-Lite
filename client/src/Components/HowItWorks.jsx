const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Log Applications",
      desc: "যেকোনো জবে অ্যাপ্লাই করার পরই কোম্পানির নাম, পজিশন, স্যালারি ও লিংক সহজে সেভ করুন।",
      icon: "📌",
      color: "from-cyan-500 to-blue-500",
      borderColor: "border-cyan-500/30",
      textColor: "text-neon-cyan"
    },
    {
      id: "02",
      title: "Track Status",
      desc: "Applied ➔ Screening ➔ Interview ➔ Offer—প্রতিটি অ্যাপ্লিকেশনের লাইভ আপডেট রাখুন।",
      icon: "⚡",
      color: "from-blue-500 to-indigo-500",
      borderColor: "border-indigo-500/30",
      textColor: "text-indigo-400"
    },
    {
      id: "03",
      title: "Save Notes & HR Info",
      desc: "ইন্টারভিউয়ের ডেট, রাউন্ডের বিবরণ এবং HR-এর কন্টাক্ট ইনফো এক জায়গায় সেভ রাখুন।",
      icon: "📝",
      color: "from-indigo-500 to-purple-500",
      borderColor: "border-purple-500/30",
      textColor: "text-purple-400"
    },
    {
      id: "04",
      title: "Analyze Insights",
      desc: "কত অ্যাপ্লাইয়ের পর ইন্টারভিউ মিলছে বা কোথায় ইমপ্রুভমেন্ট প্রয়োজন—তার স্মার্ট ডাটা দেখুন।",
      icon: "📊",
      color: "from-purple-500 to-neon-magenta",
      borderColor: "border-neon-magenta/30",
      textColor: "text-neon-magenta"
    }
  ];

  return (
    <section className="py-16 bg-cyber-dark text-white relative overflow-hidden border-b border-cyber-border/50">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-neon-cyan/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-border">
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            <span className="text-xs font-mono font-medium text-slate-300 uppercase tracking-widest">
              Simple Workflow
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            How <span className="bg-gradient-to-r from-neon-cyan via-cyan-300 to-neon-magenta bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">CareerTrack</span> Works
          </h2>
          
          <p className="text-sm text-slate-400 font-normal">
            এলোমেলো বুকমার্ক ও নোটপ্যাড বাদ দিন। আপনার জব হান্টিংকে অর্গানাইজড করার ৪টি সহজ ধাপ।
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`relative bg-cyber-card rounded-2xl p-6 border ${step.borderColor} hover:border-neon-cyan/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] flex flex-col justify-between`}
            >
              <div>
                {/* Step Header: Icon & Step Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyber-dark border border-cyber-border flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className={`text-2xl font-black font-mono ${step.textColor} opacity-60 group-hover:opacity-100 transition-opacity`}>
                    {step.id}
                  </span>
                </div>

                {/* Step Content */}
                <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-neon-cyan transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              {/* Bottom Glowing Accent Line */}
              <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${step.color} mt-6 group-hover:w-full transition-all duration-300`} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;