import React, { Component } from 'react';
import './App.css';

// import components
import Nav from './components/Nav';
import Photo from './components/Photo';


class App extends Component {

  state = {
    image: "https://via.placeholder.com/150",
    whichAnimal: "cat"
  }

  pickAnimal = () => {
    console.log('I have been clicked')
    this.setState({
      whichAnimal: "dog"
    }, () => console.log(this.state.whichAnimal))
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <Nav clickMe={this.pickAnimal} /> 
        </header>
        <ul>
          <Photo imageUrl={this.state.image} />
        </ul>
      </div>
    );
  }
}

export default App;
