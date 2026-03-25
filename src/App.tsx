import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Phone, ChevronRight, Star, Shield, Clock, MapPin, CheckCircle2, ChevronLeft, Menu, X } from 'lucide-react';
import { cn } from './lib/utils';

export default function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

  return (
    <div className="min-h-screen bg-primary text-text-soft selection:bg-accent selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero opacity={opacity} scale={scale} />
        <Services />
        <Positioning />
        <Showcase />
        <WhyChooseUs />
        <CallToAction />
        <Contact />
      </main>

      <Footer />
      <StickyCTAs />
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
          scrolled ? 'bg-primary/90 backdrop-blur-md border-white/10 py-3 md:py-4' : 'bg-transparent py-4 md:py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a href="#" className="block z-50 relative">
            <img 
              src="https://i.imgur.com/pfdprVK.png" 
              alt="Jay's Mobile Detailing" 
              className="h-14 sm:h-20 md:h-28 w-auto object-contain transition-all duration-300"
              referrerPolicy="no-referrer"
            />
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <a href="#services" className="hover:text-white transition-colors">SERVICES</a>
            <a href="#showcase" className="hover:text-white transition-colors">SHOWCASE</a>
            <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:203-507-7261"
              className="flex items-center gap-2 text-white font-medium hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>203-507-7261</span>
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 bg-accent text-white font-medium text-sm hover:bg-accent/90 transition-colors rounded-sm hover-glow"
            >
              Book Now
            </a>
          </div>

          <button 
            className="md:hidden relative z-50 p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 z-40 bg-primary/95 backdrop-blur-xl transition-all duration-300 md:hidden flex flex-col items-center justify-center gap-8",
        mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display font-medium text-white hover:text-accent transition-colors">Services</a>
        <a href="#showcase" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display font-medium text-white hover:text-accent transition-colors">Showcase</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display font-medium text-white hover:text-accent transition-colors">Contact</a>
        <a
          href="tel:203-507-7261"
          className="flex items-center gap-2 text-white font-medium text-xl mt-4"
        >
          <Phone className="w-5 h-5 text-accent" />
          <span>203-507-7261</span>
        </a>
        <a
          href="#contact"
          onClick={() => setMobileMenuOpen(false)}
          className="px-8 py-3 bg-accent text-white font-medium text-lg rounded-sm mt-4"
        >
          Book Now
        </a>
      </div>
    </>
  );
}

