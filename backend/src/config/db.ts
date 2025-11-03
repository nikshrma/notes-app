import mongoose, { Schema } from "mongoose"
import dotenv from "dotenv";
dotenv.config();
mongoose.connect(process.env.mongoURL as string);
const userSchema = new Schema({
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
        }
});
const noteSchema = new Schema({
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

export const User = mongoose.model("User" , userSchema);
export const Note = mongoose.model("Note" , noteSchema);