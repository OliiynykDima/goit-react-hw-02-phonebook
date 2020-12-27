import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import css from "./Form.css";

class Form extends Component {
  state = {
    name: "",
    id: "",
    number: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit", event.target);

    const newContact = {
      name: this.state.name + ":",
      id: uuidv4(),
      number: this.state.number,
    };
    console.log(newContact);
    console.log("props", this.props);
    this.props.addContact(newContact);
  };
  handleChange = (event) => {
    console.log("change", event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} id="form">
        <div id="inputWrap">
          <div id="hWrape">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter contact name"
              onChange={this.handleChange}
            />
          </div>

          <div id="hWrape">
            <label htmlFor="number">Number</label>
            <input
              type="tel"
              id="number"
              name="number"
              placeholder="Enter contact tel"
              onChange={this.handleChange}
            />
          </div>
        </div>

        <button type="submit">submit</button>
      </form>
    );
  }
}

export default Form;
