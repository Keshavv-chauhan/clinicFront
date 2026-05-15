import { BRAND } from "../theme/brand";

export function InteriorHero({ title, subtitle, icon: Icon, bg = BRAND.blue }) {
  return (
    <header
      className="pt-28 pb-10 px-6 relative overflow-hidden border-b border-slate-100"
      style={{ background: `linear-gradient(135deg, ${bg}10 0%, #f8fafc 100%)` }}
    >
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-5 -translate-y-1/2 translate-x-1/2"
        style={{ background: bg }}
      />
      <div className="max-w-4xl mx-auto text-center">
        {Icon && (
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
            style={{ background: bg }}
          >
            <Icon size={26} className="text-white" />
          </div>
        )}
        <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: BRAND.slateDeep, fontFamily: "Georgia,serif" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg" style={{ color: BRAND.slate }}>
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
