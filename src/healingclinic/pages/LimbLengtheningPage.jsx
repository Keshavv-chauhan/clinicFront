import { Award, Calendar, CheckCircle, ChevronRight, ShieldCheck, Stethoscope, UserPlus } from "lucide-react";

import { BRAND } from "../theme/brand";
import { InteriorHero } from "../components/InteriorHero";
import { ImgPlaceholder } from "../components/ImgPlaceholder";
import { Link } from "../components/Link";
import { SectionHeader } from "../components/SectionHeader";

const whyChooseClinic = [
  "150+ successful surgeries",
  "100% success rate",
  "Top orthopedic specialists",
  "Partner hospitals with world-class infrastructure",
  "24/7 medical care & active rehab support",
  "Affordable, customized packages",
  "Hygienic stays, nursing support, translation, visa & airport help",
];

const whyChooseIndia = [
  "Modern facilities & advanced technology",
  "Western-trained doctors",
  "Treatment costs 1/10th of the West",
  "English-speaking support & easy visa process",
];

const benefits = [
  "Increases height for cosmetic enhancement",
  "Corrects limb length discrepancies",
  "Improves body symmetry and proportion",
  "Enhances mobility and physical function",
  "Provides permanent results",
  "Boosts self-confidence and emotional well-being",
  "Uses advanced, safe surgical techniques",
  "Aids recovery from injuries or deformities",
  "Reduces long-term posture and gait issues",
  "Can improve quality of life and daily comfort",
];

const treatmentProcess = [
  {
    title: "Initial Consultation",
    desc: "Our orthopedic specialists carefully review your goals, medical history, and see if you're a good fit for treatment.",
  },
  {
    title: "Pre-Surgery Assessment",
    desc: "Includes physical exams, imaging (X-rays/MRIs), and lab tests to ensure safe surgical planning.",
  },
  {
    title: "Customized Treatment Planning",
    desc: "A personalized surgical plan is created based on your height goals, bone structure, and daily lifestyle.",
  },
  {
    title: "Surgery",
    desc: "Performed by experienced orthopedic surgeons using advanced, minimally invasive techniques.",
  },
  {
    title: "Post-Surgery Hospital Stay",
    desc: "Short recovery under 24/7 medical supervision to manage pain and monitor healing.",
  },
  {
    title: "Lengthening Phase",
    desc: "Gradual bone distraction using internal or external devices, with routine monitoring by our team.",
  },
  {
    title: "Rehabilitation & Physiotherapy",
    desc: "Dedicated physiotherapy sessions to maintain flexibility, muscle strength, and joint mobility.",
  },
  {
    title: "Regular Follow-ups",
    desc: "Continuous monitoring via X-rays and check-ups to ensure proper alignment and growth.",
  },
  {
    title: "Consolidation Phase",
    desc: "New bone hardens and stabilizes, completing the physical transformation.",
  },
  {
    title: "Post-Recovery Support",
    desc: "Guidance on lifestyle adjustments and support to help you fully adapt to your new height.",
  },
];

const lengtheningMethods = [
  {
    title: "Lengthening Over Nail (LON)",
    desc: "Ilizarov frame is a heavy structure which causes pain and other complications of keeping the frame longer. The Lengthening Over Nail method reduces external fixation time by combining internal nailing with external distraction.",
  },
  {
    title: "Lengthening And Then Nailing (LATN)",
    desc: "The procedure was introduced to reduce the time of external fixation. Quite similar to LON, the bone is first lengthened with an external fixator and then stabilized with an intramedullary nail once the desired length is achieved.",
  },
  {
    title: "Precice Nail Lengthening (PNL)",
    desc: "Also called internal lengthening. The device used for lengthening the bone is inserted inside the bone itself, eliminating the need for an external frame and offering a more comfortable patient experience.",
  },
  {
    title: "Precice Stryde Nail Lengthening",
    desc: "Similar to the Precice nail but made of steel alloy instead of titanium, allowing patients to bear weight much earlier in the recovery process compared to traditional methods.",
  },
];

