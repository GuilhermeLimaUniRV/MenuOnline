import React from 'react';
import { Row, Col } from 'antd';
import CategoryCard from './CategoryCard';
import './Categories.css';

const categories = [
  { id: 1, name: 'Hambúrgueres', icon: 'fire' },
  { id: 2, name: 'Massas', icon: 'menu' }
];

const Categories = () => {
  return (
    <Row gutter={[16, 16]}>
      {categories.map(category => (
        <Col xs={12} sm={12} md={8} lg={6} key={category.id}>
          <CategoryCard {...category} />
        </Col>
      ))}
    </Row>
  );
};

export default Categories;