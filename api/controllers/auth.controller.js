import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async(req, res, next) => {
    const {username, email, password} = req.body;
    //We are encrypting the password here
    //const hashedPassword = await bcryptjs.hash(password, 10);
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({username, email,password: hashedPassword});
    // As saving data to the database is an asynchronous process
    try{
        await newUser.save();
        res.status(201).json({message: "User created successfully"});

    }catch(error){
        //res.status(500).json({message: error.message})
        next(error)
        //Custom Error
        //next(errorHandler(300, "something went wrong!"));
    }
};

