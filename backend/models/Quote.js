import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    location: String,
    issueType: String,
    description: String,
    media: String,
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Quote", quoteSchema);