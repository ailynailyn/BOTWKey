import React from "react";
import App from "./App";
import Card from "../components/Card";
import Paginator from "../components/Paginator";
import { data } from "../Data";
import "./CarouselContainer.css";

import { useState } from "react";

function CarouselContainer() {
  const [index, setIndex] = useState(0);

  const dataLength = data.creatures.length;

  const slideLeft = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(dataLength - 1);
    }
  };

  const slideRight = () => {
    if (index + 1 <= dataLength - 1) {
      // temp add creatures hardcode todo
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handlePageChange = (page) => {
    let n = page - index;
    setIndex(index + n);
  };

  const handlePointerEvent = (e) => {
    /* check which type of event we have, 
    and set a flag variable */
    let isTouchEvent = e.type === "touchstart" ? true : false;

    /* this is our card we will move */
    let card = e.target;
    /* to keep track of the value to offset the card left */
    let offset = 0;
    /* keeps the initial mouse click x value */
    let initialX = isTouchEvent ? e.touches[0].clientX : e.clientX;

    /* mouse events */
    /* set the documents onmousemove event to use this function */
    document.onmousemove = onPointerMove;
    /* sets the documents onmouseup event to use this function */
    document.onmouseup = onPointerEnd;

    /* touch events */
    /* set the documents ontouchmove to this function */
    document.ontouchmove = onPointerMove;
    /* set the documents ontouchend to this function */
    document.ontouchend = onPointerEnd;

    /* when the mouse moves we handle the event here */
    function onPointerMove(e) {
      /* set offset to the current position of the cursor,
      minus the initial starting position  */
      offset = (isTouchEvent ? e.touches[0].clientX : e.clientX) - initialX;
      if (offset <= -100) {
        slideRight();
        /* if we're at the last card, snap back to center */
        if (index === dataLength - 1) {
          // Set special case to slide from left the index 0
        }
        /* hide the shift back to center 
      until after the transition */
        setTimeout(() => {
          card.style.left = 0;
        }, 1000);
        return;
      }
      if (offset >= 100) {
        slideLeft();
        /* if we're at the first card, snap back to center */
        if (index === 0) {
          // Set special case to slide from right the index 0
        }
        /* hide the shift back to center 
      until after the transition */
        setTimeout(() => {
          card.style.left = 0;
        }, 1000);
        return;
      }
      /* set the left style property of the card to the offset value */
      card.style.left = offset + "px";
    }

    function onPointerEnd(e) {
      /* if user releases mouse early,
      card needs to snap back */
      if (offset < 0 && offset > -100) {
        card.style.left = 0;
      }
      if (offset > 0 && offset < 100) {
        card.style.left = 0;
      }
      /* remove functions from event listeners
      (stop tracking pointer movements) */
      document.onmousemove = null;
      document.onmouseup = null;

      document.ontouchmove = null;
      document.ontouchend = null;
    }
  };

  return (
    <div className="CarouselContainer">
      <div className="container">
        <div className="carousel-container">
          <Paginator
            dataLength={dataLength}
            activeIndex={index}
            handlePageChange={handlePageChange}
          />
          <div className="background-block"></div>

          {data.creatures.map((creature, n) => {
            let indexDiff = index - n;
            let leftMostIdx = 0;
            let rightMostIdx = dataLength - 1;
            let position =
              index === n
                ? "activeCard"
                : (index === leftMostIdx && n === rightMostIdx) ||
                  indexDiff === 1
                ? "prevCard"
                : (index === rightMostIdx && n === leftMostIdx) ||
                  indexDiff === -1
                ? "nextCard"
                : "hiddenCard";

            return (
              <Card
                key={n}
                handlePointerEvent={handlePointerEvent}
                {...creature}
                cardStyle={position}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CarouselContainer;
