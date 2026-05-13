import {
  Activity,
  Award,
  Brain,
  CheckCircle,
  FlaskConical,
  Leaf,
  Moon,
  Shield,
  Thermometer,
  Users,
} from "lucide-react";

import { BRAND } from "../theme/brand";
import { BookingCTA } from "../components/BookingCTA";
import { ImgPlaceholder } from "../components/ImgPlaceholder";
import { InteriorHero } from "../components/InteriorHero";
import { SectionHeader } from "../components/SectionHeader";

const homoConditions = [
  {
    icon: Thermometer,
    label: "Diabetes",
    desc: "Constitutional homeopathic remedies to support metabolic balance, reduce insulin resistance, and manage blood sugar naturally.",
  },
  {
    icon: Brain,
    label: "Anxiety & Sleeplessness",
    desc: "Targeted remedies for chronic anxiety, insomnia, and nervous tension — without sedation or side effects.",
  },
  {
    icon: FlaskConical,
    label: "Gut Health",
    desc: "Restore microbiome balance and heal IBS, acidity, colitis, and chronic digestive disorders from the root.",
  },
  {
    icon: Shield,
    label: "Immune System",
    desc: "Strengthen your immune response, reduce susceptibility to infections, and balance auto-immune conditions.",
  },
];

const pillars = [
  {
    icon: Activity,
    title: "Your Physical Health",
    desc: "Symptoms, medical history, and body signals — assessed in depth to find patterns and root drivers.",
  },
  {
    icon: Brain,
    title: "Emotional & Mental Well-being",
    desc: "Stress, sleep, mood, and nervous system balance — because mind and body heal together.",
  },
  {
    icon: Leaf,
    title: "Lifestyle & Environment",
    desc: "Diet, routines, triggers, work strain, and surroundings — the context that shapes your health.",
  },
];

const conditionGroups = [
  {
    icon: Shield,
    title: "Chronic Ailments",
    items: ["Allergies", "Asthma", "Arthritis", "Thyroid disorders", "Eczema", "Psoriasis"],
  },
  {
    icon: Activity,
    title: "Pain Management",
    items: ["Back pain", "Neck pain", "Migraines", "Joint pain", "Muscle spasms"],
  },
  {
    icon: Moon,
    title: "Sleep-related Issues",
    items: ["Insomnia", "Difficulty falling asleep", "Difficulty staying asleep", "Fatigue from disrupted sleep"],
  },
  {
    icon: Thermometer,
    title: "Acute Illnesses",
    items: ["Fever", "Infections", "Colds", "Flu"],
  },
  {
    icon: Brain,
    title: "Stress-related Conditions",
    items: ["Anxiety", "Digestive issues", "Nervous tension"],
  },
];

