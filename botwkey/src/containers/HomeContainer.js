import React from "react";
import BOTWNavBar from "./BOTWNavBar";
import CarouselContainer from "./CarouselContainer";

function HomeContainer(props) {
  let itemId = this.props.match.params.id;

  return (
    <div className="home-container">
      <BOTWNavBar />
      <CarouselContainer itemId={itemId} data={props.data} />
    </div>
  );
}

export default HomeContainer;
