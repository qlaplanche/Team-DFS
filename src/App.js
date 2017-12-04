import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route } from "react-router-dom";

import Loader from "./components/loader";

const Home = () => <h1> Hello </h1>

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Route path="/" component={Home}></Route> */}
        <Route path="/" component={Loader}></Route>
      </BrowserRouter>
    );
  }
}

export default App;
