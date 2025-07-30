import express from "express";
import { connectMongoDB } from "./connection.js";
import Router from "./routers/routes.js";
import cors from "cors";

connectMongoDB();

const app = express();

const PORT = 9000;

app.use(express.json());

app.use(cors({
  origin: `http://localhost:3000`
}))
app.use("/api", Router);

app.get("/", (req, res) => {
  res.send("responce from express");
});

app.listen(PORT, () => {
  console.log("responce from port :", PORT);
});
