import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";

dotenv.config()

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
app.use(express.json())

app.listen(3000, ()=>{
    console.log("Server listening on port 3000");
});


// Path : api/user
app.use("/api/user", userRoutes);

// Path : api/auth
app.use("/api/auth",authRoute);