function Hero({ opacity, scale }: { opacity: any, scale: any }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <motion.div 
        style={{ opacity, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary z-10" />
        <img
          src="https://www.superiorcarwashsupply.com/images/640/Blog/luxury%20car%20detailing.png"
          alt="Luxury Car Detailing"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col items-start text-left mt-10 md:mt-0">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-sm border-l-2 border-accent bg-accent/10 text-accent text-xs md:text-sm font-medium mb-6 md:mb-8 tracking-wide uppercase">
            <Star className="w-3 h-3 md:w-4 md:h-4" /> Premium Auto Detailing in Milford, CT
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[8rem] font-display font-black uppercase tracking-tighter leading-[0.9] md:leading-[0.85] mb-6 md:mb-8">
            Perfection <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-white">Delivered.</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-text-soft max-w-2xl mb-8 md:mb-12 font-light leading-relaxed">
            Elite mobile detailing services. We bring the luxury studio experience directly to your driveway.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-4">
            <a
              href="#contact"
              className="group relative px-6 py-3 md:px-8 md:py-4 bg-accent text-white font-medium text-base md:text-lg overflow-hidden rounded-sm hover-glow w-full sm:w-auto text-center"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative flex items-center justify-center gap-2">
                Book Your Detail <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a
              href="tel:203-507-7261"
              className="px-6 py-3 md:px-8 md:py-4 border border-white/20 text-white font-medium text-base md:text-lg hover:bg-white/5 transition-colors rounded-sm flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Mobile Detailing",
    description: "Full-service detailing at your location. We bring the shop to your driveway.",
    icon: MapPin,
    image: "https://static.vecteezy.com/system/resources/thumbnails/057/919/593/small/microfiber-towel-and-cleaning-supplies-near-a-car-in-bright-sunlight-photo.jpeg"
  },
  {
    title: "Interior Detailing",
    description: "Deep clean, stain removal, full restoration of leather and fabrics.",
    icon: Star,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3tj7CIVYFr02xAZlOT6t_K38LUstx5Cup9g&s"
  },
  {
    title: "Exterior Detailing",
    description: "High-end wash, polish, and protection for a flawless finish.",
    icon: Shield,
    image: "https://www.ziebart.com/images/default-source/service-gallery-2019/exterior-detailing/ext_detailing_hand_wash_bottom.jpg?Status=Master&sfvrsn=515dcf6e_6"
  },
  {
    title: "Ceramic Coating",
    description: "Long-term paint protection with an unmatched gloss finish.",
    icon: Shield,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Xas5xbl035kPNAvAERsK7gJSMmXKRwd6GA&s"
  },
  {
    title: "Paint Correction",
    description: "Remove swirls, scratches, and imperfections to restore factory shine.",
    icon: Star,
    image: "https://www.deepshine.com.au/wp-content/uploads/2022/01/paint-correction-mobile-detailing-central-coast-nsw-deep-shine.jpg"
  },
  {
    title: "Headlight Restoration",
    description: "Restore clarity and visibility to oxidized, yellowed headlights.",
    icon: Clock,
    image: "https://img.freepik.com/free-photo/close-up-car-care-process_23-2149193155.jpg"
  },
  {
    title: "Engine Bay Cleaning",
    description: "Detailed, safe engine cleaning to make it look brand new.",
    icon: Shield,
    image: "https://img.freepik.com/free-photo/man-polishing-car-inside-car-service_1303-26881.jpg"
  }
];

function Services() {
  return (
    <section id="services" className="py-20 md:py-32 relative bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light mb-4 text-white">
            Our <span className="font-bold">Services</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-accent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[300px] sm:h-[350px] md:h-[400px] rounded-sm overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity duration-300" />
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                <div className="translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                  <service.icon className="w-8 h-8 md:w-10 md:h-10 text-accent mb-3 md:mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-text-soft text-sm leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {service.description}
                  </p>
                </div>
              </div>
              
              <div className="absolute inset-0 border border-white/10 group-hover:border-accent/50 transition-colors duration-300 z-20 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Positioning() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-[#050505] to-primary z-0" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6 md:mb-8 tracking-tight text-white leading-tight">
            Not Your Average <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400 italic font-light">Car Wash</span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-text-soft font-light leading-relaxed">
            We focus on precision, quality, and results. Every detail is handled with care to deliver a finish that stands out. This is detailing for people who value their vehicle.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Showcase() {
  const images = [
    "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552930294-6b595f4c2974?q=80&w=2574&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2670&auto=format&fit=crop"
  ];

  return (
    <section id="showcase" className="py-20 md:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light mb-4 text-white">
              The <span className="font-bold">Results</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-accent" />
          </div>
          <p className="text-text-soft max-w-md text-sm md:text-base">
            Witness the transformation. From deep interior restoration to flawless exterior gloss.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm group"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src={src}
                alt={`Showcase ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const reasons = [
    "Mobile Convenience",
    "Premium Products Only",
    "Detail-Oriented Process",
    "Consistent High-End Results",
    "Trusted Local Service"
  ];

  return (
    <section className="py-20 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light mb-4 text-white">
            Why Choose <span className="font-bold">Us</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-accent mb-8 md:mb-12" />
          
          <div className="space-y-4 md:space-y-6">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                </div>
                <span className="text-base md:text-lg text-white font-medium tracking-wide">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="relative aspect-square lg:aspect-[4/3] rounded-sm overflow-hidden order-1 lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2670&auto=format&fit=crop"
            alt="Detailing Process"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 border border-white/10 m-4 rounded-sm pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-accent">
      <div className="absolute inset-0 bg-[url('https://www.superiorcarwashsupply.com/images/640/Blog/luxury%20car%20detailing.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-6 md:mb-8 tracking-tight leading-tight">
          Your Car Deserves Better
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <a
            href="#contact"
            className="px-8 py-4 md:px-10 md:py-5 bg-white text-black font-bold text-base md:text-lg hover:bg-gray-100 transition-colors rounded-sm w-full sm:w-auto"
          >
            Book Now
          </a>
          <a
            href="tel:203-507-7261"
            className="px-8 py-4 md:px-10 md:py-5 border-2 border-white text-white font-bold text-base md:text-lg hover:bg-white/10 transition-colors rounded-sm w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light mb-4 text-white">
            Mobile Detailing <span className="font-bold">Form</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-accent mb-6 md:mb-8" />
          
          <p className="text-text-soft mb-8 md:mb-12 text-base md:text-lg">
            Give us information on what you want done! We will be in contact with you shortly.
          </p>

          <div className="space-y-6 md:space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-accent" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1 text-sm md:text-base">Call Us Directly</h4>
                <a href="tel:203-507-7261" className="text-xl md:text-2xl font-display text-white hover:text-accent transition-colors">
                  203-507-7261
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1 text-sm md:text-base">Service Area</h4>
                <p className="text-text-soft text-sm md:text-base">Milford, Connecticut & Surrounding Areas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 md:p-8 rounded-sm">
          <form className="space-y-5 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-soft uppercase tracking-wider">What type of Car do you have? *</label>
              <select required className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none">
                <option value="">Select vehicle type...</option>
                <option value="Truck">Truck</option>
                <option value="SUV">SUV</option>
                <option value="Sedan">Sedan</option>
                <option value="Van">Van</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-text-soft uppercase tracking-wider">Where are you located? (Home or Workplace) *</label>
              <input 
                type="text" 
                required
                className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                placeholder="e.g. 123 Main St, Milford (Home)"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-text-soft uppercase tracking-wider">What package are you interested in? *</label>
              <select required className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none">
                <option value="">Select a package...</option>
                <option value="Full Mobile Detailing">Full Mobile Detailing</option>
                <option value="Interior Detailing">Interior Detailing</option>
                <option value="Exterior Detailing">Exterior Detailing</option>
                <option value="Ceramic Coating">Ceramic Coating</option>
                <option value="Paint Correction">Paint Correction</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-text-soft uppercase tracking-wider">When were you looking to get this done? *</label>
              <input 
                type="text" 
                required
                className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                placeholder="e.g. This weekend, Next Tuesday"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-text-soft uppercase tracking-wider">Contact Info (Phone, Name & Vehicle Info) *</label>
              <textarea 
                required
                rows={4}
                className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="John Doe, (203) 555-0123, Black Porsche 911"
              />
            </div>

            <button className="w-full py-4 bg-accent text-white font-medium text-lg hover:bg-accent/90 transition-colors rounded-sm hover-glow">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 pb-28 md:pb-8 border-t border-white/10 bg-black text-center">
      <p className="text-text-soft text-sm px-4">
        &copy; {new Date().getFullYear()} Jay's Mobile Detailing. All rights reserved. Milford, CT.
      </p>
    </footer>
  );
}

function StickyCTAs() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary/95 backdrop-blur-md border-t border-white/10 p-4 flex gap-3 pb-safe">
      <a
        href="tel:203-507-7261"
        className="flex-1 py-3.5 bg-white/10 border border-white/20 rounded-sm flex items-center justify-center text-white font-medium text-sm gap-2 active:bg-white/20 transition-colors"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
      <a
        href="#contact"
        className="flex-1 py-3.5 bg-accent rounded-sm flex items-center justify-center text-white font-medium text-sm gap-2 active:bg-accent/80 transition-colors"
      >
        Book Now
      </a>
    </div>
  );
}
