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
      images: null, 
      whichAnimal: "cats"
    }
    console.log(this.state)
  }  

  pickAnimal = (animal) => {
    this.setState( prevState => {
      return {
        whichAnimal: prevState.whichAnimal = animal
      }
    }, () => console.log(this.state.whichAnimal));  
  }

  generateImage = (imageArrayData,key) => 'http://farm' + imageArrayData[key].farm + 'staticflickr.com/' + imageArrayData[key].server + '/' + imageArrayData[key].photo_id + '_' + imageArrayData[key].secret + '.jpg';
 
  componentDidMount(){
    fetch('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + apiKey + '&tags=' + this.whichAnimal + '&format=json&nojsoncallback=1')
    .then(response => response.json())
    .then(photoData => {
      this.setState({ images: photoData.photos.photo})
    })
    .catch(error => {
      console.log('Error fetching data', error);
    });
  }

  render() {
    console.log(this.state.images)
    return (
        <div className="App">
          <header className="App-header">
            <Nav clickEvent={this.pickAnimal} /> 
          </header>
          <ul>
            <Photo imageUrl={this.state.images.photos} />
          </ul>
        </div>  
    );
  }
}

export default App;
