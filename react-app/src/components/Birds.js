import React, { Component } from "react";

//import components
import Gallery from "./Gallery";

class Birds extends Component {

render() {
    if (this.props.imageData === undefined) return (<p>loading</p>)
    else
        return (
            <Gallery data= {this.props.imageData} />
        );
    }
}

export default Birds;
