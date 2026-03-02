import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Star, Clock, DollarSign, Globe } from "lucide-react";
import { services } from "@/data/services";
import ScrollReveal from "@/components/ScrollReveal";

import heroBg from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/hero-bg3.png";
import beforeRoof from "@/assets/before-roof.jpg";
import afterRoof from "@/assets/after-roof.jpg";
import beforeSiding from "@/assets/before-siding.jpg";
import afterSiding from "@/assets/after-siding.jpg";
import beforeFlat from "@/assets/before-flat.jpg";
import afterFlat from "@/assets/after-flat.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import aboutAerial from "@/assets/about-aerial.jpg";

/* ─── Hero ─── */
const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg2} alt="Luxury home with premium roof installation" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/30" />
      {/* <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.4), transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--gold) / 0.3), transparent 50%)" }} /> */}
    </div>

    <div className="relative container mx-auto px-4 text-center">
      <div className="inline-block px-4 py-1.5 rounded-full border border-secondary/30 mb-6 animate-fade-up">
        <span className="text-secondary text-sm font-medium">Licensed & Fully Insured</span>
      </div>
      <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        Premium Roofing &<br />
        <span className="text-gradient-gold">Exterior Solutions</span><br />
        Built to Last
      </h1>
      <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        Trusted across Essex County, NJ — delivering exceptional craftsmanship for residential and commercial properties.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
        <Link to="/contact">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base">
            Get Free Estimate <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
        </Link>
        <a href="tel:9738205130">
          <Button size="lg" variant="outline" className="border-secondary/40 text-secondary hover:bg-secondary/10 font-semibold px-8 py-6 text-base">
            <Phone className="w-5 h-5 mr-2" /> Call 973-820-5130
          </Button>
        </a>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

