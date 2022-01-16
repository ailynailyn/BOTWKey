import React from "react";
import "./HomeScreenContainer.css";
import { Navigate, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import botwPhoto from "../images/sheikah.jpeg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomeScreenContainer() {
  let navigate = useNavigate();

  function clickMonsters() {
    navigate("/monsters");
  }

  function clickCreatures() {
    navigate("/creatures");
  }

  function clickEquipment() {
    navigate("/equipment");
  }

  function clickMaterials() {
    navigate("/materials");
  }

  function clickTreasure() {
    navigate("/treasure");
  }

  return (
    <div className="homeScreenContainer">
      <div className="header">
        <h1>BOTW Key</h1>
        <h4>The ultimate guide into Hyrule</h4>
      </div>
      <div className="body">
        <Row sm={3} xs={1} md={5} className="cardGroupContainer">
          {/* <CardGroup className="cardGroupContainer"> */}
          <Col>
            <div className="categoryButton" onClick={clickCreatures}>
              <p>creatures</p>
            </div>
          </Col>
          <Col>
            <div className="categoryButton" onClick={clickMonsters}>
              <p>clickMonsters</p>
            </div>
          </Col>
          <Col>
            <div className="categoryButton" onClick={clickMaterials}>
              <p>clickMaterials</p>
            </div>
          </Col>
          <Col>
            <div className="categoryButton" onClick={clickEquipment}>
              <p>clickEquipment</p>
            </div>
          </Col>
          <Col>
            <div className="categoryButton" onClick={clickTreasure}>
              <p>clickTreasure</p>
            </div>
          </Col>
          {/* </CardGroup> */}
        </Row>
      </div>
      <div className="footer">
        <p> here goes footer</p>
      </div>
    </div>
  );
}

export default HomeScreenContainer;
