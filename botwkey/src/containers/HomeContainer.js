import { React } from "react";
import BOTWNavBar from "./BOTWNavBar";
import CarouselContainer from "./CarouselContainer";
import { useHistory, useParams } from "react-router-dom";

function HomeContainer() {
  return (
    <div className="home-container">
      <BOTWNavBar />
      <CarouselContainer />
    </div>
  );
}

export default HomeContainer;
