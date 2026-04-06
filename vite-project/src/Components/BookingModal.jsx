import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function BookingModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-luxury-text/40 backdrop-blur-sm z-100"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 m-auto w-full max-w-2xl h-fit max-h-[90vh] bg-luxury-bg z-101 overflow-y-auto shadow-2xl border border-luxury-text/10"
          >
            <div className="relative p-8 md:p-12">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 hover:text-luxury-gold transition-colors"
              >
                <X size={24} strokeWidth={1.5} />
              </button>

              <div className="text-center mb-10">
                <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold font-bold mb-4 block">
                  Reservation
                </span>
                <h2 className="text-4xl md:text-5xl font-serif">Request an Appointment</h2>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-transparent border-b border-luxury-text/20 py-3 focus:border-luxury-gold outline-none transition-colors font-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full bg-transparent border-b border-luxury-text/20 py-3 focus:border-luxury-gold outline-none transition-colors font-light"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Select Service</label>
                  <select className="w-full bg-transparent border-b border-luxury-text/20 py-3 focus:border-luxury-gold outline-none transition-colors font-light appearance-none cursor-pointer">
                    <option value="">Choose a service...</option>
                    <option value="haircut">Precision Haircut</option>
                    <option value="beard">Beard Styling</option>
                    <option value="makeup">Bridal Makeover</option>
                    <option value="color">Hair Color</option>
                    <option value="spa">Hair Spa & Treatment</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Preferred Date</label>
                    <input
                      type="date"
                      className="w-full bg-transparent border-b border-luxury-text/20 py-3 focus:border-luxury-gold outline-none transition-colors font-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Preferred Time</label>
                    <input
                      type="time"
                      className="w-full bg-transparent border-b border-luxury-text/20 py-3 focus:border-luxury-gold outline-none transition-colors font-light"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Special Requests</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your requirements..."
                    className="w-full bg-transparent border-b border-luxury-text/20 py-3 focus:border-luxury-gold outline-none transition-colors font-light resize-none"
                  />
                </div>

                <div className="pt-6">
                  <button className="w-full relative group overflow-hidden px-10 py-5 bg-luxury-text text-luxury-bg text-xs uppercase tracking-[0.3em] font-bold">
                    <span className="relative z-10">Submit Request</span>
                    <div className="absolute inset-0 bg-luxury-gold translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
                  </button>
                  <p className="text-[9px] text-center mt-4 text-luxury-text/40 uppercase tracking-widest">
                    We will contact you shortly to confirm your appointment.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
