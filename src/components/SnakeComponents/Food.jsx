import React from "react";

export default function Food(props) {
  const style = {
    left: `${props.food[0]}%`,
    top: `${props.food[1]}%`,
  };

  // console.log(props);
  return <div className="snakeFood" style={style}></div>;
}
