import React from "react";
import { Spinner } from "react-bootstrap";

function CustomSpinner() {
  return (
    <div className="w-100 text-center mt-5">
      <Spinner animation="border" variant="primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default CustomSpinner;
