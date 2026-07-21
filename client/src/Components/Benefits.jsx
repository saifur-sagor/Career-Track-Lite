const Benefits = () => {
  const benefits = [
    {
      icon: "📑",
      title: "No More Messy Spreadsheets",
      desc: "এলোমেলো এক্সেল শিট বা গুগল ডকসের ঝামেলা শেষ। আপনার সব জব অ্যাপ্লিকেশন এক সুসংগঠিত প্ল্যাটফর্মে ম্যানুয়াল ভুল ছাড়াই ম্যানেজ করুন।",
      badge: "Efficiency"
    },
    {
      icon: "📊",
      title: "Visual Application Stages",
      desc: "কালার-কোডেড কাস্টম স্ট্যাটাসের মাধ্যমে প্রতিটি অ্যাপ্লিকেশনের গতিবিধি (Applied ➔ Interview ➔ Offer) এক নজরে ট্র্যাক করুন।",
      badge: "Clarity"
    },
    {
      icon: "💡",
      title: "Interview & HR Notes",
      desc: "নির্দিষ্ট কোম্পানির ইন্টারভিউ ডেট, রাউন্ডের বিবরণ, প্রশ্ন এবং HR-এর পরিচিতি একই ফাইলের ভেতর যত্ন করে সেভ রাখুন।",
      badge: "Preparation"
    },
    {
      icon: "📈",
      title: "Smart Career Analytics",
      desc: "কতটি অ্যাপ্লাই থেকে ইন্টারভিউ কল পাচ্ছেন বা কোন টেকনোলজিতে রেসপন্স বেশি—তার একটি ক্লিয়ার সামারি রিপোর্ট পান।",
      badge: "Insights"
    }
  ];

  return (
    <section className="py-16 bg-cyber-dark text-white relative overflow-hidden border-b border-cyber-border/50">
      
      {/* Background Ambient Light */}
      <div className="absolute top-1/3 right-10 w-[400px] h-[250px] bg-neon-magenta/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-border">
            <span className="w-2 h-2 rounded-full bg-neon-magenta animate-pulse" />
            <span className="text-xs font-mono font-medium text-slate-300 uppercase tracking-widest">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Built for Developers &{' '}
            <span className="bg-gradient-to-r from-neon-cyan via-cyan-300 to-neon-magenta bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              Focused Job Hunters
            </span>
          </h2>

          <p className="text-sm text-slate-400 font-normal">
            ম্যানুয়াল ট্র্যাকারের ঝক্কি এড়িয়ে আপনার ক্যারিয়ারের গুরুত্বপূর্ণ সিদ্ধান্তগুলো নিন ডেটা-ড্রাইভেন উপায়ে।
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-cyber-card/80 backdrop-blur-sm rounded-2xl p-6 border border-cyber-border/80 hover:border-neon-cyan/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyber-dark border border-cyber-border flex items-center justify-center text-xl group-hover:border-neon-cyan/50 group-hover:scale-105 transition-all">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20 px-2.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-neon-cyan transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-cyber-border/40 flex items-center text-xs font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
                <span>Organized Tracking</span>
                <span className="ml-auto text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity">➔</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Benefits;