import React from "react";
import { getMarvelCharacter } from "../services/marvel.service";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import MarverCard from "../components/MarverCard";
import Footer from "../components/Footer";

function Marvel() {
  let cr = ''
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMarvelCharacter();
      // const {copyright, attributionHTML, data} = response;
      setResponse(response);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <Container>
      <Row className="text-center mt-2"><h1>Marvel Characters</h1></Row>
      <Row className="justify-content-between">
        {response?.data.results.map((personaje, index) => (
          <MarverCard personaje={personaje} key={index} />
        ))}
      </Row>
      <Footer copyright={response?.attributionText}/>
    </Container>
  );
}

export default Marvel;
