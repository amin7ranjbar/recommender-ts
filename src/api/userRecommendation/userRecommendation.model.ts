import { model, Schema } from "mongoose";
import ItemWeight from "../itemWeights/itemWeights.model";
/**
 * USER RECOMMENDATION SCHEMA
 */
const UserRecommendationSchema = new Schema(
  {
    user: { type: String },
    recommendations: { type: [ItemWeight.schema] },
  },
  { collection: "recommendations.userRecommendations" }
);
UserRecommendationSchema.index({ user: 1 });

export default model("UserRecommendation", UserRecommendationSchema);
