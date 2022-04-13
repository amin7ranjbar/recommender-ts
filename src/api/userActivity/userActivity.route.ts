import { Router } from "express";
import {
  getActivityForUser,
  getAllUserIdsWithActivity,
  log,
  removeLog,
} from "./userActivity.controller";
const router: Router = Router();

router.post("/", log);
router.get("/:userId", getActivityForUser);
router.get("/", getAllUserIdsWithActivity);
router.delete("/", removeLog);

export default router;
