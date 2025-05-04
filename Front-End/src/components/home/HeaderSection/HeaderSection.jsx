import React from 'react';
import { Row, Col, Typography } from 'antd';
import SearchBar from '../SearchBar';
import './HeaderSection.css';

const { Text } = Typography;

const HeaderSection = () => {
  return (
    <header className="home-header">
      <Row align="middle" justify="space-between">
        <Col>
          <Text strong style={{ fontSize: 20,  fontFamily: "'Roboto', sans-serif" }}>Menu/Online</Text>
        </Col>
        <Col flex="auto" style={{ padding: '0 16px' }}>
          <SearchBar />
        </Col>
      </Row>
    </header>
  );
};

export default HeaderSection;