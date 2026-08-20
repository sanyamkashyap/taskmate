import { model, Schema, Types } from "mongoose";

const todo = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  columnId: {
    type: Schema.Types.ObjectId,
    ref: "Column",
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

const Todo = model("Todo", todo);

export default Todo;
