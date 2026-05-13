import { Activity, Bone, CheckCircle, MoveHorizontal, Stethoscope, Zap } from "lucide-react";

import { BRAND } from "../theme/brand";
import { BookingCTA } from "../components/BookingCTA";
import { ImgPlaceholder } from "../components/ImgPlaceholder";
import { InteriorHero } from "../components/InteriorHero";
import { SectionHeader } from "../components/SectionHeader";

const physioConditions = [
  { icon: Bone, label: "Herniated Disc", desc: "Targeted decompression and neural mobilisation to relieve disc-related nerve impingement." },
  { icon: Activity, label: "Back Pain", desc: "Comprehensive spinal stabilisation programmes addressing acute and chronic lumbar pain." },
  { icon: Stethoscope, label: "Cervical Pain", desc: "Manual therapy and postural correction for neck pain, stiffness, and radiculopathy." },
  { icon: MoveHorizontal, label: "Disc Bulge", desc: "McKenzie method and dynamic stabilisation to centralise symptoms and heal the disc." },
  { icon: Activity, label: "Frozen Shoulder", desc: "Progressive capsular stretching, joint mobilisation, and strength protocols." },
  { icon: Zap, label: "Chronic Pain", desc: "Multidisciplinary pain management combining manual therapy, exercise, and education." },
];

export function PhysiotherapyPage() {
  return (
    <div>
      <InteriorHero
        icon={Activity}
        title="Physiotherapy"
        subtitle="Evidence-based rehabilitation to get you moving freely — and keep you that way."
        breadcrumb="Home › Physiotherapy"
        bg={BRAND.blue}
      />
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Our Approach"
            title="Advanced Physiotherapy Techniques"
            subtitle="Our physiotherapists use the latest manual, electrotherapy, and exercise-science approaches."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {physioConditions.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex gap-4 p-6 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: BRAND.blueLight }}>
                  <Icon size={22} style={{ color: BRAND.blue }} />
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: BRAND.slateDeep }}>
                    {label}
                  </h3>
                  <p className="text-sm" style={{ color: BRAND.slate }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-6" style={{ background: BRAND.slateLight }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <ImgPlaceholder w={600} h={440} label="Physiotherapy Session in Progress" />
          <div>
            <SectionHeader tag="Our Equipment" title="State-of-the-Art Facilities" center={false} />
            <ul className="space-y-3">
              {[
                "Computerised Spinal Decompression Traction",
                "TENS / IFT / Ultrasound Therapy",
                "Shockwave Therapy",
                "Dry Needling & Acupressure",
                "Hydrotherapy Pool",
                "Dedicated Exercise Rehabilitation Gym",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm" style={{ color: BRAND.slate }}>
                  <CheckCircle size={16} style={{ color: BRAND.green }} /> {item}
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
