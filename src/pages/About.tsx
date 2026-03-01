import { Shield, Target, Users, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const About = () => (
  <>
    {/* Hero */}
    <section className="relative py-28 md:py-36">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">About Gutama</h1>
        <div className="gold-divider mb-4" />
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A legacy of craftsmanship, integrity, and premium results for homeowners across Essex County.
        </p>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding bg-muted/20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <span className="text-secondary text-sm font-medium uppercase tracking-widest">Our Story</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">Built on Trust, Driven by Excellence</h2>
            <div className="gold-divider !mx-0 mb-6" />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Gutama Home Improvement was founded with a simple mission: to deliver premium-quality roofing and exterior solutions that homeowners can trust for generations. What started as a small, dedicated crew has grown into one of Essex County's most respected home improvement contractors.
              </p>
              <p>
                Every project we take on reflects our commitment to exceptional craftsmanship, honest communication, and lasting results. We treat every home as if it were our own, using only the finest materials and proven techniques to ensure your investment stands the test of time.
              </p>
              <p>
                As a licensed and fully insured contractor, we hold ourselves to the highest industry standards. Our bilingual team serves both English and Spanish-speaking homeowners, ensuring clear communication and a seamless experience from consultation to completion.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="glass-card p-8">
              <Target className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide every homeowner in Essex County with premium roofing and exterior solutions that combine superior craftsmanship, quality materials, and exceptional customer service — all at a fair and transparent price.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="glass-card p-8">
              <Award className="w-10 h-10 text-secondary mb-4" />
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted name in home improvement across New Jersey — known for transforming homes with integrity, precision, and an unwavering commitment to excellence that sets the standard for the industry.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section-padding bg-muted/20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-secondary text-sm font-medium uppercase tracking-widest">The Team</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">Professional Crew</h2>
            <div className="gold-divider" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { role: "Project Management", desc: "Experienced project managers who ensure every detail is handled with precision." },
            { role: "Roofing Specialists", desc: "Certified roofing professionals with decades of combined experience." },
            { role: "Exterior Craftsmen", desc: "Skilled carpenters and siding installers who deliver flawless results." },
          ].map((member, i) => (
            <ScrollReveal key={member.role} delay={i * 100}>
              <div className="glass-card p-8 text-center hover:border-secondary/30 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{member.role}</h3>
                <p className="text-muted-foreground text-sm">{member.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Licensed Badge */}
        <ScrollReveal>
          <div className="mt-16 glass-card max-w-md mx-auto p-6 flex items-center gap-4 border-secondary/30">
            <Shield className="w-12 h-12 text-secondary flex-shrink-0" />
            <div>
              <h4 className="font-serif text-foreground font-semibold">Licensed & Fully Insured</h4>
              <p className="text-muted-foreground text-sm">Complete peace of mind on every project we undertake.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default About;
