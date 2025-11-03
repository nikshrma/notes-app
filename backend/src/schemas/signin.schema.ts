import zod from "zod"
const signinSchema = zod.object({
    username: zod.email(),
    password: zod.string(),
})