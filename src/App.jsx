  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import './App.css'
  import { DatePicker, Layout, Row, Col } from 'antd';
  import Navbar from './components/Navbar';
  import IconDiv from './components/IconDiv';
  import QuestionStack from './components/QuestionStack';
  import Content from './components/Content';
  import RigthSideContianer from './components/RigthSideContianer';

  function App() {
    const [count, setCount] = useState(0)
    // const { Sider, Content } = Layout;
    return (
      <>

        {/* <Row gutter={[16, 16]}>
          <Col xs={24} sm={0} md={6} lg={6} xl={5}>
            <QuestionStack></QuestionStack>
          </Col>
          <Col xs={25} sm={22} md={14} lg={17} xl={17}>
            <Content></Content>
          </Col>
          <Col xs={24} sm={2} md={4} lg={1} xl={2}>
          <RigthSideContianer>
          </RigthSideContianer>
          </Col>
        </Row> */}
        <Navbar></Navbar>
        <div style={{ display: 'flex', width: '100%' }}>
          <QuestionStack></QuestionStack>
          <Content></Content>
          <RigthSideContianer>
          </RigthSideContianer>
        </div >

      </>
    )
  }

  export default App


// import React from 'react';
// import { Layout, Menu, Typography, Button, Radio, Col, Row, Space, Divider, Badge, Avatar } from 'antd';
// import {
//   ClockCircleOutlined,
//   FileImageOutlined,
//   LogoutOutlined,
//   QuestionCircleOutlined
// } from '@ant-design/icons';

// const { Sider, Content } = Layout;
// const { Title, Text } = Typography;

// function Assessment() {
//   return (
//     <Layout style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
//       {/* Sidebar */}
//       <Sider
//         breakpoint="lg"
//         collapsedWidth="0"
//         width={280}
//         style={{ background: '#fff', borderRight: '1px solid #e6e6e6' }}
//       >
//         <div style={{ padding: '16px', textAlign: 'center', borderBottom: '1px solid #e6e6e6' }}>
//           <Avatar size={48} style={{ backgroundColor: '#1890ff', marginBottom: '8px' }}>P</Avatar>
//           <Title level={4} style={{ margin: 0 }}>NUCES Assessment</Title>
//           <Text style={{ color: '#888' }}>UX Design Test</Text>
//         </div>
//         <Divider />
//         <Menu
//           mode="inline"
//           defaultSelectedKeys={['1']}
//           style={{ height: '100%', borderRight: 0 }}
//         >
//           {Array.from({ length: 24 }, (_, i) => (
//             <Menu.Item key={i + 1} style={i === 0 ? { backgroundColor: '#f0f2f5' } : {}}>
//               <Text>Question 0{i + 1}</Text>
//             </Menu.Item>
//           ))}
//         </Menu>
//       </Sider>

//       {/* Main Content */}
//       <Layout>
//         <Content style={{ padding: '24px 16px', minWidth: '650px', margin: '0 auto' }}>
//           <Row justify="space-between" align="middle" style={{ marginBottom: '16px' }}>
//             <Button type="link" icon={<LogoutOutlined />} style={{ color: '#f5222d' }}>
//               Leave Assessment
//             </Button>
//             <Space>
//               <ClockCircleOutlined style={{ color: '#52c41a', fontSize: '18px' }} />
//               <Text style={{ color: '#52c41a', fontWeight: 'bold' }}>02:42:00</Text>
//               <Button type="primary" style={{ backgroundColor: '#d4f4dd', color: '#52c41a', border: 'none' }}>Time Left</Button>
//             </Space>
//           </Row>

//           <div style={{ backgroundColor: 'orange', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', width: '100%' }}>
//             <Space direction="vertical" size="middle" style={{ width: '100%' }}>
//               <Row justify="space-between">
//                 <Title level={5}>Question 01 / 20</Title>
//                 <Button type="link" icon={<FileImageOutlined />}>See Reference Image</Button>
//               </Row>
//               <Title level={3}>What is UX UI Design?</Title>

//               <Radio.Group style={{ width: '100%' }}>
//                 <Space direction="vertical" style={{ width: '100%' }}>
//                   <Radio value="A" style={radioStyle}>
//                     A technique to build user experience & user interface using best practices
//                   </Radio>
//                   <Radio value="B" style={radioStyle}>
//                     A technique to help developers in building design of application
//                   </Radio>
//                   <Radio value="C" style={radioStyle}>
//                     A design-specific thing not related to development purpose
//                   </Radio>
//                   <Radio value="D" style={radioStyle}>
//                     All of the above
//                   </Radio>
//                 </Space>
//               </Radio.Group>

//               <Row justify="space-between">
//                 <Button type="primary" style={{ width: '48%' }}>Save & Continue</Button>
//                 <Button style={{ width: '48%' }}>Skip for now</Button>
//               </Row>
//             </Space>
//           </div>
//         </Content>

//         {/* Right Icons Section */}
//         <div style={{ position: 'absolute', top: '50%', right: '24px', transform: 'translateY(-50%)' }}>
//           <Space direction="vertical" size="large">
//             <Badge dot>
//               <Button shape="circle" icon={<QuestionCircleOutlined />} />
//             </Badge>
//             <Badge dot>
//               <Button shape="circle" icon={<QuestionCircleOutlined />} />
//             </Badge>
//             <Badge dot>
//               <Button shape="circle" icon={<QuestionCircleOutlined />} />
//             </Badge>
//           </Space>
//         </div>
//       </Layout>
//     </Layout>
//   );
// }

// // Custom style for Radio Buttons
// const radioStyle = {
//   display: 'block',
//   width: '100%',
//   padding: '10px 16px',
//   borderRadius: '8px',
//   textAlign: 'left',
//   marginBottom: '8px',
//   border: '1px solid #e8e8e8',
//   backgroundColor: '#f7f9fc',
// };

// export default Assessment;
