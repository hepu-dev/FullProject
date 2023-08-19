import { useState, useEffect } from 'react';
import axios from 'axios';

const useVideoDetails = (videoId) => {
  const [videoData, setVideoData] = useState({});

  useEffect(() => {
    axios.get(`https://backend-imrz.onrender.com/api/videos/${videoId}`)
      .then(response => {
        setVideoData(response.data);
      })
      .catch(error => {
        console.error('Error fetching video data:', error);
      });
  }, [videoId]);

  return videoData;
};

export default useVideoDetails;