import React, { useState, useEffect } from 'react';

import Searchbar from './Components/Searchbar';

const App = () => {
  const [imageList, setImageList] = useState([]);
  const searchTerm = '';

  const API_URL = `http://localhost:3000/api?s=${searchTerm}`;

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(json => {
        setImageList(json);
        console.log(json);
      })
  }

  return (
    <div className="App">
      <Searchbar />
      {imageList.map(image => {
        return (
          <img src={image.url} />
        )
      })}
    </div>
  );
}

export default App;
