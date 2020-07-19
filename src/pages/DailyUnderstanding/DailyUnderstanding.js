import React, { Component } from 'react';
import SupportedButton from "../../components/buttons/SupportedButton/SupportedButton";
import SelectTag from "../../components/SelectTag/SelectTag";

class DailyUnderstanding extends Component {
    render() {
        return (
          <>
            <h4>How well are you understanding the content?</h4>
            <SelectTag />
            <SupportedButton />
          </>
        );
    }
}

export default DailyUnderstanding;
