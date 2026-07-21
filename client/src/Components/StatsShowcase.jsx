const StatsShowcase = () => {
  const stats = [
    { value: "50K+", label: "Applications Tracked", sub: "Organized worldwide" },
    { value: "3.5x", label: "Faster Follow-ups", sub: "Never miss an interview" },
    { value: "98%", label: "User Satisfaction", sub: "Rated by developers" },
    { value: "100%", label: "Private & Secure", sub: "Your data stays yours" }
  ];

  return (
    <section className="py-14 bg-cyber-dark text-white relative overflow-hidden border-b border-cyber-border/50">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-neon-cyan/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-cyber-card/60 backdrop-blur-md rounded-2xl p-6 border border-cyber-border/80 hover:border-neon-cyan/40 transition-all duration-300 group"
            >
              <h3 className="text-3xl sm:text-4xl font-extrabold font-mono text-neon-cyan group-hover:scale-105 transition-transform">
                {stat.value}
              </h3>
              <p className="text-sm font-semibold text-slate-200 mt-2">
                {stat.label}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsShowcase;