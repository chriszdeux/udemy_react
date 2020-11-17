const getImage = async () => {
  const API_KEY = 'BbMih5kv2IYw34cSaeWNwapaePQ1BX1o';
  const API_URL = 'http://api.giphy.com/v1/gifs/random?api_key=';

  try {
    const response = await fetch(`${API_URL}${API_KEY}`);
    const { data } = await response.json();
    const { url } = data.images.original;
    
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img)
  } catch (error) {
    console.error(error)
  }

}

getImage();
getImage();
getImage();
getImage();