import React from 'react';
import { Typography } from 'antd';
import { FireOutlined, MenuOutlined } from '@ant-design/icons';
import './Section.css';

const { Title } = Typography;

const icons = {
  fire: <FireOutlined />,
  menu: <MenuOutlined />
};

const Section = ({ title, icon, children }) => (
  <div className="section">
    <Title level={4} className="section-title">
      {icons[icon]} {title}
    </Title>
    {children}
  </div>
);

export default Section;