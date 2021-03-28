import React from 'react';
import styled from 'styled-components';

const Searchbar = ({ handleSearch }) => {
  const handleSearchWord = (word) => {
    handleSearch(word);
  };

  return (
    <SearchInput
      type='text'
      placeholder='Search...'
      name='search'
      onChange={event => {
        handleSearchWord(event.target.value)
      }}
    />
  )
}

export default Searchbar;

const SearchInput = styled.input`
  width: 80%;
  height: 40px;
  font-size: 16px;
  padding-left: 10px;
  border-radius: 4px;
  border: 1px #ccc6c6 solid;
  outline: none;
  font-family: Arial, Helvetica, sans-serif;
  margin: 20px 0;

  &::placeholder {
    color: #858181;
  }

  @media (min-width: 667px) {
    width: 40%;
  }
  @media (min-width: 1024px) {
    width: 20%;
  }
`;