import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentsButton from '../../components/buttons/CommentsButton/CommentsButton';

class DailySupport extends Component {

  state = {
    support: ""
  }

  updateSupportResponse = (event) => {
    console.log(event.target.value);
    this.setState({
      support: event.target.value
    });
    console.log('state:', this.state);
  }

  submitSupportResponse = () => {
    this.props.dispatch({
      type: 'ADD_SUPPORT_RESPONSE',
      payload: this.state
    })
  }

  render() {
    return (
      <>
        <h4>How well are you being supported?</h4>
        <div>
          <input id="rating-select" onChange={this.updateSupportResponse} />
          <br />
          <br />
          <button onClick={this.submitSupportResponse}>Add Response</button>
        </div>
        <br />
        <br />
        <CommentsButton />
      </>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(DailySupport);
