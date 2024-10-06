import { ZodType, z } from "zod";

export const SignupSchema: ZodType = z.object({
  firstname: z.string().min(3, "Full Name is required"),
  lastname: z.string().min(3, "Last Name is required"),
  email: z.string().email("Invalid email address"),
  phonenumber: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(15, "Phone Number must be at most 15 characters")
    .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  dateOfBirth: z
    .string()
    .min(1, "Date of Birth is required")
    .regex(
      /^\d{4}-\d{2}-\d{2}$/,
      "Date of Birth must be in the format YYYY-MM-DD"
    ),
});

export const SigninSchema: ZodType = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type SignupType = z.infer<typeof SignupSchema>;
export type SigninType = z.infer<typeof SigninSchema>;
