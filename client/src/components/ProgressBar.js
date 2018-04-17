import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

export default class ProgressBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: 25,
    };
  }

  render() {
    return (
      <LinearProgress mode="determinate" value={this.state.completed} />
    );
  }
}
