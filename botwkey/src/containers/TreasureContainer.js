import React from "react";
import BOTWNavBar from "./BOTWNavBar";
import ItemsTableContainer from "./ItemsTableContainer";
import CategoryTitle from "../components/CategoryTitle";
import { data } from "../Data";

function TreasureContainer() {
  return (
    <div className="treasure-container">
      <BOTWNavBar />
      <CategoryTitle category="Treasure" />
      <ItemsTableContainer data={data.treasure} />
    </div>
  );
}

export default TreasureContainer;
