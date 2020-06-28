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
      <div className="App">
        <header className="App-header">
          <Nav clickMe={() => this.pickAnimal()} /> 
        </header>
        <ul>
          <Photo imageUrl={this.state.image} />
        </ul>
      </div>
    );
  }
}

export default App;
