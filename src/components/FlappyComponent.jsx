import React, { useState, useEffect, useRef } from "react";
import "./FlappyComponents/FlappyComponents.css";
import back from "./bird.png";
export default function GameComponent() {
  const [imageBG, setImageBG] = useState(null);
  const [imageBird, setImageBird] = useState(null);

  const canvas = useRef(null);
  useEffect(() => {
    const backImage = new Image();
    //backImage.src = "https://opengameart.org/sites/default/files/bg_5.png";
    backImage.src = "bird.png";
    backImage.src = { back };

    backImage.onload = () => setImageBG(backImage);
    console.log(backImage);
  }, []);

  // useEffect(() => {
  //   const birdImage = new Image();
  //   birdImage.path = "./bird.png";
  //   birdImage.onload = () => setImageBird(birdImage);
  // }, []);

  useEffect(() => {
    if (imageBG && canvas) {
      const ctx = canvas.current.getContext("2d");
      console.log(imageBird);
      ctx.drawImage(imageBG, 0, 0);
      ctx.drawImage(imageBird, 10, 150);

      ctx.font = "25px comic Sans MS";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
    }
  }, []);

  return (
    <div className="game-container">
      <p>GameComponent</p>
      <div>
        <canvas ref={canvas} width={256} height={512} />
        <img src="./back.png" alt="Back" />
        <img src={back} alt="Back" />
      </div>
    </div>
  );
}
