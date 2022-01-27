import React from "react";
import BOTWNavBar from "./BOTWNavBar";
import ItemsTableContainer from "./ItemsTableContainer";
import CategoryTitle from "../components/CategoryTitle";
import { data } from "../Data";

function CreaturesContainer() {
  return (
    <div className="creatures-container">
      <BOTWNavBar />
      <CategoryTitle category="Creatures" />
      <ItemsTableContainer data={data.creatures} />
      <div className="footer">
        <h4>Contact Us</h4>
      </div>
    </div>
  );
}

export default CreaturesContainer;
