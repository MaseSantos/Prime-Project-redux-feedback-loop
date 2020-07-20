import React, { Component } from 'react';

class SelectTag extends Component {
  componentDidMount = () => {
    console.log(this.props.question);
  };

  state = {
    response: {
      feeling: "",
      understanding: "",
      support: "",
      comment: ""
    }
  };

  submitResponse = (event, propertyName) => {
    console.log("Submitting response to question");
    this.setState({
      ...this.state.reponse,
      [propertyName]: event.target.value,
    });
    console.log(this.state);
    console.log(this.props);
  };

  render() {
    return (
      <div>
        <select
          name="rating-select"
          onChange={(event) => this.submitResponse(event, this.props.question)}
        >
          <option value="SelectRating">Select Rating</option>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
      </div>
    );
  }
}

export default SelectTag;