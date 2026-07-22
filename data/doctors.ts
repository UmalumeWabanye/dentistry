export interface Doctor {
  id: string;
  name: string;
  title: string;
  qualifications: string[];
  experience: number;
  specialties: string[];
  languages: string[];
  bio: string;
  image: string;
  memberships: string[];
  interests: string[];
  rating: number;
  reviewCount: number;
}

export const doctors: Doctor[] = [
  {
    id: "dr-edross",
    name: "Dr. A. Edross",
    title: "Principal Dentist & Founder",
    qualifications: ["BChD (UP)", "Postgrad Certificate in Implantology"],
    experience: 20,
    specialties: ["Dental Implants", "Cosmetic Dentistry", "Oral Surgery"],
    languages: ["English", "Afrikaans"],
    bio: "Dr. Edross founded Edross Dental with a vision to deliver world-class dental care in a warm, patient-centred environment. With over 20 years of experience, he is passionate about transforming smiles and lives through the latest dental techniques.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
    memberships: ["South African Dental Association (SADA)", "International Team for Implantology (ITI)"],
    interests: ["Dental Implants", "Full Mouth Rehabilitation", "Smile Makeovers"],
    rating: 4.9,
    reviewCount: 312,
  },
  {
    id: "dr-patel",
    name: "Dr. S. Patel",
    title: "Cosmetic & Restorative Dentist",
    qualifications: ["BDS (UKZN)", "Diploma in Aesthetic Dentistry (UK)"],
    experience: 12,
    specialties: ["Veneers", "Teeth Whitening", "Invisalign"],
    languages: ["English", "Hindi", "Zulu"],
    bio: "Dr. Patel is renowned for her artistic eye and gentle approach to cosmetic dentistry. She specialises in creating natural-looking smile transformations and is a certified Invisalign provider.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
    memberships: ["South African Dental Association (SADA)", "Aesthetic Dentistry Association of South Africa"],
    interests: ["Smile Design", "Clear Aligners", "Composite Bonding"],
    rating: 4.8,
    reviewCount: 245,
  },
  {
    id: "dr-nkosi",
    name: "Dr. T. Nkosi",
    title: "Family & Preventive Dentist",
    qualifications: ["BChD (Wits)", "MSc in Paediatric Dentistry"],
    experience: 8,
    specialties: ["Children's Dentistry", "Preventive Care", "Orthodontics"],
    languages: ["English", "Zulu", "Sotho"],
    bio: "Dr. Nkosi is beloved by young patients and their families for her gentle, reassuring manner. She specialises in preventive care and children's dentistry, creating positive dental experiences from an early age.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
    memberships: ["South African Dental Association (SADA)", "South African Society of Paediatric Dentistry"],
    interests: ["Paediatric Dentistry", "Preventive Programs", "Orthodontic Assessment"],
    rating: 4.9,
    reviewCount: 198,
  },
];