/* ─── Services Grid ─── */
const ServicesGrid = () => (
  <section id="services" className="section-padding bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-secondary text-sm font-medium uppercase tracking-widest">What We Do</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">Our Services</h2>
          <div className="gold-divider mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">Comprehensive roofing and exterior solutions tailored to your needs.</p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <ScrollReveal key={service.slug} delay={i * 60}>
              <Link to={`/services/${service.slug}`} className="group block glass-card overflow-hidden hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg">
                <div className="relative h-44 overflow-hidden">
                  <img src={service.image} alt={service.shortTitle} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-primary/90 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{service.shortTitle}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">{service.description}</p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

/* ─── Why Choose Us ─── */
const whyItems = [
  { icon: Shield, title: "Licensed & Fully Insured", desc: "Complete peace of mind with full licensing and comprehensive insurance coverage." },
  { icon: Star, title: "Quality Guaranteed", desc: "We stand behind every project with industry-leading workmanship warranties." },
  { icon: Clock, title: "Emergency Repair", desc: "Rapid response for storm damage and urgent repair needs — available when you need us." },
  { icon: DollarSign, title: "Free Estimates", desc: "No-obligation consultations and detailed estimates at no cost to you." },
  { icon: Globe, title: "English & Español", desc: "Bilingual team ready to serve you in both English and Spanish." },
];

const WhyChooseUs = () => (
  <section className="section-padding bg-muted/20">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-secondary text-sm font-medium uppercase tracking-widest">Why Us</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">Why Choose Gutama</h2>
          <div className="gold-divider" />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {whyItems.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 80}>
            <div className="glass-card p-6 text-center hover:border-secondary/40 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-serif text-base font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Before & After ─── */
const beforeAfterItems = [
  { title: "Roof Transformation", beforeImg: beforeRoof, afterImg: afterRoof, before: "Aging, weather-damaged shingles", after: "Brand new architectural shingles" },
  { title: "Siding Upgrade", beforeImg: beforeSiding, afterImg: afterSiding, before: "Faded, cracked vinyl siding", after: "New fiber cement siding" },
  { title: "Flat Roof Replacement", beforeImg: beforeFlat, afterImg: afterFlat, before: "Ponding water, deteriorated membrane", after: "New TPO membrane system" },
];

const BeforeAfter = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-secondary text-sm font-medium uppercase tracking-widest">Results</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">Before & After</h2>
          <div className="gold-divider" />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {beforeAfterItems.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 100}>
            <div className="glass-card overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative h-48">
                  <img src={item.beforeImg} alt={`Before: ${item.title}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-background/30" />
                  <span className="absolute top-2 left-2 bg-primary/90 text-primary-foreground text-xs font-bold px-2 py-1 rounded">BEFORE</span>
                </div>
                <div className="relative h-48">
                  <img src={item.afterImg} alt={`After: ${item.title}`} className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 bg-secondary/90 text-secondary-foreground text-xs font-bold px-2 py-1 rounded">AFTER</span>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-serif text-foreground font-semibold">{item.title}</h3>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Service Areas ─── */
const municipalities = [
  "Newark", "East Orange", "Orange", "Irvington", "Belleville", "Bloomfield",
  "Caldwell", "Cedar Grove", "Essex Fells", "Glen Ridge", "Livingston",
  "Maplewood", "Millburn", "North Caldwell", "Nutley", "Roseland",
  "South Orange", "Verona", "West Orange",
];

const ServiceAreas = () => (
  <section id="service-areas" className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <img src={aboutAerial} alt="" className="w-full h-full object-cover" aria-hidden="true" />
    </div>
    <div className="absolute inset-0 bg-background/90" />
    <div className="relative container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-secondary text-sm font-medium uppercase tracking-widest">Coverage</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">Proudly Serving Essex County, NJ</h2>
          <div className="gold-divider" />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
        {municipalities.map((town, i) => (
          <ScrollReveal key={town} delay={i * 40}>
            <div className="glass-card py-3 px-4 text-center hover:border-secondary/40 transition-all duration-300">
              <span className="text-foreground text-sm font-medium">{town}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Testimonials ─── */
const testimonials = [
  { name: "Michael R.", location: "West Orange, NJ", text: "Gutama transformed our 30-year-old roof into a masterpiece. Professional crew, clean work, and they finished ahead of schedule. Couldn't be happier!", rating: 5, image: testimonial1 },
  { name: "Sandra M.", location: "Bloomfield, NJ", text: "After the storm damaged our siding, Gutama was there within hours. They handled the insurance paperwork and did a beautiful job. Highly recommend!", rating: 5, image: testimonial2 },
  { name: "Carlos D.", location: "Newark, NJ", text: "Excelente servicio. The team was professional and bilingual which made everything so easy. Our new flat roof is perfect. Thank you Gutama!", rating: 5, image: testimonial3 },
];

const Testimonials = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-secondary text-sm font-medium uppercase tracking-widest">Reviews</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">What Our Clients Say</h2>
          <div className="gold-divider" />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 100}>
            <div className="glass-card p-8 hover:border-secondary/30 transition-all duration-500">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-secondary fill-secondary" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-secondary/30" />
                <div>
                  <p className="font-serif font-semibold text-foreground">{t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.location}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── CTA ─── */
const CTASection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
    <div className="relative container mx-auto px-4 text-center">
      <ScrollReveal>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Ready to Upgrade<br /><span className="text-gradient-gold">Your Home?</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
          Contact us today for a free estimate. Our team is ready to deliver premium results.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href="tel:9738205130">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base">
              <Phone className="w-5 h-5 mr-2" /> 973-820-5130
            </Button>
          </a>
          <a href="tel:9733424134">
            <Button size="lg" variant="outline" className="border-secondary/40 text-secondary hover:bg-secondary/10 font-semibold px-8 py-6 text-base">
              <Phone className="w-5 h-5 mr-2" /> 973-342-4134
            </Button>
          </a>
        </div>
        <p className="text-muted-foreground text-sm">English & Español Available</p>
      </ScrollReveal>
    </div>
  </section>
);

/* ─── Homepage ─── */
const Index = () => (
  <>
    <HeroSection />
    <ServicesGrid />
    <WhyChooseUs />
    <BeforeAfter />
    <ServiceAreas />
    <Testimonials />
    <CTASection />
  </>
);

export default Index;
