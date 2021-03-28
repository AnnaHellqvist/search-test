import React from 'react';

const Searchbar = ({ handleSearch }) => {
  const handleSearchWord = (word) => {
    handleSearch(word);
  };

  return (
    <input
      type='text'
      placeholder='Search...'
      name='search'
      onChange={event => {
        handleSearchWord(event.target.value)
      }}
    ></input>
  )
}

export default Searchbar;