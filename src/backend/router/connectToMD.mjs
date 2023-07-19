import express from "express";
import cors from "cors";
const connectRouter = express.Router();
connectRouter.use(cors());
connectRouter.use(express.json());
import connect from "../connectingToMDB/connecting.mjs";

connectRouter.post("/connecting", (req, res) => {
  connect.ConnectingToMDB.connent();
  console.log("connected to  MongoDB");
  res.json({ message: "connected to MongoDB", status: true });
});

export default connectRouter;