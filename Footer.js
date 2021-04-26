import React from 'react';

  /* 
  Author:   Robert Zaranek
  Date:     April 8, 2021

  Purpose:  The footer component for the Robert's Pet Shoppe app.
  */

class Footer extends React.Component {

    render () {
        return (
                <FooterPresentation />
        )
    }
}

class FooterPresentation extends React.Component {
    render() {
        return (
            <div className="fixed-bottom navbar shoppeColor">
                <p className="ml-auto">Robert Zaranek &copy; 2021</p>
            </div>
        )
    }
}

export {Footer};