import React, { Component } from 'react';

import './config.js';
import './App.css';

// import components
import Nav from './components/Nav';
import Photo from './components/Photo';
import apiKey from './config.js';

class App extends Component {
  constructor(){
    super()
    this.state = {
      images: [], 
      imageUrls: [],
      tag: "cats"
    }
    console.log(this.state)
  }  

  pickAnimal = (animal) => {
    this.setState( prevState => {
      return {
        tag: prevState.tag = animal
      }
    }, () => console.log(this.state.tag));  
  }

  componentDidMount(){
    fetch('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + apiKey + '&per_page=24&tags=' + this.tag + '&format=json&nojsoncallback=1')
    .then(response => response.json())
    .then(photoData => {
      this.setState({ images: photoData.photos.photo})
      //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg  
      
      let i = 0;
      const generatedUrl = (n) => 'https://farm' + this.state.images[n].farm + '.staticflickr.com/' + this.state.images[n].server + '/' + this.state.images[n].id + '_' + this.state.images[n].secret + '.jpg';
      
      while (i < 16) { 
        this.state.imageUrls.push(generatedUrl(i));
        i++;
      }
      console.log(this.state.imageUrls)
    })
    .catch(error => {
      console.log('Error fetching data', error);
    });
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <Nav clickEvent={this.tag} /> 
          </header>
          <ul>
            <Photo imageUrl={this.state.images} />
          </ul>
        </div>  
    );
  }
}

export default App;
