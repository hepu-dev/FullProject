import { Layout, Space } from 'antd';
import AddNav from '../VideoDetail/Nav.jsx';
import AddYoutubeList from './YoutubeList.jsx';
const { Header, Footer, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#F0FFFF',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#7FFFD4',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#F0FFFF',
};
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    <Layout>
      <Header style={headerStyle}>
        <AddNav />
      </Header>
      <Content style={{ padding: '30px 50px', backgroundColor: '#108ee9'}}>
      <Content style={contentStyle}>
        <AddYoutubeList />
      </Content>
      </Content>
      <Footer style={footerStyle}>
      ©2023 
    </Footer>
    </Layout>
  </Space>
);

export default App;