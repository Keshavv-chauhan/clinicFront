import { Award, CheckCircle, Shield, UserPlus } from "lucide-react";

import { BRAND } from "../theme/brand";
import { BookingCTA } from "../components/BookingCTA";
import { InteriorHero } from "../components/InteriorHero";
import { ImgPlaceholder } from "../components/ImgPlaceholder";
import { Link } from "../components/Link";
import { SectionHeader } from "../components/SectionHeader";

const whyChoose = [
  "Advanced orthopedic surgical planning",
  "Internationally accepted limb lengthening protocols",
  "Personalized recovery & rehabilitation roadmap",
  "Dedicated medical supervision throughout the journey",
  "Posture, mobility & gait correction support",
  "Nutrition & recovery optimization guidance",
  "Structured physiotherapy and rehabilitation assistance",
  "Premium patient coordination and support system",
];

const designedFor = [
  "Individuals seeking medically guided height enhancement",
  "Those wanting improved body proportions and posture",
  "People aiming for enhanced self-confidence",
  "Patients requiring correction for limb discrepancies",
  "Anyone preferring a professionally managed transformation",
];

export function LimbLengtheningPage() {
  return (
    <div>
      <InteriorHero
        icon={UserPlus}
        title="Limb Lengthening Program"
        subtitle="Advanced Height Enhancement & Orthopedic Transformation Program"
        breadcrumb="Home › Limb Lengthening Program"
        bg={BRAND.blue}
      />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionHeader
              tag="Program Overview"
              title="Redefining confidence through precision orthopedic care"
              subtitle="A medically supervised, fully structured limb lengthening experience focused on safety, recovery, and lasting outcomes."
            />

            <div className="mt-6 text-sm leading-relaxed" style={{ color: BRAND.slate }}>
              <p>
                At The Healing Clinic, our Limb Lengthening Program is designed for individuals seeking scientifically guided height
                enhancement under expert orthopedic supervision. This is not just a cosmetic procedure — it is a structured medical
                transformation focused on aesthetics, posture, mobility, recovery, and long-term physical confidence.
              </p>
              <p className="mt-4">
                Our program combines advanced orthopedic techniques, personalized rehabilitation, recovery planning, nutrition
                guidance, and continuous medical supervision to ensure a safe, premium, and highly personalized experience.
              </p>
            </div>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold no-underline"
                style={{ background: BRAND.green, color: "#fff" }}
              >
                Schedule Confidential Consultation
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <ImgPlaceholder label="Limb Lengthening — Clinic" w={800} h={520} />
            <div className="rounded-2xl border border-slate-100 p-6" style={{ background: BRAND.blueLight }}>
              <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: BRAND.blue }}>
                Our Commitment
              </div>
              <h3 className="text-xl font-bold mt-2" style={{ color: BRAND.slateDeep }}>
                Safety-first care with expert orthopedic oversight
              </h3>
              <p className="mt-3 text-sm" style={{ color: BRAND.slate }}>
                Every plan is personalized after careful medical screening and feasibility assessment. Rehabilitation and long-term
                mobility are central to our approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: BRAND.slateLight }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            tag="Why Choose Us"
            title="Why Choose Our Limb Lengthening Program"
            subtitle="A clinical, structured, and safety-centred program with complete recovery planning."
          />

          <div className="grid lg:grid-cols-2 gap-6 mt-8">
            <div>
              <ul className="space-y-3">
                {whyChoose.map((w) => (
                  <li key={w} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: BRAND.blueLight }}>
                      <CheckCircle size={16} style={{ color: BRAND.blue }} />
                    </div>
                    <div className="text-sm" style={{ color: BRAND.slate }}>
                      {w}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-100 p-6 bg-white">
              <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: BRAND.blue }}>
                Designed For
              </div>
              <h3 className="text-2xl font-bold mt-2" style={{ color: BRAND.slateDeep }}>
                Who Is This Program Designed For?
              </h3>
              <ul className="mt-4 space-y-3">
                {designedFor.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <CheckCircle size={16} className="mt-1" style={{ color: BRAND.green }} />
                    <span className="text-sm" style={{ color: BRAND.slate }}>
                      {d}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeader tag="Approach" title="Our Complete Transformation Approach" subtitle="Surgical precision plus long-term rehabilitation." />
            <div className="mt-6 space-y-3 text-sm" style={{ color: BRAND.slate }}>
              <p className="font-semibold">Pre-Procedure Assessment</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Detailed orthopedic consultation & medical screening</li>
                <li>Height gain feasibility analysis & body structure assessment</li>
                <li>Personalized treatment planning</li>
              </ul>

              <p className="font-semibold mt-4">Surgical Planning & Coordination</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Expert surgical consultation and procedure planning</li>
                <li>Technology-assisted precision approach and safety protocols</li>
                <li>Structured inpatient coordination support</li>
              </ul>

              <p className="font-semibold mt-4">Recovery & Rehabilitation</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Guided physiotherapy, mobility and gait training</li>
                <li>Muscle strengthening, flexibility and posture correction</li>
                <li>Recovery progress monitoring and long-term rehab assistance</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <ImgPlaceholder label="Rehab & Therapy" w={700} h={420} />

            <div className="rounded-2xl p-6" style={{ background: BRAND.blueLight }}>
              <div className="text-xs font-semibold" style={{ color: BRAND.blue }}>
                Safety & Supervision
              </div>
              <h4 className="text-lg font-bold mt-2" style={{ color: BRAND.slateDeep }}>
                Our Commitment to Safety & Medical Supervision
              </h4>
              <p className="mt-3 text-sm" style={{ color: BRAND.slate }}>
                Every patient journey is conducted under strict medical supervision with structured recovery frameworks that
                prioritise long-term mobility and balanced outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: BRAND.slateLight }}>
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader tag="Consultation" title="Personalized Consultation Process" subtitle="A detailed assessment to build your customised roadmap." />
          <p className="mt-4 text-sm" style={{ color: BRAND.slate }}>
            Each program begins with a comprehensive evaluation of goals, orthopedic suitability, recovery expectations and
            lifestyle compatibility. Based on this, we prepare a customized treatment and recovery roadmap.
          </p>

          <div className="mt-8">
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader tag="FAQ" title="Frequently Asked Questions" subtitle="Quick answers to common patient questions." />
          <div className="mt-6 space-y-4 text-sm" style={{ color: BRAND.slate }}>
            <div>
              <div className="font-semibold">Is limb lengthening medically safe?</div>
              <div className="mt-1">When performed under experienced orthopedic supervision with proper rehabilitation, it can be structured and safe.</div>
            </div>

            <div>
              <div className="font-semibold">How much height increase is possible?</div>
              <div className="mt-1">Achievable increase varies based on body structure, bone condition, and medical suitability.</div>
            </div>

            <div>
              <div className="font-semibold">Is rehabilitation important?</div>
              <div className="mt-1">Yes. Rehabilitation and physiotherapy are critical for recovery and functional outcomes.</div>
            </div>

            <div>
              <div className="font-semibold">How long does recovery take?</div>
              <div className="mt-1">Recovery duration varies per individual and depends on procedure specifics and rehabilitation consistency.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: BRAND.slateLight }}>
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader tag="Begin" title="Begin Your Transformation Journey" subtitle="Schedule your confidential consultation today." />
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold no-underline"
              style={{ background: BRAND.green, color: "#fff" }}
            >
              Book Your Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
