import { Users } from "lucide-react";

import { BRAND } from "../theme/brand";
import { BookingCTA } from "../components/BookingCTA";
import { ImgPlaceholder } from "../components/ImgPlaceholder";
import { InteriorHero } from "../components/InteriorHero";
import { SectionHeader } from "../components/SectionHeader";

import { useSiteContent } from "../content/SiteContentProvider";

function PhotoOrPlaceholder({ photoSrc, label, w, h, className }) {
  if (photoSrc) {
    return <img src={photoSrc} alt={label} className={className} style={{ width: "100%", height: "auto", display: "block" }} />;
  }
  return <ImgPlaceholder w={w} h={h} label={label} className={className} />;
}

export function TeamPage() {
  const { content } = useSiteContent();
  const leaders = content.teamLeaders || [];
  const team = content.teamMembers || [];

  return (
    <div>
      <InteriorHero
        icon={Users}
        title="Our Team"
        subtitle="Meet the compassionate specialists behind your recovery."
        breadcrumb="Home › Our Team"
        bg={BRAND.blue}
      />
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Specialists" title="The People Who Care" subtitle="Every member of our team is handpicked for their clinical expertise and bedside manner." />
          {leaders.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 mb-10">
              {leaders.slice(0, 2).map((l) => (
                <div key={l.id} className="group rounded-2xl border p-5" style={{ borderColor: BRAND.accent, background: BRAND.white }}>
                  <div className="overflow-hidden rounded-xl">
                    <PhotoOrPlaceholder
                      photoSrc={l.photoSrc}
                      w={448}
                      h={322}
                      label={`${l.name} — Photo`}
                      className="group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <h2 className="font-extrabold text-lg" style={{ color: BRAND.slateDeep }}>
                      {l.name}
                    </h2>
                    {l.role ? (
                      <p className="text-sm font-medium mt-0.5" style={{ color: BRAND.green }}>
                        {l.role}
                      </p>
                    ) : null}
                    {l.qual ? (
                      <p className="mt-2 text-xs" style={{ color: BRAND.slate }}>
                        {l.qual}
                      </p>
                    ) : null}

                    {Array.isArray(l.highlights) && l.highlights.length > 0 ? (
                      <ul className="mt-4 space-y-1 text-sm text-left pl-5 list-disc" style={{ color: BRAND.slate }}>
                        {l.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map(({ id, name, role, qual, exp, desc, photoSrc }) => (
              <div
                key={id || name}
                className="group rounded-2xl border p-5"
                style={{ borderColor: BRAND.accent, background: BRAND.white }}
              >
                <div className="overflow-hidden rounded-xl">
                  <PhotoOrPlaceholder
                    photoSrc={photoSrc}
                    w={520}
                    h={420}
                    label={`${name} — Photo`}
                    className="group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-lg" style={{ color: BRAND.slateDeep }}>
                    {name}
                  </h3>
                  <p className="text-sm font-medium mt-0.5" style={{ color: BRAND.green }}>
                    {role}
                  </p>
                  <p className="mt-2 text-xs" style={{ color: BRAND.slate }}>
                    {qual}
                  </p>
                  <p className="mt-3 text-sm" style={{ color: BRAND.slate }}>
                    {desc}
                  </p>
                  <span className="inline-block mt-4 text-xs px-3 py-1 rounded-full" style={{ background: BRAND.blueLight, color: BRAND.blue }}>
                    {exp} experience
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BookingCTA />
    </div>
  );
}
