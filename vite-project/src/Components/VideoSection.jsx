import { motion } from "framer-motion";

const videos = [
  { id: "dQw4w9WgXcQ", title: "Signature Styling" },
  { id: "dQw4w9WgXcQ", title: "Luxury Grooming" },
  { id: "dQw4w9WgXcQ", title: "Bridal Artistry" },
  { id: "dQw4w9WgXcQ", title: "Color Transformation" },
];

export default function VideoSection() {
  return (
    <section className="py-32 bg-luxury-bg border-b border-luxury-text/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col justify-center items-center">
        <div className="text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold font-bold mb-6 block">
            Cinematic
          </span>
          <h2 className="text-5xl md:text-7xl font-serif">The Art of Transformation</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 gap-x-5  items-center w-250">
          {videos.map((video, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="relative aspect-video w-full overflow-hidden border border-luxury-text/10 shadow-2xl group rounded-3xl"
            >
              <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-1000" />
              
              <iframe
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-2000 rounded-3xl"
                src={`https://www.youtube.com/embed/${video.id}?autoplay=0&mute=1&controls=1`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span className="text-[10px] uppercase tracking-widest text-white bg-luxury-gold px-3 py-1 font-bold">
                  {video.title}
                </span>
              </div>
              
              <div className="absolute -inset-2 border border-luxury-gold/10 -z-10 group-hover:inset-0 transition-all duration-1000" />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-luxury-text/5 pt-12 w-full">
          <p className="text-luxury-text/40 text-[10px] uppercase tracking-[0.3em] max-w-sm">
            Watch our signature techniques and the meticulous process behind every makeover.
          </p>
          <div className="flex space-x-12">
            <div className="text-center">
              <span className="block text-2xl font-serif text-luxury-gold">100+</span>
              <span className="text-[8px] uppercase tracking-widest opacity-40">Transformations</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-serif text-luxury-gold">HD</span>
              <span className="text-[8px] uppercase tracking-widest opacity-40">Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
