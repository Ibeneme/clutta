import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Info, HelpCircle } from "lucide-react";
import { AiFillInstagram } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const PRIMARY_COLOR = "#BCCCD4";

  // The logic to handle the scroll on any device size
  const handleScroll = (id) => {
    // 1. Close mobile menu immediately
    setIsOpen(false);

    // 2. Small delay to let the menu close animation start, then scroll
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const navHeight = 80; // height of your navbar
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100); 
  };

  const navLinks = [
    { name: "Our Catalogues", id: "catalogues", icon: <ShoppingBag size={18} /> },
    { name: "About Us", id: "about", icon: <Info size={18} /> },
    { name: "FAQs", id: "faq", icon: <HelpCircle size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-black tracking-tighter text-slate-900">
              cluttapay<span style={{ color: PRIMARY_COLOR }}>.</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.id)}
                className="group flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.15em] text-slate-400 hover:text-slate-900 transition-colors"
              >
                <span className="group-hover:scale-110 transition-transform" style={{ color: PRIMARY_COLOR }}>
                  {link.icon}
                </span>
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6 border-l border-slate-100 pl-10">
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-all">
              <AiFillInstagram size={24} />
            </a>
            <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
              Coming Soon
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-10 space-y-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScroll(link.id)}
                  className="flex items-center gap-4 text-2xl font-black text-slate-900 w-full text-left tracking-tighter"
                >
                  <div className="p-3 rounded-2xl bg-slate-50" style={{ color: PRIMARY_COLOR }}>
                    {link.icon}
                  </div>
                  {link.name}
                </button>
              ))}
              
              <div className="pt-8 border-t border-slate-50">
                 <button className="w-full py-5 rounded-[2rem] bg-slate-900 text-white font-black uppercase text-xs tracking-[0.2em]">
                    Coming 20.05.26
                 </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;