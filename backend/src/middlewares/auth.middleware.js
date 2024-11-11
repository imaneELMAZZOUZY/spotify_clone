import { clerkClient } from "@clerk/express";

import { User } from "../models/user.model.js";

export const protectRoute = async (req, res,next)=>{
    if(!req.auth.userId){
        return res.status(401).json({message: "Unauthorized user"});
    }
    next();
};


// export const requireAdmin = async (req, res, next)=>{
//    try{
//     const currentUser = await clerkClient.users.getUser(req.auth.userId);
//     const isAdmin = process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress;
//     if(!isAdmin){
//         res.status(403).json({message: "Unauthorized admin user"});
//         return;
//     }

//    }catch(error){}
// }

export const requireAdmin = async (req, res, next) => {
    try {
        const currentUser = await clerkClient.users.getUser(req.auth.userId);
        const user = await User.findOne({ clerkId: currentUser.id }); 

        if (!user || user.role !== "admin") {
            return res.status(403).json({ message: "Unauthorized admin user" });
            
        }
        next();
    } catch (error) {
        return  res.status(500).json({ message: "Server error" });
    }
};