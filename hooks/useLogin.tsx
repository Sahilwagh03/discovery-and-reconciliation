"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { LoginSchema } from "@/schemas/auth.schema";
import { LoginPayload, LoginResponse } from "@/interfaces/auth.interface";
import { loginUser } from "@/services/auth.service";
import { toast } from "sonner";
import { useAuthToken } from "@/hooks/useAuthToken";

export function useLogin() {
  const router = useRouter();
  const { setToken } = useAuthToken();

  const mutation = useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: async (payload) => {
      const parsed = LoginSchema.safeParse(payload);
      if (!parsed.success) {
        const firstError = parsed.error.issues[0]?.message;
        throw new Error(firstError || "Invalid inputs");
      }
      return loginUser(parsed.data);
    },

    onSuccess: (data) => {
      setToken(data.token);
      toast.success(data.message || "Login successful");

      setTimeout(() => {
        router.push("/dashboard");
      }, 500);
    },

    onError: (err) => {
      console.log("Login Error:", err.message);
      toast.error(err.message);
    },
  });

  return {
    login: mutation.mutate,
    loginAsync: mutation.mutateAsync,
    isLoading: mutation.isPending,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
}
