import React, { useEffect, useRef, useState } from "react";
import { getListCharacter } from "../services/rickMorty.service";
import RickMortyCard from "../components/RickMortyCard";
import { Button, Container, Form, Row } from "react-bootstrap";
import Footer from "../components/Footer";

function RickMorty() {
  const searchText = useRef({});
  const [data, setData] = useState(null);
  const [query, setQuery] = useState({});

  let busqueda = {};

  useEffect(() => {
    searchText.current = { ...query };
    const fetchData = async () => {
      const response = await getListCharacter(query);
      setData(response);
    };

    fetchData().catch(console.error);
  }, [query]);

  const search = () => {
    if (Object.entries(searchText.current).length !== 0) {
      busqueda = { ...searchText.current, ...busqueda };
    }

    setQuery(busqueda);
  };

  const onInputChange = (name) => (busqueda.name = name);
  const onGenderSelect = (gender) => (busqueda.gender = gender);
  const onStatusSelect = (status) => (busqueda.status = status);

  const listaPersonajes = data?.results?.map((personaje, index) => (
    <RickMortyCard key={index} personaje={personaje} />
  ));

  return (
    <Container>
      <Row className="text-center">
        <h1 className="mt-2">Rick & Morty</h1>
      </Row>
      <Row>
        <div className="d-flex align-items-center w-50 my-3">
          <Form.Control
            type="text"
            id="search"
            placeholder="Ingrese nombre"
            aria-describedby="search"
            className="mx-2"
            onChange={($event) => onInputChange($event.target.value)}
          />
          <Form.Select
            aria-label="Default select example"
            className="mx-2"
            onChange={($event) => onGenderSelect($event.target.value)}
          >
            <option value=''>Seleccione Género</option>
            <option value="male">Maculino</option>
            <option value="female">Femenino</option>
            <option value="genderless">Sin género</option>
            <option value="unknown">Desconocido</option>
          </Form.Select>
          <Form.Select
            aria-label="Default select example"
            className="mx-2"
            onChange={($event) => onStatusSelect($event.target.value)}
          >
            <option  value=''>Seleccione Estatus</option>
            <option value="alive">Vivo</option>
            <option value="dead">Muerto</option>
            <option value="unknown">Desconocido</option>
          </Form.Select>
          <Button variant="primary" onClick={search}>
            Buscar
          </Button>
        </div>
      </Row>
      <Row className="justify-content-between">{listaPersonajes}</Row>
      <Footer copyright="by Axel Fuhrmann 2023" />
    </Container>
  );
}

export default RickMorty;
