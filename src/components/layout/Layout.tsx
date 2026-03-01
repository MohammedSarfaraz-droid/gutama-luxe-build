import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Phone } from "lucide-react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />

      {/* Floating Mobile Call Button */}
      <a
        href="tel:9738205130"
        className="fixed bottom-6 right-6 z-50 lg:hidden w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all duration-300 animate-fade-up"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Layout;
