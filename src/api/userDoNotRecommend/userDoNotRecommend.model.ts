import { model, Schema } from "mongoose";
/**
 * USER DO NOT RECOMMEND SCHEMA
 */
const UserDoNotRecommendSchema = new Schema(
  {
    user: { type: String },
    doNotRecommend: [
      {
        item: { type: String },
        itemMetadata: { type: Schema.Types.Mixed },
      },
    ],
  },
  { collection: "recommendations.userDoNotRecommend" }
);
UserDoNotRecommendSchema.index({ user: 1 });
export default model("UserDoNotRecommend", UserDoNotRecommendSchema);
