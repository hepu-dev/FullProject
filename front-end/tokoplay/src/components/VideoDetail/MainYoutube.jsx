import { useParams } from 'react-router-dom';
import useVideoDetails from '../../hooks/useVideoDetail.jsx';

const MainYoutube = () => {
  const { videoId } = useParams();
  const videoData = useVideoDetails(videoId);

  return (
    <div>
      <div style={{ margin: '0 30px 0 30px' }}>
        <h2>{videoData.title}</h2>
        <iframe
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/${videoData.videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>
    </div>
  );
};

export default MainYoutube;
