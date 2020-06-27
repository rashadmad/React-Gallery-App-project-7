import React from 'react';

class Nav extends React.Component {

    pickAnimal(animal){
        console.log(animal)
      }  

    render() { 
        return (
        <nav>
            <input type="text" placeholder="Search.."></input>
            <button onClick={() => this.pickAnimal("Cats")}>Cats</button> 
            <button onClick={() => this.pickAnimal("Dogs")}>Dogs</button> 
            <button onClick={() => this.pickAnimal("Birds")}>Birds</button> 
        </nav>
        )
    }
}

export default Nav;