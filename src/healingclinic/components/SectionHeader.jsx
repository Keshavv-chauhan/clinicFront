import { BRAND } from "../theme/brand";

export function SectionHeader({ tag, title, subtitle, center = true }) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {tag && (
        <span
          className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
          style={{ background: BRAND.greenLight, color: BRAND.green }}
        >
          {tag}
        </span>
      )}
      <h2
        className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
        style={{ color: BRAND.slateDeep, fontFamily: "Georgia,serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg max-w-2xl mx-auto" style={{ color: BRAND.slate }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
