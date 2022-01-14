import React from "react";
import "./HomeScreenContainer.css";
import { Navigate, useNavigate } from "react-router-dom";

import {
  clickHome,
  clickCreatures,
  clickMaterials,
  clickMonsters,
  clickEquipment,
  clickTreasure,
} from "../Functions";

// function Redirect() {
//   return <Navigate to="/home" replace />;
// }

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
      <p>
        Ailyn is home screen. Home screen should have logo, the five
        categories/links, the quote, and the footer.
      </p>
      <div>
        <button onClick={clickHome}>Home</button>
        <button onClick={clickCarousel}>Carousel</button>
        <button onClick={clickCreatures}>Creatures</button>
        <button onClick={clickEquipment}>Equipment</button>
        <button onClick={clickMaterials}>Materials</button>
        <button onClick={clickMonsters}>Monsters</button>
        <button onClick={clickTreasure}>Treasure</button>
      </div>
    </div>
  );
}

export default HomeScreenContainer;
