import { Star } from "lucide-react";

import { BRAND } from "../theme/brand";
import { BookingCTA } from "../components/BookingCTA";
import { InteriorHero } from "../components/InteriorHero";

import { useSiteContent } from "../content/SiteContentProvider";

export function TestimonialsPage() {
  const { content } = useSiteContent();
  const allTestimonials = content.testimonials || [];
  const meta = content.testimonialsMeta || { averageRating: "4.9", totalReviews: "1,200+", source: "Google Reviews" };

  return (
    <div>
      <InteriorHero
        icon={Star}
        title="Testimonials"
        subtitle="Stories of healing, recovery, and renewed vitality from our patients."
        breadcrumb="Home › Testimonials"
        bg={BRAND.blue}
      />
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTestimonials.map(({ id, name, condition, text, stars }) => (
              <div key={id || name + condition} className="bg-slate-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex gap-0.5 mb-4">
                  {Array(stars)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={16} fill={BRAND.green} style={{ color: BRAND.green }} />
                    ))}
                </div>
                <p className="text-sm leading-relaxed mb-5 italic" style={{ color: BRAND.slate }}>
                  "{text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: BRAND.blue }}>
                    {name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: BRAND.slateDeep }}>
                      {name}
                    </div>
                    <div className="text-xs font-medium" style={{ color: BRAND.green }}>
                      {condition}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16 p-10 rounded-2xl" style={{ background: BRAND.blueLight }}>
            <div className="text-5xl font-bold mb-1" style={{ color: BRAND.blue }}>{meta.averageRating}</div>
            <div className="flex justify-center gap-1 mb-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} size={22} fill={BRAND.green} style={{ color: BRAND.green }} />
                ))}
            </div>
            <p className="text-sm font-medium" style={{ color: BRAND.slate }}>
              Average rating from {meta.totalReviews} verified {meta.source}
            </p>
          </div>
        </div>
      </section>
      <BookingCTA short />
    </div>
  );
}
