import zod from "zod"
export const signupSchema = zod.object({
    username: zod.email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})

export type UserInputOnSignUp = zod.infer<typeof signupSchema>;