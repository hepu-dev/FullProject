const {
  getCommentsByVideoId,
  addComment,
} = require("../services/commentService");

class CommentController {
  async getCommentList(req, res, next) {
    const { videoId } = req.params;
    try {
      const comments = await getCommentsByVideoId(videoId);
      res.json(comments);
    } catch (err) {
      next(err);
    }
  }

  async submitComment(req, res, next) {
    const { username, comment, videoId } = req.body;
    try {
      const newComment = await addComment(username, comment, videoId);
      res.json({ success: true, comment: newComment });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new CommentController();
