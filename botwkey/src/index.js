import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import HomeScreenContainer from "./containers/HomeScreenContainer";
import CreaturesContainer from "./containers/CreaturesContainer";
import MonstersContainer from "./containers/MonstersContainer";
import MaterialsContainer from "./containers/MaterialsContainer";
import EquipmentContainer from "./containers/EquipmentContainer";
import TreasureContainer from "./containers/TreasureContainer";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomeScreenContainer />} />
      <Route path="/carousel" element={<HomeContainer />} />
      <Route path="/creatures" element={<CreaturesContainer />} />
      <Route path="/monsters" element={<MonstersContainer />} />
      <Route path="/materials" element={<MaterialsContainer />} />
      <Route path="/equipment" element={<EquipmentContainer />} />
      <Route path="/treasure" element={<TreasureContainer />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
