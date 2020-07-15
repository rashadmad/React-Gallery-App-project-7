import React, { Component } from "react";

//import components
import Gallery from "./Gallery";

class Birds extends Component {

render() {
        return (
            <Gallery data= {this.props.imageData} />
        );
    }
}

export default Birds;
