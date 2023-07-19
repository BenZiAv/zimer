import express from "express";
import cors from "cors";
import clientorder from "../handlers/clientorder.mjs";
const clientOrderRouter = express.Router();
clientOrderRouter.use(express.json());
clientOrderRouter.use(cors());

clientOrderRouter.post("/order/clientorder", clientorder.ClientOrder);

export default clientOrderRouter;