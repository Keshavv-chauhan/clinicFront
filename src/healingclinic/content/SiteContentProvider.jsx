import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { DEFAULT_SITE_CONTENT, loadSiteContent, newId, resetSiteContent, saveSiteContent } from "./siteContent";

const SiteContentContext = createContext(null);

export function SiteContentProvider({ children }) {
  const [content, setContent] = useState(() => {
    if (typeof window === "undefined") return DEFAULT_SITE_CONTENT;
    return loadSiteContent();
  });

  useEffect(() => {
    saveSiteContent(content);
  }, [content]);

  const actions = useMemo(() => {
    const updateContact = (patch) => {
      setContent((prev) => ({ ...prev, contact: { ...prev.contact, ...patch } }));
    };

    const updateContactPage = (patch) => {
      setContent((prev) => ({ ...prev, contactPage: { ...prev.contactPage, ...patch } }));
    };

    const setHiddenPath = (path, hidden) => {
      setContent((prev) => ({
        ...prev,
        hiddenPaths: {
          ...prev.hiddenPaths,
          [path]: Boolean(hidden),
        },
      }));
    };

    const updateLeader = (id, patch) => {
      setContent((prev) => ({
        ...prev,
        teamLeaders: prev.teamLeaders.map((l) => (l.id === id ? { ...l, ...patch } : l)),
      }));
    };

    const updateLeaderHighlightsFromText = (id, text) => {
      const highlights = String(text)
        .split(/\r?\n/)
        .map((s) => s.trim())
        .filter(Boolean);
      updateLeader(id, { highlights });
    };

    const addTeamMember = () => {
      const member = {
        id: newId("tm"),
        name: "New Member",
        role: "Role",
        qual: "Qualification",
        exp: "",
        desc: "",
        photoSrc: "",
      };
      setContent((prev) => ({ ...prev, teamMembers: [member, ...prev.teamMembers] }));
      return member.id;
    };

    const updateTeamMember = (id, patch) => {
      setContent((prev) => ({
        ...prev,
        teamMembers: prev.teamMembers.map((m) => (m.id === id ? { ...m, ...patch } : m)),
      }));
    };

    const deleteTeamMember = (id) => {
      setContent((prev) => ({
        ...prev,
        teamMembers: prev.teamMembers.filter((m) => m.id !== id),
      }));
    };

    const addTestimonial = () => {
      const t = {
        id: newId("t"),
        name: "New Patient",
        condition: "",
        text: "",
        stars: 5,
      };
      setContent((prev) => ({ ...prev, testimonials: [t, ...prev.testimonials] }));
      return t.id;
    };

    const updateTestimonial = (id, patch) => {
      setContent((prev) => ({
        ...prev,
        testimonials: prev.testimonials.map((t) => (t.id === id ? { ...t, ...patch } : t)),
      }));
    };

    const deleteTestimonial = (id) => {
      setContent((prev) => ({
        ...prev,
        testimonials: prev.testimonials.filter((t) => t.id !== id),
      }));
    };

    const setTestimonialsMeta = (patch) => {
      setContent((prev) => ({
        ...prev,
        testimonialsMeta: { ...prev.testimonialsMeta, ...patch },
      }));
    };

    const resetToDefaults = () => {
      resetSiteContent();
      setContent(DEFAULT_SITE_CONTENT);
    };

    return {
      updateContact,
      updateContactPage,
      setHiddenPath,
      updateLeader,
      updateLeaderHighlightsFromText,
      addTeamMember,
      updateTeamMember,
      deleteTeamMember,
      addTestimonial,
      updateTestimonial,
      deleteTestimonial,
      setTestimonialsMeta,
      resetToDefaults,
    };
  }, []);

  const value = useMemo(() => ({ content, setContent, actions }), [content, actions]);

  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  const ctx = useContext(SiteContentContext);
  if (!ctx) throw new Error("useSiteContent must be used within SiteContentProvider");
  return ctx;
}
