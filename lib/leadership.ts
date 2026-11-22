export type LeadershipMember = {
  name: string;
  role: string;
  photo: string;
  /** "cover" fills the circle (real portrait); "contain" pads it (logo/placeholder). */
  photoFit: "cover" | "contain";
  /** Always visible next to the photo. */
  intro: readonly string[];
  /** Revealed by "Read More". Omit for no button. */
  more?: {
    paragraphs: readonly string[];
    signOff: readonly string[];
  };
  /** Accessible label for the expandable message. */
  moreLabel?: string;
};

export const managingDirector: LeadershipMember = {
  name: "ABCDE ABCDE",
  role: "Managing Director",
  photo: "/assets/ceo_logo.jpg",
  photoFit: "contain",
  intro: [
    "Visionary leader with a decade of industry experience in building management systems.",
  ],
};

export const director: LeadershipMember = {
  name: "Mostafa Kamal Ahmed",
  role: "Director",
  photo: "/assets/director-mostafa-kamal-ahmed.webp",
  photoFit: "cover",
  moreLabel: "Message from the Director",
  // Roughly the first 200 words of the director's message.
  intro: [
    "At Felix Controls Limited, we believe that technology, innovation and engineering excellence are the driving forces behind sustainable progress. Our journey has been guided by a clear vision: to deliver reliable, intelligent and energy-efficient solutions that create lasting value for our clients and contribute to a smarter, safer and more sustainable future.",
    "Over the years, we have established ourselves as a trusted name in building management systems (BMS), industrial automation, HVAC controls, fire detection and protection, and integrated security solutions in Bangladesh. Through our strategic partnerships with globally recognized technology leaders, including Danfoss, Honeywell and Siemens, we bring world-class technologies, engineering expertise and international standards to the local market.",
    "Our success is built on the trust of our valued clients, the dedication of our employees and the strong relationships we have developed with our technology partners and business associates. We take pride not only in delivering products and systems but also in providing comprehensive solutions encompassing engineering, design, supply, installation, commissioning and after-sales support.",
    "As the industry continues to evolve, we remain committed to embracing new technologies, strengthening our technical capabilities and continuously improving the quality of our services. We recognize that every project represents a responsibility and an opportunity to demonstrate our commitment to quality, integrity, innovation and customer satisfaction.",
  ],
  more: {
    paragraphs: [
      "Looking ahead, our goal is to further strengthen our position as a leading engineering solutions provider in Bangladesh while building long-term partnerships based on trust, transparency and mutual success.",
      "I sincerely thank our clients, partners, consultants, suppliers and, above all, our dedicated team for their continued confidence and support. Your trust inspires us to achieve more and motivates us to pursue excellence in everything we do.",
      "Together, we look forward to building a smarter, safer and more sustainable tomorrow.",
    ],
    signOff: ["Director", "Felix Controls Limited"],
  },
};
