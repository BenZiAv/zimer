import express from "express";
import cors from "cors";
import userLogIn from "../handlers/login.mjs";
const userLogInRouter = express.Router();
userLogInRouter.use(express.json());
userLogInRouter.use(cors());

userLogInRouter.post("/login", userLogIn.LogIn);


export default userLogInRouter;