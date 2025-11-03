import mongoose, { Document, Schema } from "mongoose"
import dotenv from "dotenv";
dotenv.config();
mongoose.connect(process.env.mongoURL as string);
interface IUser extends Document{
    username:string;
    password:string;
    firstName:string;
    lastName:string;
}
interface INote extends Document{
    userId:mongoose.Types.ObjectId;
    title:string;
    description?:string;
}
const userSchema = new Schema<IUser>({
        username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
        },
        firstName:{
            type:String,
            required: true,
            minLength: 3,
            maxLength:50
        },
        lastName:{
            type:String,
            required: true,
            minLength:3,
            maxLength:50
        },
        password:{
            type:String,
            required:true,
            minLength:6
        },
});
const noteSchema = new Schema<INote>({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },  
    title:{
        type: String,
        required:true,
        minLength:1,
    },
     description:{
        type: String,
    },

},{
    timestamps:true
})

export const User = mongoose.model<IUser>("User" , userSchema);
export const Note = mongoose.model<INote>("Note" , noteSchema);