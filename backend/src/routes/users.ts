import { Router } from "express";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import { signupSchema, type UserInputOnSignUp } from "../schemas/signup.schema.js";
import { checkUserExistance, createUser, signInUser } from "../services/user.services.js";
import { statusCodes } from "../config/statusCodes.enum.js";
import { signinSchema, type UserInputOnSignIn } from "../schemas/signin.schema.js";
export const usersRouter = Router();


usersRouter.post("/signup" , async(req,res)=>{
    const userPayload:UserInputOnSignUp = req.body;
    const {success }= signupSchema.safeParse(userPayload);
    const existingUserCheck = await checkUserExistance(userPayload.username);
    if(!success || existingUserCheck){
        return res.status(statusCodes.bad_request).json({
            message:"Invalid credentials or user already exists"
        })
    }
    const user = await createUser(userPayload);
    const token = jwt.sign({userId:user._id }, process.env.jwtPass as string);
    res.status(statusCodes.successful_request).json({
        message:"User added successfully",
        token
    })
})
usersRouter.post("/signin" , async(req,res)=>{
    const userPayload:UserInputOnSignIn = req.body;
    const {success }= signinSchema.safeParse(userPayload);
    const existingUser = await checkUserExistance(userPayload.username);
    if(!success || !existingUser) {
       return res.status(statusCodes.bad_request).json({
        message:"User doesn't exist. Re-Direct to signup"
       })
    }
    const a:boolean = await signInUser(userPayload , existingUser.password);
    if(!a){
        return res.status(statusCodes.bad_request).json({
            message:"Invalid credentials"
        })
    }
     const token = jwt.sign({userId:existingUser._id }, process.env.jwtPass as string);
     return res.status(statusCodes.successful_request).json({
        message:"Signed in successfully",
        token
     })
})


