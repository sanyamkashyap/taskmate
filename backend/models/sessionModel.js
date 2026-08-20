import { model, Schema } from "mongoose";

const sessionSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    default: null,
  },
});

const Session = model("Session", sessionSchema);

export default Session;
