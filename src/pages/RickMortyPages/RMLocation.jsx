import React, { useState, useEffect, useRef } from "react";
import { getLocations } from "../../services/rickMorty.service";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import Title from "../../components/Title";
import CustomSpinner from "../../components/CustomSpinner";
import NotFoundImage from "../../components/NotFoundImage";
import Footer from "../../components/Footer";

function RMLocation() {

  const searchText = useRef({});
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState(searchText.current)
  let busqueda = {};

  useEffect(()=> {
    searchText.current = { ...query };

    const getData =  async ()=>{
      searchText.current = {...query}
      const response = await getLocations(query)
      setIsLoading(false)
      setData(response)
    }

    getData().catch(console.error)
  }, [query])

  const search = () => {
    // Object.entries(searchText.current).length !== 0 &&
    //   (busqueda = { ...searchText.current, ...busqueda });

    setQuery(busqueda);
  };

  const locations = data?.results.map((location, index)=>(
    <Card style={{ width: "25rem" }} className="mb-3 p-0 shadow-sm border-info" key={index}>
    <Card.Body>
      <Card.Title>{location.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Dimensión: {location.dimension}</Card.Subtitle>
      <Card.Text>
        Tipo: {location.type} <br/>
        Residentes: {location.residents.length}
      </Card.Text>
    </Card.Body>
  </Card>
  ))


  return (
    <Container>
      <Title title="Ubicaciones" />
      <Row>
        <div className="d-flex justify-content-between align-items-center my-3">
          <div className="d-flex align-items-center">
            <Form.Control
              type="text"
              id="name"
              placeholder="Buscar..."
              aria-describedby="search"
              onChange={($event) => (busqueda.name = $event.target.value)}
            />
            <Button variant="primary" onClick={search} className="mx-2">
              Buscar
            </Button>
          </div>
          <div>
            Ubicaciones: <label className="h4">{data?.info.count || 0}</label>{" "}
          </div>
        </div>
      </Row>
      <Row>
        <div className="d-flex flex-wrap justify-content-between">
          {isLoading ? <CustomSpinner /> : locations ?? <NotFoundImage />}
        </div>
      </Row>
      <Footer copyright="by Axel Fuhrmann 2023" />
    </Container>
  )
}

export default RMLocation;
