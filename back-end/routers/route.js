const express = require("express");
const router = express.Router();
const videoController = require("../controllers/videoController");
const productController = require("../controllers/productController");
const commentController = require("../controllers/commentController");

// Video Thumbnail List
router.get("/videos", videoController.getVideoList);

// Product List
router.get("/products/:videoId", productController.getProductList);

// Comment List
router.get("/comments/:videoId", commentController.getCommentList);

// Submit Comment
router.post("/comments", commentController.submitComment);

module.exports = router;
