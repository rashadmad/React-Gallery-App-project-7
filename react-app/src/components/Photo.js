import React, { Component } from 'react';



class Photo extends Component {
//creates a url from the request
generateUrl = (arrayItem) => {
    //example generated url: https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg  
    return 'https://farm' + arrayItem.farm + '.staticflickr.com/' + arrayItem.server + '/' + arrayItem.id + '_' + arrayItem.secret + '.jpg'
    } 
    
    render() {
        return (
            <li>
                <img title={this.props.Title} key={this.props.Key} src={this.generateUrl(this.props.imageData)} alt={this.props.Title + " image"} width="500" height="600"></img>
            </li>
        );
    }    
}

export default Photo;