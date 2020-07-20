import React, { Component } from 'react';

class DailyComments extends Component {
    
    render() {
        return (
          <>
            <h4>Any comments you want to leave?</h4>
            <label htmlFor="comments">Comments:</label>
            <br />
            <br />
            <input name="comments" type="text" />
          </>
        );
    }
}

export default DailyComments;
