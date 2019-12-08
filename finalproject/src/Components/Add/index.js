import React, { Component } from 'react';
import "./index.css";

// Find way to refresh page after putting in contact

class Add extends Component {

  constructor(props) {
    super(props);
    this.state = {
      output: [],
    };
  }

  addContact() {
    const name = prompt("What's the name of the contact you want to add?");
    const number = prompt("What's the phone number of the contact you want to add?");
    fetch("https://apiexample.website/contacts/add", {
      "method": "POST",
      "headers": {
        "api": "frost",
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      "body": JSON.stringify({
        "name": name,
        "number": number
      })
    })
    .then(response => response.json() )
    .then((data) => this.setState({added: data.added}) )
    .catch(err => {
      console.log(err);
    })
  }

  showOutput() {
    this.setState ({
      output: [
          <div id="outputDiv">
            <div>
              <p>Name:</p>
              <input type="text" id="name"/>
              <p>Phone Number:</p>
              <input type="text" id="number"/>
              <br /><br />
              <div id="submission" onClick={() => this.addContact()}>
                <p>Submit</p>
              </div>
            </div>
          </div>
      ]
    })
  }

  render() {
    return (
      <div>
        <div onClick={() => this.addContact()}>
          <p className="Add">Add</p>
        </div>
        <div id="outputDivContainer">
            <p>{this.state.output}</p>
        </div>
      </div>
    )
  }
}

export default Add;
