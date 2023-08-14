import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function MarverCard({ personaje }) {
  const navigate = useNavigate();

  const image = `${personaje.thumbnail.path}.${personaje.thumbnail.extension}`;

  const goDetail = () => navigate(`./${personaje.id}`);

  return (
    <Card style={{ width: "19rem", cursor: 'pointer' }} className="mb-3 p-0 shadow-sm border-secondary" onClick={goDetail}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="text-center">{personaje.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default MarverCard;
