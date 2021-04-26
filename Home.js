import React from 'react';

  /* 
  Author:   Robert Zaranek
  Date:     April 8, 2021

  Purpose:  The home page component for the Robert's Pet Shoppe app.
  */

class Home extends React.Component {

    render () {
        return (
            <div>
                <HomePresentation />
            </div>
        )
    }
}

class HomePresentation extends React.Component {
    render() {
        return (
            <div>
                <h5>Welcome to Roberto's Pet Shoppe Database Manager!</h5>
                <h6>Please Select an Option.</h6>
            </div>
        )
    }
}

export {Home};