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
          if (context.applicationState.requestIncomplete) return <h4 className= "wrapper">Search flickr for images</h4>
          else
          return (
            <React.Fragment>
            {context.applicationState.imageData.map((image) =>  
              <Photo 
                Title= {image.title}
                key= {image.id}
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
