import React, { Component } from 'react';
import SupportedButton from "../../components/buttons/SupportedButton/SupportedButton";


class DailyUnderstanding extends Component {
    render() {
        return (
            <>
                <h4>How well are you understanding the content?</h4>
                <SupportedButton/>
            </>
        );
    }
}

export default DailyUnderstanding;