const conditionsTreated = [
  {
    title: "Leg Length Discrepancies",
    desc: "Often used to correct differences in leg length caused by congenital issues, injuries, or other medical conditions. Helps patients achieve better balance and mobility.",
  },
  {
    title: "Dwarfism",
    desc: "For individuals with skeletal dysplasia or other forms of dwarfism, limb lengthening can be an option to gain height and improve overall quality of life.",
  },
  {
    title: "Bow Legs and Knock Knees",
    desc: "Corrects angular deformities in the legs such as bow legs (varus deformity) and knock knees (valgus deformity), enhancing both aesthetics and function.",
  },
  {
    title: "Non-Union Fractures",
    desc: "In cases where a broken bone fails to heal correctly (non-union), limb lengthening can stimulate bone growth and encourage the union of the fractured bone.",
  },
  {
    title: "Polio Sequelae",
    desc: "Individuals who have suffered from polio may experience limb deformities that can be addressed through bone-lengthening surgery, improving mobility and functionality.",
  },
  {
    title: "Cosmetic Lengthening",
    desc: "Pursued for purely cosmetic reasons by individuals seeking to increase their height with the help of advanced and safe surgical techniques.",
  },
];

const faqs = [
  {
    q: "Is limb lengthening surgery painful?",
    a: "Patients are kept comfortable through expert pain management. Mild to moderate discomfort during the lengthening phase is normal and is managed with medication, physiotherapy and structured rehab support.",
  },
  {
    q: "How long is the recovery?",
    a: "Recovery typically spans several months and depends on the amount of length gained, surgical method used and the patient's adherence to physiotherapy and rehab protocols.",
  },
  {
    q: "Height increase surgery cost in India?",
    a: "India offers world-class limb lengthening at a fraction of Western costs. Final pricing depends on the technique (LON, LATN, Precice, Stryde), hospital stay duration and rehabilitation requirements.",
  },
  {
    q: "Are the results permanent?",
    a: "Yes. Once the new bone consolidates, the height gained becomes a permanent part of your skeleton.",
  },
  {
    q: "Who is an ideal candidate?",
    a: "Healthy adults with closed growth plates seeking cosmetic height enhancement or correction of limb-length discrepancies and deformities, after a thorough orthopedic feasibility assessment.",
  },
  {
    q: "Best Hospital for Limb Lengthening Surgery in India?",
    a: "The Healing Clinic partners with leading multi-speciality hospitals equipped with specially designed operation theatres for limb lengthening surgery, with all the latest equipment and facilities.",
  },
];

