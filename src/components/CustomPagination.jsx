import React, { useRef } from "react";
import { Row } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";

function CustomPagination({ onPreNextPage }) {
  let items = [];
  const active = useRef(1);
  const onPageSelect = (e) => {
    e.preventDefault();
    const page = e.target.text;
    active.current = +page
  }

  const handleAction = (e, type) => {
    e.preventDefault()
    type === "next" ? active.current++ : active.current--;
    onPreNextPage(type)
  };

  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active.current} onClick={onPageSelect}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Row>
      <div className="d-flex justify-content-end">
        <Pagination>
          {/* <Pagination.First /> */}
          <Pagination.Prev onClick={($event) => handleAction($event, "prev")} >Anterior</Pagination.Prev>
          {/* <Pagination.Item>{1}</Pagination.Item> */}
          {/* <Pagination.Ellipsis /> */}
          {items}
          {/* <Pagination.Ellipsis /> */}
          {/* <Pagination.Item>{20}</Pagination.Item> */}
          <Pagination.Next onClick={($event) => handleAction($event, "next")} >Siguiente</Pagination.Next>
          {/* <Pagination.Last /> */}
        </Pagination>
      </div>
    </Row>
  );
}

export default CustomPagination;
