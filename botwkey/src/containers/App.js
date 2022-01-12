import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../App.css";
import HomeContainer from "./HomeContainer";
import BOTWNavBar from "./BOTWNavBar";

function App() {
  return (
    <div className="App">
      <BOTWNavBar />
      <HomeContainer />
    </div>
  );
}

export default App;
