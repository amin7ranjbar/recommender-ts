import { Router } from "express";
import { get } from "./userRecommendation.controller";
const router: Router = Router();

// FIXME: Rewrite to pull from Articles...
router.get("/", get);

export default router;
