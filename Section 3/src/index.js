import express from "express";
import { connectMongoDB } from "./connection.js";
import Router from "./routers/routes.js"

connectMongoDB();

const app = express();

const PORT = 5000;

app.use(express.json());
app.use("/api", Router);

app.get("/", (req, res) => {
  res.send("responce from express");
});

app.listen(PORT, () => {
  console.log("responce from port :", PORT);
});
