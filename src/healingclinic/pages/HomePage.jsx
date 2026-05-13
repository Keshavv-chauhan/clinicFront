import {
  Activity,
  ArrowRight,
  Award,
  Calendar,
  CheckCircle,
  Clock,
  Droplets,
  Dumbbell,
  HeartHandshake,
  Leaf,
  Phone,
  Shield,
  Star,
  Users,
} from "lucide-react";
import img00 from "../../images/image00.webp";
import { BRAND } from "../theme/brand";
import { ImgPlaceholder } from "../components/ImgPlaceholder";
import { Link } from "../components/Link";
import { SectionHeader } from "../components/SectionHeader";
import { useSiteContent } from "../content/SiteContentProvider";
import { isPathHidden } from "../content/siteContent";

const services = [
  {
    icon: Leaf,
    label: "Homeopathy",
    desc: "Natural, holistic remedies that heal from within — treating the root cause, not just symptoms.",
    path: "/homeopathy",
    color: BRAND.green,
  },
  {
    icon: Activity,
    label: "Physiotherapy",
    desc: "Expert rehabilitation for pain, injuries, and mobility disorders using evidence-based techniques.",
    path: "/physiotherapy",
    color: BRAND.blue,
  },
  {
    icon: Droplets,
    label: "Hydra Therapy",
    desc: "Water-based therapeutic techniques to accelerate recovery, reduce inflammation, and improve circulation.",
    path: "/hydra-therapy",
    color: BRAND.blue,
  },
  {
    icon: Dumbbell,
    label: "Functional Training",
    desc: "Personalised movement programmes to build strength, stability, and long-term physical resilience.",
    path: "/functional-training",
    color: BRAND.greenDeep,
  },
];

const stats = [
  { value: "50+", label: "Years of Excellence" },
  { value: "1 Lakh+", label: "Patients Treated" },
  { value: "12", label: "Expert Specialists" },
  { value: "98%", label: "Patient Satisfaction" },
];

const defaultTestimonials = [
  {
    name: "Priya Sharma",
    condition: "Cervical Pain",
    text: "After months of suffering, just 6 sessions at The Healing Clinic restored my full range of motion. The team is truly exceptional.",
    stars: 5,
  },
  {
    name: "Rajesh Mehra",
    condition: "Back Pain",
    text: "Incredible results with functional training and physio combined. I feel 20 years younger and back to my morning runs!",
    stars: 5,
  },
  {
    name: "Anita Desai",
    condition: "Gut Health",
    text: "The homeopathy programme completely transformed my digestive health. I wish I had found them sooner.",
    stars: 5,
  },
];

