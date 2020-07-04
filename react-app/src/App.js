import React, { Component } from 'react';

import './config.js';
import './App.css';

// import components
import Axios from 'axios';
import Nav from './components/Nav';
import Photo from './components/Photo';
import apiKey from './config.js';

class App extends Component {
  constructor(){
    super()
    this.state = {
      images: []
    }
  }  

  pickAnimal = (animal) => {
    this.setState( prevState => {
      return {
        tag: prevState.tag = animal
      }
    })
  }

  generateUrl = (arrayItem) => {
    //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg  
    return '//https://farm' + arrayItem.farm + '.staticflickr.com/' + arrayItem.server + '/' + arrayItem.id + '_' + arrayItem.secret + '.jpg'
  } 

  componentDidMount(){
    fetch('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + apiKey + '&per_page=24&tags=' + this.tag + '&format=json&nojsoncallback=1')
    .then(response => response.json())
    .then(listOfPhotData => {
      return listOfPhotData.photos.photo
    })
    .then(imageData => { 
      this.setState({images: imageData})
    })
    .catch(error => {
        console.log('Error fetching data', error);
    });
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">3
            <Nav clickEvent={this.tag} /> 
          </header>
          <ul>
            <Photo 
              myKey={0} 
              title={this.state.images[0].title} 
              imageSrc={this.state.generateUrl(this.state.images[0])} 
            /> 
          </ul>
        </div>  
    );
  }
}

export default App;
