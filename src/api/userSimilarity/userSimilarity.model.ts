import { model, Schema } from "mongoose";
/**
 * USER SIMILARITY SCHEMA
 */
const UserSimilaritySchema = new Schema(
  {
    users: { type: [String] },
    similarity: { type: Number },
  },
  { collection: "recommendations.userSimilarities" }
);
UserSimilaritySchema.index({ users: 1 });
export default model("UserSimilarity", UserSimilaritySchema);
