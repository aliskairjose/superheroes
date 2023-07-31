import React from 'react'
import { Row } from 'react-bootstrap'

function Footer({copyright}) {
  return (
    <Row>
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        {copyright}
      </div>
    </footer>
  </Row>
  )
}

export default Footer