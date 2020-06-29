import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

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
      image: "https://via.placeholder.com/150", 
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

  render() {

    return (
      <BrowserRouter> 
        <div className="App">
          <header className="App-header">
            <input type="search" id="site-search" name="q" aria-label="Search through site content"></input>
              <Link to="/search">Search</Link>
            <Nav clickEvent={this.pickAnimal} /> 
          </header>
          <ul>
            <Photo imageUrl={this.state.image} />
          </ul>
        </div>  
      </BrowserRouter> 
    );
  }
}

export default App;
