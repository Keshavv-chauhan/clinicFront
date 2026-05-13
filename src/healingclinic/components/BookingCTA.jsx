import { Calendar } from "lucide-react";

import { useSiteContent } from "../content/SiteContentProvider";
import { isPathHidden } from "../content/siteContent";
import { BRAND } from "../theme/brand";
import { Link } from "./Link";

export function BookingCTA({ short = false }) {
  const { content } = useSiteContent();
  const showContactLink = !isPathHidden("/contact", content.hiddenPaths);

  return (
    <section
      className="py-16 px-6 text-center"
      style={{ background: `linear-gradient(135deg, ${BRAND.blueLight} 0%, ${BRAND.greenLight} 100%)` }}
    >
      <div className="max-w-xl mx-auto">
        <h3 className="text-2xl font-bold mb-3" style={{ color: BRAND.slateDeep, fontFamily: "Georgia,serif" }}>
          {short ? "Ready to Get Started?" : "Book Your Consultation"}
        </h3>
        <p className="mb-6" style={{ color: BRAND.slate }}>
          Speak to one of our specialists and take the first step toward recovery.
        </p>
        {showContactLink ? (
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 font-bold rounded-xl hover:opacity-90 transition no-underline"
            style={{ background: BRAND.green, color: "#fff" }}
          >
            <Calendar size={16} /> Book Appointment
          </Link>
        ) : null}
      </div>
    </section>
  );
}
