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
// import "./Global";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomeScreenContainer />} />
      <Route path="/homeContainer" element={<HomeContainer />} />
      <Route path="/creatures" element={<CreaturesContainer />} />
      <Route
        path="/creatures/:id"
        element={<HomeContainer data={data.creatures} />}
      />
      <Route path="/monsters" element={<MonstersContainer />} />
      <Route
        path="/monsters/:id"
        element={<HomeContainer data={data.monsters} />}
      />
      <Route path="/materials" element={<MaterialsContainer />} />
      <Route
        path="/materials/:id"
        element={<HomeContainer data={data.materials} />}
      />
      <Route path="/equipment" element={<EquipmentContainer />} />
      <Route
        path="/equipment/:id"
        element={<HomeContainer data={data.equipment} />}
      />
      <Route path="/treasure" element={<TreasureContainer />} />
      <Route
        path="/treasure/:id"
        element={<HomeContainer data={data.treasure} />}
      />
    </Routes>
  </Router>,

  document.getElementById("root")
);
