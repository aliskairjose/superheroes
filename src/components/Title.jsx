import React from "react";
import { Row } from "react-bootstrap";

function Title({title}) {
  return (
    <Row className="text-center">
      <h1>{title}</h1>
    </Row>
  );
}

export default Title;
