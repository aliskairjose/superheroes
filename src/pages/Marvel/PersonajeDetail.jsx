import React from "react";
import { Link, useParams } from "react-router-dom";
import { getCharacterDetail } from "../../services/marvel.service";
import { useState, useEffect } from "react";
import { Badge, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import Footer from "../../components/Footer";
import CustomSpinner from "../../components/CustomSpinner";
import Moment from "react-moment";

function PersonajeDetail() {
  const { id } = useParams();
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCharacterDetail(id);
      setResponse(response);
      setIsLoading(false);
    };

    fetchData().catch(console.error);
  }, []);

  const personaje = response?.data.results[0];
  const image = `${personaje?.thumbnail?.path}.${personaje?.thumbnail?.extension}`;

  return (
    <>
      {isLoading ? (
        <CustomSpinner />
      ) : (
        <Container className="mt-5">
          <Row>
            <Col sm={4}>
              <Image
                src={image}
                alt={personaje?.name}
                rounded
                className="w-100"
              />
            </Col>
            <Col sm={6}>
              <h2>{personaje?.name}</h2>
              <p>{personaje?.description}</p>
              <Moment format="LL">{personaje.modified}</Moment>
              <h4 className="mt-2">Apariciones</h4>
              <ul>
                <li>Comics: <Badge bg="primary">{personaje.comics.available}</Badge></li>
                <li>Series: <Badge bg="success">{personaje.series.available}</Badge></li>
                <li>Stories: <Badge bg="danger">{personaje.stories.available}</Badge> </li>
                <li>Events: <Badge bg="warning">{personaje.events.available}</Badge></li>
              </ul>
              {personaje.urls.map((p, index)=>(
                <Link to={p.url} key={index} className="mx-2 text-capitalize"> {p.type} </Link>
              ))}
            </Col>
          </Row>
          <Footer copyright={response?.attributionText} />
        </Container>
      )}
    </>
  );
}

export default PersonajeDetail;
