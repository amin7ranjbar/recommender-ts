import { model, Schema } from "mongoose";
/**
 * USER ACTIVITY SCHEMA
 */
const UserActivitySchema = new Schema(
  {
    user: { type: String },
    item: { type: String },
    itemMetadata: { type: Schema.Types.Mixed },
    action: { type: String },
  },
  { collection: "recommendations.userActivity", timestamps: true }
);

UserActivitySchema.index({ user: 1, item: 1 });
export default model("UserActivity", UserActivitySchema);
