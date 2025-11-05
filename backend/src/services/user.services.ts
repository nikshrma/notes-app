import { User } from "../config/db.config.js";
import bcrypt from "bcrypt";
const saltRounds = 8;
import type { UserInputOnSignUp } from "../schemas/signup.schema.js";
import type { UserInputOnSignIn } from "../schemas/signin.schema.js";

export async function checkUserExistance(userName : string){
    return await User.findOne({username:userName});
}

export async function createUser(userPayload: UserInputOnSignUp){
    const userHash = await bcrypt.hash(userPayload.password , saltRounds)
    const user = await User.create({
        username:userPayload.username,
        password:userHash,
        firstName:userPayload.firstName,
        lastName:userPayload.lastName
    })
    return user;
};

export async function signInUser(userPayload: UserInputOnSignIn  , hash: string){
    const a:boolean = await bcrypt.compare(userPayload.password , hash);
    return a;
}