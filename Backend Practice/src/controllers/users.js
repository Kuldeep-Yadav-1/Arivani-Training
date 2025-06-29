// import {DateTime} from "luxon"
// import userModel from "../models/userModel.js";
// export const signup = async (req,res) =>{
//     let {name,email,password} = req.body;
//     let email_Lowercase = email.toLowerCase()
//     try {
//         if(!name.trim() || !email.trim() || !password.trim()){
//             return res.status(400).json({message:"All field is required"})
//         }



//         const user = await userModel.findOne({email:email_Lowercase});
//         if(user){
//              return res.status(400).json({message:"email exist already"})
//         }
//         const result = userModel.create({
//             name,
//             email : email_Lowercase,
//             password,
//             created_at : DateTime.now().toISO(),
//             updated_at : DateTime.now().toISO()
//         })
//         res.status(200).json({message:"signup successfully",result})
//     } catch (error) {
//         return res.status(500).json({message:"something went wrong",error})
//     }
// }




import {DateTime} from "luxon";
import userModel from "../models/userModel.js"

export const signup = async (req,res) =>{
    let {name ,email,password,age} = req.body ;
    let email_Lowercase = email.toLowerCase();
    try {
      if(!name.trim() || !email.trim() || !password.trim() ||!age.trim() ){
        return res.status(400).json({message :"All fields are required"})
      }

      const user = await userModel.findOne({email:email_Lowercase});
      if(user){
         return res.status(400).json({message :"Email already exist"})
      }

      const result= userModel.create({
        name,
        email:email_Lowercase,
        age,
        password,
        created_at: DateTime.now().toISO(),
        updated_at: DateTime.now().toISO()
      })
      return res.status(200).json({message:"signup successfully",result})    
    } catch (error) {
        return res.status(500).json({meassage: "some thing went wrong",error})
    }
}


