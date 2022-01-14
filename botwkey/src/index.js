import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import HomeScreenContainer from "./containers/HomeScreenContainer";
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomeScreenContainer />} />
      <Route path="/carousel" element={<HomeContainer />} />
      <Route path="/creatures" element={<HomeContainer />} />
      <Route path="/monsters" element={<HomeContainer />} />
      <Route path="/materials" element={<HomeContainer />} />
      <Route path="/equipment" element={<HomeContainer />} />
      <Route path="/treasure" element={<HomeContainer />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
