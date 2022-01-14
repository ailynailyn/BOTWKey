import React from "react";
import "./CategoryTitle.css";

function CategoryTitle(props) {
  return (
    <div className="categoryTitle">
      <h1>{props.category}</h1>
    </div>
  );
}

export default CategoryTitle;
