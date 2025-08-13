import express from "express";
import { connectMongoDB } from "./connection.js";
import Router from "./routers/routes.js";
import cors from "cors";
import bodyParser from "body-parser";


connectMongoDB();

const app = express();

const PORT = 9000;


app.use(bodyParser.urlencoded({limit: '20mb', extended: true}));
app.use(express.json({limit: '20mb'}));
app.use(express.json());

app.use(cors({
  origin: `http://localhost:3000`
}))

// app.use(express.json({ limit: '50mb' })); // for JSON bodies
// app.use(express.urlencoded({ limit: '50mb', extended: true })); // for URL-encoded bodies


app.use("/api", Router);

app.get("/", (req, res) => {
  res.send("responce from express");
});

app.listen(PORT, () => {
  console.log("responce from port :", PORT);
});
