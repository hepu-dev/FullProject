import VideoService from "../services/videoService.js";

class VideoController {
  async getVideoList(req, res, next) {
    try {
      const videos = await VideoService.getAllVideos();
      res.json(videos);
    } catch (err) {
      next(err);
    }
  }

  async getVideo(req, res, next) {
    const { videoId } = req.params;
    try {
      const video = await VideoService.getVideoById(videoId);
      res.json(video);
    } catch (err) {
      next(err);
    }
  }
}

export default new VideoController();
