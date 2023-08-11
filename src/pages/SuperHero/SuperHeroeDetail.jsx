import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getSuperHeroID } from "../../services/heroes.service";
import { Col, Container, Image, Row } from "react-bootstrap";
import Title from "../../components/Title";
import "./SuperHero.css";
import CustomSpinner from "../../components/CustomSpinner";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
export const SuperHeroeDetail = () => {
  const data = {
    labels: [],
    datasets: [
      {
        label: 'Powerstats',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
  const { id } = useParams();
  const [heroe, setHeroe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [powers, setPowers] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const data = await getSuperHeroID(id);
      await getPowers(data.powerstats);
      setIsLoading(false);
      setHeroe(data);
    };

    getData().catch(console.error);
  }, []);

  const getPowers = async(powers) => {
    const labels = Object.keys(powers).map(k => k.toUpperCase())
    const values = Object.values(powers)
    data.labels = labels
    data.datasets[0].data = values
    setPowers(data)
  };

  return (
    <>
      {isLoading ? (
        <CustomSpinner />
      ) : (
        <Container>
          <Row>
            <Col sm={4} className="m-auto">
              <Image
                src={heroe?.image.url}
                alt={heroe?.name}
                rounded
                className="w-100 shadow border border-3 border-primary"
              />
              <span className="fs-5 text-muted"></span>
            </Col>
            <Col sm={8}>
              <Title title={heroe?.name} />
              <Row>
                <Col sm={6}>
                  <h4 className="text-muted">Biografía</h4>
                  <p>Nombre real: {heroe?.biography["full-name"]}</p>
                  <p>
                    Lugar de nacimiento: {heroe?.biography["place-of-birth"]}
                  </p>
                  <p>
                    Primera aparición: {heroe?.biography["first-appearance"]}
                  </p>
                  <p>Editorial: {heroe?.biography["publisher"]}</p>
                  <p>Base: {heroe?.work["base"]}</p>
                  <p>Ocupación: {heroe?.work.occupation}</p>

                  <h4 className="text-muted mt-4">Apariencia</h4>
                  <p>Género: {heroe?.appearance["gender"]}</p>
                  <p>
                    Color ojo/cabello: {heroe?.appearance["eye-color"]}-
                    {heroe?.appearance["hair-color"]}
                  </p>
                  <p>Raza: {heroe?.appearance["race"]}</p>
                  <p>Altura: {heroe?.appearance["height"][1]}</p>
                  <p>Peso: {heroe?.appearance["weight"][1]}</p>
                </Col>
                <Col sm={6}>
                  <Radar data={powers} />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>{heroe?.description}</Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
