import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Clock, Calendar as CalendarIcon, MapPin } from "lucide-react";
import { useState, useEffect } from "react";



export default function BookingModal({ isOpen, onClose, initialService }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [showClock, setShowClock] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(null);
  const [selectedMinute, setSelectedMinute] = useState(null);
  const [isAm, setIsAm] = useState(false);

  // Calendar Helpers
  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const totalDays = daysInMonth(year, month);
    const firstDay = firstDayOfMonth(year, month);
    const days = [];

    // Empty slots for previous month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10" />);
    }

    // Days of the month
    for (let d = 1; d <= totalDays; d++) {
      const date = new Date(year, month, d);
      const isSelected = selectedDate?.toDateString() === date.toDateString();
      const isToday = new Date().toDateString() === date.toDateString();

      days.push(
        <button
          key={d}
          onClick={() => {
            setSelectedDate(date);
            setShowCalendar(false);
          }}
          className={`h-10 w-10 flex items-center justify-center text-xs transition-all duration-300 rounded-full
            ${isSelected ? "bg-luxury-gold text-white" : "hover:bg-luxury-gold/20"}
            ${isToday && !isSelected ? "border border-luxury-gold text-luxury-gold" : ""}
          `}
        >
          {d}
        </button>
      );
    }
    return days;
  };

  const nextMonth = () => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
  const prevMonth = () => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));

  // Clock Helpers
  const renderClock = () => {
    const hours = Array.from({ length: 12 }, (_, i) => i + 1);
    const minutes = [0, 15, 30, 45];
    
    return (
      <div className="relative w-64 h-64 rounded-full border border-luxury-text/10 flex items-center justify-center mx-auto">
        {/* Hours Circle */}
        {hours.map((h) => {
          const angle = (h * 30 - 90) * (Math.PI / 180);
          const x = Math.cos(angle) * 90;
          const y = Math.sin(angle) * 90;
          return (
            <button
              key={`h-${h}`}
              onClick={() => setSelectedHour(h)}
              style={{ transform: `translate(${x}px, ${y}px)` }}
              className={`absolute h-8 w-8 flex items-center justify-center text-[10px] rounded-full transition-all duration-300
                ${selectedHour === h ? "bg-luxury-gold text-white" : "hover:bg-luxury-gold/20"}
              `}
            >
              {h}
            </button>
          );
        })}

        {/* Minutes Circle (Inner) */}
        {minutes.map((m) => {
          const angle = (m * 6 - 90) * (Math.PI / 180);
          const x = Math.cos(angle) * 50;
          const y = Math.sin(angle) * 50;
          return (
            <button
              key={`m-${m}`}
              onClick={() => setSelectedMinute(m)}
              style={{ transform: `translate(${x}px, ${y}px)` }}
              className={`absolute h-8 w-8 flex items-center justify-center text-[10px] rounded-full transition-all duration-300
                ${selectedMinute === m ? "bg-luxury-gold text-white" : "hover:bg-luxury-gold/10"}
              `}
            >
              {m === 0 ? "00" : m}
            </button>
          );
        })}

        <div className="w-1 h-1 bg-luxury-gold rounded-full" />
        
        {/* Center Display */}
        <div className="absolute text-center">
          <div className="text-xl font-serif">
            {selectedHour || "--"}:{selectedMinute !== null ? selectedMinute.toString().padStart(2, '0') : "--"}
          </div>
          <div className="text-[8px] uppercase tracking-widest opacity-40">{isAm ? "AM" : "PM"}</div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (selectedHour !== null && selectedMinute !== null) {
      setSelectedTime(`${selectedHour}:${selectedMinute.toString().padStart(2, '0')} ${isAm ? 'AM' : 'PM'}`);
    }
  }, [selectedHour, selectedMinute, isAm]);

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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 m-auto w-full max-w-4xl h-fit max-h-[95vh] bg-luxury-bg z-[101] overflow-y-auto shadow-2xl border border-luxury-text/10"
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
                  <select 
                    defaultValue={initialService}
                    className="w-full bg-transparent border-b border-luxury-text/20 py-3 focus:border-luxury-gold outline-none transition-colors font-light appearance-none cursor-pointer"
                  >
                    <option value="">Choose a service...</option>
                    <optgroup label="Packages">
                      <option value="Essential Grooming">Essential Grooming</option>
                      <option value="The Signature Experience">The Signature Experience</option>
                      <option value="Bridal / Groom Royale">Bridal / Groom Royale</option>
                    </optgroup>
                    <optgroup label="Individual Services">
                      <option value="haircut">Precision Haircut</option>
                      <option value="beard">Beard Styling</option>
                      <option value="makeup">Bridal Makeover</option>
                      <option value="color">Hair Color</option>
                      <option value="spa">Hair Spa & Treatment</option>
                    </optgroup>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date Picker */}
                  <div className="space-y-2 relative">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Preferred Date</label>
                    <div 
                      onClick={() => { setShowCalendar(!showCalendar); setShowClock(false); }}
                      className="w-full border-b border-luxury-text/20 py-3 flex items-center justify-between cursor-pointer hover:border-luxury-gold transition-colors"
                    >
                      <span className="font-light text-sm">
                        {selectedDate ? selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : "Select Date"}
                      </span>
                      <CalendarIcon size={16} className="text-luxury-gold" />
                    </div>
                    
                    <AnimatePresence>
                      {showCalendar && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 w-full bg-luxury-bg border border-luxury-text/10 p-4 z-50 shadow-2xl mt-2"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <button onClick={prevMonth} className="p-1 hover:text-luxury-gold"><ChevronLeft size={16} /></button>
                            <span className="text-[10px] uppercase tracking-widest font-bold">
                              {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                            </span>
                            <button onClick={nextMonth} className="p-1 hover:text-luxury-gold"><ChevronRight size={16} /></button>
                          </div>
                          <div className="grid grid-cols-7 gap-1 text-center mb-2">
                            {['S','M','T','W','T','F','S'].map(d => (
                              <span key={d} className="text-[8px] opacity-40">{d}</span>
                            ))}
                          </div>
                          <div className="grid grid-cols-7 gap-1">
                            {renderCalendar()}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Time Picker */}
                  <div className="space-y-2 relative">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Preferred Time</label>
                    <div 
                      onClick={() => { setShowClock(!showClock); setShowCalendar(false); }}
                      className="w-full border-b border-luxury-text/20 py-3 flex items-center justify-between cursor-pointer hover:border-luxury-gold transition-colors"
                    >
                      <span className="font-light text-sm">{selectedTime || "Select Time"}</span>
                      <Clock size={16} className="text-luxury-gold" />
                    </div>

                    <AnimatePresence>
                      {showClock && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 w-full bg-luxury-bg border border-luxury-text/10 p-6 z-50 shadow-2xl mt-2"
                        >
                          <div className="text-center mb-4 text-[10px] uppercase tracking-widest font-bold">Select Hour</div>
                          {renderClock()}
                          <div className="mt-6 flex justify-center space-x-4">
                            <button 
                              onClick={() => setIsAm(true)}
                              className={`text-[8px] uppercase tracking-widest font-bold px-3 py-1 border ${isAm ? 'bg-luxury-gold text-white border-luxury-gold' : 'border-luxury-text/20'}`}
                            >
                              AM
                            </button>
                            <button 
                              onClick={() => setIsAm(false)}
                              className={`text-[8px] uppercase tracking-widest font-bold px-3 py-1 border ${!isAm ? 'bg-luxury-gold text-white border-luxury-gold' : 'border-luxury-text/20'}`}
                            >
                              PM
                            </button>
                          </div>
                          <button 
                            onClick={() => setShowClock(false)}
                            disabled={selectedHour === null || selectedMinute === null}
                            className="w-full mt-6 py-2 text-[8px] uppercase tracking-[0.2em] font-bold border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white transition-all disabled:opacity-30"
                          >
                            Confirm Time
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
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