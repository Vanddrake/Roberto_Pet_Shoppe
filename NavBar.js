import React from 'react';
import {Home} from './Home';
import {About} from './About';
import {Search} from './Search';
import {Edit} from './Edit';
import dogface from './img/dogface.png';
import "./style.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

  /* 
  Author:   Robert Zaranek
  Date:     April 8, 2021

  Purpose:  The class for the navbar which includes rendering to the other 'pages' of the app. 
  */

class NavBar extends React.Component {
  render() {
    return ( 
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light shoppeColor">
                <NavLink className="navbar-brand" exact to="/portfolio/p6/">
                    <img    src={dogface}
                            width="30" 
                            height="30" 
                            className="d-inline-block align-top"
                            id="logo"
                            alt="" />
                    Roberto's Pet Shoppe
                </NavLink>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/portfolio/p6/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/portfolio/p6/search">Search</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/portfolio/p6/edit">Edit</NavLink>
                    </li>
                </ul>
            </nav>
    
            <div className="mx-4 mt-4">
                <Route exact path="/portfolio/p6/" component={Home}/>
                <Route path="/portfolio/p6/about" component={About}/>
                <Route path="/portfolio/p6/search/:searchTerm?" component={Search}/>
                <Route path="/portfolio/p6/edit" component={Edit}/>
            </div>
        </Router>
    );
  }
}

export {NavBar};