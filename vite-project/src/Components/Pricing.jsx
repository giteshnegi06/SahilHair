import { motion } from "framer-motion";

const packages = [
  {
    name: "Essential Grooming",
    price: "₹1,499",
    features: ["Precision Haircut", "Beard Styling", "Hair Wash", "Basic Styling"],
    highlight: false,
  },
  {
    name: "The Signature Experience",
    price: "₹3,999",
    features: ["Advanced Haircut", "Luxury Shave", "Face Clean-up", "Head Massage", "Premium Styling"],
    highlight: true,
  },
  {
    name: "Bridal / Groom Royale",
    price: "Custom",
    features: ["Full Consultation", "Complete Makeover", "Trial Session", "On-site Service"],
    highlight: false,
  },
];



export default function Pricing({ onBookNow }) {
  return (
    <section className="py-32 bg-luxury-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-xs uppercase tracking-[0.5em] text-luxury-gold font-bold mb-6 block">
            Investment
          </span>
          <h2 className="text-5xl md:text-7xl font-serif">Luxury Packages</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1 }}
              className={`p-12 border border-luxury-text/10 flex flex-col items-center text-center transition-all duration-700 hover:shadow-xl relative ${
                pkg.highlight ? "border-t-4 border-t-luxury-gold bg-white z-10 scale-105 shadow-2xl" : "bg-transparent"
              }`}
            >
              <h3 className="text-2xl font-serif mb-4">{pkg.name}</h3>
              <div className="text-4xl font-serif text-luxury-gold mb-10">{pkg.price}</div>
              
              <ul className="space-y-4 mb-12 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="text-xs uppercase tracking-widest text-luxury-text/60">
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={onBookNow}
                className={`w-full py-5 text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 ${
                pkg.highlight ? "bg-luxury-gold text-white hover:bg-luxury-text" : "border border-luxury-text hover:bg-luxury-text hover:text-luxury-bg"
              }`}>
                Select Package
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
