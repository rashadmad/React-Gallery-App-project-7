import React, { Component } from 'react';
//todo: fix warning | `key` is not a prop.


class Photo extends Component {
//creates a url from the request
generateUrl = (arrayItem) => {
    //example generated url: https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg  
    return 'https://farm' + arrayItem.farm + '.staticflickr.com/' + arrayItem.server + '/' + arrayItem.id + '_' + arrayItem.secret + '.jpg'
    } 
    
    render() {
        return (
            <li key={this.props.key}>
                <img title={this.props.Title}src={this.generateUrl(this.props.data)} alt={this.props.Title + " image"} width="450" height="250"></img>
            </li>
        );
    }    
}

export default Photo;