export function HomeopathyPage() {
  return (
    <div>
      <InteriorHero
        icon={Leaf}
        title="Homeopathy"
        subtitle="Gentle healing for a better tomorrow — treating you as a whole person."
        breadcrumb="Home › Homeopathy"
        bg={BRAND.green}
      />

      {/* Intro */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader tag="Homeopathy" title="Homeopathy: Gentle Healing for a Better Tomorrow" center={false} />
            <div className="space-y-4" style={{ color: BRAND.slate }}>
              <p className="leading-relaxed">
                When patients visit a doctor, they bring hope—hope for relief and recovery. At The Healing Clinic, we honour that hope by addressing every concern holistically and supporting your journey to wellness through the power of homeopathy.
              </p>
              <p className="leading-relaxed">
                Under the care of <span className="font-semibold" style={{ color: BRAND.slateDeep }}>Dr. Anil Kumar Sharma</span> and our compassionate team, we focus not only on the illness, but also on the individual behind the condition—nurturing both physical recovery and emotional well-being.
              </p>
              <p className="leading-relaxed">
                Our goal is simple: gentle, effective solutions that help you heal from within.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Noninvasive & painless therapies",
                "Root-cause focused care",
                "Personalised constitutional assessment",
              ].map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-lg border border-slate-200"
                  style={{ color: BRAND.slateDeep, background: BRAND.slateLight }}
                >
                  <CheckCircle size={15} style={{ color: BRAND.green }} /> {b}
                </span>
              ))}
            </div>
          </div>
          <ImgPlaceholder w={600} h={460} label="Homeopathy — Consultation / Doctor" />
        </div>
      </section>

      {/* Classical Homeopathy */}
      <section className="py-16 px-6" style={{ background: BRAND.slateLight }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader tag="Classical Homeopathy" title="What Is Classical Homeopathy?" center={false} />
            <p className="leading-relaxed mb-4" style={{ color: BRAND.slate }}>
              Classical homeopathy focuses on identifying and treating the root cause of illness instead of merely suppressing symptoms. Using highly diluted natural substances, it supports the body's innate healing mechanisms—aiming for lasting relief with a gentle approach.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                {
                  icon: FlaskConical,
                  title: "Gentle Remedies",
                  desc: "Natural preparations selected with care for your constitution.",
                },
                {
                  icon: Shield,
                  title: "Root-cause Focus",
                  desc: "Addresses deeper drivers to build resilience and immunity.",
                },
                {
                  icon: Users,
                  title: "Patient-centred",
                  desc: "Treats the person behind the condition—mind, body, and spirit.",
                },
                {
                  icon: CheckCircle,
                  title: "Long-term Support",
                  desc: "Step-by-step follow-ups to track progress and refine care.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl border border-slate-100 p-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: BRAND.greenLight }}>
                    <Icon size={20} style={{ color: BRAND.greenDeep }} />
                  </div>
                  <div className="font-semibold" style={{ color: BRAND.slateDeep }}>
                    {title}
                  </div>
                  <div className="text-sm mt-1" style={{ color: BRAND.slate }}>
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ImgPlaceholder w={600} h={420} label="Classical Homeopathy — Remedy Preparation" />
        </div>
      </section>

      {/* Whole person pillars */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Our Assessment"
            title="Treating the Individual as a Whole"
            subtitle="Our doctors carefully assess your condition across these key areas before selecting remedies and building your plan."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-slate-100 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: BRAND.blueLight }}>
                  <Icon size={22} style={{ color: BRAND.blue }} />
                </div>
                <div className="font-bold" style={{ color: BRAND.slateDeep }}>
                  {title}
                </div>
                <div className="text-sm mt-2 leading-relaxed" style={{ color: BRAND.slate }}>
                  {desc}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 grid lg:grid-cols-2 gap-12 items-center">
            <ImgPlaceholder w={600} h={420} label="Homeopathy — Patient Assessment" />
            <div>
              <SectionHeader tag="Personalised Care" title="Designed for Immunity & Resilience" center={false} />
              <p className="leading-relaxed" style={{ color: BRAND.slate }}>
                We aim to relieve symptoms while strengthening overall immunity and long-term resilience. Your plan is personalised, practical, and continuously refined with follow-ups—so the care evolves as you improve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader tag="The Science" title="How Homeopathy Works" center={false} />
            <p className="leading-relaxed mb-4" style={{ color: BRAND.slate }}>
              Homeopathy is a 200-year-old system of medicine based on the principle of <strong>similia similibus curentur</strong> — "like cures like." Ultra-diluted natural substances stimulate the body's own healing intelligence.
            </p>
            <p className="leading-relaxed" style={{ color: BRAND.slate }}>
              Our qualified homeopathic physicians conduct thorough constitutional assessments, considering your physical symptoms, emotional state, lifestyle, and medical history before crafting a bespoke remedy protocol.
            </p>
          </div>
          <ImgPlaceholder w={600} h={420} label="Homeopathy — Remedy Preparation" />
        </div>
      </section>

      {/* Conditions treated */}
      <section className="py-16 px-6" style={{ background: BRAND.slateLight }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Conditions We Treat"
            title="Support for a Wide Range of Health Challenges"
            subtitle="Homeopathy can help with chronic concerns, acute illnesses, pain, stress, sleep, and overall immunity support."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditionGroups.map(({ icon: Icon, title, items }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: BRAND.greenLight }}>
                    <Icon size={20} style={{ color: BRAND.greenDeep }} />
                  </div>
                  <div className="font-bold" style={{ color: BRAND.slateDeep }}>
                    {title}
                  </div>
                </div>
                <ul className="space-y-2 text-sm" style={{ color: BRAND.slate }}>
                  {items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle size={15} className="mt-0.5" style={{ color: BRAND.green }} />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <SectionHeader tag="Featured" title="Common Focus Areas" subtitle="Explore a few popular care pathways we often support." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {homoConditions.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: BRAND.greenLight }}>
                    <Icon size={22} style={{ color: BRAND.greenDeep }} />
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: BRAND.slateDeep }}>
                    {label}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: BRAND.slate }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Why Choose Us"
            title="A Trusted Space for Holistic Healing"
            subtitle="We combine veteran expertise with root-cause care and integrated therapies for complete well-being."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                icon: Award,
                title: "Veteran Expertise",
                desc: "Guided by decades of clinical experience and a patient-first approach in classical homeopathy.",
              },
              {
                icon: Shield,
                title: "Root Cause Healing",
                desc: "We look beyond symptoms to address deeper drivers and support long-term resilience.",
              },
              {
                icon: Users,
                title: "Integrated Care",
                desc: "When needed, we coordinate with complementary therapies for broader recovery support.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: BRAND.blueLight }}>
                  <Icon size={22} style={{ color: BRAND.blue }} />
                </div>
                <div className="font-bold" style={{ color: BRAND.slateDeep }}>
                  {title}
                </div>
                <div className="text-sm mt-2 leading-relaxed" style={{ color: BRAND.slate }}>
                  {desc}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader tag="Next Steps" title="Begin Your Journey to Holistic Well-being" center={false} />
              <p className="leading-relaxed" style={{ color: BRAND.slate }}>
                Discover the benefits of classical homeopathy at The Healing Clinic. Our team supports you with personalised, effective treatments that empower your body, mind, and soul—so you feel cared for at every step.
              </p>
            </div>
            <ImgPlaceholder w={600} h={420} label="Homeopathy — Clinic Interior" />
          </div>
        </div>
      </section>

      <BookingCTA />
    </div>
  );
}
