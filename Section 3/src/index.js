import express from "express";

const app = express();

const PORT = 5000;

app.use(express.json());

app.get(("/"),(req,res)=>{
    res.send("responce from get")
})

app.post("/api/userdata",(req,res)=>{
    const {name,email,password} =req.body;
    // console.log("name :",name);
    // console.log("email :",email);
    // console.log("password :",password);
    try {
          if(!name || !email ||!password){
        return res.status(400).json({message:"all fields are required"})
    }
    user ={
        name,
        email,
        password
    }
    res.status(400).json({message:"successful login"},user)
        
    } catch (error) {
         res.status(500).json({message:"bad request"},error) 
    }
})


app.listen(PORT,()=>{
    console.log("responce from port :",PORT);
})


