import express from "express";
const router = express.Router();
import videoController from "../controllers/videoController.js"; 
import productController from "../controllers/productController.js"; 
import commentController from "../controllers/commentController.js";

// Video Thumbnail List
router.get("/videos", videoController.getVideoList);

// Video Detail
router.get("/videos/:videoId", videoController.getVideo);

// Product List
router.get("/products/:videoId", productController.getProductList);

// Comment List
router.get("/comments/:videoId", commentController.getCommentList);

// Submit Comment
router.post("/comments", commentController.submitComment);

export default router;