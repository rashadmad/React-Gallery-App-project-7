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
      images: ['https://via.placeholder.com/150/0000FF/808080%20?Text=Digital.com%20C/O%20https://placeholder.com/'], 
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

  generateImage = () => {
    const generatedUrl = 'http://farm' + this.state.images[0].farm + '.staticflickr.com/' + this.state.images[0].id + '/' + this.state.images[0].id + '_' + this.state.images[0].secret + '.jpg';
    console.log(this.state.images)
    return generatedUrl
  }

  componentDidMount(){
    fetch('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + apiKey + '&tags=' + this.tag + '&perpage=24&format=json&nojsoncallback=1')
    .then(response => response.json())
    .then(photoData => {
      this.setState({ images: photoData.photos.photo})
      debugger
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
            <Photo imageUrl={this.generateImage()} />
          </ul>
        </div>  
    );
  }
}

export default App;
