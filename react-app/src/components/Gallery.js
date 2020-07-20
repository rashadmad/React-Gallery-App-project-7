import React, { Component } from "react";

//import components
import Photo from "./Photo";

class Gallery extends Component {

  componentDidMount(){
    this.searchApi(24,this.props.applicationState.tag);
  }

  render() {
    if(this.props.applicationState.loading) return <h3 className= "wrapper">Loading</h3>
    else
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
