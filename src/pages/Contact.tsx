import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, AlertTriangle } from "lucide-react";
import { services } from "@/data/services";
import ScrollReveal from "@/components/ScrollReveal";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">Contact Us</h1>
          <div className="gold-divider mb-4" />
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Ready to start your project? Get in touch for a free, no-obligation estimate.</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <ScrollReveal>
              <div className="glass-card p-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Full Name</Label>
                    <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" required className="mt-1.5 bg-muted/50 border-border/50" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email</Label>
                      <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" required className="mt-1.5 bg-muted/50 border-border/50" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-foreground">Phone</Label>
                      <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="(973) 000-0000" className="mt-1.5 bg-muted/50 border-border/50" />
                    </div>
                  </div>
                  <div>
                    <Label className="text-foreground">Service Needed</Label>
                    <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                      <SelectTrigger className="mt-1.5 bg-muted/50 border-border/50">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s.slug} value={s.slug}>{s.shortTitle}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your project..." rows={4} className="mt-1.5 bg-muted/50 border-border/50" />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    Send Message
                  </Button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <div className="space-y-6">
              <ScrollReveal>
                <div className="glass-card p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Get In Touch</h3>
                  <div className="space-y-4">
                    <a href="tel:9738205130" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">English: 973-820-5130</p>
                      </div>
                    </a>
                    <a href="tel:9733424134" className="flex items-center gap-3 text-foreground hover:text-secondary transition-colors">
                      <Phone className="w-5 h-5 text-secondary" />
                      <div>
                        <p className="font-medium">Español: 973-342-4134</p>
                      </div>
                    </a>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      <p>Serving all of Essex County, NJ</p>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="w-5 h-5 text-secondary" />
                      <p>Mon – Sat: 7:00 AM – 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Emergency Box */}
              <ScrollReveal delay={100}>
                <div className="glass-card p-6 border-primary/40">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="w-6 h-6 text-primary" />
                    <h3 className="font-serif text-lg font-semibold text-foreground">Emergency Repairs</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Storm damage? Active leak? We offer rapid emergency response to protect your home.
                  </p>
                  <a href="tel:9738205130">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                      <Phone className="w-4 h-4 mr-2" /> Call for Emergency Service
                    </Button>
                  </a>
                </div>
              </ScrollReveal>

              {/* Map Placeholder */}
              <ScrollReveal delay={200}>
                <div className="glass-card overflow-hidden">
                  <div className="h-64 bg-muted/30 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-8 h-8 text-secondary mx-auto mb-2" />
                      <p className="text-muted-foreground text-sm">Essex County, New Jersey</p>
                      <p className="text-muted-foreground text-xs mt-1">Serving 19 municipalities</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
