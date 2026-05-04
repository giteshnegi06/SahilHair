import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rohan Verma",
    role: "Local Guide",
    text: "Sahil is a true magician with hair! I've been coming here for 2 years and every visit is a masterpiece. Best hair academy in Karnal for both grooming and learning.",
    rating: 5,
    date: "2 months ago"
  },
  {
    name: "Megha Gupta",
    role: "Regular Client",
    text: "Amazing services! The staff is very professional and the hygiene standards are top-notch. Highly recommended for bridal makeup and hair styling.",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Amit Saini",
    role: "Stylist",
    text: "The best place to learn and get styled. Sahil's attention to detail is incomparable. The atmosphere is very welcoming and luxurious.",
    rating: 5,
    date: "3 weeks ago"
  },
  {
    name: "Sonia Mehta",
    role: "Bridal Client",
    text: "Found this place through Google and I'm so glad I did. Excellent service and very polite staff. They made my special day even more beautiful.",
    rating: 5,
    date: "4 months ago"
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-32 bg-luxury-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-[0.5em] text-luxury-gold font-bold mb-6 block">
              Reviews
            </span>
            <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-8">
              Trust from <br /> Our Clients
            </h2>
            <div className="p-6 border border-luxury-gold/20 bg-luxury-text/5 inline-block">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex text-luxury-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="text-xl font-serif">4.9 / 5</span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-luxury-text/50">Based on Google Reviews</p>
            </div>
            <div className="mt-12 w-20 h-[1px] bg-luxury-gold" />
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group p-10 border border-luxury-text/10 hover:border-luxury-gold transition-all duration-700 bg-luxury-text/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-luxury-gold mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" className="mr-1" />
                    ))}
                  </div>
                  <p className="text-luxury-text/70 italic font-light leading-relaxed mb-8">
                    "{t.text}"
                  </p>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="font-serif text-xl mb-1">{t.name}</h4>
                    <span className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold">{t.role}</span>
                  </div>
                  <span className="text-[10px] text-luxury-text/30 uppercase tracking-tighter">{t.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
