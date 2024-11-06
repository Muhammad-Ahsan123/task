import React from 'react';
import { Row, Col, Badge, Button, Space } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const App = () => {
  return (
    <div style={{ position: 'absolute', right: '24px', bottom: '2%' }}>
      <Row gutter={16}>
        {/* For large screens, show multiple buttons */}
        <Col xs={0} sm={0} md={0} lg={24} xl={24}>
          <Space direction="vertical" size="large">
            <Badge dot>
              <Button shape="circle" icon={<QuestionCircleOutlined />} />
            </Badge>
            <Badge dot>
              <Button shape="circle" icon={<QuestionCircleOutlined />} />
            </Badge>
            <Badge dot>
              <Button shape="circle" icon={<QuestionCircleOutlined />} />
            </Badge>
          </Space>
        </Col>

        {/* For small screens, show only one button */}
        <Col xs={24} sm={24} md={24} lg={0} xl={0}>
          <Space direction="vertical" size="large">
            <Badge dot>
              <Button shape="circle" icon={<QuestionCircleOutlined />} />
            </Badge>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default App;
