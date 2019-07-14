import React, { Component } from "react";
import "./NavMessage.css";

// NavMessage renders an li tag containing an message for the user

class NavMessage extends Component {
  state = {
    message: "",
    animating: false
  };

  componentWillReceiveProps({ score, topScore }) {
    const newState = { animating: true };
    if (score === 0 && topScore === 0) {
      newState.message = "";
    } else if (score === 0 && topScore > 0) {
      newState.message = "incorrect";
    } else {
      newState.message = "correct";
    }
    this.setState(newState, () =>
      setTimeout(() => this.setState({ animating: false }), 1000)
    );
  }

  renderMessage = () => {
    switch (this.state.message) {
    case "correct":
      return "Si!";
    case "incorrect":
      return "You Lose";
    default:
      return "click any card, but dont click a card twice";
    }
  };

  render() {

    if (this.state.message === "incorrect") {
      return (
        <h2 className={this.state.animating ? this.state.message+" shake text-danger" : ""}>
          {this.renderMessage()}
        </h2>
      );
    } else {
      return (
        <h2 className={this.state.animating ? this.state.message : ""}>
          {this.renderMessage()}
        </h2>
      );
    }


  }
}

export default NavMessage;
