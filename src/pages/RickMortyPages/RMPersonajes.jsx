import React, { useEffect, useRef, useState } from "react";
import { getList } from "../../services/rickMorty.service";
import RickMortyCard from "../../components/RMComponents/RickMortyCard";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Footer from "../../components/Footer";
import NotFoundImage from "../../components/NotFoundImage";
import Title from "../../components/Title";
import CustomSpinner from "../../components/CustomSpinner";

function RMPersonajes() {
  const searchText = useRef({});
  const [data, setData] = useState(null);
  const [query, setQuery] = useState(searchText.current);
  const [isLoading, setIsLoading] = useState(true);

  let busqueda = {};
  const genders = [
    { value: "", title: "Seleccione género" },
    { value: "male", title: "Masculino" },
    { value: "female", title: "Femenino" },
    { value: "genderless", title: "Sin género" },
    { value: "unknown", title: "Desconocido" },
  ];

  const statuses = [
    { value: "", title: "Seleccione Estatus" },
    { value: "alive", title: "Vivo" },
    { value: "dead", title: "Muerto" },
    { value: "unknown", title: "Desconocido" },
  ];

  useEffect(() => {
    searchText.current = { ...query };
    const fetchData = async () => {
      const response = await getList(query);
      setData(response);
      setIsLoading(false);
    };

    fetchData().catch(console.error);
  }, [query]);

  const search = () => {
    Object.entries(searchText.current).length !== 0 &&
      (busqueda = { ...searchText.current, ...busqueda });

    setQuery(busqueda);
  };

  const listaPersonajes = data?.results?.map((personaje, index) => (
    <RickMortyCard key={index} personaje={personaje} />
  ));

  return (
    <Container>
      <Title title="Personajes" />
      <Row>
        <div className="d-flex justify-content-between align-items-center my-3">
          <div className="d-flex align-items-center">
            <Form.Control
              type="text"
              id="search"
              placeholder="Ingrese nombre"
              aria-describedby="search"
              onChange={($event) => (busqueda.name = $event.target.value)}
            />
            <Form.Select
              aria-label="Default select example"
              className="mx-2"
              onChange={($event) => (busqueda.gender = $event.target.value)}
            >
              {genders.map((gender, index) => (
                <option key={index} value={gender.value}>
                  {gender.title}
                </option>
              ))}
            </Form.Select>
            <Form.Select
              aria-label="Default select example"
              className="mx-2"
              onChange={($event) => (busqueda.status = $event.target.value)}
            >
              {statuses.map((status, index) => (
                <option value={status.value} key={index}>
                  {status.title}
                </option>
              ))}
            </Form.Select>
            <Button variant="primary" onClick={search}>
              Buscar
            </Button>
          </div>
          <div>
            Personajes: <label className="h4">{data?.info?.count || 0}</label>{" "}
          </div>
        </div>
      </Row>
      <Row>
        <Col className="d-flex flex-wrap">
          {isLoading ? <CustomSpinner /> : listaPersonajes ?? <NotFoundImage />}
        </Col>
      </Row>
      <Footer copyright="by Axel Fuhrmann 2023" />
    </Container>
  );
}

export default RMPersonajes;
