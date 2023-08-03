import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../../services/rickMorty.service";
import { Col, Container, Image, Row } from "react-bootstrap";
import Footer from "../../components/Footer";
import CustomSpinner from "../../components/CustomSpinner";
import Moment from "react-moment";

function RMPersonajeDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await getById(id);
      setData(response);
      setIsLoading(false);
    };
    getData().catch(console.error);
  }, []);

  const status = data?.status==='Alive' ? <span className="alive" /> : <span className="dead" /> 

  return (
    <>
      {isLoading ? (
        <CustomSpinner />
      ) : (
        <Container className="mt-5">
          <Row>
            <Col sm={4}>
              <Image
                src={data?.image}
                alt={data?.name}
                rounded
                className="w-100 shadow-sm"
              />
            </Col>
            <Col sm={6}>
              <h2 className="mb-5">{data?.name}</h2>
              <Row>
                <Col sm={6}>
                  <p className="text-light-emphasis fs-5 container-character">Status: {data?.status} <span className="alive" /></p>
                  <p className="text-light-emphasis fs-5">Gender: {data?.gender}</p>
                  <p className="text-light-emphasis fs-5">Specie: {data?.species}</p>
                  <p className="text-light-emphasis fs-5">Origen: {data?.origin.name}</p>
                  <p className="text-light-emphasis fs-5">Type: {data?.type}</p>
                </Col>
                <Col sm={6}>
                  <p className="text-light-emphasis fs-5">Location: {data?.location.name}</p>
                  <p className="text-light-emphasis fs-5">Episodes: {data?.episode.length}</p>
                  <p className="text-light-emphasis fs-5">Created at: <Moment format="LL">{data?.created}</Moment></p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Footer copyright="by Axel Fuhrmann 2023" />
        </Container>
      )}
    </>
  );
}

export default RMPersonajeDetail;
