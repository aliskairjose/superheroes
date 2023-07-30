import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function MarverCard({ personaje }) {
  const navigate = useNavigate();

  const image = `${personaje.thumbnail.path}.${personaje.thumbnail.extension}`;

  const goDetail = () => navigate(`./${personaje.id}`);

  return (
    <Card style={{ width: "18rem" }} className="m-2 p-0" onClick={goDetail}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{personaje.name}</Card.Title>
        <Card.Text>{personaje.description}</Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      {/* <ListGroup className="list-group-flush">
        <ListGroup.Item>Comics: {personaje.comics.available}</ListGroup.Item>
        <ListGroup.Item>Series: {personaje.series.available}</ListGroup.Item>
        <ListGroup.Item>Stories: {personaje.stories.available}</ListGroup.Item>
        <ListGroup.Item>Events: {personaje.events.available}</ListGroup.Item>
      </ListGroup> */}
    </Card>
  );
}

export default MarverCard;
