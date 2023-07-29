import React from "react";
import { useState } from "react";
import { useGetCharacter } from "../services/useRickMorty.service";
import RickMortyCard from "../components/RickMortyCard";
import { Container, Row } from "react-bootstrap";
function RickMorty() {
  const { data: personajes } = useGetCharacter();

  return (
    <Container>
      <Row>
        {personajes?.map((personaje) => (
          <RickMortyCard personaje={personaje} />
        ))}
      </Row>
    </Container>
  );
}

export default RickMorty;
