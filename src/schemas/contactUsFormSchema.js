import { z } from "zod";

const contactUsFormSchema = z.object({
    name: z.string({
        required_error: "Name is required.",
    }).min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string({
        required_error: "Email is required.",
    }).email({
        message: "Please enter a valid email address.",
    }),
    subject: z.string({
        required_error: "Subject is required.",
    }).min(5, {
        message: "Subject must be at least 5 characters.",
    }),
    message: z.string({
        required_error: "Message is required.",
    }).min(10, {
        message: "Message must be at least 10 characters.",
    }).max(500, {
        message: "Message must be at most 500 characters.",
    }),
});
export default contactUsFormSchema;
