export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  treatment: string;
  rating: number;
  review: string;
  date: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah M.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    treatment: "Dental Implants",
    rating: 5,
    review: "I've been wanting to replace my missing tooth for years but was always anxious about the procedure. The team at Edross Dental made me feel completely at ease. The implant looks and feels completely natural – I can't believe the difference it's made to my confidence!",
    date: "2024-10-15",
    verified: true,
  },
  {
    id: "t2",
    name: "James K.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    treatment: "Teeth Whitening",
    rating: 5,
    review: "I had my teeth professionally whitened before my wedding and the results were absolutely stunning. My teeth went from yellowish to brilliantly white in just one session. The staff were professional, friendly and made the whole experience enjoyable.",
    date: "2024-11-03",
    verified: true,
  },
  {
    id: "t3",
    name: "Priya R.",
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
    treatment: "Invisalign",
    rating: 5,
    review: "I'm halfway through my Invisalign treatment and already seeing incredible results. Dr. Patel is meticulous and takes the time to explain every step. The clinic itself is state-of-the-art and always immaculately clean. Highly recommended!",
    date: "2024-09-22",
    verified: true,
  },
  {
    id: "t4",
    name: "Michael O.",
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
    treatment: "Emergency Dentistry",
    rating: 5,
    review: "I cracked a tooth on a Friday evening and was in agony. Edross Dental saw me the same day, even though they were fully booked. They fixed it professionally and the pain was gone immediately. This is genuinely the best dental practice I've ever visited.",
    date: "2024-12-05",
    verified: true,
  },
  {
    id: "t5",
    name: "Linda B.",
    avatar: "https://randomuser.me/api/portraits/women/62.jpg",
    treatment: "Cosmetic Veneers",
    rating: 5,
    review: "Getting veneers was a big decision for me and I'm so glad I chose Edross Dental. Dr. Patel spent so much time making sure the colour and shape were perfect. My new smile has genuinely changed my life – I smile so much more freely now.",
    date: "2024-08-17",
    verified: true,
  },
  {
    id: "t6",
    name: "David N.",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    treatment: "Root Canal",
    rating: 5,
    review: "I was terrified of getting a root canal but Dr. Edross completely put my fears to rest. I felt absolutely no pain during the procedure. The clinic is modern, calm and professional. I won't hesitate to recommend them to everyone I know.",
    date: "2024-07-30",
    verified: true,
  },
];
