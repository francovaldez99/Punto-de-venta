import { Request, Response } from "express";
import { NewUser } from "../services/User";

export async function Register(req: Request, res: Response) {
  const { name, email, password } = req.body;

  try {
    const registerUser = await NewUser({ name, email, password });
    res.status(200).json(registerUser);
  } catch (error) {
    if (error instanceof Error) {
      res.status(401).json(error.message);
    }
  }
}
