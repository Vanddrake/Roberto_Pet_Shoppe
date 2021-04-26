import React from 'react';
import dog from './img/dog.jpg';

  /* 
  Author:   Robert Zaranek
  Date:     April 8, 2021

  Purpose:  The about component for the Robert's Pet Shoppe app. 
  */

class About extends React.Component {

    render () {
        return (
            <div>
                <AboutPresentation />
            </div>
        )
    }
}

class AboutPresentation extends React.Component {
    render() {
        return (
            <div>
                <h2>About</h2>
                <img src={dog} className="w-50 float-right" alt="a dog" />
                <p>This is a pet store management system for Roberto's Pet Shoppe
                    that allows users to search for specific pets or to edit a
                    pet's information inside the SQLite database.
                </p>
            </div>
        )
    }
}

export {About};