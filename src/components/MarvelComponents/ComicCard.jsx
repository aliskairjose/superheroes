import React from 'react'
import './ComicCard.css'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Moment from 'react-moment'
import { useNavigate, useParams } from 'react-router-dom'


function ComicCard({comic}) {
  const {id} = useParams
  const navigate = useNavigate()

  const image = `${comic?.thumbnail.path}.${comic?.thumbnail.extension}`

  const goDetail = () => navigate(`./${comic.id}`)
  return (
    <Container className='comic-card-container shadow-sm rounded' onClick={goDetail}>
      <Row>
        <Col sm={3} className='p-0'>
          <Image src={image} rounded className='w-100'/>
        </Col>
        <Col sm={9} className='py-1'>
          <h5 className='fs-5 text-muted'>{comic.title}</h5>
          <p>Date: <Moment format='LL'>{comic.modified}</Moment></p>
          <p>Serie: {comic.series.name}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default ComicCard