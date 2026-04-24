import { model, Schema } from "mongoose";

const columnSchema = new Schema({
  board_id: { type: Schema.Types.ObjectId, ref: "Board", required: true },
  name: { type: String, required: true },
  position: { type: String },
  status: { type: String },
});

const Column = model("Column", columnSchema);

export default Column;
