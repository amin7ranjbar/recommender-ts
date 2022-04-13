import { Router } from "express";

import itemWeightsRoutes from "./itemWeights/itemWeights.route";
import userActivityRoutes from "./userActivity/userActivity.route";
import userActivityIgnoredRoutes from "./userActivityIgnored/userActivityIgnored.route";
import userDoNotRecommendRoutes from "./userDoNotRecommend/userDoNotRecommend.route";
import userItemWeightsRoutes from "./userItemWeights/userItemWeights.route";
import userRecommendationRoutes from "./userRecommendation/userRecommendation.route";
import userSimilarityRoutes from "./userSimilarity/userSimilarity.route";

const router: Router = Router();

router.use("/itemWeights", itemWeightsRoutes);
router.use("/userActivity", userActivityRoutes);
router.use("/userActivityIgnored", userActivityIgnoredRoutes);
router.use("/userDoNotRecommend", userDoNotRecommendRoutes);
router.use("/userItemWeights", userItemWeightsRoutes);
router.use("/userRecommendation", userRecommendationRoutes);
router.use("/userSimilarity", userSimilarityRoutes);

export const MainRouter: Router = router;
