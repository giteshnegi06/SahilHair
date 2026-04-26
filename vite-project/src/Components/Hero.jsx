import { motion } from "framer-motion";
import TextType from "./TypeText";

export default function Hero({ onBookNow }) {
  return (
    <section id="home" className="relative min-h-screen pt-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="h-full w-full grid grid-cols-6 grid-rows-6 border-luxury-text">
          {[...Array(36)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.02, duration: 0.5 }}
              className="border border-luxury-text/20"
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tighter mb-8">
              <span className="sr-only">Sahil Hair Expert - Best Hair Stylist & Makeover Studio in Karnal, Haryana</span>
              Crafting <br />
              <motion.span
                initial={{ opacity: 0, rotateX: 90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="italic text-luxury-gold inline-block"
              >
                Signature
              </motion.span> <br />
              Looks
            </h1>
            <div className="h-20 mb-2">
              <h3 className="text-lg md:text-xl text-luxury-text/70 max-w-md font-light tracking-wide">
                <TextType
                  text={["A premium grooming and hair Treatment experience in Karnal. Where artistry meets elegance."]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor
                  cursorCharacter="_"
                  texts={["A premium grooming and hair Treatment experience in Karnal. Where artistry meets elegance."]}
                  deletingSpeed={50}
                  variableSpeedEnabled={false}
                  variableSpeedMin={60}
                  variableSpeedMax={120}
                  cursorBlinkDuration={0.5}
                />
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onBookNow}
                className="relative group overflow-hidden px-10 py-5 bg-luxury-text text-luxury-bg text-xs uppercase tracking-[0.2em] font-bold"
              >
                <span className="relative z-10">Book Appointment</span>
                <div className="absolute inset-0 bg-luxury-gold translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
              </button>
              <button
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 border border-luxury-text text-xs uppercase tracking-[0.2em] font-bold hover:bg-luxury-text hover:text-luxury-bg transition-all duration-700">
                View Services
              </button>
              <a href="/" className="lg:hidden border border-luxury-text text-center">
                <button className="px-10 py-5  text-xs uppercase tracking-[0.2em] font-bold hover:bg-luxury-text hover:text-luxury-bg transition-all duration-700  ">
                  View Products
                </button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -20, 0]
            }}
            transition={{
              opacity: { duration: 1.5 },
              scale: { duration: 1.5 },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="aspect-3/4 relative overflow-hidden shadow-2xl"
          >
            <img
              src="https://picsum.photos/seed/hair-salon-1/800/1067"
              alt="Luxury Hair Styling and Grooming at Sahil Hair Expert Karnal"
              className="w-full h-full object-cover grayscale-to-color"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Vertical Text */}
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden xl:block">
            <span className="vertical-text text-[10px] uppercase tracking-[0.5em] text-luxury-text/40 font-bold">
              Since 2018 / Karnal / Haryana
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-10 left-0 w-full h-px bg-luxury-text/10" />
    </section>
  );
}
