import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Ghost, Shirt } from "lucide-react";

const PRIMARY_COLOR = "#BCCCD4";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 overflow-hidden font-sans">
      {/* Background Decorative Element */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ backgroundColor: PRIMARY_COLOR }}
      />

      <div className="relative z-10 text-center">
        {/* Animated Icon */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="flex justify-center mb-8"
        >
          <div
            className="w-24 h-24 rounded-[2rem] flex items-center justify-center border-2"
            style={{ borderColor: PRIMARY_COLOR }}
          >
            <Shirt size={40} className="text-slate-900 opacity-20" />
          </div>
        </motion.div>

        {/* Big Error Numbers */}
        <div className="relative">
          <h1 className="text-[12rem] md:text-[18rem] font-black tracking-tighter leading-none text-slate-950 opacity-5">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900">
              Page <span style={{ color: PRIMARY_COLOR }}>Lost.</span>
            </h2>
          </div>
        </div>

        {/* Simple Message */}
        <p className="text-xl text-slate-500 font-normal max-w-xs mx-auto mb-12 leading-tight">
          This piece isn't in our wardrobe. It might have been liquidated
          already.
        </p>

        {/* Back Home Button */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group inline-flex items-center gap-3 bg-slate-950 text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-2 transition-transform"
          />
          Back to Wardrobe
        </motion.a>
      </div>

      {/* Footer detail */}
      <div className="absolute bottom-10">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">
          CluttaPay Error Protocol — 001
        </p>
      </div>
    </div>
  );
};

export default NotFound;
