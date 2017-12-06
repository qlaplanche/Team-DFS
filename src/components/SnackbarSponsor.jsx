import React from 'react';
import Snackbar from 'material-ui/Snackbar';

export default class SnackbarExampleSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        message: "Aller voir le site de notre école ",
        open: false,
    };
    setTimeout(() => {
        this.setState({
          open: true
        })}, 5000);
  }


  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleRedirection() {
      window.open('http://www.insa-centrevaldeloire.fr/', '_blank');
  }

  render() {
    return (
      <div>
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          autoHideDuration={4000}
          action="INSA Centre Val de Loire"
          onActionClick = {this.handleRedirection}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}