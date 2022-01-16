import React from "react";
import "./HomeScreenContainer.css";
import { Navigate, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function HomeScreenContainer() {
  let navigate = useNavigate();
  function clickHome() {
    navigate("/");
  }

  function clickCarousel() {
    navigate("/carousel");
  }

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
        <CardGroup>
          <Card onClick={clickCreatures}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Creatures</Card.Title>
            </Card.Body>
          </Card>
          <Card onClick={clickMonsters}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Monsters</Card.Title>
            </Card.Body>
          </Card>
          <Card onClick={clickMaterials}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Materials</Card.Title>
            </Card.Body>
          </Card>
          <Card onClick={clickEquipment}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Equipment</Card.Title>
            </Card.Body>
          </Card>
          <Card onClick={clickTreasure}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Treasure</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
      <div className="footer">
        <p> here goes footer</p>
      </div>
    </div>
  );
}

export default HomeScreenContainer;
