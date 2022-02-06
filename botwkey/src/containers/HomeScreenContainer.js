import React from "react";
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
import header_bgimage from "../images/header_image.png";
import header_logoimage from "../images/homepage_title.png";
import "./HomeScreenContainer.css";

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
          <img
            class="header_logoimage"
            src={header_logoimage}
            height="400"
          />
            <h1 class="header_headline">THE ULTIMATE GUIDE TO UNLOCKING HYRULE</h1>
      </div>
      <div className="body">
        <div className="cardGroupContainer">
          <div class="item">
            <div class="ruppee-card" onClick={clickCreatures}>
              <img
                class="card__img"
                src={card_backside3}
                alt="Category Creatures"
              />
              <div class="overlay">CREATURES</div>
            </div>
          </div>
          <div class="item">
            <div class="ruppee-card" onClick={clickMonsters}>
              <img
                class="card__img"
                src={card_backside4}
                alt="Category Monsters"
              />
              <div class="overlay">MONSTERS</div>
            </div>
          </div>
          <div class="item">
            <div class="ruppee-card" onClick={clickMaterials}>
              <img
                class="card__img"
                src={card_backside2}
                alt="Category Materials"
              />
              <div class="overlay">MATERIALS</div>
            </div>
          </div>
          <div class="item">
            <div class="ruppee-card" onClick={clickEquipment}>
              <img
                class="card__img"
                src={card_backside1}
                alt="Category Equipment"
              />
              <div class="overlay">EQUIPMENT</div>
            </div>
          </div>
          <div class="item">
            <div class="ruppee-card" onClick={clickTreasure}>
              <img
                class="card__img"
                src={card_backside5}
                alt="Category Treasure"
              />
              <div class="overlay">TREASURE</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <h4>Contact Us</h4>
      </div>
    </div>
  );
}

export default HomeScreenContainer;
