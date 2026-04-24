import { model, Schema } from "mongoose";

const projectsSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

const Project = model("Project", projectsSchema);

export default Project;
