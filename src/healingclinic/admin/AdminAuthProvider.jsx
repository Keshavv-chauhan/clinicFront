import { createContext, useCallback, useContext, useMemo, useState } from "react";

const AUTH_KEY = "hc_admin_authed";

function readAuthFlag() {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(AUTH_KEY) === "1";
}

function writeAuthFlag(value) {
  if (typeof window === "undefined") return;
  if (value) sessionStorage.setItem(AUTH_KEY, "1");
  else sessionStorage.removeItem(AUTH_KEY);
}

const AdminAuthContext = createContext(null);

export function AdminAuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(readAuthFlag);

  const login = useCallback((username, password) => {
    const ok = username === "Admin" && password === "Admin@123";
    writeAuthFlag(ok);
    setIsAdmin(ok);
    return ok;
  }, []);

  const logout = useCallback(() => {
    writeAuthFlag(false);
    setIsAdmin(false);
  }, []);

  const value = useMemo(() => ({ isAdmin, login, logout }), [isAdmin, login, logout]);

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error("useAdminAuth must be used within AdminAuthProvider");
  return ctx;
}
