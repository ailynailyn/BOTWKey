import React from "react";
import "./HomeScreenContainer.css";
import { Navigate, useNavigate } from "react-router-dom";

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
        <div class="categories">
          <div class="homeScreenCard">
            <button onClick={clickCreatures}>Creatures</button>
          </div>
          <div class="homeScreenCard">
            <button onClick={clickEquipment}>Equipment</button>
          </div>
          <div class="homeScreenCard">
            <button onClick={clickMaterials}>Materials</button>
          </div>
          <div class="homeScreenCard">
            <button onClick={clickMonsters}>Monsters</button>
          </div>
          <div class="homeScreenCard">
            <button onClick={clickTreasure}>Treasure</button>
          </div>
        </div>
      </div>
      <div className="footer">
        <p> here goes footer</p>
      </div>
    </div>
  );
}

export default HomeScreenContainer;
