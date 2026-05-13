import { Globe, Mail, MapPin, Phone } from "lucide-react";
import logo from "../../images/logo.png";
import { useSiteContent } from "../content/SiteContentProvider";
import { isPathHidden } from "../content/siteContent";
import { BRAND } from "../theme/brand";
import { Link } from "./Link";

export function Footer() {
  const { content } = useSiteContent();
  const address = content.contact?.address || "";
  const phone = content.contact?.phones?.[0] || "+91 98765 43210";
  const email = content.contact?.email || "info@thehealingclinic.co.in";

  const services = [
    { label: "Homeopathy", path: "/homeopathy" },
    { label: "Physiotherapy", path: "/physiotherapy" },
    { label: "Hydra Therapy", path: "/hydra-therapy" },
    { label: "Functional Training", path: "/functional-training" },
  ].filter((s) => !isPathHidden(s.path, content.hiddenPaths));

  const quickLinks = [
    ["Our Team", "/about"],
    ["Testimonials", "/testimonials"],
    ["Contact Us", "/contact"],
  ].filter(([, p]) => !isPathHidden(p, content.hiddenPaths));

  return (
    <footer style={{ background: BRAND.slateDeep }} className="text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-15 h-15 rounded-lg flex items-center justify-center" >
                <img src={logo} alt="The Healing Clinic Logo" className="w-10" />
              </div>
              <div>
                <div className="font-bold text-white leading-tight" style={{ fontFamily: "Georgia,serif" }}>
                  The Healing Clinic
                </div>
                <div className="text-xs tracking-widest uppercase" style={{ color: BRAND.green }}>
                  Invest in your health.

                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              A multidisciplinary wellness clinic dedicated to restoring health through evidence-based treatments and compassionate care.
            </p>
            <div className="flex gap-3 mt-5">
              {[Globe, Mail, Phone, MapPin].map((Icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center transition-colors"
                  style={{ transitionProperty: "background-color" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = BRAND.blue;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#334155";
                  }}
                >
                  <Icon size={14} className="text-white" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.path}>
                  <Link to={s.path} className="text-slate-400 hover:text-white transition-colors no-underline">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map(([l, p]) => (
                <li key={p}>
                  <Link to={p} className="text-slate-400 hover:text-white transition-colors no-underline">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2.5 text-slate-400">
                <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: BRAND.green }} />
                <span className="whitespace-pre-line">{address}</span>
              </li>
              <li className="flex gap-2.5 text-slate-400">
                <Phone size={15} className="shrink-0" style={{ color: BRAND.green }} />{phone}
              </li>
              <li className="flex gap-2.5 text-slate-400">
                <Mail size={15} className="shrink-0" style={{ color: BRAND.green }} />{email}
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>© 2025 The Healing Clinic. All rights reserved.</span>
          
        </div>
      </div>
    </footer>
  );
}
