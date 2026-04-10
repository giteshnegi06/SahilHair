import { motion } from "framer-motion";


const portfolioItems = [
  "https://picsum.photos/seed/model-1/800/1067",
  "https://picsum.photos/seed/model-2/800/1067",
  "https://picsum.photos/seed/model-3/800/1067",
  "https://picsum.photos/seed/model-4/800/1067",
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-luxury-bg border-y border-luxury-text/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-xs uppercase tracking-[0.5em] text-luxury-gold font-bold mb-6 block">
            The Gallery
          </span>
          <h2 className="text-5xl md:text-7xl font-serif">Signature Work</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1 }}
              className="relative aspect-[3/4] overflow-hidden group"
            >
              <img 
                src={item} 
                alt={`Portfolio ${index + 1}`} 
                className="w-full h-full object-cover grayscale-to-color group-hover:scale-110 transition-transform duration-[2000ms]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-luxury-text/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className="px-12 py-5 border border-luxury-text text-xs uppercase tracking-[0.2em] font-bold hover:bg-luxury-text hover:text-luxury-bg transition-all duration-700">
            Follow on Instagram
          </button>
        </div>
      </div>
    </section>
  );
}
