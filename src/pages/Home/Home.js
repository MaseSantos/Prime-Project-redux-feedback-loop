import React, { Component } from "react";
import FeelingButton from "../../components/buttons/FeelingButton/FeelingButton";

class Home extends Component {
  render() {
    return (
      <div>
        <p>Fill out your feedback for the day!</p>
        <FeelingButton />
      </div>
    );
  }
}

export default Home;
