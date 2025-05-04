import React from 'react';
import { Card, Typography } from 'antd';

const { Meta } = Card;

const FoodCard = ({ name, price }) => (
  <Card
    hoverable
    cover={
      <div className="food-image-placeholder">
        {/* Imagem do prato */}
      </div>
    }
  >
    <Meta
      title={name}
      description={price}
    />
  </Card>
);

export default FoodCard;