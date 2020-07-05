import React, { Component } from 'react';

class Photo extends Component {

    render() {
        return (
            <li>
                <img title={this.props.name} key={this.props.myKey} src={this.props.imageSrc} alt="placeholder" width="500" height="600"></img>
            </li>
        );
    }    
}

export default Photo;