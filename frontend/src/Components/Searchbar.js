import React, {useState} from 'react';
import styled from 'styled-components';

const Searchbar = ({ handleSearch }) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchedTerm = (word) => {
    handleSearch(word);
  };

  return (
    <div>
      <SearchInput
        type='text'
        placeholder='Search...'
        name='search'
        onChange={event => {
          setSearchTerm(event.target.value)
        }}
      />
      <SearchButton onClick={() => handleSearchedTerm(searchTerm)}>Search</SearchButton>
    </div>
  )
}

export default Searchbar;

const SearchInput = styled.input`
  width: 80%;
  height: 40px;
  font-size: 16px;
  padding-left: 10px;
  border-radius: 4px 0 0 4px;
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

const SearchButton = styled.button`
  height: 44px;
  font-size: 16px;
  cursor: pointer;
  background: rgb(198,226,255);
  border: none;
  border-radius: 0 4px 4px 0;
  outline: none;

  &:hover {
    background: rgb(208,236,265);
  }
`;