import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

export const SuperHeroCard = ({ hero }) => {
  const navigate = useNavigate();

  const goDetail = () => navigate(`./${hero.id}`);

  return (
    <Card style={{ width: "18rem", background: 'black', color: 'white' }} className="mb-3 p-0 shadow-sm border border-1 border-primary" onClick={goDetail}>
      <Card.Img variant="top"  src={hero.image.url} />
      <Card.Body>
        <Card.Title className="text-center">{hero.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

