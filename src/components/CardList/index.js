import React from "react";
import Card from "../Card/";
import CardInput from "../CardInput/";
import data from "../../data.json";

class CardList extends React.Component {

  constructor(props) {

    super(props);

    this.state = {cards: data.cards};

  }

  removeDog = (event) => {
    let datatitle = event.target.getAttribute("datatitle");
    let localCards = this.state.cards;
    let changedCards = localCards.filter((card) => {
      return card.title !== datatitle;
    });

    this.setState({cards: changedCards});

  }

  addDog = (event) => {

    event.preventDefault();

    let titleElement = document.getElementById("newDogTitle");
    let contentElement = document.getElementById("newDogContent");

    if(titleElement.value.length !== 0
      && contentElement.value.length !== 0) {

      let newDog = {
        title: titleElement.value,
        content: contentElement.value
      };

      titleElement.value = "";
      contentElement.value = "";

      let localCards = this.state.cards;

      localCards.push(newDog);

      this.setState({cards: localCards});

    }


  }

  render() {
    return(
      <div>
          <CardInput adddog={this.addDog} />
          {
              this.state.cards.map((card, index) => {
                return <Card
                    key={index}
                    title={card.title}
                    content={card.content}
                    removedog={this.removeDog}
                    />
            })
          }
      </div>
    );
  }


}

export default CardList;
