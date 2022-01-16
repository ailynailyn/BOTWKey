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
import CarouselContainer from "./containers/CarouselContainer";
import { data } from "./Data";
import "./Global";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomeScreenContainer />} />
      <Route path="/creatures" element={<CreaturesContainer />} />
      <Route path="/creatures/:itemId" element={<HomeContainer />} />
      <Route path="/monsters" element={<MonstersContainer />} />
      <Route path="/monsters/:itemId" element={<HomeContainer />} />
      <Route path="/materials" element={<MaterialsContainer />} />
      <Route path="/materials/:itemId" element={<HomeContainer />} />
      <Route path="/equipment" element={<EquipmentContainer />} />
      <Route path="/equipment/:itemId" element={<HomeContainer />} />
      <Route path="/treasure" element={<TreasureContainer />} />
      <Route path="/treasure/:itemId" element={<HomeContainer />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
