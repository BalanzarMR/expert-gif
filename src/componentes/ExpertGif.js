import React from "react";
import { useState } from "react";
import AddGif from "./AddGif";
import { GifGrid } from "./GifGrid";
const ExpertGif = () => {
  const [gifs, setGifs] = useState(["simpsons"]);
  return (
    <div>
      <h1>Expert Gif</h1>
      <AddGif setGifs={setGifs} />
      <hr />
      {gifs.map((gif) => {
        return <GifGrid key={gif} gif={gif} />;
      })}
    </div>
  );
};

export default ExpertGif;
