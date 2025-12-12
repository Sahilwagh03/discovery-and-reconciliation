import { z } from "zod";

const allowedDomains = ["odido.nl"];

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .refine((value) => {
      const employeeId = /^id\d{6}$/i;

      if (employeeId.test(value)) return true;

      const atIndex = value.lastIndexOf("@");
      if (atIndex === -1) return false;

      const domain = value.slice(atIndex + 1);

      return allowedDomains.includes(domain);
    }, "Enter a valid company email or ID (id123456 / ID123456)"),
  
  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
