import React, { useState, useEffect, useRef } from "react";
import { getSuperHero } from "../../services/heroes.service";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import CustomSpinner from "../../components/CustomSpinner";
import NotFoundImage from "../../components/NotFoundImage";
function SuperHero() {
  let name = '';
  const params = useRef({})
  const [data, setData] = useState(null);
  const [query, setQuery] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      console.log(query)
      if(query) {
        params.current = query
        const data = await getSuperHero(params.current);
        setIsLoading(false);
        setData(data);
      }
    };

    getData().catch(console.error);
  }, [query]);

  const superhero = data?.map((hero, index) => (
    <Card style={{ width: "18rem" }} key={index}>
      <Card.Img variant="top" src={hero.image.url} />
      <Card.Body>
        <Card.Title>{hero.name}</Card.Title>
      </Card.Body>
    </Card>
  ));

  const search = () =>  setQuery(name)

  return (
    <Container>
      <Title title="Super Hero" />
      <Row>
        <div className="d-flex justify-content-between align-items-center my-3">
          <div className="d-flex align-items-center">
            <Form.Control
              type="text"
              id="search"
              placeholder="Buscar..."
              aria-describedby="search"
              onChange={($event) => (name = $event.target.value)}
            />
            <Button variant="primary" onClick={search} className="mx-2">
              Buscar
            </Button>
          </div>
        </div>
      </Row>
      <Row>
        {isLoading ? <CustomSpinner /> : superhero}
      </Row>
      <Footer copyright="by Axel Fuhrmann 2023" />
    </Container>
  );
}

export default SuperHero;
