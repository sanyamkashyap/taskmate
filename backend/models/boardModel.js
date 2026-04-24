import { model, Schema } from "mongoose";

const boardSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  projectId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

const Board = model("Board", boardSchema);

export default Board;
