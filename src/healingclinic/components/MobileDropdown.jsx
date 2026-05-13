import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

import { useHashRouter } from "../router/useHashRouter";
import { BRAND } from "../theme/brand";
import { Link } from "./Link";

export function MobileDropdown({ link, onClose }) {
  const path = useHashRouter();
  const [open, setOpen] = useState(false);

  const isActivePath = (targetPath) => {
    if (!targetPath) return false;
    if (targetPath === "/") return path === "/";
    return path === targetPath || path.startsWith(`${targetPath}/`);
  };

  const isActiveParent = Array.isArray(link.children) && link.children.some((c) => isActivePath(c.path));

  return (
    <div className="border-b border-slate-50">
      <button
        className="flex items-center justify-between w-full px-5 py-3 text-sm font-medium transition-all hover:bg-slate-50"
        style={{
          color: isActiveParent ? BRAND.blue : BRAND.slateDeep,
          background: isActiveParent ? BRAND.blueLight : "transparent",
        }}
        onClick={() => setOpen(!open)}
      >
        {link.label}
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="bg-slate-50 pb-2">
          {link.children.map((child) => {
            const active = isActivePath(child.path);

            return (
              <Link
                key={child.path}
                to={child.path}
                className="flex items-center gap-2 px-8 py-2.5 text-sm transition-all hover:bg-white no-underline"
                style={{
                  color: active ? BRAND.blue : BRAND.slate,
                  background: active ? BRAND.blueLight : "transparent",
                }}
                onClick={onClose}
              >
                <ChevronRight size={12} style={{ color: BRAND.blue }} />
                {child.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
