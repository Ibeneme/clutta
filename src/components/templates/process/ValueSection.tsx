import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Filter } from "lucide-react";

const PRIMARY_COLOR = "#BCCCD4";

const GallerySection = () => {
  const [filter, setFilter] = useState("All");

  const items = [
    {
      id: 1,
      tag: "Streetwear",
      price: "$85",
      size: "large",
      url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800",
    },

    {
      id: 3,
      tag: "Accessories",
      price: "$120",
      size: "medium",
      url: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800",
    },
    {
      id: 4,
      tag: "Streetwear",
      price: "$65",
      size: "small",
      url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800",
    },
    {
      id: 5,
      tag: "Beach",
      price: "$90",
      size: "medium",
      url: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?q=80&w=800",
    },
    {
      id: 6,
      tag: "Essentials",
      price: "$110",
      size: "large",
      url: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800",
    },
  ];

  const categories = [
    "All",
    "Streetwear",
    "Beach",
    "Essentials",
    "Accessories",
  ];
  const filteredItems =
    filter === "All" ? items : items.filter((i) => i.tag === filter);

  return (
    <section className="py-32 bg-white px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 block mb-4">
              The Clothe
            </span>
            <h2 className="text-6xl font-black tracking-tighter">
              Recently{" "}
              <span style={{ color: PRIMARY_COLOR }}>Decluttered.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === cat
                    ? "bg-slate-950 text-white"
                    : "bg-slate-50 text-slate-400 border border-slate-100 hover:border-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Gallery */}
        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative break-inside-avoid rounded-[2.5rem] overflow-hidden group bg-slate-100"
              >
                <img
                  src={item.url}
                  alt={item.tag}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Item Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-8">
                  <div className="flex justify-end">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <ArrowUpRight size={20} className="text-slate-950" />
                    </div>
                  </div>

                  <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">
                      {item.tag}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black">{item.price}</span>
                      <span className="text-xs font-normal opacity-50 italic">
                        Est. Payout
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Callout */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 font-normal text-lg mb-8 italic">
            "One person's clutter, another's new favorite."
          </p>
          <button className="px-10 py-5 rounded-full bg-slate-950 text-white font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-colors">
            Coming Soon
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
