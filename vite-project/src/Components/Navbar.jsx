import { motion } from "framer-motion";


export default function Navbar({ onBookNow }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-luxury-bg/80 backdrop-blur-md border-b border-luxury-text/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-serif font-bold tracking-tighter"
        >
          SAHIL <span className="text-luxury-gold">HAIR</span> EXPERT
        </motion.div>
        
        <div className="hidden md:flex space-x-12 text-xs uppercase tracking-[0.2em] font-medium">
          {["Home", "Services", "About", "Portfolio",].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-luxury-gold transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBookNow}
          className="px-6 py-2 border border-luxury-text text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-luxury-text hover:text-luxury-bg transition-all duration-500"
        >
          Book Now
        </motion.button>
      </div>
    </nav>
  );
}
