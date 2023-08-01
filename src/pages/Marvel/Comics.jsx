import React from 'react'
import {useState, useEffect} from 'react'
import { getComicList } from '../../services/marvel.service';
import { Container, Row } from 'react-bootstrap';
import Title from '../../components/Title';
import CustomSpinner from '../../components/CustomSpinner';
import NotFoundImage from '../../components/NotFoundImage';
import Footer from '../../components/Footer';

function Comics() {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    const getData = async() => {
      const response = await getComicList()
      setResponse(response)
      setIsLoading(false)
    }
    getData().catch(console.error)
  }, [])

  const comics = response?.data.results.map((comic, index) => <li key={index}>{comic.id}</li>) 

  return (
    <Container>
      <Title title='Marvel Comics' />
      <Row className="justify-content-between">
        {isLoading ? <CustomSpinner /> : comics ?? <NotFoundImage />}
      </Row>
      <Footer copyright={response?.attributionText} />
    </Container>
  )
}

export default Comics