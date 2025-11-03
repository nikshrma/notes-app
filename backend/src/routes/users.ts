import express, { Router } from "express";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import zod from "zod";
import { User } from "../config/db.config.js";
import { signupSchema } from "../schemas/signup.schema.js";
import { checkUserExistance, createUser } from "../services/user.services.js";
import { statusCodes } from "../config/statusCodes.enum.js";
export const notesRouter = Router();


notesRouter.post("/signup" , async(req,res)=>{
    const userPayload = req.body;
    const {success }= signupSchema.safeParse(userPayload);
    const existingUserCheck = await checkUserExistance(userPayload);
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
notesRouter.post("/signin" , (req,res)=>{

})
