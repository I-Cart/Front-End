import { z } from "zod"

const loginSchema = z.object({
    email: z.string({ required_error: "The email address is required." }).email("Please enter a valid email."),
    password: z.string({
        required_error: "The password is required.",
    })
})
export default loginSchema