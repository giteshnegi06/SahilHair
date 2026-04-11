import { motion } from "framer-motion";

const galleryImages = [
  {
    url: "https://picsum.photos/seed/hair-1/800/1000",
    title: "Editorial Cut",
    category: "Styling"
  },
  {
    url: "https://picsum.photos/seed/hair-2/800/1000",
    title: "Golden Glow",
    category: "Color"
  },
  {
    url: "https://picsum.photos/seed/hair-3/800/1000",
    title: "Sharp Precision",
    category: "Barbering"
  },
  {
    url: "https://picsum.photos/seed/hair-4/800/1000",
    title: "Bridal Elegance",
    category: "Makeover"
  }
];

export default function Gallery() {
  return (
    <section className="py-20 bg-luxury-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold font-bold mb-4 block">
              Visual Journey
            </span>
            <h2 className="text-4xl md:text-6xl font-serif">The Gallery</h2>
          </div>
          <p className="text-luxury-text/40 text-[10px] uppercase tracking-[0.3em] max-w-xs text-right hidden md:block">
            A glimpse into the artistry and precision of Sahil Hair Expert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1 }}
              className="group relative aspect-[4/5] overflow-hidden bg-luxury-text/5"
            >
              <motion.img
                whileHover={{ scale: 1.15, rotate: 1 }}
                transition={{ duration: 1.5 }}
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover grayscale-to-color"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8">
                <span className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold mb-2">
                  {image.category}
                </span>
                <h3 className="text-xl font-serif text-white">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
