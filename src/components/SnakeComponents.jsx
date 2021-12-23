import React, { useState } from "react";
import "./SnakeComponents/SnakeComponents.css";
import Snake from "./SnakeComponents/Snake";
import Food from "./SnakeComponents/Food";

export default function SnakeComponentsSnakeComponents() {
  const [snakeDots, setSnakeDots] = useState([
    [0, 0],
    [2, 0],
  ]);

  const [food, setFood] = useState([54, 10]);

  return (
    <div className="SnakeComponents">
      <div className="game-area">
        <Snake snakeDots={snakeDots} />
        <Food food={food} />
      </div>
    </div>
  );
}
