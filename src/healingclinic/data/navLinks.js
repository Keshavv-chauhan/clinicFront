export const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "Homeopathy",
    path: "/homeopathy",
  },
  {
    label: "Physiotherapy",
    path: "/physiotherapy",
    children: [
      { label: "Herniated Disc", path: "/physiotherapy/herniated-disc" },
      { label: "Back Pain", path: "/physiotherapy/back-pain" },
      { label: "Cervical Pain", path: "/physiotherapy/cervical-pain" },
      { label: "Disc Bulge", path: "/physiotherapy/disc-bulge" },
      { label: "Frozen Shoulder", path: "/physiotherapy/frozen-shoulder" },
      { label: "Chronic Pain", path: "/physiotherapy/chronic-pain" },
    ],
  },
  // { label: "Hydra Therapy", path: "/hydra-therapy" },
  { label: "Functional Training", path: "/functional-training" },
  { label: "Limb Lengthening", path: "/limb-lengthening" },
  { label: "Total Transformation", path: "/total-transformation-program" },
  { label: "Our Team", path: "/about" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact Us", path: "/contact" },
];
