import { BRAND } from "../theme/brand";

export function InteriorHero({ title, subtitle, breadcrumb, icon: Icon, bg = BRAND.blue }) {
  return (
    <section
      className="pt-36 pb-16 px-6 relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${bg}15 0%, #f8fafc 100%)` }}
    >
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-5 -translate-y-1/2 translate-x-1/2"
        style={{ background: bg }}
      />
      <div className="max-w-4xl mx-auto text-center">
        {breadcrumb && (
          <div className="text-sm mb-4" style={{ color: BRAND.slate }}>
            {breadcrumb}
          </div>
        )}
        {Icon && (
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg"
            style={{ background: bg }}
          >
            <Icon size={30} className="text-white" />
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: BRAND.slateDeep, fontFamily: "Georgia,serif" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl" style={{ color: BRAND.slate }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
