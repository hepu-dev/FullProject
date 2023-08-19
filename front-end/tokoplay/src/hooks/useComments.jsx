import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useComments = (videoId) => {
  const [comments, setComments] = useState([]);

  const fetchComments = useCallback(async () => {
    try {
      const response = await axios.get(`https://backend-imrz.onrender.com/api/comments/${videoId}`);
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  }, [videoId]);

  const sendComment = async (newComment) => {
    try {
      await axios.post('https://backend-imrz.onrender.com/api/comments', newComment);
      fetchComments(); // Fetch comments again to get the updated list
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  useEffect(() => {
    // Fetch comments initially
    fetchComments();

    // Poll for new comments every 5 seconds (adjust as needed)
    const interval = setInterval(fetchComments, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [fetchComments, videoId]);

  return { comments, sendComment };
};

export default useComments;
