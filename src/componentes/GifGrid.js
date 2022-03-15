import React from "react";
import { useFetchGif } from "../hooks/useFetchGif";
//import { getGif } from "../helpers/getGif";
import GifGridItem from "./GifGridItem";
export const GifGrid = ({ gif }) => {
  const { data, loading } = useFetchGif(gif);

  return (
    <>
      <h3>{gif}</h3>

      <div className='cardGrid'>
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
