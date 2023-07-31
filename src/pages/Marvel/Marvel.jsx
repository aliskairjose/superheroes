import React from "react";
import { getMarvelCharacter } from "../../services/marvel.service";
import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import MarverCard from "../../components/MarverCard";
import Footer from "../../components/Footer";
import NotFoundImage from "../../components/NotFoundImage";
import Title from "../../components/Title";
import CustomSpinner from "../../components/CustomSpinner";

function Marvel() {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMarvelCharacter({});
      setResponse(response);
      setIsLoading(false);
    };

    fetchData().catch(console.error);
  }, []);

  const personajes = response?.data.results.map((personaje, index) => (
    <MarverCard personaje={personaje} key={index} />
  ));

  return (
    <Container>
      <Title title="Marvel Characters" />
      <Row className="justify-content-between">
        {isLoading ? <CustomSpinner /> : personajes ?? <NotFoundImage />}
      </Row>
      <Footer copyright={response?.attributionText} />
    </Container>
  );
}

export default Marvel;
