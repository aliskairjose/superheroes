import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";

function RickMortyCard({ personaje }) {
  return (
    <Card style={{ width: "18rem" }} className="m-2 p-0">
      <Card.Img variant="top" src={personaje.image} />
      <Card.Body>
        <Card.Title>{personaje.name}</Card.Title>
        <Card.Text>
        {personaje.status} - {personaje.species}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Origen: {personaje.origin.name}</ListGroup.Item>
        <ListGroup.Item>Ubicación: {personaje.location.name}</ListGroup.Item>
        <ListGroup.Item>Episodios: {personaje.episode.length}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default RickMortyCard;
