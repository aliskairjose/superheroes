import React from "react";
import { useEffect, useState, useRef } from "react";
import { getListEpisodes } from "../../services/rickMorty.service";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import NotFoundImage from "../../components/NotFoundImage";
import Title from "../../components/Title";

function Episodios() {
  const searchText = useRef({});
  const [data, setData] = useState(null);
  const [query, setQuery] = useState({});
  let busqueda = {};

  useEffect(() => {
    searchText.current = { ...query };
    const getData = async () => {
      const response = await getListEpisodes(query);
      setData(response);
    };

    getData().catch(console.error);
  }, [query]);

  const search = () => {
    Object.entries(searchText.current).length !== 0 &&
      (busqueda = { ...searchText.current, ...busqueda });

    setQuery(busqueda);
  };

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
      <Title title="Rick & Morty Episodes" />
      <Row>
        <div className="d-flex justify-content-between align-items-center my-3">
          <div className="d-flex align-items-center">
            <Form.Control
              type="text"
              id="search"
              placeholder="Buscar..."
              aria-describedby="search"
              onChange={($event) => (busqueda.query = $event.target.value)}
            />
            <Button variant="primary" onClick={search} className="mx-2">
              Buscar
            </Button>
          </div>
          <div>Episodios: <label className="h4">{data?.info.count || 0}</label> </div>
        </div>
      </Row>
      <Row>
        <div className="d-flex flex-wrap justify-content-between">
          {episodes ?? (<NotFoundImage />)}
        </div>
      </Row>
    </Container>
  );
}

export default Episodios;
