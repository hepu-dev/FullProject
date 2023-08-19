import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  videoId: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  live: { type: Boolean, default: false },
  title: { type: String, required: true },
  description: { type: String, required: true },
  viewers: { type: String, required: true },
});

export default mongoose.model("Video", videoSchema);