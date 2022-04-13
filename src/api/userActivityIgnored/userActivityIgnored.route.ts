import { Router } from "express";
import {
  addIgnoredUser,
  getIgnoredList,
  removeIgnoredUser,
} from "./userActivityIgnored.controller";
const router: Router = Router();

router.post("/", addIgnoredUser);
router.get("/", getIgnoredList);
router.delete("/", removeIgnoredUser);

export default router;
