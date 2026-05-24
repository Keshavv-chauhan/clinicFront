import { EyeOff, LayoutDashboard, LogOut, Pencil, Phone, Plus, Save, Star, Trash2, Users } from "lucide-react";
import { useMemo, useState } from "react";

import { useAdminAuth } from "../admin/AdminAuthProvider";
import { Link } from "../components/Link";
import { SectionHeader } from "../components/SectionHeader";
import { useSiteContent } from "../content/SiteContentProvider";
import { BRAND } from "../theme/brand";

const HIDEABLE_PAGES = [
  { label: "Homeopathy", path: "/homeopathy" },
  { label: "Physiotherapy", path: "/physiotherapy" },
  { label: "Functional Training", path: "/functional-training" },
  { label: "Limb Lengthening", path: "/limb-lengthening" },
  { label: "Our Team", path: "/about" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact Us", path: "/contact" },
];

function Field({ label, children, hint }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: BRAND.slate }}>
        {label}
      </div>
      <div className="mt-1">{children}</div>
      {hint ? (
        <div className="mt-1 text-xs" style={{ color: BRAND.slate }}>
          {hint}
        </div>
      ) : null}
    </div>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className={`w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:border-transparent ${
        props.className || ""
      }`}
      style={{ "--tw-ring-color": BRAND.blue, ...(props.style || {}) }}
    />
  );
}

function Textarea(props) {
  return (
    <textarea
      {...props}
      className={`w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:border-transparent resize-none ${
        props.className || ""
      }`}
      style={{ "--tw-ring-color": BRAND.blue, ...(props.style || {}) }}
    />
  );
}

function Card({ title, subtitle, children, right }) {
  return (
    <div className="rounded-2xl border border-slate-100 p-6" style={{ background: BRAND.slateLight }}>
      <div className="flex items-start justify-between gap-3 mb-5">
        <div>
          <div className="font-bold text-lg" style={{ color: BRAND.slateDeep, fontFamily: "Georgia,serif" }}>
            {title}
          </div>
          {subtitle ? (
            <div className="text-sm mt-0.5" style={{ color: BRAND.slate }}>
              {subtitle}
            </div>
          ) : null}
        </div>
        {right}
      </div>
      {children}
    </div>
  );
}

function SmallButton({ children, onClick, variant = "default", title }) {
  const style =
    variant === "danger"
      ? { borderColor: "#fecaca", color: "#b91c1c" }
      : { borderColor: BRAND.accent, color: BRAND.slateDeep };

  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border hover:bg-white transition"
      style={style}
    >
      {children}
    </button>
  );
}

function Tile({ title, subtitle, icon: Icon, onClick, right, active = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-left rounded-2xl border p-5 w-full hover:shadow-sm transition"
      style={{
        borderColor: BRAND.accent,
        background: active ? BRAND.blueLight : "#fff",
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          {Icon ? (
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: BRAND.slateLight }}>
              <Icon size={18} style={{ color: BRAND.blue }} />
            </div>
          ) : null}
          <div>
            <div className="font-bold" style={{ color: BRAND.slateDeep }}>
              {title}
            </div>
            {subtitle ? (
              <div className="text-sm mt-1" style={{ color: BRAND.slate }}>
                {subtitle}
              </div>
            ) : null}
          </div>
        </div>
        {right}
      </div>
    </button>
  );
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.onload = () => resolve(String(reader.result || ""));
    reader.readAsDataURL(file);
  });
}

