import React from 'react';

class Nav extends React.Component {
    
    state = {
        whichAnimal: null
    }

    pickAnimal(){
        console.log("animal")
    }  

    render() { 
        return (
        <nav>
            <input type="text" placeholder="Search.."></input>
            <button onClick={this.pickAnimal}>Cats</button> 
            <button onClick={this.pickAnimal}>Dogs</button> 
            <button onClick={this.pickAnimal}>Birds</button> 
        </nav>
        )
    }
}

export default Nav;