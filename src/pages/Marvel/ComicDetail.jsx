import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getComicDetail } from '../../services/marvel.service';
import { Col, Container, Image, Row } from 'react-bootstrap';

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
  const image = `${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`;
  

  return (
    <Container>
      <Row>
        <Col sm={4}>
          <Image src={image} alt={comic?.title} className='rounded w-100' />
        </Col>
        <Col sm={6}>
          <h2 className='text-muted'>{comic?.title}</h2>
          <p>{comic?.description}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default ComicDetail