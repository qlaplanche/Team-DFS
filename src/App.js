import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Loader from "./components/loader";
import TeamGrid from './components/TeamGrid';
import AppBarDFS from './components/AppBarDFS';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <AppBarDFS />
          <Route exact path="/" component={Loader}></Route>
          <Route path="/team" component={TeamGrid}></Route>
         </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
