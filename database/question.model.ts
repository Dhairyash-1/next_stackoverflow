import mongoose, { Schema, Document, models } from "mongoose";

export interface IQuestion extends Document {
  title: string;
  content: string;
  tags: Schema.Types.ObjectId[];
  views: number;
  upvotes: Schema.Types.ObjectId[];
  downvotes: Schema.Types.ObjectId[];
  answers: Schema.Types.ObjectId[];
  author: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const QuestionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
    views: {
      type: Number,
      default: 0,
    },
    upvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    downvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Question = models.Question || mongoose.model("Question", QuestionSchema);
export default Question;
