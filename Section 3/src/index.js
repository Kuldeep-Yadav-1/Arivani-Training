import express from "express";
import { connectMongoDB } from "./connection.js";
import Router from "./routers/routes.js";

connectMongoDB();

const app = express();

const PORT = 5000;

app.use(express.json());
app.use("/api", Router);

app.get("/", (req, res) => {
  res.send("responce from express");
});

app.get("/registeration", (req, res) => {
  res.send(`<h1>Registration form</h1>
  <form action="/registeration" method="Post">
    <label id="name">Name :</label><br/>
    <input for="name" type="text" placeholder="Enter your Name" required/><br/><br/>
    <label id="email">Email :</label><br/>
    <input type="email" for=="email" placeholder="Enter your Email" required/><br/><br/>
    <label id="phone">Phone No :</label><br/>
    <input type="number" for="phone placeholder="Enter your Phone"/><br/><br/>
    <input type="submit"/>
  </form> 
    `);
});

app.post("/registeration", (req, res) => {
  res.send(`<h1>Registration form send successfully</h1>
  <form action="/registeration" method="Post">
   <a href="/">Go to home</a>
  </form> 
    `);
});

app.listen(PORT, () => {
  console.log("responce from port :", PORT);
});
