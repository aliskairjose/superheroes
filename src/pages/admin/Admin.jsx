import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

function Admin() {
  return (
    <Container>
       <Row>
        <section>
          <Outlet></Outlet>
        </section>
      </Row>
    </Container>
  )
}

export default Admin