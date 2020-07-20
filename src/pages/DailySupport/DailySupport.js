import React, { Component } from 'react';
import CommentsButton from '../../components/buttons/CommentsButton/CommentsButton';
import SelectTag from "../../components/SelectTag/SelectTag";

class DailySupport extends Component {
  state = {
    response: {
      support: ""
    },
  };

  submitResponse = (event, propertyName) => {
    this.props.dispatch({type: "ADD_SUPPORT_RESPONSE", 
    payload: { support: event.target.value }});
  }

  render() {
    return (
      <>
        <h4>How well are you being supported?</h4>
        <SelectTag submitResponse={this.submitResponse}/>
        <br />
        <br />
        <CommentsButton />
      </>
    );
  }
}

export default DailySupport;
