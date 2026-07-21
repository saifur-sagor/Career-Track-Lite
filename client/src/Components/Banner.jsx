import { Link } from 'react-router';
// Swiper React components & modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroBanner = () => {
  // স্লাইডারের জন্য ক্যারিয়ার ট্র্যাকের ৩টি ইমেজ/ইলাস্ট্রেশন ডেটা
  const sliderData = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      badge: "In Demand",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
      desc: "Master MERN Stack, Next.js & Modern UI System Architecture."
    },
    {
      id: 2,
      title: "Data Science & AI Analytics",
      badge: "Trending",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      desc: "Python, Machine Learning & Data Visualization Pathways."
    },
    {
      id: 3,
      title: "UI/UX & Product Design",
      badge: "Creative",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1000&auto=format&fit=crop",
      desc: "Figma, Design Systems & User-Centric Prototyping."
    }
  ];

  return (
    <div className="relative overflow-hidden bg-cyber-dark text-white py-8 lg:py-12 border-b border-cyber-border/50">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[200px] bg-neon-cyan/10 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* 👈 Left Section: Career Track Headline & Actions */}
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-border">
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              <span className="text-xs font-medium text-slate-300 tracking-wide uppercase">
                Accelerate Your Growth
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Track Your Skill.{' '}
              <span className="bg-gradient-to-r from-neon-cyan via-cyan-300 to-neon-magenta bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                Build Success.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              ক্যারিয়ার ট্র্যাক দিয়ে আপনার পছন্দের টেক রোল চয়ন করুন, পার্সোনালাইজড রোডম্যাপ অনুসরণ করুন এবং ইন্টারভিউ প্রিপারেশন কমপ্লিট করুন।
            </p>

            {/* Compact Call to Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <Link
                to="/tracks"
                className="px-6 py-2.5 rounded-xl text-sm font-semibold text-cyber-dark bg-neon-cyan hover:bg-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all active:scale-95"
              >
                Explore Tracks ↗
              </Link>
              
              <Link
                to="/resources"
                className="px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-300 bg-cyber-card border border-cyber-border hover:border-neon-cyan/50 hover:text-neon-cyan transition-all active:scale-95"
              >
                Resources
              </Link>
            </div>

          </div>

          {/* 👉 Right Section: Swiper Auto-playing Image Carousel */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden p-[1px] bg-gradient-to-tr from-neon-cyan/40 via-cyber-border to-neon-magenta/40 shadow-[0_0_30px_rgba(0,240,255,0.15)]">
              
              <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                effect={'fade'}
                fadeEffect={{ crossFade: true }}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                className="rounded-2xl h-[260px] sm:h-[300px] w-full bg-cyber-card"
              >
                {sliderData.map((slide) => (
                  <SwiperSlide key={slide.id} className="relative w-full h-full">
                    {/* Image */}
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover opacity-60"
                    />
                    
                    {/* Dark Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-cyber-dark/40 to-transparent" />

                    {/* Content Box Over Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-10 space-y-1">
                      <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-cyber-dark bg-neon-cyan px-2 py-0.5 rounded">
                        {slide.badge}
                      </span>
                      <h3 className="text-lg font-bold text-white drop-shadow">
                        {slide.title}
                      </h3>
                      <p className="text-xs text-slate-300 line-clamp-1">
                        {slide.desc}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroBanner;