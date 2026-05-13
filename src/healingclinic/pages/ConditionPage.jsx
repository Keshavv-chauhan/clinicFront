import { Calendar, CheckCircle } from "lucide-react";

import { BRAND } from "../theme/brand";
import { BookingCTA } from "../components/BookingCTA";
import { ImgPlaceholder } from "../components/ImgPlaceholder";
import { InteriorHero } from "../components/InteriorHero";
import { Link } from "../components/Link";
import { SectionHeader } from "../components/SectionHeader";

export function ConditionPage({ title, category, desc, bullets, imgLabel, accentColor = BRAND.blue }) {
  return (
    <div>
      <InteriorHero title={title} subtitle={desc} breadcrumb={`Home › ${category} › ${title}`} bg={accentColor} />
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <ImgPlaceholder w={600} h={440} label={imgLabel || `${title} — Treatment Photo`} />
          <div>
            <SectionHeader tag="Treatment Protocol" title={`How We Treat ${title}`} center={false} />
            <ul className="space-y-4">
              {(bullets || [
                "Detailed assessment and diagnosis",
                "Personalised treatment plan",
                "Hands-on therapy sessions",
                "Home exercise programme",
                "Progress monitoring & review",
              ]).map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle size={18} className="mt-0.5 shrink-0" style={{ color: accentColor }} />
                  <span className="text-sm leading-relaxed" style={{ color: BRAND.slate }}>
                    {b}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3 font-semibold rounded-xl hover:opacity-90 transition no-underline"
              style={{ background: BRAND.green, color: "#fff" }}
            >
              <Calendar size={15} /> Book Consultation
            </Link>
          </div>
        </div>
      </section>
      <BookingCTA short />
    </div>
  );
}
