import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  videoId: { type: String, ref: "videos", required: true },
  username: { type: String, required: true },
  comment: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("Comment", commentSchema);