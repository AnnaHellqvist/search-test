import React from 'react';

const List = ({images}) => {
  return (
    <section>
      {images.map(image => {
        return (
          <img src={image.url} />
        )
      })}
    </section>
  )
};

export default List;