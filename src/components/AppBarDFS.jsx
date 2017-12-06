import React,{Component} from 'react';
import AppBar from 'material-ui/AppBar';

import FlatButton from 'material-ui/FlatButton'

const styles = {
  title: {
    cursor: 'pointer',
  },
};

class AppBarDFS extends Component {

  handleRedirection() {
   window.location = '/dfs' 
  }

  render(){
    return(
      <AppBar 
      style={{backgroundColor: '#780003'}}
      iconClassNameLeft="play_arrow"
      iconElementRight={<FlatButton label="Voir le site de la Nuit" disabled />}
      title={<span style={styles.title}>Team DFS;</span>}
      onTitleClick={this.handleRedirection}
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      zDepth={2}
    />
    );
  }
}

export default AppBarDFS;