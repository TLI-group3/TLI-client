import React from 'react';
import {Car} from "./Car";
import styled from "styled-components";

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

// Styling a regular HTML input
const StyledInput = styled.input`
  display: block;
  margin: 20px 0px;
  border: 1px solid lightblue;
  text-align: center
`;

export class CarsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carsJSON: [],
          ID: '',
        }
    }

    /*componentDidMount() {
        this.getCarsList()
    }*/

    getCarsList = () => {
      const requestOptions = {
            method: 'POST',
            body: this.state.ID
        };
        fetch('https://cb.caravantage.tech/cars',requestOptions)
            // Handle success
            .then(response => response.json())  // convert to json
            .then(
                json => {
                    this.setState({carsJSON: json.cars});
                }
            )    //print data to console
            .catch(err => console.log('Request Failed', err)); // Catch errors
    }
  handleChange = event => {
        this.setState({ ID: event.target.value });
    };

    render() {
        return (
            <div>
                <header className="App-header">
                    <StyledInput value={this.state.username}
                                onChange={this.handleChange} placeholder={"INPUT CLIENT ID"}/>
                <header>Your Client ID is {this.state.ID}</header>
                <Button onClick={this.getCarsList}> CHECK YOUR RECOMMENDED LIST!!! </Button>
                <div className="carslist">
                    {this.state.carsJSON.map(entry => {
                        return (
                        <Car
                            make={entry.make}
                            model={entry.model}
                            year={entry.year}
                            price={entry.price}
                        />
                        );
                    })}
                </div>
                </header>
            </div>
        );
    }
}
