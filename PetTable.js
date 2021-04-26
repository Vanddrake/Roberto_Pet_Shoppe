import React from 'react';

  /* 
  Author:   Robert Zaranek
  Date:     April 8, 2021

  Purpose:  Renders a table for use with the search component for the Robert's Pet Shoppe app.
  */

class PetTable extends React.Component {
    
    renderPet({id, animal, description, age, price}) { 
        return  <tr key={id}>
                    <td>{animal}</td>
                    <td>{description}</td>
                    <td>{age}</td>
                    <td>{price}</td>
                </tr>;
    }

    render() {
        return (
            <table className="table mb-5">
                <thead>
                    <tr>
                        <th scope="col">Animal Type</th>
                        <th scope="col">Description</th>
                        <th scope="col">Age</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.pets.map(this.renderPet.bind(this))}
                </tbody>
            </table>
        )
    }
}

export {PetTable};