import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComicDetail } from "../../services/marvel.service";
import { Col, Container, Image, Row } from "react-bootstrap";
import Moment from "react-moment";

function ComicDetail() {
  const { id } = useParams();
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getComicDetail(id);
      setResponse(response);
    };

    fetchData().catch(console.error);
  }, []);

  const comic = response?.data.results[0];
  const thumbnail = `${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`;

  const PRICE_TYPE = {
    digitalPurchasePrice: "Digital Purchase Price",
    printPrice: "Print Price",
  };

  return (
    <Container>
      <Row>
        <Col sm={4}>
          <Image
            src={thumbnail}
            alt={comic?.title}
            rounded
            className="w-100 shadow"
          />
        </Col>
        <Col sm={8}>
          <h2 className="text-muted">{comic?.title}</h2>
          <h4>{comic?.variantDescription}</h4>
          <Row>
            <Col sm={6}>
              <p className="fs-5 mb-0 mt-2">Series:</p>
              {comic?.series.name}
              <p className="fs-5 mb-0 mt-2">Creators:</p>
              <ul>
                {comic?.creators.items.map((creator, index) => (
                  <li key={index}>
                    {creator?.name} -{" "}
                    <span className="text-capitalize">{creator?.role}</span>
                  </li>
                ))}
              </ul>
            </Col>
            <Col sm={6}>
              <p className="fs-5 mb-0 mt-2">Format:</p>
              {comic?.format}
              <p className="fs-5 mb-0 mt-2">Page count:</p>

              {comic?.pageCount}
              <p className="fs-5 mb-0 mt-2">Prices:</p>
              <ul>
                {comic?.prices.map((price, i) => (
                  <li key={i}>
                    {PRICE_TYPE[price.type]}: ${price?.price}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>{comic?.description}</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ComicDetail;
