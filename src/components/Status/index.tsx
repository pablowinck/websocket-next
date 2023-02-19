import React from "react";

type Props = {
  state: number;
};

const Status: React.FC<Props> = ({ state }) => {
  const stateColors: { [key: number]: string } = {
    0: "green",
    1: "green",
    2: "yellow",
    3: "red",
  };
  return (
    <div
      style={{
        backgroundColor: stateColors[state],
        width: "1.5rem",
        height: "1.5rem",
        borderRadius: "50%",
      }}
    />
  );
};

export default Status;
