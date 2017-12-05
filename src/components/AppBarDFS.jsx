import React from 'react';
import AppBar from 'material-ui/AppBar';
import {red900} from 'material-ui/styles/colors'

import FlatButton from 'material-ui/FlatButton'

import Logo from '../img/DFS.png';


const AppBarDFS = () => (
  <AppBar 
    style={{backgroundColor: '#780003'}}
    iconClassNameLeft="play_arrow"
    iconElementRight={<FlatButton label="Voir le site de la Nuit" disabled />}
    title="Team DFS;"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    zDepth={2}
  />
);

export default AppBarDFS;