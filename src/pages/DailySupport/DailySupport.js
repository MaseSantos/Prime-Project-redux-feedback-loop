import React, { Component } from 'react';
import CommentsButton from '../../components/buttons/CommentsButton/CommentsButton';
import SelectTag from "../../components/SelectTag/SelectTag";

class DailySupport extends Component {
    render() {
        return (
          <>
            <h4>How well are you being supported?</h4>
            <SelectTag />
            <CommentsButton />
          </>
        );
    }
}

export default DailySupport;
