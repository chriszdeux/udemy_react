const API_KEY = 'BbMih5kv2IYw34cSaeWNwapaePQ1BX1o';
const API_URL = 'http://api.giphy.com/v1/gifs/random?api_key=';

const request = fetch(`${API_URL}${API_KEY}`);

request
  .then(response => response.json())
  .then(( {data} ) => {
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url

    document.body.append(img)
  })
  .catch(console.warn)
