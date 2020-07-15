import React, { Component } from "react";

//import components
import Gallery from "./Gallery";

class Birds extends Component {

render() {
        return (
            <React.Fragment>
                <h1>Birds Images</h1>
                <Gallery />
            </React.Fragment>
        );
    }
}

export default Birds;
