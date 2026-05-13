import { Heart } from "lucide-react";

import { BRAND } from "../theme/brand";

export function ImgPlaceholder({ w = 800, h = 500, label = "Clinic Photo", className = "" }) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-2xl overflow-hidden ${className}`}
      style={{
        width: "100%",
        aspectRatio: `${w}/${h}`,
        background: `linear-gradient(135deg, ${BRAND.blueLight} 0%, ${BRAND.greenLight} 100%)`,
        border: `2px dashed ${BRAND.blue}`,
      }}
    >
      <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3" style={{ background: BRAND.blue }}>
        <Heart size={26} className="text-white" />
      </div>
      <span className="text-sm font-medium" style={{ color: BRAND.blue }}>
        {label}
      </span>
      <span className="text-xs mt-1" style={{ color: BRAND.slate }}>
        {w} × {h}
      </span>
    </div>
  );
}
