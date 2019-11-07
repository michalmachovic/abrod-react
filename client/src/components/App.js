import React from 'react';
import {  Route, Router } from 'react-router-dom'
import Contact from './Contact';
import Menu from './Menu';
import history from '../history/history';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <Menu />
                <Route path="/contact" exact component={Contact} />
            </Router>
        </div>
    );
}

export default App;
