const Video = require('../models/video');

class VideoService {
  async getAllVideos() {
    try {
      return await Video.find({}, 'videoId thumbnailUrl');
    } catch (err) {
      throw new Error('Failed to fetch videos');
    }
  }
}

module.exports = new VideoService();