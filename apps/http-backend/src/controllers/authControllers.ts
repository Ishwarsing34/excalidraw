
import { Request, Response } from "express";



export async function signUp(req: Request, res: Response) {
  try {
    res.json({ message: "Signup endpoint working" });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
}



export async function logIn(req: Request, res: Response) {
  try {
    res.json({ message: "Signup endpoint working" });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
}




export async function room(req: Request, res: Response) {
  try {
    res.json({ message: "Signup endpoint working" });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
}

