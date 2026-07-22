export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "how-to-maintain-healthy-gums",
    title: "How to Maintain Healthy Gums: A Complete Guide",
    excerpt:
      "Gum disease affects millions of people but is largely preventable. Here's everything you need to know about keeping your gums healthy.",
    category: "Preventive Care",
    readTime: "5 min read",
    date: "2024-12-10",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80",
  },
  {
    id: "2",
    slug: "teeth-whitening-myths",
    title: "5 Teeth Whitening Myths Debunked by Our Dentists",
    excerpt:
      "From DIY baking soda hacks to the 'best' whitening strips, our team separates fact from fiction.",
    category: "Cosmetic",
    readTime: "4 min read",
    date: "2024-11-25",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&q=80",
  },
  {
    id: "3",
    slug: "children-first-dental-visit",
    title: "Making Your Child's First Dental Visit a Positive Experience",
    excerpt:
      "How to prepare your little one for the dentist and why early dental visits matter for lifelong oral health.",
    category: "Family",
    readTime: "6 min read",
    date: "2024-11-08",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80",
  },
  {
    id: "4",
    slug: "invisalign-vs-braces",
    title: "Invisalign vs Traditional Braces: Which Is Right for You?",
    excerpt:
      "We compare the cost, comfort, duration and suitability of clear aligners versus metal braces.",
    category: "Orthodontics",
    readTime: "7 min read",
    date: "2024-10-20",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
  },
  {
    id: "5",
    slug: "dental-implants-guide",
    title: "The Complete Guide to Dental Implants in 2024",
    excerpt:
      "Everything you need to know about dental implants - candidacy, the procedure, cost, and what to expect.",
    category: "Implants",
    readTime: "8 min read",
    date: "2024-10-05",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80",
  },
  {
    id: "6",
    slug: "emergency-dental-guide",
    title: "What to Do In a Dental Emergency",
    excerpt:
      "A knocked-out tooth, broken crown, or severe toothache - know exactly what to do in any dental emergency.",
    category: "Emergency",
    readTime: "5 min read",
    date: "2024-09-18",
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&q=80",
  },
];
