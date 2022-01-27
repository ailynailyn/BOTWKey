import React from "react";
import BOTWNavBar from "./BOTWNavBar";
import ItemsTableContainer from "./ItemsTableContainer";
import CategoryTitle from "../components/CategoryTitle";
import { data } from "../Data";

function MonstersContainer() {
  return (
    <div className="monsters-container">
      <BOTWNavBar />
      <CategoryTitle category="Monsters" />
      <ItemsTableContainer data={data.monsters} />
      <div className="footer">
        <h4>Contact Us</h4>
      </div>
    </div>
  );
}

export default MonstersContainer;
