import React, { useState, useEffect, useRef } from "react";
import { getSuperHero } from "../../services/heroes.service";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import CustomSpinner from "../../components/CustomSpinner";
import NotFoundImage from "../../components/NotFoundImage";
import { SuperHeroCard } from "../../components/SuperHeroes/SuperHeroCard";

function SuperHero() {
  let name = "";
  const params = useRef({});
  const [data, setData] = useState(null);
  const [query, setQuery] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      if (query) {
        params.current = query;
       try {
        const data = await getSuperHero(params.current);
        setData(data);
        setIsLoading(false);
      } catch (error) { 
        setData(null);
        setIsLoading(false);
      }
    } else {
      setData(null);
      setIsLoading(false);
      }
    };

    getData().catch(console.error);
  }, [query]);

  const superhero = data ? data.map((hero, index) => (
    <SuperHeroCard hero={hero} key={index} />
  )) : (data===null ? 'Buscar': <NotFoundImage />);

  const search = () => {
    setIsLoading(true);
    setQuery(name);
  };


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
          <div className="text-end mb-2">
            Total: <label className="h4">{data?.length || 0}</label>
          </div>
        </div>
      </Row>
      <Row className="justify-content-evenly">
        {isLoading ? <CustomSpinner /> : superhero }
      </Row>
      <Footer copyright="by Axel Fuhrmann 2023" />
    </Container>
  );
}

export default SuperHero;
