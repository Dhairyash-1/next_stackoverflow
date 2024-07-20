import { Document, Schema, model, models } from "mongoose";

export interface ITag extends Document {
  name: string;
  description: string;
  question: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
}

const tagSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
});
const Tag = models.Tag || model("Tag", tagSchema);
export default Tag;
