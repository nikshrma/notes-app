import zod from "zod"
export const signinSchema = zod.object({
    username: zod.email(),
    password: zod.string(),
})
export type UserInputOnSignIn = zod.infer<typeof signinSchema>