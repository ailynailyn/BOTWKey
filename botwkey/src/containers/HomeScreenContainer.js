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
import treasure_gif from "../images/treasure_gif.gif";
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
          <div class="item_creatures">
            <div class="ruppee-card" onClick={clickCreatures}>
              <div class="overlay">CREATURES</div>
            </div>
          </div>
          <div class="item_monsters">
            <div class="ruppee-card" onClick={clickMonsters}>
              <div class="overlay">MONSTERS</div>
            </div>
          </div>
          <div class="item_materials">
            <div class="ruppee-card" onClick={clickMaterials}>
              <div class="overlay">MATERIALS</div>
            </div>
          </div>
          <div class="item_equipment">
            <div class="ruppee-card" onClick={clickEquipment}>
              <div class="overlay">EQUIPMENT</div>
            </div>
          </div>
          <div class="item_treasure">
            <div class="ruppee-card" onClick={clickTreasure}>
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
