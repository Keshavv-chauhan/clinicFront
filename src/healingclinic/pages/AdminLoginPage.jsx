import { Lock } from "lucide-react";
import { useEffect, useState } from "react";

import { useAdminAuth } from "../admin/AdminAuthProvider";
import { InteriorHero } from "../components/InteriorHero";
import { Link } from "../components/Link";
import { BRAND } from "../theme/brand";

export function AdminLoginPage() {
  const { isAdmin, login } = useAdminAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAdmin) window.location.hash = "#/admin/dashboard";
  }, [isAdmin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const ok = login(username.trim(), password);
    if (!ok) setError("Invalid username or password.");
  };

  return (
    <div>
      <InteriorHero icon={Lock} title="Admin Login" subtitle="Login to manage website content." breadcrumb="Home › Admin" bg={BRAND.blue} />
      <section className="py-16 px-6 bg-white">
        <div className="max-w-lg mx-auto rounded-2xl border border-slate-100 p-8" style={{ background: BRAND.slateLight }}>
          <h2 className="text-xl font-bold mb-2" style={{ color: BRAND.slateDeep, fontFamily: "Georgia,serif" }}>
            Sign in
          </h2>
          <p className="text-sm mb-6" style={{ color: BRAND.slate }}>
            This admin panel stores changes in this browser only.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: BRAND.slate }}>
                Username
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full mt-1 px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ "--tw-ring-color": BRAND.blue }}
                placeholder="Admin"
                autoComplete="username"
              />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: BRAND.slate }}>
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ "--tw-ring-color": BRAND.blue }}
                placeholder="Admin@123"
                type="password"
                autoComplete="current-password"
              />
            </div>

            {error && (
              <div className="text-sm rounded-xl px-4 py-3 border" style={{ background: "#fff", borderColor: "#fecaca", color: "#b91c1c" }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 font-bold rounded-xl hover:opacity-90 transition"
              style={{ background: BRAND.green, color: "#fff" }}
            >
              Login
            </button>

            <div className="text-center">
              <Link to="/" className="text-sm no-underline hover:underline" style={{ color: BRAND.blue }}>
                ← Back to Home
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
