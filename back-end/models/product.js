import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  videoId: { type: String, ref: "videos", required: true },
  link: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
});

export default mongoose.model("Product", productSchema);
