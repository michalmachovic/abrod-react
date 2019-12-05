import React from 'react';
import {  Route, Router } from 'react-router-dom'
import Contact from './Contact';
import News from './News';
import Menu from './Menu';
import Footer from './Footer';
import history from '../history/history';
import '../../public/css/styles.css';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <Menu />
                <div id="main">
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/news" exact component={News} />
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
