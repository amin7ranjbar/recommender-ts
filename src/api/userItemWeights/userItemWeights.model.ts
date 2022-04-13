import { model, Schema } from "mongoose";
import ItemWeight from "../itemWeights/itemWeights.model";
/**
 * USER to ITEM WEIGHT SCHEMA
 */
const UserItemWeightsSchema = new Schema(
  {
    user: { type: String },
    itemWeights: { type: [ItemWeight.schema] },
    rowWeight: { type: Number },
  },
  { collection: "recommendations.userItemWeights" }
);
UserItemWeightsSchema.index({ user: 1 });
export default model("UserItemWeights", UserItemWeightsSchema);
