import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { AiFillInstagram } from "react-icons/ai";

const PRIMARY_COLOR = "#BCCCD4";

const FooterSection = () => {
  return (
    <div className="w-full bg-white text-slate-900 font-sans">
      {/* --- COMING SOON CTA --- */}
      <section className="px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          /* Refactored to grayish-blue background */
          className="max-w-7xl mx-auto bg-[#BCCCD4] rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden"
        >
          {/* subtle overlay to ensure the grayish-blue feel is premium */}
          <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/60 block">
              Final Call
            </span>

            {/* White text for the CTA */}
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">
              Ready to <br />
              <span>Declutter?</span>
            </h2>

            <p className="text-xl text-white/80 font-normal max-w-lg mx-auto leading-relaxed">
              Join the new era of fashion resale. Turning your wardrobe into
              capital has never been this clean.
            </p>

            {/* Black button with white text */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-4 bg-slate-950 text-white px-10 py-5 rounded-full font-black text-lg transition-all"
            >
              Coming 20th May
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
                style={{ color: PRIMARY_COLOR }}
              />
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="px-10 pb-20 pt-10 border-t border-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          {/* Brand & Socials */}
          <div className="space-y-6">
            <h3 className="text-3xl font-black tracking-tighter">
              cluttapay<span style={{ color: PRIMARY_COLOR }}>.</span>
            </h3>
            <p className="text-sm text-slate-400 font-normal max-w-[200px]">
              Built in Port Harcourt. <br /> Curating archives worldwide.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="p-4 rounded-full bg-slate-50 text-slate-400 hover:text-slate-950 transition-colors"
              >
                <AiFillInstagram size={22} />
              </a>

              <a
                href="#"
                className="p-4 rounded-full bg-slate-50 text-slate-400 hover:text-slate-950 transition-colors"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          <div className="md:text-right">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-2">
              Location
            </p>
            <p className="text-sm font-normal text-slate-500">
              Rivers State, Nigeria
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">
            © 2026 CLUTTAPAY LIMITED — ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
