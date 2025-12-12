"use client";

import { useRouter } from "next/navigation";
import { useAuthToken } from "./useAuthToken";

export function useLogout() {
  const router = useRouter();
  const { removeToken } = useAuthToken();

  const logout = () => {
    removeToken();
    router.push("/login"); 
  };

  return { logout };
}
