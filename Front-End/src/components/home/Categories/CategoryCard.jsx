import React from 'react';
import { Card, Typography } from 'antd';
import { FireOutlined, MenuOutlined } from '@ant-design/icons';
import './Categories.css';

const { Text } = Typography;

const icons = {
  fire: <FireOutlined />,
  menu: <MenuOutlined />
};

const CategoryCard = ({ name, icon }) => (
  <Card hoverable className="category-card">
    <div style={{ textAlign: 'center' }}>
      <div className="category-icon">{icons[icon]}</div>
      <Text strong>{name}</Text>
    </div>
  </Card>
);

export default CategoryCard;