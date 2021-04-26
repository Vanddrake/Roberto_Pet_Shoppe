import React from 'react';
import "./css/bootstrap.min.css";
import {NavBar} from './NavBar';
import {Footer} from './Footer';

  /* 
  Author:   Robert Zaranek
  Date:     April 8, 2021

  Purpose:  The Topmost portion of the Robert's Pet Shoppe app.
  */

class App extends React.Component {
  render() {
    return ( 
      <div>
        <NavBar />
        <Footer />
      </div>
    );
  }
}

export default App;