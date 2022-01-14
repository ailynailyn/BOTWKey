import React from "react";
import "./ItemsTableContainer.css";
import { Card, Row, Col } from "react-bootstrap";

function ItemsTableContainer(props) {
  const data = props.data;
  return (
    <div className="ItemsTableContainer">
      <Row xs={4}>
        {data.map((curItem, n) => {
          return (
            <Col>
              <Card className="tableItemCard">
                <Card.Img variant="top" src={curItem.image} />
                <Card.Body>
                  <Card.Title>{curItem.name}</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{curItem.id}</small>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default ItemsTableContainer;
