"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation"; // Next.js router
import { LoginSchema } from "@/schemas/auth.schema";
import { LoginPayload, LoginResponse } from "@/interfaces/auth.interface";
import { loginUser } from "@/services/auth.service";
import { toast } from "sonner";

export function useLogin() {
  const router = useRouter();

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
      toast.success("Successfully logged in!");

      setTimeout(() => {
        router.push("/dashboard");
      }, 500);
    },

    onError: (err) => {
      console.log("Login Error:", err.message);
      toast.error(err.message); // optional: show error toast
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
