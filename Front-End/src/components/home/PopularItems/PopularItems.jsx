import React from 'react';
import { Row, Col } from 'antd';
import FoodCard from './FoodCard';
import './PopularItems.css';

const popularItems = [
  { id: 1, name: 'Carbonara', price: 'R$ 42' },
  { id: 2, name: 'Carbonara', price: 'R$ 42' },
  { id: 3, name: 'Pesto Rosso', price: 'R$ 42' },
  { id: 4, name: 'Amatriciana', price: 'R$ 42' }
];

const PopularItems = () => {
  return (
    <Row gutter={[16, 16]}>
      {popularItems.map(item => (
        <Col xs={12} sm={12} md={8} lg={6} key={item.id}>
          <FoodCard {...item} />
        </Col>
      ))}
    </Row>
  );
};

export default PopularItems;