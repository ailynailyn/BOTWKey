import React from "react";

const TabButton = ({
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width,
  backgroundImg,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
        background: "url(" + backgroundImg + ") no-repeat",
      }}
    >
      {children}
    </button>
  );
};

export default TabButton;
