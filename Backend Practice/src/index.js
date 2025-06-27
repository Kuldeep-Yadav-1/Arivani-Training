import express from "express";

import { connectMongoDB } from "./connection.js";
import router from "./routers/routes.js";

connectMongoDB();

const app = express();

const PORT = 6000;

app.use(express.json());

app.use("/api",router)

app.get("/", (req, res) => {
    res.send("Response from express");
})

app.listen(PORT, () => {
console.log(`Server Started at PORT ${PORT}`);
})