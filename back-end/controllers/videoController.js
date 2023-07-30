const { getAllVideos } = require("../services/videoService");

class VideoController {
  async getVideoList(req, res, next) {
    try {
      const videos = await getAllVideos();
      res.json(videos);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new VideoController();