export function HomePage() {
  const { content } = useSiteContent();
  const visibleServices = services.filter((s) => !isPathHidden(s.path, content.hiddenPaths));
  const visibleTestimonials = (content.testimonials && content.testimonials.length ? content.testimonials : defaultTestimonials).slice(0, 3);
  const showTeamLink = !isPathHidden("/about", content.hiddenPaths);
  const showTestimonialsLink = !isPathHidden("/testimonials", content.hiddenPaths);
  const showContactLink = !isPathHidden("/contact", content.hiddenPaths);
  const topPhone = content.contact?.phones?.[0] || "+91 98765 43210";
  const telHref = `tel:${String(topPhone).replace(/[^\d+]/g, "")}`;

  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f0f9ff 0%, #f8fafc 50%, #f0fdf4 100%)" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10" style={{ background: BRAND.blue }} />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-10" style={{ background: BRAND.green }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full mb-6" style={{ background: BRAND.greenLight, color: BRAND.green }}>
              <HeartHandshake size={15} /> Gurugram's Premier Wellness Destination
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6" style={{ color: BRAND.slateDeep, fontFamily: "Georgia,serif" }}>
              Restore, Recover &{" "}
              <span style={{ color: BRAND.blue }}>Thrive Naturally</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: BRAND.slate }}>
              A multidisciplinary clinic integrating Homeopathy, Physiotherapy, Hydra Therapy, and Functional Training — because your body deserves complete, compassionate care.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              {showContactLink ? (
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-7 py-3.5 font-semibold rounded-xl shadow-lg hover:opacity-90 transition no-underline"
                  style={{ background: BRAND.green, color: "#fff" }}
                >
                  <Calendar size={17} /> Book Appointment
                </Link>
              ) : null}
              {showTeamLink ? (
                <Link
                  to="/about"
                  className="flex items-center gap-2 px-7 py-3.5 font-semibold rounded-xl border-2 hover:bg-slate-50 transition no-underline"
                  style={{ borderColor: BRAND.blue, color: BRAND.blue }}
                >
                  Meet Our Team <ArrowRight size={15} />
                </Link>
              ) : null}
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              {["NABH Accredited", "50+ Years Trust"].map((b) => (
                <span
                  key={b}
                  className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-sm"
                  style={{ color: BRAND.slate }}
                >
                  <CheckCircle size={13} style={{ color: BRAND.green }} /> {b}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={img00} alt="Hero — Clinic & Team" w={700} h={560} label="Hero — Clinic & Team" />
            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3 border border-slate-100">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: BRAND.greenLight }}>
                <Star size={22} style={{ color: BRAND.green }} />
              </div>
              <div>
                <div className="font-bold text-xl" style={{ color: BRAND.slateDeep }}>
                  4.9 / 5
                </div>
                <div className="text-xs" style={{ color: BRAND.slate }}>
                  1,200+ Google Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: BRAND.blue }} className="py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</div>
              <div className="text-sm text-white/80">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              tag="About Us"
              title="Healing Begins From Within"
              subtitle="The Healing Clinic, a brand of Wholistic Healing Private Limited, is dedicated to complete well-being through natural and holistic therapies."
              center={false}
            />

            <div className="space-y-4" style={{ color: BRAND.slate }}>
              <p className="leading-relaxed">
                Combining traditional healing methods with modern care, we offer personalised treatments that support physical, mental, and emotional health. It’s a trusted space where healing begins from within.
              </p>
              <p className="leading-relaxed">
                The Healing Clinic was founded on the belief that <span className="font-semibold" style={{ color: BRAND.slateDeep }}>true health is wealth</span>, and holistic wellness—where mind, body, and spirit are in congruence—is invaluable.
                As India’s first-of-its-kind clinic, we specialise in noninvasive, painless therapies for pain, stress, sleep, and immunity.
              </p>
              <p className="leading-relaxed">
                Every patient who walks through our doors carries a spark of hope—for relief, recovery, and renewed well-being—and we are committed to turning that hope into reality.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-100 p-6" style={{ background: BRAND.slateLight }}>
              <div className="text-sm font-semibold mb-2" style={{ color: BRAND.slateDeep }}>
                Under the guidance of Dr. Anil Kumar Sharma
              </div>
              <div className="text-sm leading-relaxed" style={{ color: BRAND.slate }}>
                A veteran homeopath with over <span className="font-semibold" style={{ color: BRAND.slateDeep }}>50 years</span> of experience, lifetime achievement awardee, and a renowned practitioner of Classical homeopathy.
                He has treated over <span className="font-semibold" style={{ color: BRAND.slateDeep }}>1 lakh patients</span> with a patient-centred approach focused on healing the individual—not just the symptoms.
              </div>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {[
                "India’s first-of-its-kind holistic clinic",
                "Noninvasive & painless therapies",
                "Mind–body–spirit aligned care",
                "Gentle, effective healing journey",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 bg-white rounded-xl border border-slate-100 p-3">
                  <CheckCircle size={16} className="mt-0.5" style={{ color: BRAND.green }} />
                  <span className="text-sm" style={{ color: BRAND.slate }}>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-xl border-2 hover:bg-slate-50 transition no-underline"
                style={{ borderColor: BRAND.blue, color: BRAND.blue }}
              >
                Learn More <ArrowRight size={15} />
              </Link>
              {showContactLink ? (
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-xl shadow-sm hover:opacity-90 transition no-underline"
                  style={{ background: BRAND.green, color: "#fff" }}
                >
                  <Calendar size={17} /> Schedule a Consultation
                </Link>
              ) : null}
            </div>
          </div>

          <div className="relative">
            <ImgPlaceholder w={700} h={560} label="About Us — Clinic / Doctor" />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-slate-100 max-w-xs">
              <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: BRAND.slate }}>
                Our Promise
              </div>
              <div className="text-sm" style={{ color: BRAND.slateDeep }}>
                Healing is not just a treatment—it’s a journey we take together.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6" style={{ background: BRAND.slateLight }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Our Specialities"
            title="Comprehensive Care Under One Roof"
            subtitle="From ancient healing wisdom to modern rehabilitation science — every treatment is tailored to you."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleServices.map(({ icon: Icon, label, desc, path, color }) => (
              <div
                key={label}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ background: `${color}18` }}>
                  <Icon size={26} style={{ color }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: BRAND.slateDeep }}>
                  {label}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: BRAND.slate }}>
                  {desc}
                </p>
                <Link
                  to={path}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline transition group-hover:gap-2.5"
                  style={{ color }}
                >
                  Learn More <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <ImgPlaceholder w={600} h={500} label="Doctor / Team Photo" />
          <div>
            <SectionHeader tag="Why Choose Us" title="Healing Built on Science, Delivered with Heart" center={false} />
            <ul className="space-y-5">
              {[
                [Shield, "Evidence-Based Protocols", "All treatments follow peer-reviewed clinical standards."],
                [Users, "Multidisciplinary Team", "Physicians, physios, homeopaths & trainers collaborating."],
                [Award, "Personalised Treatment Plans", "No two patients are alike — neither are our plans."],
                [Clock, "Convenient Timings", "7-day availability with same-day emergency slots."],
              ].map(([Icon, title, desc]) => (
                <li key={title} className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: BRAND.blueLight }}>
                    <Icon size={20} style={{ color: BRAND.blue }} />
                  </div>
                  <div>
                    <div className="font-semibold mb-0.5" style={{ color: BRAND.slateDeep }}>
                      {title}
                    </div>
                    <div className="text-sm" style={{ color: BRAND.slate }}>
                      {desc}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6" style={{ background: BRAND.slateLight }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Patient Stories" title="Real People, Real Results" subtitle="Don't take our word for it — hear from our patients." />
          <div className="grid md:grid-cols-3 gap-6">
            {visibleTestimonials.map(({ id, name, condition, text, stars }) => (
              <div key={id || name} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <div className="flex gap-0.5 mb-4">
                  {Array(stars)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={15} fill={BRAND.green} style={{ color: BRAND.green }} />
                    ))}
                </div>
                <p className="text-sm leading-relaxed mb-5 italic" style={{ color: BRAND.slate }}>
                  "{text}"
                </p>
                <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ background: BRAND.blue }}
                  >
                    {name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: BRAND.slateDeep }}>
                      {name}
                    </div>
                    <div className="text-xs" style={{ color: BRAND.green }}>
                      {condition}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            {showTestimonialsLink ? (
              <Link
                to="/testimonials"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl border-2 hover:bg-slate-50 transition no-underline"
                style={{ borderColor: BRAND.blue, color: BRAND.blue }}
              >
                Read All Stories <ArrowRight size={15} />
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      {/* CTA Booking Banner */}
      <section className="py-20 px-6" style={{ background: `linear-gradient(135deg, ${BRAND.blue} 0%, ${BRAND.blueDeep} 100%)` }}>
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="text-4xl mb-4">🌿</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Georgia,serif" }}>
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-lg mb-8 text-white/80">Book a consultation today. Our specialists are here to create your personalised wellness plan.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="flex items-center gap-2 px-8 py-3.5 font-bold rounded-xl hover:opacity-90 transition no-underline"
              style={{ background: BRAND.green, color: "#fff" }}
            >
              <Calendar size={17} /> Schedule a Consultation
            </Link>
            <a
              href={telHref}
              className="flex items-center gap-2 px-8 py-3.5 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition no-underline"
            >
              <Phone size={17} /> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
