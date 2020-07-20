import React, { Component } from 'react';
import CommentsButton from '../../components/buttons/CommentsButton/CommentsButton';

class DailySupport extends Component {

  state = {
    support: ""
  }

  submitResponse = (event, propertyName) => {
    this.props.dispatch({type: "ADD_SUPPORT_RESPONSE", 
    payload: { support: event.target.value }});
  }

  render() {
    return (
      <>
        <h4>How well are you being supported?</h4>
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
        <CommentsButton />
      </>
    );
  }
}

export default DailySupport;
