import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 bg-luxury-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-6"
          >
            <span className="text-xs uppercase tracking-[0.5em] text-luxury-gold font-bold mb-6 block">
              The Studio
            </span>
            <h2 className="text-5xl md:text-7xl font-serif mb-10 leading-tight">
              Elegance in <br /> Every Detail
            </h2>
            <div className="prose prose-lg text-luxury-text/80 font-light leading-relaxed">
              <p className="first-letter:text-7xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:text-luxury-gold">
                Sahil Hair Expert is more than just a salon; it's a sanctuary of style in Karnal. 
                Founded on the principles of precision and personalized care, we've spent years 
                perfecting the art of grooming. Our studio brings a touch of global fashion 
                standards to the local landscape, offering an experience that is both intimate and grand.
              </p>
              <p className="mt-6">
                From the moment you step in, you're treated to an atmosphere of luxury. 
                Our team of experts, led by Sahil, is dedicated to understanding your unique 
                identity and translating it into a look that speaks volumes. We believe that 
                true beauty lies in the details, and we leave no stone unturned to ensure 
                you leave our studio feeling like the best version of yourself.
              </p>
            </div>
            
            <div className="mt-12 flex items-center space-x-8">
              <div className="text-center">
                <span className="block text-4xl font-serif text-luxury-gold">7+</span>
                <span className="text-[10px] uppercase tracking-widest opacity-50">Years Experience</span>
              </div>
              <div className="w-[1px] h-12 bg-luxury-text/10" />
              <div className="text-center">
                <span className="block text-4xl font-serif text-luxury-gold">5k+</span>
                <span className="text-[10px] uppercase tracking-widest opacity-50">Happy Clients</span>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-6 relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="https://picsum.photos/seed/hair-stylist-1/800/1000" 
                alt="The Studio" 
                className="w-full h-full object-cover grayscale-to-color"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-luxury-gold/30 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
