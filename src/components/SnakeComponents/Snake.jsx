import React from "react";
import "./SnakeComponents.css";

export default function Snake(props) {
  return (
    <div>
      {props.snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
        };
        return <div className="snakeDot" key={i} style={style}></div>;
      })}
    </div>
  );
}
