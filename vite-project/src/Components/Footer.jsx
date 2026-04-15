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
            <div className="w-full h-48  border border-luxury-text/10 rounded-2xl">
              <iframe
                title="Sahil Hair Expert Location"
                src="https://www.google.com/maps?q=29.67552564374488,77.0147673283125&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold mb-8 text-luxury-gold">Contact</h4>
            <div className="text-sm text-luxury-text/80 space-y-2 font-light">
              <a href="tel:+919992310449" className="block hover:text-luxury-gold transition-colors">+91 99923 10449</a>
              <a href="mailto:hello@sahilhairexpert.com" className="block hover:text-luxury-gold transition-colors">hello@sahilhairexpert.com</a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold mb-8 text-luxury-gold">Social</h4>
            <div className="text-sm text-luxury-text/80 space-y-2 font-light">
              <a
                href="https://www.instagram.com/sahil__hair_expert?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-luxury-gold transition-colors"
              >
                Instagram
              </a>

              <a
                href="https://www.facebook.com/SahilHairStylist/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-luxury-gold transition-colors"
              >
                Facebook
              </a>

              <a
                href="https://youtube.com/@hairexpertsahil?si=uo1fGLZ_VXCa1CKA"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-luxury-gold transition-colors"
              >
                YouTube
              </a>
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
