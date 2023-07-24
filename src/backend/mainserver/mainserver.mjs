import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config("../.env");
const port = process.env.PORT;
import signuprouter from "../router/signup.mjs";
import loginrouter from "../router/login.mjs";
import productinfo from "../router/product.mjs";
import clientorder from "../router/clientorder.mjs";
import ConnectingToMDB from "../connectingToMDB/connecting.mjs";
import disconnectFromMD from "../router/disconnectFromMD.mjs";
import connectingToMD from "../router/connectToMD.mjs";

const mainserver = express();
mainserver.use(express.json());
mainserver.use(cors());

mainserver.use(signuprouter);
mainserver.use(loginrouter);
mainserver.use(clientorder);
mainserver.use(disconnectFromMD);
mainserver.use(connectingToMD);

 ConnectingToMDB.ConnectingToMDB.connent();

mainserver.get("/", (req, res) => {
  console.log("mainserver is running");
  res.json({ mainserver: "succsess" });
});

mainserver.listen(port, () => {
  console.log(`the server is listen to port http://localhost:${port}`);
});