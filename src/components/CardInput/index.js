import React from "react";

class CardInput extends React.Component {

    render() {
        return(
          <form onSubmit={this.props.adddog}>
          </form>
        );
    }

}

export default CardInput;
