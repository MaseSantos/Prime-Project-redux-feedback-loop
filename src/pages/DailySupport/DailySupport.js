import React, { Component } from 'react';
import UnderstandingButton from "../../components/buttons/CommentsButton/CommentsButton";
import CommentsButton from '../../components/buttons/CommentsButton/CommentsButton';


class DailySupport extends Component {
    render() {
        return (
            <>
                <h4>How well are you being supported?</h4>
                <CommentsButton/>
            </>
        );
    }
}

export default DailySupport;
