import React from "react";
import BOTWNavBar from "./BOTWNavBar";
import ItemsTableContainer from "./ItemsTableContainer";

function EquipmentContainer() {
  return (
    <div className="equipment-container">
      <BOTWNavBar />
      <p> Equipment Container will go here</p>
      <ItemsTableContainer />
    </div>
  );
}

export default EquipmentContainer;
