import React from "react";
import { getMarvelCharacter } from "../services/marvel.service";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import MarverCard from "../components/MarverCard";

function Marvel() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMarvelCharacter();
      setData(response.results);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <Container>
      <Row className="text-center mt-2"><h1>Marvel Characters</h1></Row>
      <Row>
        {data?.map((personaje, index) => (
          <MarverCard personaje={personaje} key={index} />
        ))}
      </Row>
    </Container>
  );
}

export default Marvel;
