export const CLINIC_INFO = {
  name: "Edross Dental",
  tagline: "Your Healthiest Smile Starts Here.",
  address: {
    street: "123 Dental Drive",
    suburb: "Sandton",
    city: "Johannesburg",
    province: "Gauteng",
    postalCode: "2196",
    country: "South Africa",
    full: "123 Dental Drive, Sandton, Johannesburg, 2196",
  },
  contact: {
    phone: "+27 11 123 4567",
    phonePlain: "0111234567",
    emergency: "+27 82 123 4567",
    whatsapp: "+27821234567",
    email: "info@edross-dental.co.za",
    bookingEmail: "bookings@edross-dental.co.za",
  },
  hours: [
    { day: "Monday", open: "08:00", close: "17:00", isOpen: true },
    { day: "Tuesday", open: "08:00", close: "17:00", isOpen: true },
    { day: "Wednesday", open: "08:00", close: "17:00", isOpen: true },
    { day: "Thursday", open: "08:00", close: "17:00", isOpen: true },
    { day: "Friday", open: "08:00", close: "16:00", isOpen: true },
    { day: "Saturday", open: "08:00", close: "13:00", isOpen: true },
    { day: "Sunday", open: null, close: null, isOpen: false },
  ],
  social: {
    facebook: "https://facebook.com/edrossdental",
    instagram: "https://instagram.com/edrossdental",
    twitter: "https://twitter.com/edrossdental",
    linkedin: "https://linkedin.com/company/edrossdental",
  },
  stats: [
    { label: "Years Experience", value: 20, suffix: "+" },
    { label: "Happy Patients", value: 10000, suffix: "+" },
    { label: "Patient Satisfaction", value: 98, suffix: "%" },
    { label: "Same-Day Emergency", value: 24, suffix: "/7" },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.9!2d28.0566!3d-26.1073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA2JzI2LjMiUyAyOMKwMDMnMjMuOCJF!5e0!3m2!1sen!2sza!4v1600000000000",
};

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "General Dentistry", href: "/services/general-dentistry" },
      { label: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
      { label: "Restorative Dentistry", href: "/services/restorative-dentistry" },
      { label: "Preventive Care", href: "/services/preventive-care" },
      { label: "Emergency Dentistry", href: "/services/emergency-dentistry" },
    ],
  },
  { label: "Our Dentists", href: "/doctors" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const WHY_CHOOSE_US = [
  {
    icon: "Award",
    title: "Experienced Dentists",
    description: "Our team brings decades of combined expertise across all dental disciplines.",
  },
  {
    icon: "Heart",
    title: "Gentle Patient Care",
    description: "We take pride in our empathetic, anxiety-free approach to dental treatment.",
  },
  {
    icon: "Cpu",
    title: "Modern Equipment",
    description: "Digital X-rays, 3D imaging, and intraoral scanners for precise diagnosis.",
  },
  {
    icon: "CreditCard",
    title: "Flexible Payments",
    description: "We accept all major medical aids and offer convenient payment plans.",
  },
  {
    icon: "Users",
    title: "Family Friendly",
    description: "A welcoming space for patients of all ages, from toddlers to seniors.",
  },
  {
    icon: "Shield",
    title: "Sterile Environment",
    description: "Hospital-grade sterilisation protocols for your complete safety.",
  },
];

export const TECHNOLOGIES = [
  {
    icon: "Zap",
    title: "Digital X-Rays",
    description: "90% less radiation than traditional X-rays with instant, high-definition imaging.",
  },
  {
    icon: "Scan",
    title: "Intraoral Scanner",
    description: "3D digital impressions – no more uncomfortable putty moulds.",
  },
  {
    icon: "Box",
    title: "3D CBCT Imaging",
    description: "Full volumetric imaging for precise implant planning and complex diagnosis.",
  },
  {
    icon: "FlaskConical",
    title: "Hospital-Grade Sterilisation",
    description: "Autoclave sterilisation and strict infection control at every step.",
  },
];

export const TREATMENT_JOURNEY = [
  {
    step: 1,
    title: "Consultation",
    description: "Discuss your goals and concerns with our expert team.",
    icon: "MessageCircle",
  },
  {
    step: 2,
    title: "Diagnosis",
    description: "Comprehensive examination using the latest digital technology.",
    icon: "Search",
  },
  {
    step: 3,
    title: "Treatment Plan",
    description: "A personalised, detailed plan designed around your needs.",
    icon: "FileText",
  },
  {
    step: 4,
    title: "Smile Transformation",
    description: "Expert treatment delivered with precision and care.",
    icon: "Smile",
  },
];
