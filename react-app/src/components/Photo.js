import React from 'react';

const Photo = (props) => {
  return (
    <li>
      <img src={props.imageUrl} alt="placeholder" width="500" height="600"></img>
    </li>
  );
}

export default Photo;