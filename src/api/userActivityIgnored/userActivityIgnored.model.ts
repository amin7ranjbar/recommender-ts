import { model, Schema } from "mongoose";
/**
 * USER ACTIVITY TO IGNORE SCHEMA
 */
const UserActivityIgnoredSchema = new Schema(
  {
    user: { type: String, index: { unique: true } },
  },
  { collection: "recommendations.userActivityIgnored" }
);
export default model("UserActivityIgnored", UserActivityIgnoredSchema);
