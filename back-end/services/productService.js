import Product from '../models/product.js';

class ProductService {
  async getProductsByVideoId(videoId) {
    try {
      return await Product.find({ videoId }, 'link title price');
    } catch (err) {
      throw new Error('Failed to fetch products');
    }
  }
}

export default new ProductService();
