/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Gallery from "./Components/Gallery";
import About from "./Components/About";
import Barbers from "./Components/Barber";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import VideoSection from "./Components/VideoSection";
import Testimonials from "./Components/Testimonials";
import Pricing from "./Components/Pricing";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";
import BookingModal from "./Components/BookingModal";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen bg-luxury-bg selection:bg-luxury-gold selection:text-white">
      <Navbar onBookNow={openBooking} />
      <main>
        <Hero onBookNow={openBooking} />
        <Gallery/>
        <About />
        <Barbers />
        <Services />
        <Portfolio />
        <VideoSection/>
        <Testimonials />
        <Pricing onBookNow={openBooking} />
        <CTA onBookNow={openBooking} />
      </main>
      <Footer />
      
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}
