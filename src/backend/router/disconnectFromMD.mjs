import express from "express";
import cors from "cors";
const disconnectRouter = express.Router();
disconnectRouter.use(cors());
disconnectRouter.use(express.json());
import disconnect from "../connectingToMDB/connecting.mjs";

disconnectRouter.post("/disconnect", (req, res) => {
  disconnect.ConnectingToMDB.disconnect();
  console.log("Disconnected from MongoDB");
  res.json({ message: "Disconnected from MongoDB", status: true });
});

export default disconnectRouter;