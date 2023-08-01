import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function MarverCard({ personaje }) {
  const navigate = useNavigate();

  const image = `${personaje.thumbnail.path}.${personaje.thumbnail.extension}`;

  const goDetail = () => navigate(`./${personaje.id}`);

  return (
    <Card style={{ width: "19rem", cursor: 'pointer' }} className="mb-3 p-0" onClick={goDetail}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{personaje.name}</Card.Title>
        <Card.Text>{personaje.description}</Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default MarverCard;
