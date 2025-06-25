// import express from "express";
const express = require("express");

const app = express();

app.use(express.json());
const PORT = 5000;

app.get("/api", (req, res) => {
    res.send("Response from express");
})


app.get("/api", (req, res) => {
    res.send("Response from express on LocalHost 500");
})

app.post("/api/users", (req, res) => {
    let {name, email, password} = req.body;
    try {
        if(!name || !email || !password){
            return res.status(400).json({message: "All fields are required"})
        }
        const user = {
            name,
            email,
            password
        }
        res.status(200).json({message: "Data fetched",user })
    } catch (error) {
        res.status(500).json({message: `Something went wrong ${error}`})
    }
})

app.listen(PORT, () => {
console.log(`Server Started at PORT ${PORT}`);
})