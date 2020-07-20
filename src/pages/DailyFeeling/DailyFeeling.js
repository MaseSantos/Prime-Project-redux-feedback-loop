import React, { Component } from 'react';
import UnderstandingButton from "../../components/buttons/UnderstandingButton/UnderstandingButton";
import SelectTag from "../../components/SelectTag/SelectTag";

class DailyFeeling extends Component {
 
    state = {
     question: "feeling"
    }
    
    render() {
        return (
          <>
            <h4>How are you feeling today?</h4>
            <SelectTag question={this.state.question}/>
            <UnderstandingButton />
          </>
        );
    }
}

export default DailyFeeling;
