import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Camera, ShoppingBag, Banknote, Sparkles } from "lucide-react";

const WardrobeCarousel = () => {
  const PRIMARY_COLOR = "#BCCCD4";

  // Simple images of clothes not in use
  const slidingImages = [
    "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=500", // Closet
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=500", // T-shirt
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=500", // Jacket
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500", // Shoes
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=500", // Bag
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-xl"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-none">
              Not wearing it? <br />
              <span style={{ color: PRIMARY_COLOR }}>Sell it now.</span>
            </h2>
          </motion.div>
          <p className="text-slate-500  text-lg max-w-xs">
            Stop letting good clothes sit in your wardrobe. Clear your space and
            get paid instantly.
          </p>
        </div>

        {/* The Fast Moving Carousel */}
        <div className="relative flex whitespace-nowrap overflow-hidden py-10 border-y border-slate-100">
          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...slidingImages, ...slidingImages].map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="w-[280px] h-[380px] flex-shrink-0 rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white"
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  alt="Wardrobe item"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-24 max-w-6xl mx-auto">
          {[
            {
              icon: <Camera size={22} />,
              title: "1. Take a Photo",
              desc: "Use your phone to snap a few clean shots of your clothes.",
            },
            {
              icon: <Sparkles size={22} />,
              title: "2. We Clean It Up",
              desc: "We edit the photos to make them look professional and expensive.",
            },
            {
              icon: <ShoppingBag size={22} />,
              title: "3. Listed for Sale",
              desc: "Your items go live on the CluttaPay market for others to buy.",
            },
            {
              icon: <Banknote size={22} />,
              title: "4. Get Paid",
              desc: "When it sells, you keep 70% of the cash. We take a small 30% fee.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-[2.5rem] bg-white border border-slate-100 transition-all duration-500 hover:bg-slate-50/50 text-center"
            >
              {/* Icon Box */}
              <div
                className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-6 transition-transform group-hover:rotate-12"
                style={{
                  backgroundColor: `${PRIMARY_COLOR}20`,
                  color: "#0F172A",
                }}
              >
                {step.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-lg font-black text-slate-950 mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed px-2">
                {step.desc}
              </p>

              {/* Animated Bottom Bar */}
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-12"
                style={{ backgroundColor: PRIMARY_COLOR }}
              />
            </div>
          ))}
        </div>
        {/* Massive Button */}
        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 bg-slate-950 text-white px-8 py-4 rounded-full font-bold text-base shadow-xl transition-all"
          >
            <span>Declutter Your Wardrobe</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
              style={{ color: PRIMARY_COLOR }}
            />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default WardrobeCarousel;
