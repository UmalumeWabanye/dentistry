export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: "f1",
    question: "How often should I visit the dentist?",
    answer: "We recommend a check-up and professional clean every 6 months for most patients. However, some patients with gum disease or a higher risk of dental problems may need to visit more frequently. We'll advise you on the ideal schedule at your first appointment.",
    category: "General",
  },
  {
    id: "f2",
    question: "Do you accept dental insurance?",
    answer: "Yes, we accept most major medical aid schemes in South Africa. We also offer flexible payment plans for patients without insurance. Please contact us to confirm your specific plan before your appointment.",
    category: "Payments",
  },
  {
    id: "f3",
    question: "Is teeth whitening safe?",
    answer: "Absolutely. Our professional whitening treatments use clinically approved products and are performed under the supervision of our qualified dentists. We assess your suitability before treatment to ensure the safest, best possible outcome.",
    category: "Cosmetic",
  },
  {
    id: "f4",
    question: "At what age should children first see a dentist?",
    answer: "We recommend bringing your child for their first dental visit around their first birthday, or when their first tooth appears. Early visits help children become comfortable with the dentist and allow us to monitor development from the start.",
    category: "Family",
  },
  {
    id: "f5",
    question: "Are dental X-rays safe?",
    answer: "Modern digital dental X-rays use very low levels of radiation – significantly less than traditional film X-rays. We take every precaution, including using lead aprons, and only take X-rays when clinically necessary.",
    category: "General",
  },
  {
    id: "f6",
    question: "How long does a dental implant procedure take?",
    answer: "The overall implant process typically spans 3–6 months from initial placement to the final crown. The surgical placement itself takes about 1–2 hours per implant. The healing period is essential for the implant to fuse properly with your jawbone.",
    category: "Implants",
  },
  {
    id: "f7",
    question: "Do you offer payment plans?",
    answer: "Yes, we offer flexible payment plans to make dental care accessible. We also accept most major medical aids and credit cards. Please speak to our reception team for options tailored to your needs.",
    category: "Payments",
  },
  {
    id: "f8",
    question: "What should I do in a dental emergency?",
    answer: "Call us immediately on our emergency line. We prioritise emergency patients and will book you in as soon as possible. For a knocked-out tooth, keep it moist in milk or your saliva and come straight to us – time is critical.",
    category: "Emergency",
  },
  {
    id: "f9",
    question: "How do I know if I'm a good candidate for Invisalign?",
    answer: "Most people with mild to moderate alignment issues are good candidates for Invisalign. The best way to find out is to book a free Invisalign consultation with Dr. Patel, who will assess your teeth and recommend the best treatment option.",
    category: "Cosmetic",
  },
  {
    id: "f10",
    question: "How can I manage dental anxiety?",
    answer: "We understand dental anxiety is very common. Our team is specially trained in treating anxious patients. We take a gentle, patient-centred approach and offer thorough explanations at every step. Sedation options are also available for highly anxious patients.",
    category: "General",
  },
];

export const faqCategories = ["All", "General", "Cosmetic", "Family", "Implants", "Payments", "Emergency"];
