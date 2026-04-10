export default function Footer() {
  return (
    <footer className="py-24 bg-luxury-bg border-t border-luxury-text/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5">
            <div className="text-3xl font-serif font-bold tracking-tighter mb-8">
              SAHIL <span className="text-luxury-gold">HAIR</span> EXPERT
            </div>
            <p className="text-luxury-text/60 max-w-sm leading-relaxed font-light">
              Redefining luxury grooming in Karnal. Our studio is dedicated to the art of
              transformation and the celebration of individual style.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold mb-8 text-luxury-gold">Location</h4>
            <address className="not-italic text-sm text-luxury-text/80 space-y-2 font-light mb-8">
              <p>Dugra Colony Road, Sec 34</p>
              <p>Karnal, Haryana 132001</p>
              <p>India</p>
            </address>
            <div className="w-full h-48  border border-luxury-text/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.123456789!2d77.0121165!3d29.6755043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e7be2eb812a93%3A0x90d67b39227e3173!2sSAHIL%20HAIR%20EXPERT!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SAHIL HAIR EXPERT Location"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold mb-8 text-luxury-gold">Contact</h4>
            <div className="text-sm text-luxury-text/80 space-y-2 font-light">
              <p>+91 98765 43210</p>
              <p>hello@sahilhairexpert.com</p>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold mb-8 text-luxury-gold">Social</h4>
            <div className="text-sm text-luxury-text/80 space-y-2 font-light">
              <a href="#" className="block hover:text-luxury-gold transition-colors">Instagram</a>
              <a href="#" className="block hover:text-luxury-gold transition-colors">Facebook</a>
              <a href="#" className="block hover:text-luxury-gold transition-colors">YouTube</a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-luxury-text/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-luxury-text/40">
            © 2026 Sahil Hair Expert. All rights reserved.
          </p>
          <p className="text-luxury-text/40 text-[12px] flex items-center gap-1">
            Made with &#10084;&#65039; by <a href="https://wa.me/+918894143680?text=Hi%20I%20want%20to%20build%20a%20website" className="text-luxury-gold hover:underline" target="_blank" rel="noopener noreferrer">
              Web.Loomic
            </a>
          </p>
          <div className="flex space-x-8 text-[10px] uppercase tracking-widest text-luxury-text/40">
            <a href="#" className="hover:text-luxury-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-luxury-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
