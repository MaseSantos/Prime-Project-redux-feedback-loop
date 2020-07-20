import React, { Component } from 'react';
import SupportedButton from "../../components/buttons/SupportedButton/SupportedButton";

class DailyUnderstanding extends Component {

  state = {
    understanding: ""
  }

  render() {
    return (
      <>
        <h4>How well are you understanding the content?</h4>
        <div>
          <select name="rating-select" onChange={this.props.submitResponse}>
            <option value="SelectRating">Select Rating</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
        </div>
        <br />
        <br />
        <SupportedButton />
      </>
    );
  }
}

export default DailyUnderstanding;
