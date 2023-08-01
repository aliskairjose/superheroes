import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function RickMortyCard({ personaje }) {
  const navigate = useNavigate();

  const goDetail = () => navigate(`./${personaje.id}`);

  return (
    <Card style={{ width: "19rem" }} className="mb-3 p-0" onClick={goDetail}>
      <Card.Img variant="top" src={personaje.image} />
      <Card.Body>
        <Card.Title>{personaje.name}</Card.Title>
        <Card.Text>
        {personaje.status} - {personaje.species} - {personaje.gender}
        </Card.Text>
      </Card.Body>
      {/* <ListGroup className="list-group-flush">
        <ListGroup.Item>Origen: {personaje.origin.name}</ListGroup.Item>
        <ListGroup.Item>Ubicación: {personaje.location.name}</ListGroup.Item>
        <ListGroup.Item>Episodios: {personaje.episode.length}</ListGroup.Item>
      </ListGroup> */}
    </Card>
  );
}

export default RickMortyCard;
