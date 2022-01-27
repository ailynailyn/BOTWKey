import React from "react";
import BOTWNavBar from "./BOTWNavBar";
import ItemsTableContainer from "./ItemsTableContainer";
import CategoryTitle from "../components/CategoryTitle";
import { data } from "../Data";

function MaterialsContainer() {
  return (
    <div className="materials-container">
      <BOTWNavBar />
      <CategoryTitle category="Materials" />
      <ItemsTableContainer data={data.materials} />
    <div className="footer">
      <h4>Contact Us</h4>
    </div>
    </div>
  );
}

export default MaterialsContainer;
