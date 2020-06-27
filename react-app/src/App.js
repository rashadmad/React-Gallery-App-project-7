import React, { Component } from 'react';
import './App.css';

// import components
import Nav from './components/Nav';
import Photo from './components/Photo';


class App extends Component {

  constructor(){
    super()
    this.state = {
      image: "https://via.placeholder.com/150", 
      whichAnimal: "cat"
    }
    console.log(this.state)
  }  

  pickAnimal = () => {
    console.log('I have been clicked')
    this.setState({
      whichAnimal: 'dog'
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
