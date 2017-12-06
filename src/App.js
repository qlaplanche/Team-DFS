import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Loader from "./components/loader";
import TeamGrid from './components/TeamGrid';
import AppBarDFS from './components/AppBarDFS';
import SnackbarSponsor from './components/SnackbarSponsor';

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
          <SnackbarSponsor/>
         </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
