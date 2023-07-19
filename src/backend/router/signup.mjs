import express from "express";
import cors from "cors";
import userSignUp from "../handlers/signup.mjs";
const signupRouter = express.Router();
signupRouter.use(cors());
signupRouter.use(express.json());

signupRouter.post("/signup", userSignUp.userSignUp);

export default signupRouter;