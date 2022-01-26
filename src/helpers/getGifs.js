export const getGifs = async( brand ) => {
  const URL = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(brand) }&Offset=1&limit=8&api_key=NWUGxXJkobHK9heVqZ3AQOheKGqB61NJ`;

  const response = await fetch(URL);
  const { data } = await response.json();

  return data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }
  });
}
