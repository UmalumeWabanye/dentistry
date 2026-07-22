export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  duration: string;
  recovery: string;
  category: "general" | "cosmetic" | "restorative" | "preventive" | "emergency";
  featured: boolean;
}

export const services: Service[] = [
  {
    id: "general-dentistry",
    slug: "general-dentistry",
    title: "General Dentistry",
    shortDescription: "Comprehensive oral health care for the whole family, from routine check-ups to preventive treatments.",
    description: "Our general dentistry services are the foundation of good oral health. We provide thorough examinations, professional cleanings, and personalised treatment plans to keep your smile healthy and bright.",
    icon: "Stethoscope",
    image: "/images/placeholders/service-1.svg",
    benefits: [
      "Early detection of dental issues",
      "Prevention of tooth decay and gum disease",
      "Professional cleaning for brighter smiles",
      "Personalised oral hygiene guidance",
      "Comprehensive X-rays for full assessment",
    ],
    process: [
      { step: 1, title: "Initial Examination", description: "A thorough assessment of your teeth, gums, and jaw." },
      { step: 2, title: "Digital X-Rays", description: "Low-radiation imaging to detect hidden issues." },
      { step: 3, title: "Professional Cleaning", description: "Removal of plaque and tartar build-up." },
      { step: 4, title: "Treatment Plan", description: "A personalised plan addressing any concerns found." },
    ],
    faqs: [
      { question: "How often should I visit the dentist?", answer: "We recommend check-ups every 6 months for most patients, though some may need more frequent visits." },
      { question: "Does a check-up hurt?", answer: "Routine check-ups are comfortable and pain-free for most patients." },
    ],
    duration: "45–60 minutes",
    recovery: "No recovery needed",
    category: "general",
    featured: true,
  },
  {
    id: "teeth-whitening",
    slug: "cosmetic-dentistry",
    title: "Teeth Whitening",
    shortDescription: "Brighten your smile by several shades with our professional whitening treatments.",
    description: "Our professional teeth whitening treatments are safe, fast, and dramatically more effective than over-the-counter options. Achieve a brighter, more confident smile in just one visit.",
    icon: "Sparkles",
    image: "/images/placeholders/service-2.svg",
    benefits: [
      "Whiten teeth by up to 8 shades",
      "Safe, clinically supervised treatment",
      "Long-lasting results",
      "Customised take-home trays available",
      "Boosts confidence instantly",
    ],
    process: [
      { step: 1, title: "Shade Assessment", description: "We document your current shade and discuss your goal." },
      { step: 2, title: "Gum Protection", description: "A protective barrier is applied to your gums." },
      { step: 3, title: "Whitening Application", description: "Professional gel is applied and activated with light." },
      { step: 4, title: "Results Review", description: "We review the result and provide aftercare instructions." },
    ],
    faqs: [
      { question: "How long do results last?", answer: "Results typically last 1–2 years with proper maintenance and touch-up treatments." },
      { question: "Is whitening safe?", answer: "Yes. Our supervised treatments use clinically approved products that are safe for teeth and gums." },
    ],
    duration: "60–90 minutes",
    recovery: "Mild sensitivity for 24–48 hours",
    category: "cosmetic",
    featured: true,
  },
  {
    id: "dental-implants",
    slug: "restorative-dentistry",
    title: "Dental Implants",
    shortDescription: "Permanent, natural-looking tooth replacements that feel and function just like real teeth.",
    description: "Dental implants are the gold standard for replacing missing teeth. Our expert team places titanium implants that fuse with your jawbone, providing a stable, permanent foundation for your new teeth.",
    icon: "Zap",
    image: "/images/placeholders/service-3.svg",
    benefits: [
      "Permanent solution for missing teeth",
      "Looks and feels like natural teeth",
      "Preserves jawbone density",
      "No removal or adhesives required",
      "Improves ability to eat and speak",
    ],
    process: [
      { step: 1, title: "Consultation & Imaging", description: "3D X-rays to assess bone density and plan placement." },
      { step: 2, title: "Implant Placement", description: "The titanium implant is placed under local anaesthetic." },
      { step: 3, title: "Healing Period", description: "3–6 months for the implant to fuse with the bone." },
      { step: 4, title: "Crown Placement", description: "A custom crown is attached to complete your smile." },
    ],
    faqs: [
      { question: "Are implants painful?", answer: "The procedure is performed under local anaesthetic. Most patients experience minimal discomfort during recovery." },
      { question: "How long do implants last?", answer: "With good oral hygiene, dental implants can last a lifetime." },
    ],
    duration: "Multiple appointments over 3–6 months",
    recovery: "2–7 days after each procedure",
    category: "restorative",
    featured: true,
  },
  {
    id: "orthodontics",
    slug: "cosmetic-dentistry",
    title: "Orthodontics & Invisalign",
    shortDescription: "Straighten your teeth discreetly with modern clear aligner technology.",
    description: "Achieve a perfectly aligned smile without traditional metal braces. Our Invisalign treatments use a series of clear, removable aligners custom-made for your teeth.",
    icon: "AlignCenter",
    image: "/images/placeholders/service-4.svg",
    benefits: [
      "Nearly invisible aligners",
      "Removable for eating and brushing",
      "More comfortable than metal braces",
      "Fewer dental visits required",
      "Predictable, digital treatment planning",
    ],
    process: [
      { step: 1, title: "Digital Scan", description: "A 3D scan replaces messy dental impressions." },
      { step: 2, title: "Treatment Preview", description: "See your final result before treatment begins." },
      { step: 3, title: "Aligner Fitting", description: "Your custom aligners are fitted and you receive instructions." },
      { step: 4, title: "Progress Reviews", description: "Regular check-ins every 6–8 weeks to monitor progress." },
    ],
    faqs: [
      { question: "How long does Invisalign take?", answer: "Treatment typically takes 6–18 months depending on the complexity of your case." },
      { question: "Can adults get Invisalign?", answer: "Absolutely! Invisalign is popular with adults and teens alike." },
    ],
    duration: "6–18 months total",
    recovery: "No recovery needed",
    category: "cosmetic",
    featured: true,
  },
  {
    id: "cosmetic-dentistry",
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    shortDescription: "Transform your smile with veneers, bonding, and smile makeovers tailored to you.",
    description: "Our cosmetic dentistry services are designed to create your dream smile. From porcelain veneers to composite bonding, we use the latest techniques to enhance the appearance of your teeth.",
    icon: "Star",
    image: "/images/placeholders/service-5.svg",
    benefits: [
      "Customised smile design",
      "Natural-looking results",
      "Minimally invasive options available",
      "Boosts self-confidence",
      "Long-lasting aesthetic improvements",
    ],
    process: [
      { step: 1, title: "Smile Consultation", description: "Discuss your aesthetic goals and review options." },
      { step: 2, title: "Digital Smile Design", description: "Preview your new smile digitally before treatment." },
      { step: 3, title: "Treatment", description: "Veneers, bonding or whitening applied with precision." },
      { step: 4, title: "Final Reveal", description: "Your transformed smile is revealed and polished." },
    ],
    faqs: [
      { question: "Are veneers permanent?", answer: "Veneers are a long-term commitment as a small amount of enamel is removed. They typically last 10–15 years." },
      { question: "Will veneers look natural?", answer: "Our veneers are custom-crafted to match your natural teeth in colour, shape, and translucency." },
    ],
    duration: "2–3 appointments",
    recovery: "Minimal – some sensitivity",
    category: "cosmetic",
    featured: true,
  },
  {
    id: "root-canal",
    slug: "restorative-dentistry",
    title: "Root Canal Therapy",
    shortDescription: "Painlessly save infected teeth with modern root canal treatment and preserve your natural smile.",
    description: "Modern root canal therapy is a comfortable and effective way to save a severely infected or damaged tooth. Contrary to popular belief, root canals relieve pain rather than cause it.",
    icon: "Shield",
    image: "/images/placeholders/service-6.svg",
    benefits: [
      "Saves your natural tooth",
      "Eliminates infection and pain",
      "Prevents spread of infection",
      "Restores full function",
      "Modern techniques are comfortable",
    ],
    process: [
      { step: 1, title: "Diagnosis & X-Ray", description: "We confirm infection and assess the root canals." },
      { step: 2, title: "Anaesthetic", description: "Local anaesthetic ensures you feel no pain." },
      { step: 3, title: "Canal Cleaning", description: "Infected tissue is removed and canals are cleaned." },
      { step: 4, title: "Sealing & Crown", description: "The tooth is sealed and a crown placed for protection." },
    ],
    faqs: [
      { question: "Is a root canal painful?", answer: "With modern anaesthesia, root canal therapy is no more uncomfortable than a filling." },
      { question: "How long does it take?", answer: "Most root canals are completed in 1–2 appointments of 60–90 minutes each." },
    ],
    duration: "1–2 appointments",
    recovery: "1–3 days of mild soreness",
    category: "restorative",
    featured: false,
  },
  {
    id: "crowns-bridges",
    slug: "restorative-dentistry",
    title: "Crowns & Bridges",
    shortDescription: "Restore damaged or missing teeth with natural-looking, durable crowns and bridges.",
    description: "Dental crowns and bridges are reliable, beautiful solutions to restore damaged teeth and replace missing ones. Crafted from high-quality materials, they blend seamlessly with your natural teeth.",
    icon: "Crown",
    image: "/images/placeholders/service-7.svg",
    benefits: [
      "Restores function and appearance",
      "Long-lasting ceramic or zirconia options",
      "Protects weakened teeth",
      "Prevents shifting of surrounding teeth",
      "Natural colour matching",
    ],
    process: [
      { step: 1, title: "Tooth Preparation", description: "The tooth is shaped to accommodate the crown." },
      { step: 2, title: "Impressions", description: "Detailed impressions sent to our dental lab." },
      { step: 3, title: "Temporary Crown", description: "A temporary is placed while your permanent crown is made." },
      { step: 4, title: "Final Fitting", description: "The permanent crown is fitted, adjusted, and cemented." },
    ],
    faqs: [
      { question: "How long do crowns last?", answer: "With good care, dental crowns typically last 10–15 years or more." },
      { question: "Does getting a crown hurt?", answer: "The procedure is done under local anaesthetic and is generally comfortable." },
    ],
    duration: "2 appointments",
    recovery: "Minimal – possible sensitivity",
    category: "restorative",
    featured: false,
  },
  {
    id: "emergency-dentistry",
    slug: "emergency-dentistry",
    title: "Emergency Dentistry",
    shortDescription: "Same-day emergency care for severe toothaches, broken teeth, and dental trauma.",
    description: "Dental emergencies don't wait for convenient times. Our team prioritises emergency patients for same-day appointments, providing swift, compassionate care when you need it most.",
    icon: "AlertCircle",
    image: "/images/placeholders/service-8.svg",
    benefits: [
      "Same-day emergency appointments",
      "24/7 emergency phone line",
      "Swift pain relief",
      "Expert trauma management",
      "Compassionate urgent care",
    ],
    process: [
      { step: 1, title: "Emergency Call", description: "Call us immediately – we'll guide you on first aid steps." },
      { step: 2, title: "Same-Day Appointment", description: "We'll see you as quickly as possible." },
      { step: 3, title: "Assessment & Relief", description: "Immediate assessment and pain relief." },
      { step: 4, title: "Treatment Plan", description: "A plan to fully restore your dental health." },
    ],
    faqs: [
      { question: "What counts as a dental emergency?", answer: "Severe toothache, broken teeth, knocked-out teeth, lost fillings, abscesses, and dental trauma all qualify." },
      { question: "What should I do with a knocked-out tooth?", answer: "Keep it moist (in milk or saliva) and call us immediately. We may be able to re-implant it." },
    ],
    duration: "Varies by emergency",
    recovery: "Varies",
    category: "emergency",
    featured: true,
  },
];

export const serviceCategories = [
  { id: "general", label: "General Dentistry" },
  { id: "cosmetic", label: "Cosmetic Dentistry" },
  { id: "restorative", label: "Restorative Dentistry" },
  { id: "preventive", label: "Preventive Care" },
  { id: "emergency", label: "Emergency Dentistry" },
] as const;
