import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {green400} from 'material-ui/styles/colors';
import  AvPlayArrow  from 'material-ui/svg-icons/av/play-arrow';

/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
class TeamStepper extends React.Component {

  state = {
    finished: true,
    stepIndex: 1,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Select campaign settings...';
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto', marginTop: 30}}>
        <Stepper activeStep={stepIndex} >
          <Step>
            <StepLabel>Composition de l'équipe </StepLabel>
          </Step>
          <Step>
          <StepLabel
              icon={<AvPlayArrow color={green400} />}
            >Sélection des Défis</StepLabel>
          </Step>
          <Step>
            <StepLabel>Réalisation du Site</StepLabel>
          </Step>
        </Stepper>
        {/* <div style={contentStyle}>
            <div>
              <p>{this.getStepContent(stepIndex)}</p>
            </div>
        </div> */}
      </div>
    );
  }
}

export default TeamStepper;