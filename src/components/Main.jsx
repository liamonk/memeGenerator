import React from "react";

export default function () {
  const [allMemeImages, setAllMemeImages] = React.useState([]);
  const [memeData, setMemeData] = React.useState({
    topText: "Top text",
    bottomText: "Bottom text",
    randomImageUrl: "",
  });

  React.useEffect(() => {
    setMemeData(JSON.parse(localStorage.getItem("memes")));
  }, []);

  React.useEffect(() => {
    localStorage.setItem("memes", JSON.stringify(memeData));
  }, [memeData]);

  React.useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  function getRandomMemeImage() {
    console.log(allMemeImages);
    const memesArray = allMemeImages;
    const randomMemeIndex = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomMemeIndex].url;
    setMemeData((prevMeme) => ({ ...prevMeme, randomImageUrl: url }));
  }

  function resetForm() {
    setMemeData({
      topText: "",
      bottomText: "",
      randomImageUrl: "",
    });
  }

  function handleTextChange(event) {
    setMemeData((prevMeme) => {
      return { ...prevMeme, [event.target.name]: event.target.value };
    });
  }

  console.log(allMemeImages);

  return (
    <>
      <div className="input-headings">
        <h4>Top text</h4>
        <h4>Bottom Text</h4>
      </div>
      <div className="inputs">
        <input
          type="text"
          className="inputs--input"
          placeholder={memeData.topText}
          onChange={handleTextChange}
          name="topText"
          value={memeData.topText}
        ></input>

        <input
          type="text"
          className="inputs--input"
          placeholder={memeData.bottomText}
          onChange={handleTextChange}
          name="bottomText"
          value={memeData.bottomText}
        ></input>
      </div>
      <div className="button--container">
        <button onClick={getRandomMemeImage}>Get a new meme image!</button>
      </div>
      <div className="memeContainer">
        <img className="memeImage" src={memeData.randomImageUrl} />
        <h2 className="topText">{memeData.topText}</h2>
        <h2 className="bottomText">{memeData.bottomText}</h2>
      </div>
      <button className="resetButton" onClick={resetForm}>
        Reset the form!
      </button>
    </>
  );
}
