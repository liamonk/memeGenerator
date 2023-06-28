import React from "react";

export default function () {
  return (
    <>
      <div className="inputs">
        <input className="inputs--input" placeholder="Top Text"></input>
        <input className="inputs--input" placeholder="Bottom Text"></input>
      </div>
      <div className="button--container">
        <button>Get a new meme image!</button>
      </div>
    </>
  );
}
