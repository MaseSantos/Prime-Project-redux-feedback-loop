import React, { Component } from 'react';
import { connect } from 'react-redux';

class DailyComments extends Component {

  state = {
    comments: ""
  }

  updateCommentsResponse = (event) => {
    console.log(event.target.value);
    this.setState({
      comments: event.target.value
    });
    console.log('state:', this.state);
  }

  submitCommentsResponse = () => {
    this.props.dispatch({
      type: 'ADD_COMMENTS_RESPONSE',
      payload: this.state
    })
  }

    render() {
        return (
          <>
            <h4>Any comments you want to leave?</h4>
            <div>
              <input id="rating-select" onChange={this.updateCommentsResponse} />
              <br />
              <br />
              <button onClick={this.submitCommentsResponse}>Add Response</button>
            </div>
            <br />
            <br />
          </>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(DailyComments);
