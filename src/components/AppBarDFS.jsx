import React,{Component} from 'react';
import AppBar from 'material-ui/AppBar';

import FlatButton from 'material-ui/FlatButton'


class AppBarDFS extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <AppBar 
      style={{backgroundColor: '#780003'}}
      iconClassNameLeft="play_arrow"
      iconElementRight={<FlatButton label="Voir le site de la Nuit" disabled />}
      title={<span>Team DFS;</span>}
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      zDepth={2}
    />
    );
  }
}

export default AppBarDFS;