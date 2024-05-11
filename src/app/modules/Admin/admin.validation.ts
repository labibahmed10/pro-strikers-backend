import { z } from "zod";

export const createAdminValidationSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z
      .string({
        invalid_type_error: "Password must be string",
      })
      .max(20, { message: "Password can not be more than 20 characters" }),
  }),
});

export const AdminValidations = {
  createAdminValidationSchema,
};
