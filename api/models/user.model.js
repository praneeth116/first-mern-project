import mongoose from "mongoose";
import { type } from "os";

//Defining user schemas for username, password and email.
const userSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        password:{
            type: String,
            required: true,
        }
    }, {timestamps: true}
)

//Name of the model must be uppercase.
const User = mongoose.model('User', userSchema);

export default User;