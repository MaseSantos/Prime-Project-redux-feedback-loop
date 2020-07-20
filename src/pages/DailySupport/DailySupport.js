import React, { Component } from 'react';
import CommentsButton from '../../components/buttons/CommentsButton/CommentsButton';
import SelectTag from "../../components/SelectTag/SelectTag";

class DailySupport extends Component {

  state = {
    question: "support",
  };

  render() {
    return (
      <>
        <h4>How well are you being supported?</h4>
        <SelectTag question={this.state.question} />
        <CommentsButton />
      </>
    );
  }
}

export default DailySupport;
