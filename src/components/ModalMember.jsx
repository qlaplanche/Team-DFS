import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Info from 'material-ui/svg-icons/action/info';
import Subheader from 'material-ui/Subheader';

import './modal.css';

const styles = {
    whitePopup: {
        padding: 20,
        // width: '70%',
        maxWidth: 'none',
        display: 'flex',
        flexDirection: 'row' ,
        justifyContent: 'space-around',
    },
    resize:{
        height: '100%',
        width: 440,
        display: 'inline-block'
    },
    popupRightContent: {
        flex: 1,
        padding: '0 2em',
    },
    quote: {
        fontStyle: 'itlalic',
        margin: '0.25em 0',
        position: 'relative'
    }
}


export default class ModalMember extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Done"
        primary={true}
        disabled={false}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <IconButton><Info color="white" onClick={this.handleOpen}/> </IconButton>
        <Dialog
        //   title={this.props.name}
          actions={actions}
          modal={true}
          open={this.state.open}
          bodyStyle={styles.whitePopup}
        >
        <img style={styles.resize} src={this.props.img} alt={this.props.name}/>
        <div style={styles.popupRightContent}>
            <h3>{this.props.name}</h3>
            <Subheader>{this.props.role}</Subheader>
            <div className="quote">
                {this.props.description}
            </div>
        </div>
        </Dialog>
      </div>
    );
  }
}