import { Card, List, Tag } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './styles/YoutubeList.css';
import useVideoData from '../../hooks/useVideosData.jsx';

const { Meta } = Card;

const YoutubeList = () => {
  const videoData = useVideoData();

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3,
      }}
      dataSource={videoData}
      renderItem={item => (
        <List.Item>
          <Link to={`/detail/${item.videoId}`}>
            <Card
              hoverable
              cover={<img alt={item.title} src={item.thumbnailUrl} />}
            >
              {item.live ? (
                <Tag className="live-tag" color="#f50">
                  LIVE
                </Tag>
              ) : null}
              <Tag className="viewers-tag" icon={<PlayCircleOutlined />} color="grey">
                {`${item.viewers} Viewers`}
              </Tag>
              <Meta title={item.title} description={item.description} style={{ lineHeight: '14px' }} />
            </Card>
          </Link>
        </List.Item>
      )}
    />
  );
};

export default YoutubeList;
