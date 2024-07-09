import { Router } from "express";
import { Register } from "../controllers/user.controllers";

const userRouter = Router();

userRouter.post("/register", Register);

export { userRouter };
