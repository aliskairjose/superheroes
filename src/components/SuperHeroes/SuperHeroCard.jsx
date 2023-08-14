import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './SuperHeroCard.css'

export const SuperHeroCard = ({ hero }) => {
  const navigate = useNavigate();

  const goDetail = () => navigate(`./${hero.id}`);
  const onMouseEnterHandler = () => console.log('enter');
  const onMouseLeave = () => console.log('leave');
  
  return (
    <Card
      style={{ width: '18rem' }}
      className="mb-3 p-0 shadow-sm border border-2 border-secondary bg-dark text-white sp-card"
      onClick={goDetail}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeave}
    >
      <Card.Img variant="top" src={hero.image.url} />
      <Card.Body>
        <Card.Title className="text-center">{hero.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};
