import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo2.png";

const serviceLinks = [
  { label: "Roof Removal", to: "/services/roof-removal" },
  { label: "Re-Roofing", to: "/services/re-roofing" },
  { label: "Flat Roof", to: "/services/flat-roof" },
  { label: "Slate Roof", to: "/services/slate-roof" },
  { label: "Chimney", to: "/services/chimney" },
  { label: "Siding", to: "/services/siding" },
  { label: "Carpentry", to: "/services/carpentry" },
  { label: "Additions", to: "/services/additions" },
  { label: "Dormers", to: "/services/dormers" },
  { label: "Gutters", to: "/services/gutters" },
  { label: "Emergency Repair", to: "/services/emergency-repair" },
];

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Gutama Home Improvement" className="h-36 w-auto object-contain" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Premium roofing & exterior solutions built to last. Licensed and fully insured contractor serving Essex County, NJ.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:9738205130" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary" /> English: 973-820-5130
              </a>
              <a href="tel:9733424134" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-secondary" /> Español: 973-342-4134
              </a>
              <span className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" /> Essex County, New Jersey
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-foreground font-semibold mb-4">Quick Links</h4>
            <div className="gold-divider !mx-0 mb-4" />
            <div className="flex flex-col gap-2">
              {["Home", "About", "Gallery", "Contact"].map((item) => (
                <Link key={item} to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-foreground font-semibold mb-4">Our Services</h4>
            <div className="gold-divider !mx-0 mb-4" />
            <div className="flex flex-col gap-2">
              {serviceLinks.slice(0, 8).map((s) => (
                <Link key={s.to} to={s.to} className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* More Services */}
          <div>
            <h4 className="font-serif text-foreground font-semibold mb-4">More Services</h4>
            <div className="gold-divider !mx-0 mb-4" />
            <div className="flex flex-col gap-2">
              {serviceLinks.slice(8).map((s) => (
                <Link key={s.to} to={s.to} className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="gold-divider mt-12 mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Gutama Home Improvement. All rights reserved.</p>
          <p>Licensed & Fully Insured | Essex County, NJ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
