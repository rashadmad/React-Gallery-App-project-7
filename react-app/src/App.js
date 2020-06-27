import React, { Component } from 'react';
import './App.css';

// import components
import Nav from './components/Nav';
import Photo from './components/Photo';

class App extends React.Component {

  state = {
    whichAnimal: "cat",
    image: "https://via.placeholder.com/150"
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav whichAnimal={this.state.whichAnimal} /> 
        </header>
        <ul>
          <Photo imageUrl={this.state.image} />
        </ul>
      </div>
    );
  }
}

export default App;