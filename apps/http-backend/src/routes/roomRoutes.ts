import express, { Router } from 'express';
import { room } from '../controllers/authControllers.js';
import { authcheck } from '../middlewares/auth.js';

const roomRouter : Router = express.Router();


roomRouter.post('/create' , authcheck , room);


export {roomRouter}


