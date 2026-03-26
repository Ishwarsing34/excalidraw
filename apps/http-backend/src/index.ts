import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import { authRouter } from "./routes/authRoutes.js";
import { Request , Response } from "express";


const app = express()


app.use(express.json());


app.use("/api/v1/auth" , authRouter)


app.get('/' , (req : Request , res : Response) =>{
     
    res.send("BACKEND IS LIVE")
})


app.listen(3001 , () =>{

    console.log("http backend is running at 3001")
})