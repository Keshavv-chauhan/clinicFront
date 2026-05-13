import { CheckCircle, Dumbbell } from "lucide-react";

import { BRAND } from "../theme/brand";
import { BookingCTA } from "../components/BookingCTA";
import { ImgPlaceholder } from "../components/ImgPlaceholder";
import { InteriorHero } from "../components/InteriorHero";
import { SectionHeader } from "../components/SectionHeader";

export function FunctionalTrainingPage() {
  return (
    <div>
      <InteriorHero
        icon={Dumbbell}
        title="Functional Training"
        subtitle="Movement that mirrors real life — building strength, stability, and longevity."
        breadcrumb="Home › Functional Training"
        bg={BRAND.blue}
      />
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <ImgPlaceholder w={600} h={460} label="Functional Training Session" />
          <div>
            <SectionHeader tag="Our Philosophy" title="Train for Life, Not Just the Gym" center={false} />
            <p className="leading-relaxed mb-4" style={{ color: BRAND.slate }}>
              Our certified trainers design programmes around the movements you make daily — lifting, carrying, bending, and reaching — ensuring your body is capable, balanced, and pain-free in every real-world context.
            </p>
            <ul className="space-y-3 mt-6">
              {[
                "1-on-1 Personalised Sessions",
                "Sports Performance Programmes",
                "Post-Rehab Strength Rebuilding",
                "Corrective Exercise & Posture Work",
                "Senior Fitness & Fall Prevention",
              ].map((i) => (
                <li key={i} className="flex items-center gap-3 text-sm" style={{ color: BRAND.slate }}>
                  <CheckCircle size={15} style={{ color: BRAND.green }} /> {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <BookingCTA />
    </div>
  );
}
