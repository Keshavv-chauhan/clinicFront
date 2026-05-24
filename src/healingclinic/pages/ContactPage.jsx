import { CheckCircle, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

import { BRAND } from "../theme/brand";
import { ImgPlaceholder } from "../components/ImgPlaceholder";
import { InteriorHero } from "../components/InteriorHero";
import { useSiteContent } from "../content/SiteContentProvider";


export function ContactPage() {
  const { content } = useSiteContent();
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const address = content.contact?.address || "";
  const phones = (content.contact?.phones || []).join("\n");
  const email = content.contact?.email || "";
  const hours = content.contact?.hours || "";

  const heroSubtitle = content.contactPage?.heroSubtitle || "We're here to help. Reach out to schedule your consultation.";
  const infoTitle = content.contactPage?.infoTitle || "Get In Touch";
  const formTitle = content.contactPage?.formTitle || "Book an Appointment";
  const successTitle = content.contactPage?.successTitle || "Appointment Request Sent!";
  const successBody = content.contactPage?.successBody || "Our team will contact you within 2 hours to confirm your slot.";
  const note = content.contactPage?.note || "We respond within 2 hours during clinic hours.";
  const mapLabel = content.contactPage?.mapLabel || "Google Maps — Clinic Location";

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = () => {
    if (form.name && form.phone) setSent(true);
  };

  return (
    <div>
      <InteriorHero
        icon={Phone}
        title="Contact Us"
        subtitle={heroSubtitle}
        breadcrumb="Home › Contact Us"
        bg={BRAND.blue}
      />
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6" style={{ color: BRAND.slateDeep, fontFamily: "Georgia,serif" }}>
              {infoTitle}
            </h2>
            <ul className="space-y-5">
              {[
                [MapPin, "Address", address],
                [Phone, "Phone", phones],
                [Mail, "Email", email],
                [Clock, "Hours", hours],
              ].map(([Icon, label, val]) => (
                <li key={label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: BRAND.greenLight }}>
                    <Icon size={18} style={{ color: BRAND.green }} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: BRAND.slate }}>
                      {label}
                    </div>
                    <div className="text-sm whitespace-pre-line" style={{ color: BRAND.slateDeep }}>
                      {val}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-slate-50 rounded-2xl p-8">
            {sent ? (
              <div className="text-center py-12">
                <CheckCircle size={56} className="mx-auto mb-4" style={{ color: BRAND.green }} />
                <h3 className="text-2xl font-bold mb-2" style={{ color: BRAND.slateDeep }}>
                  {successTitle}
                </h3>
                <p style={{ color: BRAND.slate }}>{successBody}</p>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold mb-6" style={{ color: BRAND.slateDeep, fontFamily: "Georgia,serif" }}>
                  {formTitle}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {[
                    ["name", "Full Name *", "text"],
                    ["phone", "Phone Number *", "tel"],
                  ].map(([key, ph, type]) => (
                    <input
                      key={key}
                      name={key}
                      type={type}
                      placeholder={ph}
                      value={form[key]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                      style={{ "--tw-ring-color": BRAND.blue }}
                    />
                  ))}
                </div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none mb-4"
                />
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none mb-4"
                  style={{ color: form.service ? BRAND.slateDeep : BRAND.slate }}
                >
                  <option value="">Select Service</option>
                  {["Homeopathy", "Physiotherapy", "Functional Training", "Limb Lengthening"].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <textarea
                  name="message"
                  placeholder="Describe your symptoms or query…"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none mb-5 resize-none"
                />
                <button
                  onClick={handleSubmit}
                  className="w-full py-3.5 font-bold rounded-xl hover:opacity-90 transition"
                  style={{ background: BRAND.green, color: "#fff" }}
                >
                  Send Request
                </button>
                <p className="text-xs text-center mt-3" style={{ color: BRAND.slate }}>
                  {note}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Map placeholder */}
      <div className="mx-6 mb-10 max-w-6xl mx-auto rounded-2xl overflow-hidden border border-slate-200">
        <ImgPlaceholder w={1200} h={380} label={mapLabel} />
      </div>
    </div>
  );
}
