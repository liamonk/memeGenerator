import React from "react";
import data from "../memesData.js";

export default function () {
  function getRandomMemeImageUrl() {
    return console.log(
      data.data.memes[Math.floor(Math.random() * data.data.memes.length)].url
    );
  }
  return (
    <>
      <div className="inputs">
        <input
          type="text"
          className="inputs--input"
          placeholder="Top Text"
        ></input>
        <input
          type="text"
          className="inputs--input"
          placeholder="Bottom Text"
        ></input>
      </div>
      <div className="button--container">
        <button onClick={getRandomMemeImageUrl}>Get a new meme image!</button>
      </div>
    </>
  );
}
