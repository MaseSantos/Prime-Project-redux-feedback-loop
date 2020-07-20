import React, { Component } from 'react';
import { connect } from 'react-redux';
import UnderstandingButton from "../../components/buttons/UnderstandingButton/UnderstandingButton";

class DailyFeeling extends Component {
 
    state = {
     feeling : ""
    }

  updateFeelingResponse = (event) => {
    console.log(event.target.value);
      this.setState({
        feeling: event.target.value
      });
    console.log('state:', this.state);
  }

  submitFeelingResponse = () => {
      this.props.dispatch({
        type: 'ADD_FEELING_RESPONSE',
        payload: this.state
      })
    }

    render() {
        return (
          <>
            <h4>How are you feeling today?</h4>
            <div>
              <input id="rating-select" onChange={this.updateFeelingResponse}/>
              <br />
              <br />
              <button onClick={this.submitFeelingResponse}>Add Response</button>
            </div>
            <br />
            <br />
            <UnderstandingButton />
          </>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(DailyFeeling);
