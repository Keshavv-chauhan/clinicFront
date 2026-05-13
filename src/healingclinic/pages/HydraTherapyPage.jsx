import { CheckCircle, Droplets } from "lucide-react";

import { BRAND } from "../theme/brand";
import { BookingCTA } from "../components/BookingCTA";
import { ImgPlaceholder } from "../components/ImgPlaceholder";
import { InteriorHero } from "../components/InteriorHero";
import { SectionHeader } from "../components/SectionHeader";

export function HydraTherapyPage() {
  return (
    <div>
      <InteriorHero
        icon={Droplets}
        title="Hydra Therapy"
        subtitle="Harnessing the therapeutic power of water for recovery, pain relief, and vitality."
        breadcrumb="Home › Hydra Therapy"
        bg={BRAND.blue}
      />
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader tag="Benefits" title="Why Hydrotherapy Works" center={false} />
            <p className="leading-relaxed mb-6" style={{ color: BRAND.slate }}>
              Water's buoyancy reduces gravitational load on joints by up to 90%, making it ideal for patients who cannot tolerate land-based exercise. Warm water relaxes muscles, increases circulation, and promotes endorphin release.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Pain Reduction",
                "Joint Mobility",
                "Muscle Strength",
                "Balance & Co-ordination",
                "Post-surgery Rehab",
                "Neurological Conditions",
              ].map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm" style={{ color: BRAND.slate }}>
                  <CheckCircle size={14} style={{ color: BRAND.blue }} /> {b}
                </div>
              ))}
            </div>
          </div>
          <ImgPlaceholder w={600} h={450} label="Hydrotherapy Pool — 800×600" />
        </div>
      </section>
      <BookingCTA />
    </div>
  );
}
