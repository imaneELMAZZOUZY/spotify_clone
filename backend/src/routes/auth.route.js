import { Router } from "express";
import { authCallback } from "../controllers/auth.controller.js";
const router = Router();

router.get("/",(req,res)=>{
    res.send(" Auth route with GET method");
})

router.post("/callback", authCallback )


export default router;