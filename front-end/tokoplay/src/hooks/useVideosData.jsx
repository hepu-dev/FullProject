import { useState, useEffect } from 'react';
import axios from 'axios';

const useVideoData = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    axios.get('https://backend-imrz.onrender.com/api/videos')
      .then(response => {
        setVideoData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return videoData;
};

export default useVideoData;
