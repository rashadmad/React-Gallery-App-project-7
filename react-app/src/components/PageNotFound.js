import React, { Component } from 'react';

import {
    Route,
    NavLink
} from 'react-router-dom';

class PageNotFound extends Component {

    render() {
        return (
            <Route>
                <h1>Danger will robinson</h1>
                <p>You are on the wrong page!!</p>
                <NavLink to={'/'}>Press here to go back safely to the home page</NavLink>
            </Route>
        );
    }    
}

export default PageNotFound;