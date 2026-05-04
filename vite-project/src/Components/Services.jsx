import { motion } from "framer-motion";
import Hair from "../Images/Stlying.jpg";
import Makeover from "../Images/Makeover.jpg";
import Hairtreatments from "../Images/HAirtreatement.jpg";
import Perming from "../Images/perming.png";

const services = [
  {
    title: "Hair Styling",
    description: "Professional styling for every occasion — sleek, voluminous, or trendy looks tailored to you.",
    image: Hair
  },
  {
    title: "Bridal Makeover",
    description: "Exquisite makeup and hairstyling to make you shine on your special day.",
    image: Makeover
  },
  {
    title: "Hair Treatments (Wig & Patch)",
    description: "Advanced solutions like wigs and hair patches for a natural, confident look.",
    image: Hairtreatments
  },
  {
    title: "Hair Perming",
    description: "Get long-lasting curls or waves with modern, damage-minimizing perm techniques.",
    image: Perming
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-luxury-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.5em] text-luxury-gold font-bold mb-6 block">
              Our Expertise
            </span>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
              Curated <br /> Services
            </h2>
          </div>
          <p className="text-luxury-text/60 max-w-xs text-sm uppercase tracking-widest leading-loose">
            Experience the pinnacle of grooming with our bespoke services designed for the discerning individual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group border-t border-luxury-text/10 pt-10 pb-20 px-4 hover:shadow-2xl transition-all duration-700"
            >
              <div className="aspect-3/4 overflow-hidden mb-8">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5 }}
                  src={service.image}
                  alt={`${service.title} - Professional Salon Service at Sahil Hair Expert Karnal`}
                  className="w-full h-full object-cover grayscale-to-color"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-serif mb-4 group-hover:text-luxury-gold transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-sm text-luxury-text/60 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
