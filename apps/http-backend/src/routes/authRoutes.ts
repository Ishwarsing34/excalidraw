import express, { Router } from "express";
import { signUp, logIn } from "../controllers/authControllers.js";

const authRouter : Router = express.Router();

authRouter.post("/signup", signUp);
authRouter.post("/login", logIn);

export { authRouter };