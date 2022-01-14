import React from "react";
import BOTWNavBar from "./BOTWNavBar";
import ItemsTableContainer from "./ItemsTableContainer";
import CategoryTitle from "../components/CategoryTitle";
import { data } from "../Data";

function EquipmentContainer() {
  return (
    <div className="equipment-container">
      <BOTWNavBar />
      <CategoryTitle category="Equipment" />
      <ItemsTableContainer data={data.equipment} />
    </div>
  );
}

export default EquipmentContainer;
