import React from 'react';
import { Row, Col, Badge, Button, Space } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import IconDiv from './IconDiv'
const App = () => {
  return (
    <div className={'rightSideContainer'}>
      <Row gutter={16}>
        <Col xs={0} sm={0} md={0} lg={24} xl={24}>
          <Space direction="vertical" size="large">
            <Badge dot>
              <IconDiv shape="circle" icon={<QuestionCircleOutlined />} />
            </Badge>
            <Badge dot>
              <IconDiv shape="circle" icon={<QuestionCircleOutlined />} />
            </Badge>
            <Badge dot>
              <IconDiv shape="circle" icon={<QuestionCircleOutlined />} />
            </Badge>
          </Space>
        </Col>

        <Col xs={24} sm={24} md={24} lg={0} xl={0}>
          <Space direction="vertical" size="large">
            <Badge dot>
              <IconDiv shape="circle" icon={<QuestionCircleOutlined />} />
            </Badge>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default App;
