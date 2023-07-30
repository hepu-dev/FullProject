const Product = require('../models/product');

class ProductService {
  async getProductsByVideoId(videoId) {
    try {
      return await Product.find({ videoId }, 'link title price');
    } catch (err) {
      throw new Error('Failed to fetch products');
    }
  }
}

module.exports = new ProductService();