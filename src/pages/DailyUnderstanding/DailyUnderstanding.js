import React, { Component } from 'react';
import { connect } from 'react-redux';
import SupportedButton from "../../components/buttons/SupportedButton/SupportedButton";

class DailyUnderstanding extends Component {

  state = {
    understanding: ""
  }

  updateUnderstandingResponse = (event) => {
    console.log(event.target.value);
    this.setState({
      understanding: event.target.value
    });
    console.log('state:', this.state);
  }

  submitUnderstandingResponse = () => {
    this.props.dispatch({
      type: 'ADD_UNDERSTANDING_RESPONSE',
      payload: this.state
    })
  }

  render() {
    return (
      <>
        <h4>How well are you understanding the content?</h4>
        <div>
          <input id="rating-select" onChange={this.updateUnderstandingResponse} />
          <br />
          <br />
          <button onClick={this.submitUnderstandingResponse}>Add Response</button>
        </div>
        <br />
        <br />
        <SupportedButton />
      </>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(DailyUnderstanding);



