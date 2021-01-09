import React, { Component } from "react";
import "./App.css";

import Form from "./components/form/Form.js";
import ContactList from "./components/contactList/ContactList.js";
import SearchBar from "./components/searchBar/SearchBar.js";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };
  addContact = (contact) => {
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
    // console.log(this.state.contacts);
  };
  render() {
    return (
      <>
        <Form addContact={this.addContact} />
        <ContactList contacts={this.state.contacts} />
        <SearchBar data={this.state.contacts} />
      </>
    );
  }
}

export default App;
