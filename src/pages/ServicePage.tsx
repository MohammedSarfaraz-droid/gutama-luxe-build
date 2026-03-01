import { useParams, Link } from "react-router-dom";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, ArrowRight, Shield, Star, Clock, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ServicePage = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/30 mb-6">
              <Icon className="w-4 h-4 text-secondary" />
              <span className="text-secondary text-sm font-medium">Professional Service</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">{service.title}</h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">{service.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base">
                  Get Free Estimate <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
              <a href="tel:9738205130">
                <Button size="lg" variant="outline" className="border-secondary/40 text-secondary hover:bg-secondary/10 font-semibold px-8 py-6 text-base">
                  <Phone className="w-5 h-5 mr-2" /> 973-820-5130
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding bg-muted/20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">About This Service</h2>
              <div className="gold-divider !mx-0 mb-6" />
              <p className="text-muted-foreground text-lg leading-relaxed">{service.longDescription}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-secondary text-sm font-medium uppercase tracking-widest">How It Works</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">Our Process</h2>
              <div className="gold-divider" />
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto space-y-4">
            {service.process.map((step, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="glass-card p-5 flex items-center gap-4 hover:border-secondary/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary font-serif font-bold">{i + 1}</span>
                  </div>
                  <p className="text-foreground font-medium">{step}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Gutama */}
      <section className="section-padding bg-muted/20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Gutama</h2>
              <div className="gold-divider" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Shield, text: "Licensed & Fully Insured" },
              { icon: Star, text: "Quality Guaranteed" },
              { icon: Clock, text: "On-Time Completion" },
              { icon: CheckCircle, text: "Free Estimates" },
            ].map((item, i) => (
              <ScrollReveal key={item.text} delay={i * 80}>
                <div className="glass-card p-6 text-center">
                  <item.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <p className="text-foreground font-medium text-sm">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <div className="gold-divider" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {service.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-6 border-border/30 rounded-lg overflow-hidden">
                    <AccordionTrigger className="text-foreground font-medium hover:no-underline py-5">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="relative container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">Contact us today for a free, no-obligation estimate.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base">
                  Get Free Estimate <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
              <a href="tel:9738205130">
                <Button size="lg" variant="outline" className="border-secondary/40 text-secondary hover:bg-secondary/10 font-semibold px-8 py-6 text-base">
                  <Phone className="w-5 h-5 mr-2" /> Call Now
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
