import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";
const saltRounds = 8;
import type { UserInputOnSignUp } from "../schemas/signup.schema.js";
import type { UserInputOnSignIn } from "../schemas/signin.schema.js";

export async function checkUserExistance(username : string){
    return await prisma.user.findUnique({
        where:{username}
    });
}

export async function createUser(userPayload: UserInputOnSignUp){
    const userHash = await bcrypt.hash(userPayload.password , saltRounds)
    const user = await prisma.user.create({
        data:{
        username:userPayload.username,
        password:userHash,
        firstName:userPayload.firstName,
        lastName:userPayload.lastName
    }})
    return user;
};

export async function signInUser(userPayload: UserInputOnSignIn  , hash: string){
    const a:boolean = await bcrypt.compare(userPayload.password , hash);
    return a;
}