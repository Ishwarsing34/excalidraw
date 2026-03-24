import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import { authRouter } from "./routes/authRoutes.js";


const app = express()


app.use(express.json());


app.use("api/v1/auth" , authRouter)


app.listen(3001 , () =>{

    console.log("http backend is running at 3001")
})