import React, { Component } from 'react';
import "./index.css";

// const API = 'https://api.weather.gov/gridpoints/MLB/25,69/forecast/properties';

class Card extends Component {

  constructor(props) {
    super(props);

    this.state = {

      // First (0)
      temperature: "",
      name: "",
      temperatureUnit: "",
      detailedForecast: "",

      // Second (1)
      temperature2: "",
      name2: "",
      temperatureUnit2: "",
      detailedForecast2: "",

      // Third (2)
      temperature3: "",
      name3: "",
      temperatureUnit3: "",
      detailedForecast3: "",

      // Fourth (3)
      temperature4: "",
      name4: "",
      temperatureUnit4: "",
      detailedForecast4: "",

    }
  }

  async componentDidMount() {
      const url = 'https://api.weather.gov/gridpoints/MLB/25,69/forecast/'
      const response = await window.fetch(url);
      const data = await response.json();

      // First (0)

      this.setState({ temperature: data.properties.periods[0].temperature })
      this.setState({ name: data.properties.periods[0].name })
      this.setState({ temperatureUnit: data.properties.periods[0].temperatureUnit })
      this.setState({ detailedForecast: data.properties.periods[0].detailedForecast })

      // Second (1)

      this.setState({ temperature2: data.properties.periods[1].temperature })
      this.setState({ name2: data.properties.periods[1].name })
      this.setState({ temperatureUnit2: data.properties.periods[1].temperatureUnit })
      this.setState({ detailedForecast2: data.properties.periods[1].detailedForecast })

      // Third (2)

      this.setState({ temperature3: data.properties.periods[2].temperature })
      this.setState({ name3: data.properties.periods[2].name })
      this.setState({ temperatureUnit3: data.properties.periods[2].temperatureUnit })
      this.setState({ detailedForecast3: data.properties.periods[2].detailedForecast })

      // Fourth (3)

      this.setState({ temperature4: data.properties.periods[3].temperature })
      this.setState({ name4: data.properties.periods[3].name })
      this.setState({ temperatureUnit4: data.properties.periods[3].temperatureUnit })
      this.setState({ detailedForecast4: data.properties.periods[3].detailedForecast })

    }

  /*

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ updated: data.updated }));
    }

*/

/*

componentDidMount() {
  window.fetch("API")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          title: result.title
        });
      },
    )
}

*/

// ---------------------------------------------------------------------

/*

  render() {
    return <p className="card">{this.state.title}.</p>;
  }
}

*/

render() {
  return (
    <div>
      <p className="card">{this.state.name}, the temperature will be {this.state.temperature} {this.state.temperatureUnit}. {this.state.detailedForecast}</p>
      <br />
      <p className="card">{this.state.name2}, the temperature will be {this.state.temperature2} {this.state.temperatureUnit2}. {this.state.detailedForecast2}</p>
      <br />
      <p className="card">{this.state.name3}, the temperature will be {this.state.temperature3} {this.state.temperatureUnit3}. {this.state.detailedForecast3}</p>
      <br />
      <p className="card">{this.state.name4}, the temperature will be {this.state.temperature4} {this.state.temperatureUnit4}. {this.state.detailedForecast4}</p>
      <br />
    </div>
  )
}

}

export default Card;
