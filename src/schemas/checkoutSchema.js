import { z } from "zod";

const checkoutSchema = z.object({
    firstName: z
        .string()
        .min(2, { message: "First name must be at least 2 characters." }),
    lastName: z
        .string()
        .min(2, { message: "Last name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    address: z
        .string()
        .min(5, { message: "Address must be at least 5 characters." }),
    city: z.string().min(2, { message: "City must be at least 2 characters." }),
    country: z.string().min(2, { message: "Please select a country." }),
    zipCode: z
        .string()
        .min(5, { message: "ZIP code must be at least 5 characters." }),
    cardName: z
        .string()
        .min(2, { message: "Name on card must be at least 2 characters." }),
    cardNumber: z
        .string()
        .regex(/^\d{16}$/, { message: "Card number must be 16 digits." }),
    expirationDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
        message: "Expiration date must be in MM/YY format.",
    }),
    cvv: z.string().regex(/^\d{3,4}$/, { message: "CVV must be 3 or 4 digits." }),
});

export default checkoutSchema;
