import React from 'react';
import styled from 'styled-components';

const List = ({images}) => {
  return (
    <ImageContainer>
      {images.map(image => {
        return (
          <StyledImage
            key={image.url}
            src={image.url}
          />
        )
      })}
    </ImageContainer>
  )
};

export default List;

const StyledImage = styled.img`
  width: 80%;
  margin: 10px 0;

  @media (min-width: 667px) {
    width: auto;
    height: 100px;
    margin: 10px 5px;
  }
  @media (min-width: 1024px) {
    height: 150px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 667px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 20px;
    justify-content: space-between;
  }
`;