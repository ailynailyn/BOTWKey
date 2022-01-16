import { React } from "react";
import BOTWNavBar from "./BOTWNavBar";
import CarouselContainer from "./CarouselContainer";
import { useHistory, useParams } from "react-router-dom";

function HomeContainer() {
  const { itemId } = useParams();

  return (
    <div className="home-container">
      <BOTWNavBar />

      <CarouselContainer itemId={itemId} />
    </div>
  );
}

export default HomeContainer;
