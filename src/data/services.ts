import {
  Home, Layers, Square, Diamond, Flame, PanelTop,
  Hammer, Building, Triangle, Droplets, AlertTriangle, LucideIcon
} from "lucide-react";

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  description: string;
  longDescription: string;
  process: string[];
  faqs: { q: string; a: string }[];
}

export const services: ServiceData[] = [
  {
    slug: "roof-removal",
    title: "Professional Roof Removal",
    shortTitle: "Roof Removal",
    icon: Layers,
    description: "Complete tear-off and removal of old roofing materials with expert precision and thorough cleanup.",
    longDescription: "Our professional roof removal service ensures a clean slate for your new roofing system. We carefully strip away all old materials, inspect the underlying structure for damage, and prepare your roof deck for a flawless new installation. Our team handles everything from shingle removal to debris cleanup, leaving your property spotless.",
    process: ["Comprehensive roof inspection", "Protective tarping of landscaping", "Systematic removal of old materials", "Deck inspection and repair", "Complete debris removal and cleanup"],
    faqs: [
      { q: "How long does a roof removal take?", a: "Most residential roof removals are completed in 1-2 days depending on the size and complexity of the roof." },
      { q: "Will you protect my property during removal?", a: "Absolutely. We use protective tarps and take every precaution to protect your landscaping, siding, and property." },
      { q: "Do you handle the debris disposal?", a: "Yes, all debris is loaded into dumpsters and hauled away. We leave your property clean." },
    ],
  },
  {
    slug: "re-roofing",
    title: "Expert Re-Roofing Solutions",
    shortTitle: "Re-Roofing",
    icon: Home,
    description: "Premium re-roofing services using top-quality materials for lasting protection and curb appeal.",
    longDescription: "Transform your home with our premium re-roofing services. We use only the highest quality materials from trusted manufacturers to deliver a roof that protects your home for decades. From architectural shingles to designer styles, we offer options that enhance both protection and curb appeal.",
    process: ["Material selection consultation", "Old roof removal if needed", "Deck repair and preparation", "Underlayment and flashing installation", "Premium shingle installation", "Final inspection and cleanup"],
    faqs: [
      { q: "What roofing materials do you recommend?", a: "We primarily use architectural shingles from GAF, CertainTeed, and Owens Corning for the best combination of durability and aesthetics." },
      { q: "How long will my new roof last?", a: "With proper installation and quality materials, your new roof can last 25-50 years depending on the material chosen." },
      { q: "Do you offer warranties?", a: "Yes, we offer both workmanship warranties and manufacturer material warranties for complete peace of mind." },
    ],
  },
  {
    slug: "flat-roof",
    title: "Flat Roof Installation & Repair",
    shortTitle: "Flat Roof",
    icon: Square,
    description: "Specialized flat roofing systems including TPO, EPDM, and modified bitumen for commercial and residential.",
    longDescription: "Our flat roofing specialists deliver watertight solutions for commercial and residential properties. We install and repair all major flat roofing systems including TPO, EPDM rubber, and modified bitumen. Our expertise ensures proper drainage, insulation, and long-lasting weather protection.",
    process: ["Structural assessment", "Drainage system evaluation", "Insulation installation", "Membrane application", "Seam welding and sealing", "Quality assurance inspection"],
    faqs: [
      { q: "Which flat roofing system is best?", a: "It depends on your building and budget. TPO offers excellent energy efficiency, EPDM is extremely durable, and modified bitumen provides great waterproofing." },
      { q: "How do you handle drainage?", a: "We design and install proper drainage systems including interior drains, scuppers, or tapered insulation to prevent ponding water." },
      { q: "Can you repair my existing flat roof?", a: "Yes, we specialize in flat roof repairs including patching, resealing, and coating to extend your roof's life." },
    ],
  },
  {
    slug: "slate-roof",
    title: "Elegant Slate Roofing",
    shortTitle: "Slate Roof",
    icon: Diamond,
    description: "Beautiful, timeless slate roofing installation and repair by experienced craftsmen.",
    longDescription: "Slate roofing represents the pinnacle of roofing craftsmanship. Our experienced slate roofers install and repair natural slate with the precision and care this premium material demands. A properly installed slate roof can last over 100 years, making it the most durable and elegant roofing option available.",
    process: ["Structural load assessment", "Slate material selection", "Underlayment installation", "Precision slate cutting and fitting", "Copper flashing installation", "Ridge cap and detail work"],
    faqs: [
      { q: "How long does a slate roof last?", a: "Natural slate roofs can last 75-200 years with proper installation and maintenance, making them the longest-lasting roofing material available." },
      { q: "Is my home structurally suitable for slate?", a: "Slate is heavier than other materials. We assess your roof structure and can reinforce it if needed to support the weight." },
      { q: "Can you repair broken slate tiles?", a: "Yes, we specialize in slate repair and replacement, carefully matching existing tiles for a seamless repair." },
    ],
  },
  {
    slug: "chimney",
    title: "Chimney Services",
    shortTitle: "Chimney",
    icon: Flame,
    description: "Complete chimney repair, rebuilding, flashing, and waterproofing services.",
    longDescription: "Keep your chimney safe and functional with our comprehensive chimney services. From tuckpointing and crown repair to complete rebuilds and waterproofing, we handle every aspect of chimney maintenance and restoration. Proper chimney maintenance prevents water damage and ensures safe fireplace operation.",
    process: ["Chimney inspection", "Mortar joint assessment", "Tuckpointing and repair", "Crown repair or replacement", "Flashing installation", "Waterproof coating application"],
    faqs: [
      { q: "How often should my chimney be inspected?", a: "We recommend annual chimney inspections to catch small issues before they become major repairs." },
      { q: "What is tuckpointing?", a: "Tuckpointing is the process of removing deteriorated mortar from joints and replacing it with fresh mortar to restore structural integrity." },
      { q: "Can you rebuild a damaged chimney?", a: "Yes, we can rebuild chimneys from the roofline up, including new crowns, caps, and flashing." },
    ],
  },
  {
    slug: "siding",
    title: "Premium Siding Installation",
    shortTitle: "Siding",
    icon: PanelTop,
    description: "Transform your home's exterior with premium vinyl, fiber cement, or wood siding installation.",
    longDescription: "Upgrade your home's curb appeal and protection with our premium siding installation services. We work with all major siding materials including vinyl, James Hardie fiber cement, and engineered wood. Our precision installation techniques ensure a beautiful, weather-tight finish that lasts for decades.",
    process: ["Exterior assessment", "Material and color selection", "Old siding removal", "House wrap installation", "Precision siding installation", "Trim and accent work"],
    faqs: [
      { q: "What siding material do you recommend?", a: "James Hardie fiber cement siding offers the best combination of durability, aesthetics, and value. We also install premium vinyl and engineered wood options." },
      { q: "How long does siding installation take?", a: "Most homes can be completed in 1-2 weeks depending on size and complexity." },
      { q: "Will new siding improve my home's energy efficiency?", a: "Yes, new siding with proper insulation can significantly reduce energy costs and improve comfort." },
    ],
  },
  {
    slug: "carpentry",
    title: "Expert Carpentry Services",
    shortTitle: "Carpentry",
    icon: Hammer,
    description: "Skilled structural and finish carpentry for repairs, renovations, and custom projects.",
    longDescription: "Our skilled carpenters handle everything from structural repairs to custom finish work. Whether you need rotted wood replaced, a new deck built, or intricate trim work installed, our team delivers craftsmanship that stands the test of time. We combine traditional woodworking skills with modern techniques for superior results.",
    process: ["Project assessment and design", "Material selection", "Structural work", "Finish carpentry", "Staining or painting", "Final inspection"],
    faqs: [
      { q: "What types of carpentry work do you do?", a: "We handle structural carpentry, trim work, decks, porches, framing, custom built-ins, and wood repair." },
      { q: "Can you match existing woodwork?", a: "Yes, our carpenters are skilled at matching existing profiles, wood species, and finishes for seamless repairs." },
      { q: "Do you handle structural repairs?", a: "Absolutely. We repair and replace structural elements including beams, joists, rafters, and load-bearing walls." },
    ],
  },
  {
    slug: "additions",
    title: "Home Additions",
    shortTitle: "Additions",
    icon: Building,
    description: "Expand your living space with expertly built home additions that blend seamlessly with your existing home.",
    longDescription: "Need more space? Our home addition services expand your living area while maintaining your home's architectural integrity. From bump-outs and sunrooms to full second-story additions, we handle every detail from design through completion. Our additions are built to match your existing home perfectly.",
    process: ["Design consultation", "Permit acquisition", "Foundation and framing", "Roofing integration", "Interior finishing", "Final walkthrough"],
    faqs: [
      { q: "How long does a home addition take?", a: "Depending on size and complexity, most additions take 2-4 months from permitting to completion." },
      { q: "Will the addition match my existing home?", a: "Absolutely. We carefully match materials, rooflines, and architectural details for a seamless integration." },
      { q: "Do you handle the permits?", a: "Yes, we manage all permits and inspections required for your addition project." },
    ],
  },
  {
    slug: "dormers",
    title: "Dormer Installation",
    shortTitle: "Dormers",
    icon: Triangle,
    description: "Add natural light, headroom, and value to your home with professionally built dormers.",
    longDescription: "Dormers transform dark, cramped attic spaces into bright, usable rooms while adding significant architectural interest to your home's exterior. Our dormer installations include shed, gable, and hip styles, each designed to maximize your space and complement your home's design.",
    process: ["Attic assessment", "Dormer style selection", "Structural engineering", "Roof opening and framing", "Window installation", "Exterior finishing and roofing"],
    faqs: [
      { q: "What types of dormers do you install?", a: "We install shed dormers, gable dormers, and hip dormers based on your home's architecture and your space needs." },
      { q: "Will a dormer add value to my home?", a: "Yes, dormers typically increase home value by adding usable living space and improving curb appeal." },
      { q: "How long does dormer installation take?", a: "Most dormer projects are completed in 2-3 weeks, weather permitting." },
    ],
  },
  {
    slug: "gutters",
    title: "Gutters Installation",
    shortTitle: "Gutters",
    icon: Droplets,
    description: "Seamless gutter installation and repair to protect your home's foundation and landscaping.",
    longDescription: "Protect your home from water damage with our professional seamless gutter installation. We custom-fabricate gutters on-site for a perfect fit with no leaky seams. Our gutter systems include downspouts, splash blocks, and optional gutter guards to keep your system flowing freely year-round.",
    process: ["Drainage assessment", "Custom gutter fabrication", "Old gutter removal", "Fascia board inspection", "Seamless gutter installation", "Downspout and drainage setup"],
    faqs: [
      { q: "Why choose seamless gutters?", a: "Seamless gutters have no joints where leaks can develop, making them more durable and lower maintenance than sectional gutters." },
      { q: "Do you install gutter guards?", a: "Yes, we offer several gutter guard options to keep leaves and debris out of your gutters." },
      { q: "What materials are available?", a: "We install aluminum, copper, and steel gutters in a wide range of colors to match your home." },
    ],
  },
  {
    slug: "emergency-repair",
    title: "Emergency Repair Services",
    shortTitle: "Emergency Repair",
    icon: AlertTriangle,
    description: "24/7 emergency repair services for storm damage, leaks, and urgent home exterior issues.",
    longDescription: "When disaster strikes, Gutama Home Improvement is ready to respond. Our emergency repair team handles storm damage, sudden leaks, fallen trees, and other urgent exterior issues. We provide rapid response to protect your home from further damage with temporary repairs followed by permanent solutions.",
    process: ["Emergency assessment", "Temporary protective measures", "Insurance documentation assistance", "Permanent repair planning", "Quality restoration", "Follow-up inspection"],
    faqs: [
      { q: "How quickly can you respond?", a: "We aim to respond to emergency calls within hours and can typically be on-site the same day." },
      { q: "Do you help with insurance claims?", a: "Yes, we document all damage thoroughly and work directly with your insurance company to streamline the claims process." },
      { q: "What constitutes a roofing emergency?", a: "Active leaks, storm damage, fallen trees on your roof, missing shingles exposing the deck, and any situation where your home is exposed to the elements." },
    ],
  },
];
