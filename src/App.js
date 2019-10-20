import React from 'react';
import CardList from "./components/CardList";
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  showMenu() {
    let menu = "";
    menu = <CardList changemenu={this.changeMenu} />;
    return menu;
  }

  render() {
    return (
      <div>
        {this.showMenu()}
      </div>
    );
  }

}

export default App;
