import React, { Component } from 'react';
import "./index.css";

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      profile: []
    };
  }

  componentDidMount() {

    fetch("https://apiexample.website/contacts", {
    "method": "GET",
    "headers": {
       "api": "frost",
       "Content-Type": "application/json",
       "Accept": "application/json"
    }})
    .then(response => response.json() )
    .then((data) => {
      console.log(data);
      this.setState({contacts: data.contacts});
    })
    .then(fetch("https://apiexample.website/profile", {
        "method": "GET",
        "headers": {
           "api": "frost",
           "Content-Type": "application/json",
           "Accept": "application/json"
        }})
        .then(response => response.json() )
        .then((data) => {
          console.log(data);
          this.setState({profile: data});
        })
    );
  }

  render() {
    return (
      <div className="profileDiv">
            <p>Hello, <b>{this.state.profile.name}</b>. You currently have <b>{this.state.contacts.length}</b> contacts.</p>
      </div>
    );
  }

}

export default Profile;
