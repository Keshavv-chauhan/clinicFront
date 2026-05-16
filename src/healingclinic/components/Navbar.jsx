import { useEffect, useRef, useState } from "react";
import { Calendar, ChevronDown, ChevronRight, Clock, LogIn, Mail, Menu, Phone, X } from "lucide-react";

import logo from "../../images/logo.png";
import { navLinks } from "../data/navLinks";
import { useSiteContent } from "../content/SiteContentProvider";
import { isPathHidden } from "../content/siteContent";
import { useHashRouter } from "../router/useHashRouter";
import { BRAND } from "../theme/brand";
import { Link } from "./Link";
import { MobileDropdown } from "./MobileDropdown";

export function Navbar() {
  const path = useHashRouter();
  const { content } = useSiteContent();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef(null);

  const visibleNavLinks = navLinks
    .map((link) => {
      if (Array.isArray(link.children)) {
        const children = link.children.filter((c) => !isPathHidden(c.path, content.hiddenPaths));
        return { ...link, children };
      }
      return link;
    })
    .filter((link) => {
      if (isPathHidden(link.path, content.hiddenPaths)) return false;
      if (Array.isArray(link.children) && link.children.length === 0) return false;
      return true;
    });

  const topPhone = content.contact?.phones?.[0] || "+91 98765 43210";
  const topEmail = content.contact?.email || "info@thehealingclinic.co.in";
  const topHours = content.contact?.hours || "Mon–Sat: 9AM–7PM";
  const showContactCtas = !isPathHidden("/contact", content.hiddenPaths);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label) => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const isActivePath = (targetPath) => {
    if (!targetPath) return false;
    if (targetPath === "/") return path === "/";
    return path === targetPath || path.startsWith(`${targetPath}/`);
  };

  const isParentActive = (children) => Array.isArray(children) && children.some((c) => isActivePath(c.path));

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "#fff",
        borderBottom: scrolled ? "1px solid #e2e8f0" : "1px solid #f1f5f9",
        boxShadow: scrolled ? "0 2px 20px rgba(0,86,179,0.08)" : "none",
      }}
    >
      {/* Top bar */}
      <div style={{ background: BRAND.green }} className="py-1.5 px-6 hidden md:flex items-center justify-between text-xs text-white">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <Phone size={11} /> {topPhone}
          </span>
          <span className="flex items-center gap-1.5">
            <Mail size={11} /> {topEmail}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Clock size={11} /> {topHours}
          </span>
          {showContactCtas ? (
            <Link
              to="/contact"
              className="font-semibold px-3 py-0.5 rounded text-xs transition hover:opacity-90"
              style={{ background: BRAND.greenDeep, color: "#fff" }}
            >
              Book Now
            </Link>
          ) : null}
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div>
          <img src={logo} alt="The Healing Clinic" className="h-14 w-auto" />
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center flex-wrap">
          {visibleNavLinks.map((link) => {
            if (link.children) {
              const active = isParentActive(link.children);

              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-all hover:-translate-y-[1px] hover:bg-slate-50"
                    style={{
                      color: openDropdown === link.label || active ? BRAND.blue : BRAND.slateDeep,
                      background: active ? BRAND.blueLight : "transparent",
                    }}
                  >
                    {link.label}
                    <ChevronDown size={13} className={`transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                  </button>

                  {openDropdown === link.label && (
                    <div
                      className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 z-50 min-w-48"
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {link.children.map((child) => {
                        const childActive = isActivePath(child.path);

                        return (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm rounded-lg mx-2 hover:bg-slate-50 transition-all hover:-translate-y-[1px] no-underline"
                            style={{
                              color: childActive ? BRAND.blue : BRAND.slate,
                              background: childActive ? BRAND.blueLight : "transparent",
                            }}
                            onClick={() => setOpenDropdown(null)}
                          >
                            <ChevronRight size={13} style={{ color: BRAND.blue }} />
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            const active = isActivePath(link.path);

            return (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 py-2 text-sm font-medium rounded-md transition-all hover:-translate-y-[1px] hover:bg-slate-50 hover:opacity-90 no-underline"
                style={{
                  color: active ? BRAND.blue : BRAND.slateDeep,
                  background: active ? BRAND.blueLight : "transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA + burger */}
        <div className="flex items-center gap-3">
          {showContactCtas ? (
            <Link
              to="/contact"
              className="hidden lg:flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg transition-all hover:opacity-90 no-underline"
              style={{ background: BRAND.green, color: "#fff" }}
            >
              <Calendar size={14} /> Book Appointment
            </Link>
          ) : null}
          <Link
            to="/admin"
            className="hidden lg:flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg transition-all hover:opacity-90 no-underline"
            style={{ background: BRAND.blueLight, color: BRAND.blue }}
          >
            <LogIn size={14} /> Login
          </Link>
          <button className="lg:hidden p-2 rounded-md" style={{ color: BRAND.slateDeep }} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white max-h-[80vh] overflow-y-auto">
          {visibleNavLinks.map((link) => (
            <div key={link.label}>
              {link.children ? (
                <MobileDropdown link={link} onClose={() => setMenuOpen(false)} />
              ) : (
                <Link
                  to={link.path}
                  className="flex items-center px-5 py-3 text-sm font-medium border-b border-slate-50 transition-all hover:bg-slate-50 no-underline"
                  style={{
                    color: isActivePath(link.path) ? BRAND.blue : BRAND.slateDeep,
                    background: isActivePath(link.path) ? BRAND.blueLight : "transparent",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <div className="p-4">
            {showContactCtas ? (
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold rounded-xl no-underline hover:opacity-90 transition"
                style={{ background: BRAND.green, color: "#fff" }}
                onClick={() => setMenuOpen(false)}
              >
                <Calendar size={15} /> Book Appointment
              </Link>
            ) : null}
          </div>
        </div>
      )}
    </nav>
  );
}
