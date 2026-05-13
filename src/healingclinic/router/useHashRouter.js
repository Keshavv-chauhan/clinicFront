import { useEffect, useState } from "react";

// Hash-based router (no external deps)
export function useHashRouter() {
  const [path, setPath] = useState(() => window.location.hash.replace("#", "") || "/");

  useEffect(() => {
    const handler = () => setPath(window.location.hash.replace("#", "") || "/");
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  return path;
}
