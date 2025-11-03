import express, { Router } from "express"
import zod from "zod";
export const notesRouter = Router();
const signupSchema = zod.object({
    username: zod.email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})
const signinSchema = zod.object({
    username: zod.email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})

notesRouter.post("/signup" , (req,res)=>{

})
notesRouter.post("/signin" , (req,res)=>{

})
