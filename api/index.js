import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import heroRoute from "./routes/hero.route.js"
import cookieParser from 'cookie-parser';
dotenv.config();

mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log(err);
});

const app = express();

//By default we can't send json as input to backend. This allows input as json
app.use(express.json());

//Now we are able to pass cookies to our application
app.use(cookieParser());

app.listen(3000, ()=>{
    console.log("Server listening on port 3000");
});

// Path : api/user
app.use("/api/user", userRoutes);

// Path : api/auth
app.use("/api/auth",authRoute);

app.use("/api/hero", heroRoute);

//MIDDLEWARE
app.use((err, req, res, next)=>{
    // 500 is actually internal server error
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success : false,
        message : message,
    //If key and value have the same name, then we can represent the same as given below
        statusCode
    });
});
