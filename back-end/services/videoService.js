import Video from '../models/video.js';

class VideoService {
  async getAllVideos() {
    try {
      return await Video.find({}, 'videoId thumbnailUrl live title description viewers');
    } catch (err) {
      throw new Error('Failed to fetch videos');
    }
  }

  async getVideoById(videoId) {
    try {
      return await Video.findOne({ videoId }, 'videoId thumbnailUrl live title description viewers');
    } catch (err) {
      throw new Error('Failed to fetch video');
    }
  }
}

export default new VideoService();
