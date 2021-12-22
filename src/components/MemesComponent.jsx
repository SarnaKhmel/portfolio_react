import React, { useState, useEffect, useRef } from "react";
import "./MemesComponents/MemesComponents.css";
import { PlusCircleOutlined, DiffFilled } from "@ant-design/icons";

export default function MemesComponent() {
  const [image, setImage] = useState(null);
  const canvas = useRef(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  useEffect(() => {
    const catImage = new Image();
    catImage.src = "https://thiscatdoesnotexist.com/";
    catImage.onload = () => setImage(catImage);
  }, []);

  useEffect(() => {
    if (image && canvas) {
      const ctx = canvas.current.getContext("2d");
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, 600, 600);
      ctx.drawImage(image, 50, 40);

      ctx.font = "25px comic Sans MS";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";

      ctx.fillText(topText, 600 / 2, 30);
      ctx.fillText(bottomText, 600 / 2, 520 + 40 + 25);
    }
  }, [image, canvas, topText, bottomText]);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="">
      <h1>Cat Memes Generator!</h1>
      <button onClick={refreshPage}>
        New Image
        <DiffFilled />
      </button>
      <div>
        <canvas ref={canvas} width={600} height={600} />
      </div>
      <div>
        <input
          type="text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
      </div>
    </div>
  );
}
