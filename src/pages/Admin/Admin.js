import React, { Component } from "react";
import { connect } from "react-redux";

class Admin extends Component {
  
    render() {
        return (
         <div className="App">
                {this.props.responseList.map((item) => (
                    <ul>
                    <li key={item.id}>{item.date}{item.feeling}{item.understanding}{item.support}{item.comments}</li>
                    </ul>
                ))}
            </div>
        )  
    }
}
const putReduxStateonProps = (reduxState) => ({
  responseList: reduxState.responseList,
});

export default connect(putReduxStateonProps)(Admin);

