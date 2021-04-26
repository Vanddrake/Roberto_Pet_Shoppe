import React from 'react';
import pencil from './img/pencil.png';
import remove from './img/remove.png';

  /* 
  Author:   Robert Zaranek
  Date:     April 8, 2021

  Purpose:  Renders a table for use with the edit component for the Robert's Pet Shoppe app.
  */

class PetTableCRUD extends React.Component {
    
    renderPet({id, animal, description, age, price}) { 
        return  <tr key={id}>
                    <td>{animal}</td>
                    <td>{description}</td>
                    <td>{age}</td>
                    <td>{price}</td>
                    <td>
                        <img    src={pencil} 
                                onClick={this.props.onEditClick.bind(this, id, animal, description, age, price)} 
                                className="editDeletePic" 
                                alt="edit this item" />
                    </td>
                    <td>
                        <img    src={remove} 
                                onClick={this.props.onDeleteClick.bind(this, id)} 
                                className="editDeletePic" 
                                alt="delete this item" />
                    </td>
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
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.pets.map(this.renderPet.bind(this))}
                </tbody>
            </table>
        )
    }
}

export {PetTableCRUD};