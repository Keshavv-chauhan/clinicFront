import { useEffect } from "react";

import { AdminAuthProvider, useAdminAuth } from "./admin/AdminAuthProvider";
import { Footer } from "./components/Footer";
import { Link } from "./components/Link";
import { Navbar } from "./components/Navbar";
import { SiteContentProvider, useSiteContent } from "./content/SiteContentProvider";
import { isPathHidden } from "./content/siteContent";
import { useHashRouter } from "./router/useHashRouter";
import { routes } from "./routes";
import { BRAND } from "./theme/brand";

function AppShell() {
  const path = useHashRouter();
  const { isAdmin } = useAdminAuth();
  const { content } = useSiteContent();

  const hidden = !path.startsWith("/admin") && isPathHidden(path, content.hiddenPaths);
  const page = hidden && !isAdmin ? undefined : routes[path];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", minHeight: "100vh" }}>
      <Navbar />
      <main>
        {page || (
          <div className="min-h-screen flex items-center justify-center pt-20">
            <div className="text-center">
              <div className="text-6xl font-bold mb-4" style={{ color: BRAND.blue }}>
                404
              </div>
              <p className="mb-6" style={{ color: BRAND.slate }}>
                Page not found.
              </p>
              <Link to="/" className="px-6 py-3 text-black font-semibold rounded-xl no-underline" style={{ background: BRAND.blue, color: "#000" }}>
                ← Back to Home
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default function TheHealingClinicApp() {
  return (
    <AdminAuthProvider>
      <SiteContentProvider>
        <AppShell />
      </SiteContentProvider>
    </AdminAuthProvider>
  );
}
