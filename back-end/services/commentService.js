const Comment = require("../models/comment");

class CommentService {
  async getCommentsByVideoId(videoId) {
    try {
      return await Comment.find({ videoId }, "username comment timestamp");
    } catch (err) {
      throw new Error("Failed to fetch comments");
    }
  }

  async addComment(username, comment, videoId) {
    try {
      return await Comment.create({ username, comment, videoId });
    } catch (err) {
      throw new Error("Failed to add comment");
    }
  }
}

module.exports = new CommentService();
