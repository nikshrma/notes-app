import { User } from "../config/db.config.js";
import type { UserInputOnSignUp } from "../schemas/signup.schema.js";

export async function checkUserExistance(userInput : UserInputOnSignUp){
    return await User.find({username:userInput.username});
}

export async function createUser(userPayload: UserInputOnSignUp){
    const user = await User.create({
        username:userPayload.username,
        password:userPayload.password,
        firstName:userPayload.firstName,
        fastName:userPayload.lastName
    })
    return user;
};