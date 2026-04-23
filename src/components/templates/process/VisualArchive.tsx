import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Plus, Minus, Globe, Zap } from "lucide-react";

const PRIMARY_COLOR = "#BCCCD4";

const InfoSection = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "When do I get my money?",
      a: "The second your item sells, we process the payment. Your 70% share hits your CluttaPay wallet instantly, ready for withdrawal to any Nigerian bank.",
    },
    {
      q: "Is shipping really free for sellers?",
      a: "Yes. We handle the logistics. We pick up from your door in Port Harcourt and ship to the buyer. You don't pay a kobo for delivery.",
    },
    {
      q: "What if my clothes don't sell?",
      a: "We use AI to price items so they move fast. If something sits for too long, we'll suggest a price refresh to get you paid quicker.",
    },
    {
      q: "How safe is my fashion archive?",
      a: "We treat your clothes like gold. Every item is insured from the moment we pick it up until it reaches the new owner.",
    },
  ];

  return (
    <div className="w-full bg-white  text-slate-900 overflow-hidden">
      {/* --- ABOUT US: THE NIGERIAN FLAG RESTYLE --- */}
      {/* <section className="py-32 px-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                <div className="w-3 h-8 bg-[#008751] rounded-full" />
                <div className="w-3 h-8 bg-white border border-slate-100 rounded-full" />
                <div className="w-3 h-8 bg-[#008751] rounded-full" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                Rivers State Heritage
              </span>
            </div>

            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85]">
              PH to the <br />
              <span style={{ color: PRIMARY_COLOR }}>World.</span>
            </h2>

            <p className="text-xl text-slate-500 font-normal leading-relaxed max-w-md">
              CluttaPay was born in Port Harcourt. We saw quality clothes
              wasting away in wardrobes across Nigeria and decided to build a
              bridge between clutter and cash.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <MapPin size={20} style={{ color: PRIMARY_COLOR }} />
                <span className="text-xs font-black uppercase tracking-widest">
                  Portharcourt
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={20} style={{ color: PRIMARY_COLOR }} />
                <span className="text-xs font-black uppercase tracking-widest">
                  Global Payouts
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative aspect-square"
          >
    <div className="absolute inset-0 rounded-[4rem] overflow-hidden grayscale-[50%] hover:grayscale-0 transition-all duration-1000">
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop"
                alt="Premium clothes on rack"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
              />
            </div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-8 -right-8 bg-slate-950 text-white p-8 rounded-[2.5rem] shadow-2xl"
            >
              <Zap
                size={24}
                className="mb-2"
                style={{ color: PRIMARY_COLOR }}
              />
              <p className="text-2xl font-black tracking-tighter">70% Payout</p>
              <p className="text-[10px] font-black uppercase opacity-50 tracking-widest">
                Guaranteed
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section> */}

      {/* --- FAQ: LIVE & ANIMATED --- */}
      <section className="py-32 bg-slate-50 px-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 block mb-4">
              Support Center
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
              Got Questions? <br /> We have{" "}
              <span style={{ color: PRIMARY_COLOR }}>Answers.</span>
            </h2>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={false}
                className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-8 text-left flex justify-between items-center group transition-colors hover:bg-slate-50/50"
                >
                  <span className="text-xl font-black text-slate-900 tracking-tight">
                    {faq.q}
                  </span>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor:
                        activeFaq === i ? PRIMARY_COLOR : "#F1F5F9",
                    }}
                  >
                    {activeFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                    >
                      <div className="px-8 pb-8 text-lg text-slate-500  leading-relaxed border-t border-slate-50 pt-6">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfoSection;
