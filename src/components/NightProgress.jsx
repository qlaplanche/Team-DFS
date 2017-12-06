import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import {red300} from 'material-ui/styles/colors';


const styles = {
    root:{
        // maxWidth: '250px'
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    flexItem : {
        lineHeight: '25px',
    },
    value : {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#be4856',
    }
};

export default class NightProgress extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: 0,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }

  render() {
    return (
        <div style={styles.root}>
            <div style={styles.container}>
                <p style={styles.flexItem}>Développement du site : </p>
                <p style={styles.value}> {this.props.value} %</p>
            </div>
            <LinearProgress color={red300} mode="determinate" value={this.props.value} />
        </div>
    );
  }
}