import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const categories = ["All", "Roofing", "Siding", "Additions", "Chimney"];

const projects = [
  { title: "Complete Roof Replacement", category: "Roofing", desc: "Architectural shingle installation in West Orange" },
  { title: "Storm Damage Repair", category: "Roofing", desc: "Emergency roof repair after severe weather in Newark" },
  { title: "Flat Roof Installation", category: "Roofing", desc: "TPO membrane system for commercial building in Bloomfield" },
  { title: "Slate Roof Restoration", category: "Roofing", desc: "Historic slate roof repair in South Orange" },
  { title: "James Hardie Siding", category: "Siding", desc: "Full siding replacement in Maplewood" },
  { title: "Vinyl Siding Upgrade", category: "Siding", desc: "Modern vinyl siding installation in Belleville" },
  { title: "Cedar Shake Siding", category: "Siding", desc: "Natural cedar shake installation in Millburn" },
  { title: "Two-Story Addition", category: "Additions", desc: "Master suite addition in Livingston" },
  { title: "Sunroom Addition", category: "Additions", desc: "Four-season sunroom in Verona" },
  { title: "Chimney Rebuild", category: "Chimney", desc: "Complete chimney rebuild from roofline in Nutley" },
  { title: "Chimney Waterproofing", category: "Chimney", desc: "Crown repair and waterproof coating in Caldwell" },
  { title: "Dormer Installation", category: "Roofing", desc: "Shed dormer for expanded attic space in Glen Ridge" },
];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-background" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">Our Work</h1>
          <div className="gold-divider mb-4" />
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Browse our portfolio of completed projects across Essex County.</p>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "glass-card text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((project, i) => (
              <ScrollReveal key={project.title + active} delay={i * 60}>
                <div className="glass-card overflow-hidden break-inside-avoid group cursor-pointer hover:border-secondary/30 transition-all duration-500">
                  <div className={`bg-muted/30 flex items-center justify-center ${i % 3 === 0 ? "h-64" : i % 3 === 1 ? "h-48" : "h-56"}`}>
                    <div className="text-center p-6">
                      <span className="text-secondary text-xs font-bold uppercase tracking-widest">{project.category}</span>
                      <h3 className="font-serif text-foreground text-lg font-semibold mt-2">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-muted-foreground text-sm">{project.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
