import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Shirt, Wallet, ArrowRight } from "lucide-react";
import { AiFillInstagram } from "react-icons/ai";

const HeroPage = () => {
  const PRIMARY_COLOR = "#BCCCD4";

  // Countdown Logic for May 20th
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const target = new Date("May 20, 2026 00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;
      if (distance < 0) return clearInterval(interval);

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden selection:bg-[#BCCCD4]">
      {/* Navigation */}
      <nav className="relative z-20 flex justify-between items-center px-10 py-8 max-w-7xl mx-auto">
        <h1 className="text-2xl font-black tracking-tighter text-slate-900">
          cluttapay<span style={{ color: PRIMARY_COLOR }}>.</span>
        </h1>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-slate-400 hover:text-slate-900 transition-all"
          >
            <AiFillInstagram size={26} />
          </a>
          <div className="h-6 w-[1px] bg-slate-200" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Launch 05.20.26
          </span>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-10 pt-10 pb-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Messaging */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-400 text-[10px] font-bold mb-8 uppercase tracking-widest">
              <Sparkles size={12} style={{ color: PRIMARY_COLOR }} />
              Premium Fashion Circularity
            </div>

            <h1 className="text-7xl md:text-8xl font-extrabold text-slate-950 leading-[0.85] tracking-tighter mb-8">
              Turn your <br />
              wardrobe <br />
              <span style={{ color: PRIMARY_COLOR }}>into cash.</span>
            </h1>

            <p className="text-xl text-slate-500 max-w-md leading-relaxed">
              Declutter and get paid. Your old clothes, someone else’s new
              favorite.
            </p>
          </motion.div>

          {/* Large Countdown Display */}
          <div className="flex gap-6 items-center">
            {[
              { label: "D", val: timeLeft.days },
              { label: "H", val: timeLeft.hours },
              { label: "M", val: timeLeft.mins },
              { label: "S", val: timeLeft.secs },
            ].map((unit, i) => (
              <div key={i} className="flex flex-col items-baseline">
                <span className="text-5xl font-black text-slate-900 tabular-nums">
                  {unit.val < 10 ? `0${unit.val}` : unit.val}
                </span>
                <span className="text-[10px] font-bold text-slate-300 uppercase">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl shadow-slate-200"
          >
            Coming Soon
            <ArrowRight
              size={22}
              className="group-hover:translate-x-2 transition-transform"
              style={{ color: PRIMARY_COLOR }}
            />
          </motion.button>
        </div>

        {/* Right Side: Visual Section */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-3xl bg-slate-100"
          >
            {/* Fashion Editorial Image */}
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000"
              alt="High-end apparel"
              className="w-full h-full object-cover brightness-95"
            />

            {/* Floating Info Overlay */}
            <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
              <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-2xl shadow-sm border border-white/20">
                <p className="text-[10px] font-bold uppercase text-slate-400">
                  Resale Value
                </p>
                <p className="text-lg font-black text-slate-900">₦3,500</p>{" "}
              </div>
              <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-sm">
                <Shirt size={20} style={{ color: PRIMARY_COLOR }} />
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

            <div className="absolute bottom-10 left-10 text-white">
              <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80 underline decoration-clutta decoration-2 underline-offset-4">
                Item Archive 001
              </p>
              <h3 className="text-3xl font-bold">Oversized Silhouette</h3>
            </div>
          </motion.div>

          {/* Soft Blur Glow */}
          <div
            className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-[120px] opacity-40"
            style={{ backgroundColor: PRIMARY_COLOR }}
          />
        </div>
      </main>
    </div>
  );
};

export default HeroPage;
