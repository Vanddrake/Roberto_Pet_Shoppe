import React from 'react';
import { PetTable } from './PetTable';

  /* 
  Author:   Robert Zaranek
  Date:     April 8, 2021

  Purpose:  The search component for the Robert's Pet Shoppe app.
  */

class Search extends React.Component {

    constructor(props) 
    {
      super(props);
      this.state = 
      { 
        pets: [],
        searchTerm: ""
      }
    }

    componentDidMount() {
        if (!this.props.match.params.searchTerm) {
            fetch("php/getall.php")
            .then(res => res.json())
            .then(
            (result) => {
                this.setState({
                pets: result
                });
            })
        } else {
            fetch("php/search.php?term=" + this.props.match.params.searchTerm)
            .then(res => res.json())
            .then(
            (result) => {
                this.setState({
                pets: result,
                searchTerm: this.props.match.params.searchTerm
                });
            })
        }
    }

    handleInputChange(event) {
        this.setState({searchTerm: event.target.value});
        fetch("php/search.php?term=" + event.target.value)
        .then(res => res.json())
        .then(
        (result) => {
            this.setState({
            pets: result
            });
        })
      }

    render () {
        return (
            <div>
                <SearchPresentation 
                    searchTerm={this.state.searchTerm}
                    handleInputChange={this.handleInputChange.bind(this)}
                />
                <br />
                <PetTable
                    pets={this.state.pets}
                />
            </div>
        )
    }
}

class SearchPresentation extends React.Component {
    render() {
        return (
            <input  type="text" 
                    className="form-control"
                    name="searchTerm"
                    placeholder="Search" 
                    onChange={this.props.handleInputChange.bind(this)} 
                    value={this.props.searchTerm}
                    autoFocus />
        )
    }
}

export {Search};