import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";
const barbers = [
    {
        name: "Sahil",
        role: "Master Stylist & Founder",
        rating: 4.9,
        reviews: 120,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
    },
    {
        name: "Vikram",
        role: "Beard Architect",
        rating: 4.5,
        reviews: 98,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
    },
    {
        name: "Arjun",
        role: "Senior Barber",
        rating: 4.3,
        reviews: 76,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    },
    {
        name: "Rohan",
        role: "Senior Barber",
        rating: 4.7,
        reviews: 88,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    }
];

export default function Barbers() {
    return (
        <section id="barbers" className="py-24 bg-luxury-bg border-y border-luxury-text/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold font-bold mb-4 block"
                    >
                        The Artisans
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif mb-6"
                    >
                        Meet the Experts
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="h-px bg-luxury-gold w-24 mx-auto"
                    />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {barbers.map((barber, index) => (
                        <motion.div
                            key={barber.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative"
                        >
                            <div className="relative overflow-hidden aspect-square mb-6 border border-white/5 grayscale-to-color">
                                <img
                                    src={barber.image}
                                    alt={barber.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="text-center">
                                <h3 className="text-xl font-serif mb-1 group-hover:text-luxury-gold transition-colors tracking-wide">
                                    {barber.name}
                                </h3>

                                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold mb-3">
                                    {barber.role}
                                </p>

                                {/* ⭐ Stars */}
                                <div className="flex items-center justify-center gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => {
                                        const full = i < Math.floor(barber.rating);
                                        const half = i === Math.floor(barber.rating) && barber.rating % 1 >= 0.5;

                                        if (full) {
                                            return <Star key={i} size={14} className="fill-luxury-gold text-luxury-gold" />;
                                        }
                                        if (half) {
                                            return <StarHalf key={i} size={14} className="fill-luxury-gold text-luxury-gold" />;
                                        }
                                        return <Star key={i} size={14} className="text-gray-400" />;
                                    })}
                                </div>

                                {/* 🟨 Google-style badge */}
                                <div className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-400/50 text-black text-xs font-semibold rounded-md">
                                    <Star size={12} className="fill-black" />
                                    {barber.rating} • {barber.reviews} reviews
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
