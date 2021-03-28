import React, {useState} from 'react';
import styled from 'styled-components';

const Searchbar = ({ handleSearch }) => {

  const [word, setWord] = useState('');

  const handleSearchedTerm = (event) => {
    event.preventDefault();
    handleSearch(word);
  };

  return (
      <SearchForm>
        <SearchInput
          type='text'
          placeholder='Search...'
          onChange={event => setWord(event.target.value)}
        />
        <SearchButton
          type='submit'
          onClick={handleSearchedTerm}
        >
          Search
        </SearchButton>
      </SearchForm>
  )
}

export default Searchbar;


// STYLING --------------------------------------------------------
const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #573280;

  @media (min-width: 667px) {
    justify-content: flex-start;
    padding-left: 50px;
  } 
`;

const SearchInput = styled.input`
  width: 60%;
  margin: 20px 0;
  height: 40px;
  font-size: 16px;
  padding-left: 10px;
  border-radius: 4px 0 0 4px;
  border: 1px #ccc6c6 solid;
  outline: none;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  
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
  width: 20%;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
  background: #ADA8B6;
  /* border: none; */
  border: 1px #ccc6c6 solid;
  border-left: none;
  border-radius: 0 4px 4px 0;
  outline: none;

  &:hover {
    background: #CECFC7;
  }

  @media (min-width: 667px) {
    width: 10%;
  }
  @media (min-width: 1024px) {
    width: 100px;
  }
`;