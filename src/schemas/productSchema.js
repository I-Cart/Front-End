import { z } from "zod";

const imgPathRegex = /\.(jpg|png|jpeg|webp)$/;
const productSchema = z.object({
    title: z.string().min(2, {
        message: "Product name must be at least 2 characters.",
    }),
    description: z.string().min(10, {
        message: "Description must be at least 10 characters.",
    }),
    price: z.coerce.number().min(0.01, {
        message: "Price must be at least 0.01.",
    }),
    img: z.union([
        z.string().url({
            message: "Please enter a valid image URL.",
        }),
        z.string().regex(imgPathRegex, {
            message: "Please enter a valid image URL.",
        }),
    ]),
    cat_prefix: z
        .enum(["sport", "baby", "kids", "men", "women"], {
            message: "Please select a valid category",
        })
        .default("men"),
});

export default productSchema;