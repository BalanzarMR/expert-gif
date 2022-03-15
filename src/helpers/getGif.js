

export const getGif = async ( gif) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    gif
  )}&limit=10&api_key=1jWbnLA72qbXZVxXYfsKP6Iq8vrcwXEW`;

  const resp = await fetch(url);

  const { data } = await resp.json();

  const imagen = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return imagen;

};