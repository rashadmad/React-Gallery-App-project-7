import React, { Component } from "react";
import { Consumer } from './Context';

//import components
import Photo from "./Photo";

class Gallery extends Component {
  
  render() {
    return (
      <ul>
      <Consumer>
        { context => {
          if (context.applicationState.requestFailed) return <p>loading</p>
          else 
          return (
            <React.Fragment>
            {context.applicationState.imageData.map((image,index) =>  
              <Photo 
                Title= {image.title}
                key= {index}
                data= {image}
              />)}
            </React.Fragment>
          );
        }}
      </Consumer>  
      </ul>
    )
  }
}

export default Gallery;
