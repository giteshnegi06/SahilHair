import { motion } from "framer-motion";

export default function CTA({ onBookNow }) {
  return (
    <section className="py-10 lg:py-40 bg-luxury-text/60 text-luxury-bg relative overflow-hidden">
      {/* Decorative Marquee */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full opacity-10 pointer-events-none overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, "-30%"] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="text-[25vw] font-serif italic flex w-fit"
        >
          <span className="mr-20">SAHIL HAIR EXPERT</span>
          <span className="mr-20">SAHIL HAIR EXPERT</span>
          <span className="mr-20">SAHIL HAIR EXPERT</span>
          <span className="mr-20">SAHIL HAIR EXPERT</span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-12 tracking-tighter">
            Your Look. <br />
            <span className="italic text-luxury-gold">Your Identity.</span>
          </h2>
          
          <button 
            onClick={onBookNow}
            className="relative group overflow-hidden px-16 py-6 bg-luxury-bg text-luxury-text text-xs uppercase tracking-[0.3em] font-bold"
          >
            <span className="relative z-10">Book Your Session</span>
            <div className="absolute inset-0 bg-luxury-gold translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
