import { useState } from 'react';
import { AppstoreOutlined, InstagramOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    label: (
      <a href="/" rel="noopener noreferrer">
        Home
      </a>
    ),
    key: 'home',
    icon: <AppstoreOutlined />,
  },
];
const App = () => {
  const [current, setCurrent] = useState('home');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default App;