import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "CareerTrack কি সম্পূর্ণ ফ্রিতে ব্যবহার করা যাবে?",
      a: "হ্যাঁ! সাধারণ জব সিকার ও ডেভেলপারদের জব ট্র্যাকিং সহজ করার জন্য এই প্ল্যাটফর্মের মূল ফিচারগুলো সম্পূর্ণ ফ্রি।"
    },
    {
      q: "আমার অ্যাপ্লিকেশন এবং ইন্টারভিউ ডাটা কি সিকিউর থাকবে?",
      a: "অবশ্যই। আপনার সব ডাটা নিরাপদে ডাটাবেজে সংরক্ষিত থাকে এবং শুধু আপনার অ্যাকাউন্ট থেকেই অ্যাক্সেসযোগ্য।"
    },
    {
      q: "আমি কি নির্দিষ্ট অ্যাপ্লিকেশনের সাথে নোটস সেভ রাখতে পারব?",
      a: "হ্যাঁ, প্রতিটা জবের নির্দিষ্ট কার্ডের ভেতরে ইন্টারভিউ প্রিপারেশন, HR-এর কন্টাক্ট ইনফো এবং রাউন্ড বাই রাউন্ড নোটস লিখে রাখার ডেডিকেটেড অপশন রয়েছে।"
    },
    {
      q: "এক্সেল বা গুগল শিট থেকে এখানে কেন শিফট হব?",
      a: "এক্সেল শিটে ম্যানুয়াল ভুলের সুযোগ বেশি থাকে এবং তা ভিজ্যুয়াল না। CareerTrack-এ কাস্টম কালার স্ট্যাটাস, ড্র্যাগ অ্যান্ড ড্রপ সুবিধা এবং অটোমেটিক প্রোগ্রেস সামারি পাবেন।"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-cyber-dark text-white relative overflow-hidden border-b border-cyber-border/50">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-mono font-medium text-neon-cyan uppercase tracking-widest bg-cyber-card px-3 py-1 rounded-full border border-cyber-border">
            Got Questions?
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight pt-2">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-cyber-card rounded-2xl border border-cyber-border overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left p-5 flex justify-between items-center gap-4 text-slate-100 font-semibold text-sm sm:text-base hover:text-neon-cyan transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-neon-cyan font-mono text-xl">
                  {openIndex === idx ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === idx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-cyber-border/40">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;