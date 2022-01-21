import React from "react";
import "./HomeScreenContainer.css";
import { Navigate, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import botwPhoto from "../images/sheikah.jpeg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import card_backside1 from "../images/equipment_ruppee.png";
import card_backside2 from "../images/materials_ruppee.png";
import card_backside3 from "../images/creatures_ruppee.png";
import card_backside4 from "../images/monsters_ruppee.png";
import card_backside5 from "../images/treasure_ruppee.png";

function HomeScreenContainer() {
  let navigate = useNavigate();

  function clickCreatures() {
    navigate("/creatures");
  }

  function clickMonsters() {
    navigate("/monsters");
  }

  function clickMaterials() {
    navigate("/materials");
  }

  function clickEquipment() {
    navigate("/equipment");
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
        <div className="cardGroupContainer">
          <div class="item">
            <div class="card" onClick={clickCreatures}>
              <img
                class="card__img"
                src={card_backside3}
                alt="Category Monsters"
              />
              <div class="overlay">CREATURES</div>
            </div>
          </div>
          <div class="item">
            <div class="card" onClick={clickMonsters}>
              <img
                class="card__img"
                src={card_backside4}
                alt="Category Monsters"
              />
              <div class="overlay">MONSTERS</div>
            </div>
          </div>
          <div class="item">
            <div class="card" onClick={clickMaterials}>
              <img
                class="card__img"
                src={card_backside2}
                alt="Category Materials"
              />
              <div class="overlay">MATERIALS</div>
            </div>
          </div>
          <div class="item">
            <div class="card" onClick={clickEquipment}>
              <img
                class="card__img"
                src={card_backside1}
                alt="Category Equipment"
              />
              <div class="overlay">EQUIPMENT</div>
            </div>
          </div>
          <div class="item">
            <div class="card" onClick={clickTreasure}>
              <img
                class="card__img"
                src={card_backside5}
                alt="Category Treasure"
              />
              <div class="overlay">TREASURE</div>
            </div>
          </div>
        </div>
        <div className="homeScreenQuote">
          <h2>Here goes quote</h2>
        </div>
      </div>
      <div className="footer">
        <h4>Contact Us</h4>
      </div>
    </div>
  );
}

export default HomeScreenContainer;
