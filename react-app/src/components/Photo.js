import React, { Component } from 'react';

class Photo extends Component {

    render() {
        return (
            <li>
                <img title={"my pic"} key={0} src={this.props.imageSrc} alt="placeholder" width="500" height="600"></img>
            </li>
        );
    }    
}

export default Photo;