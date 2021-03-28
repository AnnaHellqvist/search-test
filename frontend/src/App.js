import React, { useState, useEffect } from 'react';

import Searchbar from './Components/Searchbar';

const App = () => {
  const [imageList, setImageList] = useState([]);

  const API_URL = `http://localhost:3000/api?s=${searchTerm}`;
  
  return (
    <div className="App">
      <Searchbar />
    </div>
  );
}

export default App;
