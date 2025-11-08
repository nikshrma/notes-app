import z from "zod";
export const noteSchema = z.object({
    userId:z.number(),
    title: z.string().min(1),
    description: z.string(),
})

export type NoteType = z.infer<typeof noteSchema>;