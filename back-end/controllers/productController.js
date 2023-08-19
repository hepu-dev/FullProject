import ProductService from "../services/productService.js";

class ProductController {
  async getProductList(req, res, next) {
    const { videoId } = req.params;
    try {
      const products = await ProductService.getProductsByVideoId(videoId);
      res.json(products);
    } catch (err) {
      next(err);
    }
  }
}

export default new ProductController();
