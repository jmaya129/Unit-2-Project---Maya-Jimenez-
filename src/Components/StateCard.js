import React, { Component } from "react";

class StateCard extends Component {
  // Constructor (always part of a class component)
  constructor(props) {
    super(props);
    this.state = {
      button1: "On!",
      button2: 0,
      button3: "You"
    };
  }

  // Functions to handle button presses.
  handleButton1 = () => {
    alert("Button 1 pressed!");
  };
  handleButton2 = () => {};
  handleButton3 = () => {};

  // The render function
  render() {
    return (
      <div className="StateCard">
        <h2>Press some buttons!</h2>
        <div className="card-content">
          <div className="item">
            <button onClick={this.handleButton1}>Button 1</button>
            <p>Current status: {this.state.button1}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default StateCard;
