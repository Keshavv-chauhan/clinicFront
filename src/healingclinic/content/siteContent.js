const STORAGE_KEY = "hc_site_content_v1";

export const DEFAULT_SITE_CONTENT = {
  contact: {
    address: "House No.- C-1000, Sector 43, Gurugram-122002, Haryana\nLandmark: Sushant Lok 1, Next to Vyapar Kendra",
    phones: ["+91 98765 43210"],
    email: "info@thehealingclinic.co.in",
    hours: "Mon–Sat: 9AM–7PM",
  },
  contactPage: {
    heroSubtitle: "We're here to help. Reach out to schedule your consultation.",
    infoTitle: "Get In Touch",
    formTitle: "Book an Appointment",
    successTitle: "Appointment Request Sent!",
    successBody: "Our team will contact you within 2 hours to confirm your slot.",
    note: "We respond within 2 hours during clinic hours.",
    mapLabel: "Google Maps — Clinic Location",
  },
  teamLeaders: [
    {
      id: "leader-anil",
      name: "DR. ANIL K. SHARMA",
      role: "Senior Homeopathy Consultant",
      qual: "M.D. (Hom) D.IACH (Greece)",
      highlights: [
        "Lifetime Achievement Award for contribution in Homeopathy by Government of India",
        "Clinical practice of 45 years in Homeopathy",
        "Successfully treated over 1 Lakh+ patients",
        "Senior Consultant (Honorary) at Lady Hardinge Medical College",
        "Ex Senior Consultant (Honorary) at Safdarjung Hospital",
      ],
      photoSrc: "",
    },
    {
      id: "leader-owner",
      name: "Mr. Shrey",
      role: "Owner",
      qual: "",
      highlights: [],
      photoSrc: "",
    },
  ],
  teamMembers: [
    {
      id: "tm-anika",
      name: "Dr. Anika Sharma",
      role: "Chief Physiotherapist",
      qual: "MPT (Musculoskeletal), BPT",
      exp: "14 years",
      desc: "Leads personalized physiotherapy programs focused on long-term recovery, mobility, and pain-free movement.",
      photoSrc: "",
    },
    {
      id: "tm-rohit",
      name: "Dr. Rohit Jain",
      role: "Senior Homeopath",
      qual: "BHMS, MD (Homeopathy)",
      exp: "12 years",
      desc: "Provides constitutional homeopathic care with a patient-first approach for chronic and lifestyle-related conditions.",
      photoSrc: "",
    },
    {
      id: "tm-vikram",
      name: "Mr. Vikram Patel",
      role: "Functional Training Coach",
      qual: "CSCS, ACE-CPT",
      exp: "10 years",
      desc: "Builds safe strength and conditioning plans to improve daily performance, posture, and injury resilience.",
      photoSrc: "",
    },
    {
      id: "tm-priya",
      name: "Dr. Priya Rao",
      role: "Homeopath & Nutritionist",
      qual: "BHMS, Cert. Clinical Nutrition",
      exp: "9 years",
      desc: "Combines homeopathy and nutrition guidance to support digestion, immunity, and sustainable lifestyle changes.",
      photoSrc: "",
    },
    {
      id: "tm-suresh",
      name: "Dr. Suresh Nair",
      role: "Physiotherapy Consultant",
      qual: "MPT (Neuro), BPT",
      exp: "11 years",
      desc: "Specializes in neuro and complex rehab cases with structured plans for balance, coordination, and strength.",
      photoSrc: "",
    },
  ],
  testimonials: [
    {
      id: "t-1",
      name: "Priya Sharma",
      condition: "Cervical Pain",
      text: "After months of suffering, just 6 sessions at The Healing Clinic restored my full range of motion. The team is truly exceptional.",
      stars: 5,
    },
    {
      id: "t-2",
      name: "Rajesh Mehra",
      condition: "Back Pain",
      text: "Incredible results with functional training and physio combined. I feel 20 years younger and back to my morning runs!",
      stars: 5,
    },
    {
      id: "t-3",
      name: "Anita Desai",
      condition: "Gut Health",
      text: "The homeopathy programme completely transformed my digestive health. I wish I had found them sooner.",
      stars: 5,
    },
    {
      id: "t-4",
      name: "Suresh Iyer",
      condition: "Frozen Shoulder",
      text: "18 months of frozen shoulder pain resolved in 10 physio sessions. The team was patient, knowledgeable, and incredibly supportive.",
      stars: 5,
    },
    {
      id: "t-5",
      name: "Meera Pillai",
      condition: "Diabetes (Homeopathy)",
      text: "My HbA1c dropped from 9.2 to 6.8 within 6 months of constitutional homeopathic treatment. Truly life-changing.",
      stars: 5,
    },
    {
      id: "t-6",
      name: "Arjun Kapoor",
      condition: "Functional Training",
      text: "After my ACL repair, I returned to football fully in just 14 weeks thanks to the rehab and functional training programme.",
      stars: 5,
    },
  ],
  testimonialsMeta: {
    averageRating: "4.9",
    totalReviews: "1,200+",
    source: "Google Reviews",
  },
  hiddenPaths: {
    "/homeopathy": false,
    "/physiotherapy": false,
    "/functional-training": false,
    "/limb-lengthening": false,
    "/about": false,
    "/testimonials": false,
    "/contact": false,
  },
};

function safeParseJson(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function deepMerge(base, override) {
  if (!override || typeof override !== "object") return base;
  if (Array.isArray(base)) return Array.isArray(override) ? override : base;

  const merged = { ...base };
  for (const key of Object.keys(override)) {
    const baseVal = base[key];
    const overrideVal = override[key];
    if (baseVal && typeof baseVal === "object" && !Array.isArray(baseVal)) {
      merged[key] = deepMerge(baseVal, overrideVal);
    } else {
      merged[key] = overrideVal;
    }
  }
  return merged;
}

export function loadSiteContent() {
  const raw = localStorage.getItem(STORAGE_KEY);
  const parsed = raw ? safeParseJson(raw) : null;
  return deepMerge(DEFAULT_SITE_CONTENT, parsed);
}

export function saveSiteContent(content) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
}

export function resetSiteContent() {
  localStorage.removeItem(STORAGE_KEY);
}

export function isPathHidden(path, hiddenPaths, { treatHiddenParentsAsHidden = true } = {}) {
  if (!hiddenPaths) return false;
  if (hiddenPaths[path]) return true;
  if (!treatHiddenParentsAsHidden) return false;

  for (const [hiddenPath, hidden] of Object.entries(hiddenPaths)) {
    if (!hidden) continue;
    if (!hiddenPath || hiddenPath === "/") continue;
    if (path === hiddenPath) return true;
    if (path.startsWith(`${hiddenPath}/`)) return true;
  }

  return false;
}

export function newId(prefix = "id") {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return `${prefix}-${crypto.randomUUID()}`;
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
