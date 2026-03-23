
import { Request, Response } from "express";
import { CreateUserSchema, SigninSchema, CreateRoomSchema } from "@repo/common/schema"



export async function signUp(req: Request, res: Response) {
  try {


    const data = CreateUserSchema.safeParse(req.body);


    if (!data.success) {
      return res.json({
        message: "Incorrect Inputs"
      })
    }
    res.json({ message: "Signup endpoint working" });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
}



export async function logIn(req: Request, res: Response) {
  try {
    const data = SigninSchema.safeParse(req.body);

    if (!data.success) {
      return res.json({
        message: "Incorrect Input"
      })
    }
    res.json({ message: "Signup endpoint working" });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
}




export async function room(req: Request, res: Response) {
  try {


    const data = CreateRoomSchema.safeParse(req.body);

    if (!data.success) {
      return res.json({
        message: "Incorrect Input"
      })
    }
    res.json({ message: "Signup endpoint working" });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
}

