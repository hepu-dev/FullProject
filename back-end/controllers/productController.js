const { getProductsByVideoId } = require("../services/productService");

class ProductController {
  async getProductList(req, res, next) {
    const { videoId } = req.params;
    try {
      const products = await getProductsByVideoId(videoId);
      res.json(products);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new ProductController();
