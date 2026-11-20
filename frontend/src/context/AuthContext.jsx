import { createContext, useContext, useMemo, useState } from "react";
import { loginUser, registerUser } from "../services/api.js";

const AuthContext = createContext(null);
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("meetly_user"));
    } catch {
      return null;
    }
  });
  const [token, setToken] = useState(() =>
    localStorage.getItem("meetly_token"),
  );
  const login = async (credentials) => {
    const data = await loginUser(credentials);
    const nextUser = data.user || data;
    const nextToken = data.token || data.accessToken;
    if (nextToken) localStorage.setItem("meetly_token", nextToken);
    localStorage.setItem("meetly_user", JSON.stringify(nextUser));
    setToken(nextToken || null);
    setUser(nextUser);
    return data;
  };
  const signup = async (details) => {
    const data = await registerUser(details);
    if (data.token || data.accessToken) {
      const nextUser = data.user || data;
      const nextToken = data.token || data.accessToken;
      localStorage.setItem("meetly_token", nextToken);
      localStorage.setItem("meetly_user", JSON.stringify(nextUser));
      setToken(nextToken);
      setUser(nextUser);
    }
    return data;
  };
  const logout = () => {
    localStorage.removeItem("meetly_token");
    localStorage.removeItem("meetly_user");
    setToken(null);
    setUser(null);
  };
  const value = useMemo(
    () => ({ user, token, login, signup, logout }),
    [user, token],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);