export function AdminDashboardPage() {
  const { isAdmin, logout } = useAdminAuth();
  const { content, actions } = useSiteContent();
  const [status, setStatus] = useState("");

  const [activeSection, setActiveSection] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const leaders = content.teamLeaders || [];
  const members = content.teamMembers || [];
  const testimonials = content.testimonials || [];

  const phonesText = useMemo(() => (content.contact?.phones || []).join("\n"), [content.contact?.phones]);

  if (!isAdmin) {
    return (
      <div className="min-h-screen pt-28 px-6 bg-white">
        <div className="max-w-2xl mx-auto rounded-2xl border border-slate-100 p-8" style={{ background: BRAND.slateLight }}>
          <div className="font-bold text-xl mb-2" style={{ color: BRAND.slateDeep }}>
            Admin access required
          </div>
          <p className="text-sm mb-6" style={{ color: BRAND.slate }}>
            Please login to continue.
          </p>
          <Link to="/admin" className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-xl no-underline hover:opacity-90" style={{ background: BRAND.green, color: "#fff" }}>
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  const flash = (msg) => {
    setStatus(msg);
    window.setTimeout(() => setStatus(""), 1800);
  };

  const chooseSection = (section) => {
    setActiveSection(section);
    setSelectedId(null);
  };

  const goBackToChooser = () => {
    setActiveSection(null);
    setSelectedId(null);
  };

  const selectedLeader = leaders.find((l) => l.id === selectedId) || null;
  const selectedMember = members.find((m) => m.id === selectedId) || null;
  const selectedTestimonial = testimonials.find((t) => t.id === selectedId) || null;

  return (
    <div className="pt-24 pb-16 px-6" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-3 mb-8">
          <div className="flex items-center gap-2">
            <LayoutDashboard size={18} style={{ color: BRAND.blue }} />
            <div className="font-extrabold text-xl" style={{ color: BRAND.slateDeep, fontFamily: "Georgia,serif" }}>
              Admin Dashboard
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-sm font-semibold no-underline" style={{ color: BRAND.blue }}>
              View Website
            </Link>
            <button
              onClick={() => {
                logout();
                window.location.hash = "#/";
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border hover:bg-white transition"
              style={{ borderColor: BRAND.accent, color: BRAND.slateDeep }}
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        {status ? (
          <div className="mb-6 rounded-xl px-4 py-3 border" style={{ borderColor: BRAND.accent, background: BRAND.blueLight, color: BRAND.slateDeep }}>
            {status}
          </div>
        ) : null}

        <div className="grid gap-8">
          <SectionHeader tag="Content" title="Manage Website Content" subtitle="Edit key website sections without touching code." />

          {!activeSection ? (
            <Card
              title="What do you want to change?"
              subtitle="Choose a section. Then click a tile to edit."
              right={
                <SmallButton
                  title="Reset ALL content back to defaults"
                  onClick={() => {
                    actions.resetToDefaults();
                    flash("Reset to defaults");
                  }}
                >
                  Reset All
                </SmallButton>
              }
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Tile title="Team" subtitle="Edit leaders + doctors/staff" icon={Users} onClick={() => chooseSection("team")} />
                <Tile title="Contact" subtitle="Phone, address, email, hours" icon={Phone} onClick={() => chooseSection("contact")} />
                <Tile title="Hide Pages" subtitle="Hide from Navbar/Footer" icon={EyeOff} onClick={() => chooseSection("visibility")} />
                <Tile title="Contact Page" subtitle="Edit Contact page text" icon={Pencil} onClick={() => chooseSection("contactPage")} />
                <Tile title="Testimonials" subtitle="Add / edit / delete reviews" icon={Star} onClick={() => chooseSection("testimonials")} />
              </div>
            </Card>
          ) : (
            <Card
              title={
                activeSection === "team"
                  ? "Team"
                  : activeSection === "contact"
                    ? "Contact"
                    : activeSection === "visibility"
                      ? "Hide Pages"
                      : activeSection === "contactPage"
                        ? "Contact Page"
                        : "Testimonials"
              }
              subtitle="Select a tile to open details."
              right={
                <div className="flex items-center gap-2">
                  <SmallButton onClick={goBackToChooser}>Back</SmallButton>
                  {activeSection === "team" ? (
                    <button
                      type="button"
                      onClick={() => {
                        const id = actions.addTeamMember();
                        setSelectedId(id);
                        flash("Team member added");
                      }}
                      className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl hover:opacity-90"
                      style={{ background: BRAND.green, color: "#fff" }}
                    >
                      <Plus size={16} /> Add Member
                    </button>
                  ) : null}
                  {activeSection === "testimonials" ? (
                    <button
                      type="button"
                      onClick={() => {
                        const id = actions.addTestimonial();
                        setSelectedId(id);
                        flash("Testimonial added");
                      }}
                      className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl hover:opacity-90"
                      style={{ background: BRAND.green, color: "#fff" }}
                    >
                      <Plus size={16} /> Add Testimonial
                    </button>
                  ) : null}
                </div>
              }
            >
              {activeSection === "team" ? (
                <div className="grid gap-6">
                  <div>
                    <div className="text-sm font-semibold mb-3" style={{ color: BRAND.slateDeep }}>
                      Team Leaders (Top 2 Boxes)
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {leaders.slice(0, 2).map((l) => (
                        <Tile
                          key={l.id}
                          title={l.name}
                          subtitle={l.role}
                          icon={Users}
                          active={selectedId === l.id}
                          onClick={() => setSelectedId(l.id)}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold mb-3" style={{ color: BRAND.slateDeep }}>
                      Team Members
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {members.map((m) => (
                        <Tile
                          key={m.id}
                          title={m.name}
                          subtitle={m.role}
                          icon={Users}
                          active={selectedId === m.id}
                          onClick={() => setSelectedId(m.id)}
                          right={
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                actions.deleteTeamMember(m.id);
                                if (selectedId === m.id) setSelectedId(null);
                                flash("Team member deleted");
                              }}
                              className="inline-flex items-center justify-center w-9 h-9 rounded-xl border"
                              style={{ borderColor: "#fecaca", color: "#b91c1c", background: "#fff" }}
                              title="Delete"
                            >
                              <Trash2 size={16} />
                            </button>
                          }
                        />
                      ))}
                    </div>
                  </div>

                  {selectedLeader ? (
                    <div className="rounded-2xl border border-slate-100 p-6" style={{ background: "#fff" }}>
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div>
                          <div className="font-bold text-lg" style={{ color: BRAND.slateDeep, fontFamily: "Georgia,serif" }}>
                            Edit Leader
                          </div>
                          <div className="text-sm" style={{ color: BRAND.slate }}>
                            {selectedLeader.name}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => flash("Updated")}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl hover:opacity-90"
                          style={{ background: BRAND.green, color: "#fff" }}
                        >
                          <Save size={16} /> Update
                        </button>
                      </div>

                      <div className="grid lg:grid-cols-2 gap-6">
                        <div className="grid gap-3">
                          <Field label="Name">
                            <Input value={selectedLeader.name} onChange={(e) => actions.updateLeader(selectedLeader.id, { name: e.target.value })} />
                          </Field>
                          <Field label="Role">
                            <Input value={selectedLeader.role} onChange={(e) => actions.updateLeader(selectedLeader.id, { role: e.target.value })} />
                          </Field>
                          <Field label="Qualification">
                            <Input value={selectedLeader.qual} onChange={(e) => actions.updateLeader(selectedLeader.id, { qual: e.target.value })} />
                          </Field>
                        </div>
                        <div className="grid gap-3">
                          <Field label="Photo" hint="Paste an image URL or upload a photo.">
                            <div className="grid sm:grid-cols-2 gap-3">
                              <Input
                                placeholder="https://..."
                                value={selectedLeader.photoSrc || ""}
                                onChange={(e) => actions.updateLeader(selectedLeader.id, { photoSrc: e.target.value })}
                              />
                              <input
                                type="file"
                                accept="image/*"
                                className="text-sm"
                                onChange={async (e) => {
                                  const file = e.target.files?.[0];
                                  if (!file) return;
                                  const dataUrl = await readFileAsDataUrl(file);
                                  actions.updateLeader(selectedLeader.id, { photoSrc: dataUrl });
                                  flash("Photo updated");
                                }}
                              />
                            </div>
                          </Field>
                          <Field label="Highlights" hint="One line per point.">
                            <Textarea
                              rows={6}
                              value={(selectedLeader.highlights || []).join("\n")}
                              onChange={(e) => actions.updateLeaderHighlightsFromText(selectedLeader.id, e.target.value)}
                            />
                          </Field>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {selectedMember ? (
                    <div className="rounded-2xl border border-slate-100 p-6" style={{ background: "#fff" }}>
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div>
                          <div className="font-bold text-lg" style={{ color: BRAND.slateDeep, fontFamily: "Georgia,serif" }}>
                            Edit Team Member
                          </div>
                          <div className="text-sm" style={{ color: BRAND.slate }}>
                            {selectedMember.name}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <SmallButton
                            variant="danger"
                            onClick={() => {
                              actions.deleteTeamMember(selectedMember.id);
                              setSelectedId(null);
                              flash("Team member deleted");
                            }}
                          >
                            <Trash2 size={16} /> Delete
                          </SmallButton>
                          <button
                            type="button"
                            onClick={() => flash("Updated")}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl hover:opacity-90"
                            style={{ background: BRAND.green, color: "#fff" }}
                          >
                            <Save size={16} /> Update
                          </button>
                        </div>
                      </div>

                      <div className="grid lg:grid-cols-2 gap-6">
                        <div className="grid gap-3">
                          <Field label="Name">
                            <Input value={selectedMember.name} onChange={(e) => actions.updateTeamMember(selectedMember.id, { name: e.target.value })} />
                          </Field>
                          <Field label="Role">
                            <Input value={selectedMember.role} onChange={(e) => actions.updateTeamMember(selectedMember.id, { role: e.target.value })} />
                          </Field>
                          <Field label="Qualification">
                            <Input value={selectedMember.qual} onChange={(e) => actions.updateTeamMember(selectedMember.id, { qual: e.target.value })} />
                          </Field>
                          <Field label="Experience (text)">
                            <Input value={selectedMember.exp} onChange={(e) => actions.updateTeamMember(selectedMember.id, { exp: e.target.value })} placeholder="e.g., 12 years" />
                          </Field>
                        </div>
                        <div className="grid gap-3">
                          <Field label="Short Description">
                            <Textarea rows={4} value={selectedMember.desc} onChange={(e) => actions.updateTeamMember(selectedMember.id, { desc: e.target.value })} />
                          </Field>
                          <Field label="Photo" hint="Paste an image URL or upload a photo.">
                            <div className="grid sm:grid-cols-2 gap-3">
                              <Input
                                placeholder="https://..."
                                value={selectedMember.photoSrc || ""}
                                onChange={(e) => actions.updateTeamMember(selectedMember.id, { photoSrc: e.target.value })}
                              />
                              <input
                                type="file"
                                accept="image/*"
                                className="text-sm"
                                onChange={async (e) => {
                                  const file = e.target.files?.[0];
                                  if (!file) return;
                                  const dataUrl = await readFileAsDataUrl(file);
                                  actions.updateTeamMember(selectedMember.id, { photoSrc: dataUrl });
                                  flash("Photo updated");
                                }}
                              />
                            </div>
                          </Field>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : null}

              {activeSection === "contact" ? (
                <div className="grid gap-6">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Tile
                      title="Edit contact details"
                      subtitle="Address, phones, email, hours"
                      icon={Phone}
                      active={selectedId === "contact"}
                      onClick={() => setSelectedId("contact")}
                    />
                  </div>

                  {selectedId === "contact" ? (
                    <div className="rounded-2xl border border-slate-100 p-6" style={{ background: "#fff" }}>
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div>
                          <div className="font-bold text-lg" style={{ color: BRAND.slateDeep, fontFamily: "Georgia,serif" }}>
                            Edit Contact Details
                          </div>
                          <div className="text-sm" style={{ color: BRAND.slate }}>
                            Updates appear across Navbar, Footer, and Contact page.
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => flash("Updated")}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl hover:opacity-90"
                          style={{ background: BRAND.green, color: "#fff" }}
                        >
                          <Save size={16} /> Update
                        </button>
                      </div>

                      <div className="grid lg:grid-cols-2 gap-6">
                        <div className="grid gap-3">
                          <Field label="Address" hint="Use new lines where needed.">
                            <Textarea rows={5} value={content.contact?.address || ""} onChange={(e) => actions.updateContact({ address: e.target.value })} />
                          </Field>
                          <Field label="Phones" hint="One phone per line.">
                            <Textarea
                              rows={4}
                              value={phonesText}
                              onChange={(e) =>
                                actions.updateContact({ phones: e.target.value.split(/\r?\n/).map((s) => s.trim()).filter(Boolean) })
                              }
                            />
                          </Field>
                        </div>
                        <div className="grid gap-3">
                          <Field label="Email">
                            <Input value={content.contact?.email || ""} onChange={(e) => actions.updateContact({ email: e.target.value })} />
                          </Field>
                          <Field label="Hours" hint="Use new lines where needed.">
                            <Textarea rows={4} value={content.contact?.hours || ""} onChange={(e) => actions.updateContact({ hours: e.target.value })} />
                          </Field>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : null}

              {activeSection === "visibility" ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {HIDEABLE_PAGES.map((p) => {
                    const hidden = Boolean(content.hiddenPaths?.[p.path]);
                    return (
                      <label key={p.path} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={hidden}
                          onChange={(e) => {
                            actions.setHiddenPath(p.path, e.target.checked);
                            flash(e.target.checked ? "Page hidden" : "Page shown");
                          }}
                          className="mt-1"
                        />
                        <div>
                          <div className="font-semibold" style={{ color: BRAND.slateDeep }}>
                            {p.label}
                          </div>
                          <div className="text-xs" style={{ color: BRAND.slate }}>
                            {p.path}
                          </div>
                          {hidden ? (
                            <div className="mt-2 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: "#b91c1c" }}>
                              <EyeOff size={14} /> Hidden
                            </div>
                          ) : null}
                        </div>
                      </label>
                    );
                  })}
                </div>
              ) : null}

              {activeSection === "contactPage" ? (
                <div className="grid gap-6">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Tile
                      title="Edit Contact page text"
                      subtitle="Hero subtitle, titles, success message"
                      icon={Pencil}
                      active={selectedId === "contactPage"}
                      onClick={() => setSelectedId("contactPage")}
                    />
                  </div>

                  {selectedId === "contactPage" ? (
                    <div className="rounded-2xl border border-slate-100 p-6" style={{ background: "#fff" }}>
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div>
                          <div className="font-bold text-lg" style={{ color: BRAND.slateDeep, fontFamily: "Georgia,serif" }}>
                            Edit Contact Page
                          </div>
                          <div className="text-sm" style={{ color: BRAND.slate }}>
                            These changes affect the Contact Us page only.
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => flash("Updated")}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl hover:opacity-90"
                          style={{ background: BRAND.green, color: "#fff" }}
                        >
                          <Save size={16} /> Update
                        </button>
                      </div>

                      <div className="grid lg:grid-cols-2 gap-6">
                        <div className="grid gap-3">
                          <Field label="Hero Subtitle">
                            <Textarea
                              rows={3}
                              value={content.contactPage?.heroSubtitle || ""}
                              onChange={(e) => actions.updateContactPage({ heroSubtitle: e.target.value })}
                            />
                          </Field>
                          <Field label="Info Title">
                            <Input value={content.contactPage?.infoTitle || ""} onChange={(e) => actions.updateContactPage({ infoTitle: e.target.value })} />
                          </Field>
                        </div>
                        <div className="grid gap-3">
                          <Field label="Form Title">
                            <Input value={content.contactPage?.formTitle || ""} onChange={(e) => actions.updateContactPage({ formTitle: e.target.value })} />
                          </Field>
                          <Field label="Success Title">
                            <Input value={content.contactPage?.successTitle || ""} onChange={(e) => actions.updateContactPage({ successTitle: e.target.value })} />
                          </Field>
                          <Field label="Success Message">
                            <Textarea
                              rows={3}
                              value={content.contactPage?.successBody || ""}
                              onChange={(e) => actions.updateContactPage({ successBody: e.target.value })}
                            />
                          </Field>
                          <Field label="Footer Note">
                            <Input value={content.contactPage?.note || ""} onChange={(e) => actions.updateContactPage({ note: e.target.value })} />
                          </Field>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : null}

              {activeSection === "testimonials" ? (
                <div className="grid gap-6">
                  <div>
                    <div className="text-sm font-semibold mb-3" style={{ color: BRAND.slateDeep }}>
                      Rating Summary
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <Tile
                        title="Edit rating summary"
                        subtitle="Average rating, total reviews, source"
                        icon={Star}
                        active={selectedId === "meta"}
                        onClick={() => setSelectedId("meta")}
                      />
                    </div>
                  </div>

                  {selectedId === "meta" ? (
                    <div className="rounded-2xl border border-slate-100 p-6" style={{ background: "#fff" }}>
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div>
                          <div className="font-bold text-lg" style={{ color: BRAND.slateDeep, fontFamily: "Georgia,serif" }}>
                            Edit Rating Summary
                          </div>
                          <div className="text-sm" style={{ color: BRAND.slate }}>
                            This appears on the Testimonials page.
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => flash("Updated")}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl hover:opacity-90"
                          style={{ background: BRAND.green, color: "#fff" }}
                        >
                          <Save size={16} /> Update
                        </button>
                      </div>

                      <div className="grid sm:grid-cols-3 gap-3">
                        <Field label="Average Rating">
                          <Input value={content.testimonialsMeta?.averageRating || ""} onChange={(e) => actions.setTestimonialsMeta({ averageRating: e.target.value })} />
                        </Field>
                        <Field label="Total Reviews">
                          <Input value={content.testimonialsMeta?.totalReviews || ""} onChange={(e) => actions.setTestimonialsMeta({ totalReviews: e.target.value })} />
                        </Field>
                        <Field label="Source">
                          <Input value={content.testimonialsMeta?.source || ""} onChange={(e) => actions.setTestimonialsMeta({ source: e.target.value })} />
                        </Field>
                      </div>
                    </div>
                  ) : null}

                  <div>
                    <div className="text-sm font-semibold mb-3" style={{ color: BRAND.slateDeep }}>
                      Testimonials
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {testimonials.map((t) => (
                        <Tile
                          key={t.id}
                          title={t.name}
                          subtitle={t.condition}
                          icon={Star}
                          active={selectedId === t.id}
                          onClick={() => setSelectedId(t.id)}
                          right={
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                actions.deleteTestimonial(t.id);
                                if (selectedId === t.id) setSelectedId(null);
                                flash("Testimonial deleted");
                              }}
                              className="inline-flex items-center justify-center w-9 h-9 rounded-xl border"
                              style={{ borderColor: "#fecaca", color: "#b91c1c", background: "#fff" }}
                              title="Delete"
                            >
                              <Trash2 size={16} />
                            </button>
                          }
                        />
                      ))}
                    </div>
                  </div>

                  {selectedTestimonial ? (
                    <div className="rounded-2xl border border-slate-100 p-6" style={{ background: "#fff" }}>
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div>
                          <div className="font-bold text-lg" style={{ color: BRAND.slateDeep, fontFamily: "Georgia,serif" }}>
                            Edit Testimonial
                          </div>
                          <div className="text-sm" style={{ color: BRAND.slate }}>
                            {selectedTestimonial.name}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <SmallButton
                            variant="danger"
                            onClick={() => {
                              actions.deleteTestimonial(selectedTestimonial.id);
                              setSelectedId(null);
                              flash("Testimonial deleted");
                            }}
                          >
                            <Trash2 size={16} /> Delete
                          </SmallButton>
                          <button
                            type="button"
                            onClick={() => flash("Updated")}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl hover:opacity-90"
                            style={{ background: BRAND.green, color: "#fff" }}
                          >
                            <Save size={16} /> Update
                          </button>
                        </div>
                      </div>

                      <div className="grid lg:grid-cols-2 gap-6">
                        <div className="grid gap-3">
                          <Field label="Name">
                            <Input value={selectedTestimonial.name} onChange={(e) => actions.updateTestimonial(selectedTestimonial.id, { name: e.target.value })} />
                          </Field>
                          <Field label="Condition">
                            <Input
                              value={selectedTestimonial.condition}
                              onChange={(e) => actions.updateTestimonial(selectedTestimonial.id, { condition: e.target.value })}
                            />
                          </Field>
                          <Field label="Stars (1-5)">
                            <Input
                              type="number"
                              min={1}
                              max={5}
                              value={selectedTestimonial.stars}
                              onChange={(e) =>
                                actions.updateTestimonial(selectedTestimonial.id, {
                                  stars: Math.max(1, Math.min(5, Number(e.target.value || 5))),
                                })
                              }
                            />
                          </Field>
                        </div>
                        <div className="grid gap-3">
                          <Field label="Testimonial Text">
                            <Textarea
                              rows={6}
                              value={selectedTestimonial.text}
                              onChange={(e) => actions.updateTestimonial(selectedTestimonial.id, { text: e.target.value })}
                            />
                          </Field>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
