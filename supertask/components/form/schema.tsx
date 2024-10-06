import { ZodType, z } from "zod";

export const SignupSchema: ZodType = z.object({
  firstname: z.string().min(3, "Full Name is required"),
  lastname: z.string().min(3, "Last Name is required"),
  email: z.string().email("Invalid email address"),
  phonenumber: z.string().min(9, "Phone Number is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
export type InputType = z.infer<typeof SignupSchema>;
