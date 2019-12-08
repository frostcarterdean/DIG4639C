import React, { Component } from 'react';
import "./index.css";

class Remove extends Component {

  constructor(props) {
    super(props);
    this.state = {removed: {}};
  }

  thing() {
    const numberRemove = prompt("Which contact do you want to remove? Please enter a number.");
    fetch("https://apiexample.website/contacts/remove", {
      "method": "POST",
      "headers": {
        "api": "frost",
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      "body": JSON.stringify ( {
        "position": numberRemove - 1
      } )
    })
    .then(response => response.json() )
    .then((data) => this.setState({removed: data.removed}) )
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
        <div>
          <p className="Remove" onClick={() => this.thing()}>Remove</p>
        </div>
    )
  }
}

export default Remove;