export function LimbLengtheningPage() {
  return (
    <div>
      <InteriorHero
        icon={UserPlus}
        title="Limb Lengthening Program"
        subtitle="Advanced Height Enhancement & Orthopedic Transformation Program"
        breadcrumb="Home › Limb Lengthening Program"
        bg={BRAND.blue}
      />

      {/* Intro: We use high quality frames and equipments */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeader
              tag="Trusted Orthopedic Solutions"
              title="Expert Limb Lengthening Surgery in Gurgaon"
              subtitle="Achieve your height goals with advanced and safe limb lengthening procedures at The Healing Clinic — a leading orthopedic destination in Gurgaon."
              center={false}
            />
            <p className="mt-4 text-sm leading-relaxed" style={{ color: BRAND.slate }}>
              We use <span className="font-semibold" style={{ color: BRAND.slateDeep }}>high quality frames and equipment</span> sourced from globally
              trusted orthopedic manufacturers. Combined with experienced surgical hands and structured rehabilitation, this is how we
              deliver safe, predictable, and life-changing results.
            </p>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: BRAND.slate }}>
              With <span className="font-semibold" style={{ color: BRAND.slateDeep }}>14+ years of experience</span>, we specialize in limb lengthening
              for height increase, limb discrepancy, and deformity correction — ensuring patient safety, comfort, and complete support throughout the journey.
            </p>

            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold no-underline hover:opacity-90 transition"
                style={{ background: BRAND.green, color: "#fff" }}
              >
                <Calendar size={16} /> Book a Free Consultation
              </Link>
            </div>
          </div>
          <ImgPlaceholder w={700} h={500} label="High Quality Frames & Equipment" />
        </div>
      </section>

      {/* Why Choose Us + Why India */}
      <section className="py-20 px-6" style={{ background: BRAND.slateLight }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl border border-slate-100 p-6" style={{ background: BRAND.blueLight }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "#fff" }}>
                <ShieldCheck size={20} style={{ color: BRAND.blue }} />
              </div>
              <h3 className="text-xl font-bold" style={{ color: BRAND.slateDeep, fontFamily: "Georgia,serif" }}>
                Why Choose "The Healing Clinic"?
              </h3>
            </div>
            <ul className="space-y-2.5">
              {whyChooseClinic.map((w) => (
                <li key={w} className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="mt-0.5" style={{ color: BRAND.blue }} />
                  <span className="text-sm" style={{ color: BRAND.slate }}>{w}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-100 p-6" style={{ background: BRAND.greenLight }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "#fff" }}>
                <Award size={20} style={{ color: BRAND.green }} />
              </div>
              <h3 className="text-xl font-bold" style={{ color: BRAND.slateDeep, fontFamily: "Georgia,serif" }}>
                Why Choose India for Limb Lengthening?
              </h3>
            </div>
            <p className="text-sm mb-3" style={{ color: BRAND.slate }}>
              India is a global hub for affordable, high-quality healthcare with:
            </p>
            <ul className="space-y-2.5">
              {whyChooseIndia.map((w) => (
                <li key={w} className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="mt-0.5" style={{ color: BRAND.green }} />
                  <span className="text-sm" style={{ color: BRAND.slate }}>{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What is Limb Lengthening? + Before/After */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeader
              tag="The Procedure"
              title="What is Limb Lengthening Surgery?"
              subtitle="A complex but precise procedure that gradually grows new bone."
              center={false}
            />
            <p className="mt-4 text-sm leading-relaxed" style={{ color: BRAND.slate }}>
              Limb lengthening surgery is a complex procedure that increases the length of bones, usually in the legs or arms.
              The process involves carefully separating a bone and gradually stretching it apart at a controlled rate. As the gap
              widens, the body's own healing response forms new bone tissue inside that space. Over weeks and months, this new bone
              hardens into permanent, fully functional length.
            </p>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: BRAND.slate }}>
              For patients new to the idea: you are not adding an implant of "extra bone". Your own body grows the additional length,
              guided by a specialised device (external frame or internal nail). The team monitors every millimetre — distraction rate,
              alignment, soft-tissue health and rehabilitation progress — so the journey stays safe and predictable.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <ImgPlaceholder w={500} h={520} label="Before" />
              <div className="mt-2 text-center text-sm font-semibold" style={{ color: BRAND.slateDeep }}>Before</div>
            </div>
            <div>
              <ImgPlaceholder w={500} h={520} label="After" />
              <div className="mt-2 text-center text-sm font-semibold" style={{ color: BRAND.slateDeep }}>After</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6" style={{ background: BRAND.slateLight }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            tag="Benefits"
            title="Benefits of Limb Lengthening Surgery"
            subtitle="More than height — improved function, posture, and life quality."
          />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 bg-white rounded-xl border border-slate-100 p-4">
                <CheckCircle size={18} className="mt-0.5 shrink-0" style={{ color: BRAND.green }} />
                <span className="text-sm" style={{ color: BRAND.slate }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            tag="Step-by-Step"
            title="Our Limb Lengthening Treatment Process"
            subtitle="A clear, structured 10-step journey from consultation to confidence."
          />
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {treatmentProcess.map((step, idx) => (
              <div key={step.title} className="flex gap-4 rounded-2xl border border-slate-100 p-5 bg-white shadow-sm">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 font-bold"
                  style={{ background: BRAND.blueLight, color: BRAND.blue }}
                >
                  {idx + 1}
                </div>
                <div>
                  <div className="font-semibold" style={{ color: BRAND.slateDeep }}>{step.title}</div>
                  <div className="mt-1 text-sm" style={{ color: BRAND.slate }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lengthening Methods */}
      <section className="py-20 px-6" style={{ background: BRAND.slateLight }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            tag="Methods"
            title="Limb Lengthening Methods"
            subtitle="Choosing the right technique is critical for a safe, comfortable journey."
          />
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {lengtheningMethods.map((m) => (
              <div key={m.title} className="rounded-2xl border border-slate-100 overflow-hidden bg-white shadow-sm">
                <ImgPlaceholder w={700} h={360} label={m.title} />
                <div className="p-5">
                  <h3 className="font-bold" style={{ color: BRAND.slateDeep, fontFamily: "Georgia,serif" }}>{m.title}</h3>
                  <p className="mt-2 text-sm" style={{ color: BRAND.slate }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            tag="Conditions Treated"
            title="Treating Various Orthopedic Conditions"
            subtitle="Limb lengthening surgery is used to address a wide range of orthopedic conditions."
          />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {conditionsTreated.map((c) => (
              <div key={c.title} className="rounded-2xl border border-slate-100 p-5 bg-white shadow-sm">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: BRAND.blueLight }}>
                  <Stethoscope size={20} style={{ color: BRAND.blue }} />
                </div>
                <h3 className="font-bold" style={{ color: BRAND.slateDeep }}>{c.title}</h3>
                <p className="mt-2 text-sm" style={{ color: BRAND.slate }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20 px-6" style={{ background: BRAND.slateLight }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: BRAND.blue }}>
              Success Stories & Results
            </div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: BRAND.slateDeep, fontFamily: "Georgia,serif" }}>
              7.8 cm Height Gain in 7 Months
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: BRAND.slate }}>
              We're proud to share the inspiring journey of one of our successful patients. This individual underwent limb
              lengthening through the external method and achieved a remarkable height increase of <span className="font-semibold" style={{ color: BRAND.slateDeep }}>7.8 centimetres over seven months</span>,
              averaging about 1 cm per month.
            </p>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: BRAND.slate }}>
              Today, the patient walks confidently without crutches, covering almost 1 kilometre daily. Mobility, strength, and
              confidence have all improved significantly — reflecting excellent surgical precision and consistent rehabilitation.
            </p>
            <div className="mt-6">
              <Link
                to="/testimonials"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold no-underline border-2 hover:bg-white transition"
                style={{ borderColor: BRAND.blue, color: BRAND.blue }}
              >
                Read More Stories <ChevronRight size={16} />
              </Link>
            </div>
          </div>
          <ImgPlaceholder w={700} h={520} label="Patient Transformation — 7.8 cm in 7 Months" />
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            tag="Honest Overview"
            title="A Look at the Pros and Cons"
            subtitle="An honest, balanced view to help you make an informed decision."
          />
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6" style={{ background: BRAND.greenLight }}>
              <h3 className="font-bold mb-3" style={{ color: BRAND.slateDeep, fontFamily: "Georgia,serif" }}>The Pros</h3>
              <ul className="space-y-2 text-sm" style={{ color: BRAND.slate }}>
                <li className="flex items-start gap-2.5"><CheckCircle size={16} className="mt-0.5" style={{ color: BRAND.green }} /> Significantly enhances quality of life for individuals with limb-length discrepancies or short stature.</li>
                <li className="flex items-start gap-2.5"><CheckCircle size={16} className="mt-0.5" style={{ color: BRAND.green }} /> Boosts self-esteem, confidence and social interactions.</li>
                <li className="flex items-start gap-2.5"><CheckCircle size={16} className="mt-0.5" style={{ color: BRAND.green }} /> Improves physical alignment, mobility and posture.</li>
                <li className="flex items-start gap-2.5"><CheckCircle size={16} className="mt-0.5" style={{ color: BRAND.green }} /> Permanent results once consolidation is complete.</li>
              </ul>
            </div>
            <div className="rounded-2xl p-6" style={{ background: BRAND.blueLight }}>
              <h3 className="font-bold mb-3" style={{ color: BRAND.slateDeep, fontFamily: "Georgia,serif" }}>The Cons</h3>
              <ul className="space-y-2 text-sm" style={{ color: BRAND.slate }}>
                <li className="flex items-start gap-2.5"><ChevronRight size={16} className="mt-0.5" style={{ color: BRAND.blue }} /> Complex procedure with a lengthy recovery period.</li>
                <li className="flex items-start gap-2.5"><ChevronRight size={16} className="mt-0.5" style={{ color: BRAND.blue }} /> Possibility of pain, risk of infection, and need for follow-up procedures.</li>
                <li className="flex items-start gap-2.5"><ChevronRight size={16} className="mt-0.5" style={{ color: BRAND.blue }} /> Psychological impact of prolonged treatment and rehabilitation.</li>
                <li className="flex items-start gap-2.5"><ChevronRight size={16} className="mt-0.5" style={{ color: BRAND.blue }} /> Requires complete commitment to physiotherapy and follow-up care.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Surgeon */}
      <section className="py-20 px-6" style={{ background: BRAND.slateLight }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <ImgPlaceholder w={620} h={620} label="Dr. Amar Sarin — Limb Lengthening Surgeon" />
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: BRAND.blue }}>
              Meet the Surgeon
            </div>
            <h2 className="text-3xl font-bold mb-2" style={{ color: BRAND.slateDeep, fontFamily: "Georgia,serif" }}>
              Dr. Amar Sarin
            </h2>
            <p className="text-sm" style={{ color: BRAND.slate }}>
              As a leading Limb Lengthening Surgeon, Dr. Amar Sarin has pioneered innovative techniques that safely and effectively
              transform lives through Limb Lengthening Surgery.
            </p>

            <div className="mt-5 grid sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-slate-100 p-4 bg-white text-center">
                <div className="text-2xl font-bold" style={{ color: BRAND.blue }}>30+</div>
                <div className="text-xs" style={{ color: BRAND.slate }}>Years of Experience</div>
              </div>
              <div className="rounded-xl border border-slate-100 p-4 bg-white text-center">
                <div className="text-2xl font-bold" style={{ color: BRAND.blue }}>3000+</div>
                <div className="text-xs" style={{ color: BRAND.slate }}>Ilizarov & LL Surgeries</div>
              </div>
              <div className="rounded-xl border border-slate-100 p-4 bg-white text-center">
                <div className="text-2xl font-bold" style={{ color: BRAND.blue }}>#1</div>
                <div className="text-xs" style={{ color: BRAND.slate }}>Most Experienced in Asia</div>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed" style={{ color: BRAND.slate }}>
              A distinguished Orthopaedic Consultant specialising in Restorative and Reconstructive Surgery. With comprehensive
              training from the former Soviet Union's Center for Reconstruction and Regeneration Surgeries in Russia, he has conducted
              over 3,000 successful Ilizarov and Height Increase Surgeries — and was the first Indian surgeon to showcase live
              Ilizarov surgery.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader tag="FAQ" title="Frequently Asked Questions" subtitle="Quick answers to common patient questions." />
          <div className="mt-8 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-slate-100 bg-white p-5">
                <summary className="cursor-pointer flex items-center justify-between gap-3 font-semibold" style={{ color: BRAND.slateDeep }}>
                  <span>{f.q}</span>
                  <ChevronRight size={16} className="transition-transform group-open:rotate-90" style={{ color: BRAND.blue }} />
                </summary>
                <p className="mt-3 text-sm" style={{ color: BRAND.slate }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6" style={{ background: `linear-gradient(135deg, ${BRAND.blue} 0%, ${BRAND.blueDeep} 100%)` }}>
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Georgia,serif" }}>
            Begin Your Transformation Journey
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Schedule your confidential consultation today. We'll build a customised limb lengthening roadmap just for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 font-bold rounded-xl hover:opacity-90 transition no-underline"
            style={{ background: BRAND.green, color: "#fff" }}
          >
            <Calendar size={17} /> Book Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
