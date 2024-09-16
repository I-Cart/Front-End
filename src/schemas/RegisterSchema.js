import { z } from "zod"

export const userSchema = z.object({
    name: z.string({
        required_error: "name is required",
    }).min(3, "name must be at least 3 characters")
        .max(20, "name must not exceed 20 characters"),
    email: z.string({
        required_error: "email is required",
    }).email("Please enter a valid email address."),
    password: z.string({ required_error: "password is required" }).min(8, "password must be at least 8 characters")
        .max(20, "password must not exceed 20 characters").refine((val) => /[a-z]/.test(val) && /[A-Z]/.test(val) && /[0-9]/.test(val) && /[^a-zA-Z0-9]/.test(val), {
            message: "password must contain at least one lowercase, uppercase letter, a number, and a special character.",
        }),
    passwordConfirm: z.string({
        required_error: "password confirm is required",
    }),
    phone: z.string({
        required_error: "phone number is required",
    }).refine(val => /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(val), {
        message: "Please enter a valid number."
    }),
    role: z.enum(["admin", "user"]).default("user"),
})
const registerSchema = userSchema.superRefine((data, ctx) => {
    if (data.password !== data.passwordConfirm) {
        ctx.addIssue({
            code: 'custom',
            message: "Passwords do not match",
            path: ['passwordConfirm']
        })
    }
})

export default registerSchema