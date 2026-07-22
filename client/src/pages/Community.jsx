import { SiTelegram } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Community = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-neon-magenta bg-neon-magenta/10 border border-neon-magenta/20 px-3 py-1 rounded-full">
          Developer Network
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Join the{" "}
          <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
            CareerTrack Community
          </span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          অন্যান্য ডেভেলপারদের সাথে যুক্ত হোন, ইন্টারভিউয়ের অভিজ্ঞতা শেয়ার করুন
          এবং একসাথে ক্যারিয়ার ডেভেলপ করুন।
        </p>
      </div>

      {/* Community Channels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Discord Card */}
        <div className="bg-cyber-card border border-cyber-border hover:border-neon-cyan/50 rounded-2xl p-6 text-center space-y-4 group transition-all">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-cyber-dark border border-cyber-border flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
            {" "}
            <FaDiscord className="text-neon-cyan"/>
          </div>
          <h3 className="text-lg font-bold text-slate-100">Discord Server</h3>
          <p className="text-xs text-slate-400">
            রিয়েল-টাইম আলোচনা, ইন্টারভিউ টিপস এবং সরাসরি ফিডব্যাক পাওয়ার জন্য
            আমাদের ডিসকর্ড সার্ভারে যোগ দিন।
          </p>
          <a
            href="#"
            className="inline-block px-4 py-2 rounded-xl bg-cyber-dark border border-cyber-border text-neon-cyan font-mono text-xs hover:border-neon-cyan transition-all"
          >
            Join Discord ↗
          </a>
        </div>

        {/* GitHub Card */}
        <div className="bg-cyber-card border border-cyber-border hover:border-neon-cyan/50 rounded-2xl p-6 text-center space-y-4 group transition-all">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-cyber-dark border border-cyber-border flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
            <FaGithub className="text-neon-cyan"/>
          </div>
          <h3 className="text-lg font-bold text-slate-100">GitHub Community</h3>
          <p className="text-xs text-slate-400">
            ওপেন সোর্স কান্ট্রিবিউশন করতে চান? আমাদের প্রজেক্ট রিপোজিটরিটি দেখুন
            এবং স্টার দিয়ে সাথে থাকুন।
          </p>
          <a
            href="#"
            className="inline-block px-4 py-2 rounded-xl bg-cyber-dark border border-cyber-border text-neon-cyan font-mono text-xs hover:border-neon-cyan transition-all"
          >
            GitHub Repo ↗
          </a>
        </div>

        {/* Telegram Card */}
        <div className="bg-cyber-card border border-cyber-border hover:border-neon-cyan/50 rounded-2xl p-6 text-center space-y-4 group transition-all">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-cyber-dark border border-cyber-border flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
            <SiTelegram className="text-neon-cyan"/>
          </div>
          <h3 className="text-lg font-bold text-slate-100">Telegram Channel</h3>
          <p className="text-xs text-slate-400">
            দৈনিক নতুন টেক জব সার্কুলার এবং ক্যারিয়ার গাইডলাইনের নোটিফিকেশন
            পেতে টেলিগ্রামে চ্যানেলটি সাবস্ক্রাইব করুন।
          </p>
          <a
            href="#"
            className="inline-block px-4 py-2 rounded-xl bg-cyber-dark border border-cyber-border text-neon-cyan font-mono text-xs hover:border-neon-cyan transition-all"
          >
            Join Telegram ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default Community;
