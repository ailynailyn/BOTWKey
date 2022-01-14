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
    </div>
  );
}

export default MonstersContainer;
