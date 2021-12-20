import React, { Component } from "react";
import "./App.css";
import StateCard from "./Components/StateCard.js";
import Nav from "./Components/Nav.js";
import MyButton from "./Components/MyButton.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // declare function

  render() {
    return (
      <div className="App">
        <Nav />
        <StateCard />
        <MyButton />
      </div>
    );
  }
}

export default App;
