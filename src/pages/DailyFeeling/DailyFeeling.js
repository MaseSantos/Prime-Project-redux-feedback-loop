import React, { Component } from 'react';
import UnderstandingButton from "../../components/buttons/UnderstandingButton/UnderstandingButton";
import SelectTag from "../../components/SelectTag/SelectTag";

class DailyFeeling extends Component {
    render() {
        return (
            <>
                <h4>How are you feeling today?</h4>
                <SelectTag/>
                <UnderstandingButton/>
            </>
        );
    }
}

export default DailyFeeling;
