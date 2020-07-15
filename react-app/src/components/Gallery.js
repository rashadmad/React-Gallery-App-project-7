import React, { Component } from "react";
import { Consumer } from './Context';

//import components
import Photo from "./Photo";

class Gallery extends Component {
  
  render() {
    return (
      <Consumer>
        { context => {
          if (context.requestFailed) return <p>loading</p>
          else 
          return (
            <React.Fragment>
            {context.imageData.map((image,index) =>  
              <Photo 
                Title= {image.title}
                key= {index}
                data= {image}
              />
            )}
            </React.Fragment>
          );
        }}
      </Consumer>  
    )
  }
}

export default Gallery;
