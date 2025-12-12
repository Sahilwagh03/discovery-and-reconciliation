"use client";

import { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";

export function useAuthToken() {
  const [token, setTokenState] = useState<string | null>(null);

  // Load token on mount
  useEffect(() => {
    const storedToken = Cookies.get("auth_token");
    if (storedToken) {
      setTokenState(storedToken);
    }
  }, []);

  // setter → updates cookie + state
  const setToken = useCallback((value: string) => {
    Cookies.set("auth_token", value, {
      expires: 1 / 24,
      secure: true,
      sameSite: "strict",
    });
    setTokenState(value);
  }, []);

  // remove token
  const removeToken = useCallback(() => {
    Cookies.remove("auth_token");
    setTokenState(null);
  }, []);

  return {
    token,
    setToken,
    removeToken,
  };
}
