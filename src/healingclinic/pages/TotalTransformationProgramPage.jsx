import { Award, CheckCircle } from "lucide-react";

import { BRAND } from "../theme/brand";
import { BookingCTA } from "../components/BookingCTA";
import { InteriorHero } from "../components/InteriorHero";
import { Link } from "../components/Link";
import { SectionHeader } from "../components/SectionHeader";

const programHighlights = [
  "Personalized Transformation Planning",
  "Daily Medical Supervision & Monitoring",
  "Weekly Customized Nutrition Guidance",
  "Functional & Strength Training",
  "Yoga, Pilates & Mobility Work",
  "HIIT & Fat Loss Integration",
  "Lifestyle & Habit Optimization",
  "Mind & Body Wellness Approach",
];

const designedFor = [
  "Healthy & Sustainable Weight Loss",
  "Better Fitness & Energy Levels",
  "Body Toning & Strength",
  "Lifestyle Improvement",
  "A Premium Guided Wellness Experience",
];

export function TotalTransformationProgramPage() {
  return (
    <div>
      <InteriorHero
        icon={Award}
        title="Total Transformation Program"
        subtitle="A Premium Medically Supervised long lasting transformation"
        breadcrumb="Home › Total Transformation Program"
        bg={BRAND.blue}
      />

      {/* Intro */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            tag="Premium Program"
            title="A medically supervised transformation — built to last"
            subtitle="At The Healing Clinic, we believe true transformation goes beyond weight loss."
          />

          <div className="mt-8 space-y-4" style={{ color: BRAND.slate }}>
            <p className="leading-relaxed">
              The Total Transformation Program is a personalized wellness and body transformation experience designed to help you
              achieve sustainable physical, lifestyle, and confidence-based results under expert medical supervision.
            </p>
            <p className="leading-relaxed">
              Combining advanced fitness methods, weekly customized nutrition, lifestyle correction, and holistic wellness, this
              program is curated for individuals seeking a structured and result-oriented transformation journey from inside out.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 font-semibold rounded-xl hover:opacity-90 transition no-underline"
              style={{ background: BRAND.green, color: "#fff" }}
            >
              Book Your Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Program highlights */}
      <section className="py-16 px-6" style={{ background: BRAND.slateLight }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            tag="Highlights"
            title="Program Highlights"
            subtitle="Everything is structured, supervised, and personalised — so progress is consistent and sustainable."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {programHighlights.map((item) => (
              <div key={item} className="bg-white rounded-2xl border border-slate-100 p-5 flex gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: BRAND.blueLight }}
                >
                  <CheckCircle size={18} style={{ color: BRAND.blue }} />
                </div>
                <div className="text-sm font-medium" style={{ color: BRAND.slateDeep }}>
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Designed for */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <SectionHeader
              tag="Designed For"
              title="Designed for individuals looking for"
              subtitle="A premium guided wellness experience with measurable results."
              center={false}
            />
            <ul className="space-y-4 mt-6">
              {designedFor.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle size={18} className="mt-0.5 shrink-0" style={{ color: BRAND.green }} />
                  <span className="text-sm leading-relaxed" style={{ color: BRAND.slate }}>
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-100 p-8" style={{ background: BRAND.blueLight }}>
            <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: BRAND.blue }}>
              Our Philosophy
            </div>
            <h3 className="text-2xl font-bold mt-2" style={{ color: BRAND.slateDeep, fontFamily: "Georgia,serif" }}>
              No crash diets. No unrealistic promises. No temporary results.
            </h3>
            <p className="mt-4 leading-relaxed" style={{ color: BRAND.slate }}>
              Only structured guidance, sustainable transformation, and medically supervised wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 px-6" style={{ background: BRAND.slateLight }}>
        <div className="max-w-6xl mx-auto text-center">
          <SectionHeader
            tag="Begin"
            title="Begin Your Transformation Journey"
            subtitle="Become healthier, stronger, more confident, and more disciplined — with a transformation program designed around you."
          />

          <div className="mt-6 text-sm font-semibold" style={{ color: BRAND.slateDeep }}>
            The Healing Clinic
          </div>
          <div className="mt-1 text-sm" style={{ color: BRAND.slate }}>
            Premium Wellness • Lifestyle Transformation • Medical Fitness
          </div>

          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 font-semibold rounded-xl hover:opacity-90 transition no-underline"
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
