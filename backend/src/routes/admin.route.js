import { Router } from "express";

import { getAdmin } from "../controllers/admin.controller.js";
import { protectRoute,requireAdmin } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", getAdmin);

// router.get("/song",protectRoute, requireAdmin, createSong);


export default router;
