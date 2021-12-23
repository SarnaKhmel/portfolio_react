import React, { useState, useEffect } from "react";
import "./SnakeComponents/SnakeComponents.css";
import Snake from "./SnakeComponents/Snake";
import Food from "./SnakeComponents/Food";

export default function SnakeComponentsSnakeComponents() {
  const getRandomCoordinates = () => {
    let min = 1;
    let max = 98;
    let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    return [x, y];
  };
  const [food, setFood] = useState(getRandomCoordinates);

  let mas = [
    [0, 0],
    [2, 0],
  ];
  const [snakeDots, setSnakeDots] = useState([
    [0, 0],
    [2, 0],
    [4, 0],
  ]);
  const [key, setKey] = useState(false);
  const [direction, setDirection] = useState("RIGHT");
  const [speed, setSpeed] = useState(4000);

  const keyPressHandler = (e) => {
    setKey(!key);
    // eslint-disable-next-line default-case
    switch (e.keyCode) {
      case 40:
        setDirection("UP");
        break;
      case 38:
        setDirection("DOWN");
        break;
      case 37:
        setDirection("LEFT");
        break;
      case 39:
        setDirection("RIGHT");
        break;
    }
  };

  const moveSnake = () => {
    let dots = snakeDots;
    console.log(dots);
    let head = dots[dots.length - 1];
    console.log(head);
    // eslint-disable-next-line default-case
    switch (direction) {
      case "RIGHT":
        head = [head[0] + 2, head[1]];
        break;
      case "LEFT":
        head = [head[0] - 2, head[1]];
        break;
      case "UP":
        head = [head[0], head[1] + 2];
        break;
      case "DOWN":
        head = [head[0], head[1] - 2];
        break;
    }
    dots.push(head);
    dots.shift();
    setSnakeDots(dots);
  };
  useEffect(() => {
    setKey(true);
    window.addEventListener("keydown", keyPressHandler);
    moveSnake();
    return () => {
      window.removeEventListener("keydown", keyPressHandler);
    };
  }, [keyPressHandler, speed, moveSnake]);

  return (
    <div className="SnakeComponents test">
      <div className="gameArea">
        <Snake snakeDots={snakeDots} />
        <Food food={food} />
      </div>
      {/* <div className="test">hello {test + ""}</div> */}
    </div>
  );
}
