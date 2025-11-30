import { z } from "zod";

// Allowed company domains
const allowedDomains = ["odido.nl"];

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .refine((value) => {
      const employeeId = /^id\d{6}$/;

      // If matches employee ID → valid
      if (employeeId.test(value)) return true;

      // Extract domain from email (after @)
      const atIndex = value.lastIndexOf("@");
      if (atIndex === -1) return false;

      const domain = value.slice(atIndex + 1);

      // Check if domain is allowed
      return allowedDomains.includes(domain);
    }, "Enter a valid company email or ID (id123456)"),
  
  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
