import React from "react";
import { useState, useEffect } from "react";
import { getComicList } from "../../services/marvel.service";
import { Container, Row } from "react-bootstrap";
import Title from "../../components/Title";
import CustomSpinner from "../../components/CustomSpinner";
import NotFoundImage from "../../components/NotFoundImage";
import Footer from "../../components/Footer";
import ComicCard from "../../components/MarvelComponents/ComicCard";
import CustomPagination from "../../components/CustomPagination";

function Comics() {
  const OFFSET = 20;
  let _params = { offset: 0 };

  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [params, setParams] = useState(_params);

  useEffect(() => {
    const getData = async () => {
      const response = await getComicList(params);
      setResponse(response);
      setIsLoading(false);
    };
    getData().catch(console.error);
  }, [params]);

  const handleAction = (e) => {
    e === "prev"
      ? (_params.offset = OFFSET - params.offset)
      : (_params.offset = OFFSET + params.offset);
    setIsLoading(true);
    setParams(_params);
  };

  const comics = response?.results.map((comic, index) => (
    <ComicCard comic={comic} key={index} />
  ));

  return (
    <Container>
      <Title title="Marvel Comics" />
      <div className="text-end mb-2">
        Comics: <label className="h4">{response?.total || 0}</label>
      </div>
      <Row className="justify-content-between">
        {isLoading ? <CustomSpinner /> : comics ?? <NotFoundImage />}
      </Row>
      <CustomPagination onPreNextPage={handleAction} />
      <Footer copyright="Data provided by Marvel. © 2023 MARVEL" />
    </Container>
  );
}

export default Comics;
