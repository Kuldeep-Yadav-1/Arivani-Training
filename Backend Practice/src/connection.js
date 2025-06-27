import mongoose from "mongoose";

const MONGODB_URL= 
"";

export const connectMongoDB = async () =>{
    try {
        if(MONGODB_URL){
            await mongoose.connect(MONGODB_URL);
            console.log("MongoDB Connected");
        }
        
    } catch (error) {
         console.log(error); 
    }
}


