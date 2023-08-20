// import React from 'react';
import AddSider from './Sider.jsx';
import AddForm from './Form.jsx';
import AddNav from './Nav.jsx';
import AddYoutube from './MainYoutube.jsx';
import { Layout, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '50px',
  color: '#fff',
  backgroundColor: '#108ee9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '30px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
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
      <Content style={{ padding: '0 50px', backgroundColor: '#7FFFD4'}}>
      <Layout hasSider>
        <Sider style={siderStyle}>
          <AddSider />
        </Sider>
        <Content style={contentStyle}>
          <AddYoutube />
        </Content>
        <Sider style={siderStyle}>
          <AddForm />
        </Sider>
      </Layout>
      </Content>
      <Footer style={footerStyle}>
        ©2023 
      </Footer>
    </Layout>
  </Space>
);
export default App;