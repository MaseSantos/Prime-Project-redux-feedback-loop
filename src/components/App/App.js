import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import SelectTag from '../SelectTag/SelectTag';
import './App.css';

class App extends Component {
  render() {
    return (
        <>
        <Header/>
        <h4><i>Insert Instructions here</i></h4>
        <SelectTag/>
        <br/>
      </>
    );
  }
}

export default App;
