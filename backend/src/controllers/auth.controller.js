import { User } from "../models/user.model.js";

export const authCallback = async (req,res)=>{
    try{
        const { id, firstName,lastName,imageUrl} = req.body;
        const user = await User.findOne({clerkId: id});
        if(!user){
            await User.create({
                clerkId:id,
                fullname : `${firstName} ${lastName}`,
                imageUrl
            })
        res.status(201).json({message: "User created successfully"})
        }
    }
    catch(error){
        console.log("Error in auth callback", error);
        res.status(500).json({message: "Internal Server Error", error})
    }
}