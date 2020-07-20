import React, { Component } from "react";

//import components
import Photo from "./Photo";

class Gallery extends Component {

  render() {
    if(this.props.applicationState.imageData === null) return (<p>asdfasdfasdf</p>)
    return ( 
          <ul>
            {
            this.props.applicationState.imageData.map(image =>  
              <Photo 
                Title= {image.title}
                key= {image.id}
                data= {image}
              />)
            }
          </ul>
    )
  }
}

export default Gallery;
