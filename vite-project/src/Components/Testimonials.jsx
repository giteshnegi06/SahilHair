import { motion } from "framer-motion";


const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Bride",
    text: "The bridal makeover was beyond my expectations. Sahil and his team are true artists. I felt like a queen on my wedding day.",
    image: "https://picsum.photos/seed/person-1/200/200",
  },
  {
    name: "Vikram Singh",
    role: "Fashion Model",
    text: "The only place in Karnal I trust with my hair. The precision and attention to detail are unmatched. Truly a luxury experience.",
    image: "https://picsum.photos/seed/person-2/200/200",
  },
  {
    name: "Priya Kapoor",
    role: "Regular Client",
    text: "Every visit is a treat. The atmosphere is so calming and the results are always consistent. Best hair colorist in town!",
    image: "https://picsum.photos/seed/person-3/200/200",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-luxury-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-[0.5em] text-luxury-gold font-bold mb-6 block">
              Voices
            </span>
            <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-8">
              What Our <br /> Clients Say
            </h2>
            <div className="w-20 h-[1px] bg-luxury-gold" />
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group p-10 border-l-2 border-luxury-text/10 hover:border-luxury-gold transition-all duration-700 bg-luxury-text/5"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 overflow-hidden grayscale-to-color">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl">{t.name}</h4>
                    <span className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold">{t.role}</span>
                  </div>
                </div>
                <p className="text-luxury-text/70 italic font-light leading-relaxed group-hover:translate-x-2 transition-transform duration-700">
                  "{t.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
