import {z} from 'zod';

export const singleUserSchema = z.object({
    id: z.number(),
    name:z.string(),
    username:z.string(),
    email:z.email(),
    address:z.object({
        street:z.string(),
        city:z.string(),
    })
});

export const userSchema = z.array(singleUserSchema);

export type User = z.infer<typeof singleUserSchema>;