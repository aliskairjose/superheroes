import React from "react";
import { useEffect, useState } from "react";
import { getListEpisodes } from "../../services/rickMorty.service";
import { Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Moment from "react-moment";

function Episodios() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await getListEpisodes();
      console.log(response);
      setData(response);
    };

    getData().catch(console.error);
  }, []);

  // Listado de episodios
  const episodes = data?.results.map((episode, index) => (
    <Card style={{ width: "25rem" }} className="mb-3" key={index}>
      <Card.Body>
        <Card.Title>{episode.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Episodio: {episode.episode}
        </Card.Subtitle>
        <Card.Text>
          <p>
            {" "}
            Transmitido: {episode.air_date} <br />
            Creado el: <Moment format="LL">{episode.created}</Moment>
          </p>
        </Card.Text>
        <Card.Link as={Link} to="https://rickandmortyapi.com/api/episode/1">
          Episode Link
        </Card.Link>
      </Card.Body>
    </Card>
  ));

  return (
    <Container>
      <Row className="text-center">
        <h1 className="my-3">Rick & Morty Episodes</h1>
      </Row>
      <Row>
        <div className="d-flex flex-wrap justify-content-between">
          {episodes}
        </div>
      </Row>
    </Container>
  );
}

export default Episodios;
