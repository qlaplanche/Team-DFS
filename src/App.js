import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Loader from "./components/loader";
import TeamGrid from './components/TeamGrid';
import AppBarDFS from './components/AppBarDFS';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/dfs">
        <MuiThemeProvider>
          <AppBarDFS />
          <Switch>
            <Route path="/team" component={TeamGrid}></Route>
            <Route path="/" component={Loader}></Route>
          </Switch>  
         </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
