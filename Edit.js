import React from 'react';
import { PetTableCRUD } from './PetTableCRUD';

  /* 
  Author:   Robert Zaranek
  Date:     April 8, 2021

  Purpose:  The edit component for the Robert's Pet Shoppe app.
  */

class Edit extends React.Component {

    constructor(props) {
        super(props);
        this.state = 
        {
            animalID: 0,
            animal: "",
            description: "",
            age: "",
            price: "",
            animalClassName: "form-control",
            ageClassName: "form-control",
            priceClassName: "form-control",
            currentInputState: "Add",
            pets: []
        };
      }

    componentDidMount() {
        fetch("php/getall.php")
        .then(res => res.json())
        .then(
        (result) => {
            this.setState({
            pets: result
            });
        })
    }

    handleDelete(id) {
        fetch("php/delete.php?id=" + id)
            .then(res => res.json())
            .then(
            (result) => {
                this.setState({
                pets: result
                });
            })
        this.setState({ animal: '',
                        description: '', 
                        age: '',
                        price: '',
                        currentInputState: "Add"
                        })
    }

    handleEdit(id, animal, description, age, price) {
        this.setState({
            animalID: id,
            animal: animal,
            description: description,
            age: age,
            price: price,
            currentInputState: "Edit"
        })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let age = parseInt(this.state.age);
        let price = parseInt(this.state.price);

        // Validation
        let animalIsValid = false;
        if (this.state.animal === "") {
            this.setState({ animalClassName: "form-control is-invalid" })
        } else {
            this.setState({ animalClassName: "form-control" })
            animalIsValid = true;
        }
            
        let ageIsValid = false;
        if ((age < 0) || isNaN(age)) {
            this.setState({ ageClassName: "form-control is-invalid" })
        } else {
            this.setState({ ageClassName: "form-control" })
            ageIsValid = true;
        }  

        let priceIsValid = false;
        if ((price < 0) || isNaN(price)) {
            this.setState({ priceClassName: "form-control is-invalid" })
        } else {
            this.setState({ priceClassName: "form-control" })
            priceIsValid = true;
        }

        if (animalIsValid === true && ageIsValid === true && priceIsValid === true) {
            // Handle Adding Elements
            if (this.state.currentInputState === "Add") {
                document.getElementById("animalTextBox").focus()
                fetch("php/add.php?animal=" + this.state.animal + 
                        "&description=" + this.state.description + 
                        "&age=" + this.state.age + 
                        "&price=" + this.state.price)
                    .then(res => res.json())
                    .then(
                    (result) => {
                        this.setState({
                        pets: result
                        });
                    })
                this.setState({ animal: '',
                                description: '', 
                                age: '',
                                price: ''
                                })
            }
            // Handle Editing Elements
            else if (this.state.currentInputState === "Edit") {
                document.getElementById("animalTextBox").focus()
                fetch("php/update.php?id=" + this.state.animalID +
                        "&animal=" + this.state.animal + 
                        "&description=" + this.state.description + 
                        "&age=" + this.state.age + 
                        "&price=" + this.state.price)
                    .then(res => res.json())
                    .then(
                    (result) => {
                        this.setState({
                        pets: result
                        });
                    })
                this.setState({ animal: '',
                                description: '', 
                                age: '',
                                price: '',
                                currentInputState: "Add"
                                })
            }
        }
    }

    render () {
        return (
            <div>
                <EditPresentation 
                    handleSubmit={this.handleSubmit.bind(this)}
                    handleInputChange={this.handleInputChange.bind(this)}
                    animalClassName={this.state.animalClassName}
                    ageClassName={this.state.ageClassName}
                    priceClassName={this.state.priceClassName}
                    animal={this.state.animal}
                    description={this.state.description}
                    age={this.state.age}
                    price={this.state.price}
                    currentInputState={this.state.currentInputState}
                />
                <br />
                <PetTableCRUD
                    pets={this.state.pets}
                    onDeleteClick={this.handleDelete.bind(this)}
                    onEditClick={this.handleEdit.bind(this)}
                />
            </div>
        )
    }
}

class EditPresentation extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit.bind(this)}>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="animalTextBox">Animal Type</label>
                        <input  type="text" 
                                name="animal"
                                className={this.props.animalClassName}
                                id="animalTextBox" 
                                placeholder="Animal Type" 
                                onChange={this.props.handleInputChange.bind(this)} 
                                value={this.props.animal}
                                autoFocus />
                        <div className="invalid-feedback">
                            Animal Type cannot be blank
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="descriptionTextBox">Description</label>
                        <input  type="text" 
                                name="description"
                                className="form-control"
                                id="descriptionTextBox" 
                                placeholder="Description" 
                                onChange={this.props.handleInputChange.bind(this)} 
                                value={this.props.description} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="ageTextBox">Age</label>
                        <input  type="text" 
                                name="age"
                                className={this.props.ageClassName}
                                id="ageTextBox"
                                placeholder="Age"
                                onChange={this.props.handleInputChange.bind(this)}
                                value={this.props.age} />
                        <div className="invalid-feedback">
                            Age must be a positive integer
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="priceTextBox">Price</label>
                        <input  type="text" 
                                name="price"
                                className={this.props.priceClassName}
                                id="priceTextBox"
                                placeholder="Price"
                                onChange={this.props.handleInputChange.bind(this)}
                                value={this.props.price} />
                        <div className="invalid-feedback">
                            Price must be a positive integer
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">{this.props.currentInputState}</button>
            </form>
        )
    }
}

export {Edit};