import React, { Component } from "react";
import FeelingButton from "../../components/buttons/FeelingButton/FeelingButton";

class Home extends Component {
  render() {
    return (
      <div>
        <h4>Fill out your feedback for the day!</h4>
        <FeelingButton />
      </div>
    );
  }
}

export default Home;
