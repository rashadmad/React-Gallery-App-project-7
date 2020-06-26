import React from 'react';

const Photo = (prop) => {
  return (
    <li>
      <img src={prop.imageUrl} alt="placeholder" width="500" height="600"></img>
    </li>
  );
}

export default Photo;