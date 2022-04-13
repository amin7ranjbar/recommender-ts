import { model, Schema } from "mongoose";
/**
 * ITEM WEIGHT SCHEMA
 */
const ItemWeightSchema = new Schema(
  {
    item: { type: String, index: true },
    itemMetadata: { type: Schema.Types.Mixed },
    weight: { type: Number },
  },
  { collection: "recommendations.itemWeights" }
);

export default model("ItemWeight", ItemWeightSchema);
