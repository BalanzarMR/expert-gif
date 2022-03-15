import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";

export const useFetchGif = (gif) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGif(gif).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [gif]);

  return state;
};
