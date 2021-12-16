import React, { Component } from "react";

//Function for handle click counter
class Block extends Component {
  state = {
    count: 0
  };

  handleClick = (e) => {
    const count = this.state.count;
    this.setState({ count: count + 1 });
  };

  render() {
    return (
      <div>
        <button className="block" onClick={this.handleClick}>
          <div className="counter">{this.state.count}</div>
        </button>
        <button className="block" onClick={this.handleClick}>
          <div className="counter">{this.state.count}</div>
        </button>
      </div>
    );
  }
}
