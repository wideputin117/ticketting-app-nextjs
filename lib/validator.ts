// our form schema validator

import * as z from "zod";

// form schema  all fields have to be in form otherwise we get error messages
export const eventFormSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    description: z.string().min(3, "Description must be at least 3 characters").max(400, 'Description must be less than 400 characters'),
    location: z.string().min(3, "Location must be at least 3 characters"),
    imageUrl: z.string(),
    startDateTime: z.date(),
    endDateTime: z.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url: z.string().url()

})