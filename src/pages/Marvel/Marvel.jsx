import React, { useRef } from "react";
import { getMarvelCharacter } from "../../services/marvel.service";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer";
import NotFoundImage from "../../components/NotFoundImage";
import Title from "../../components/Title";
import CustomSpinner from "../../components/CustomSpinner";
import CustomPagination from "../../components/CustomPagination";
import MarverCard from "../../components/MarvelComponents/MarverCard";

function Marvel() {
  const OFFSET = 20;
  let _params = { offset: 0 };

  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [params, setParams] = useState(_params);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMarvelCharacter(params);
      setResponse(response);
      setIsLoading(false);
    };

    fetchData().catch(console.error);
  }, [params]);

  const personajes = response?.results.map((personaje, index) => (
    <MarverCard personaje={personaje} key={index} />
  ));

  const handleAction = (e) => {
    // const pageCount = Math.ceil(response.total / response.limit);
    // console.log(pageCount)
    e === "prev"
      ? (_params.offset = OFFSET - params.offset)
      : (_params.offset = OFFSET + params.offset);
    setIsLoading(true);
    setParams(_params);
  };


  return (
    <Container>
      <Title title="Marvel Characters" />
      <div className="text-end mb-2">
        Comics: <label className="h4">{response?.total || 0}</label>
      </div>
      <Row className="justify-content-between">
        {isLoading ? <CustomSpinner /> : personajes ?? <NotFoundImage />}
      </Row>
      <CustomPagination onPreNextPage={handleAction} />
      <Footer copyright="Data provided by Marvel. © 2023 MARVEL" />
    </Container>
  );
}

export default Marvel;
