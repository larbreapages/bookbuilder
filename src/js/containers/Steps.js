import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Steps from 'react-steps';
import { nextStep, previousStep } from '../actions/index';
import BookBinding from './BookBinding';
import Color from './Color';
import Pages from './Pages';
import Format from './Format';
import Gilding from './Gilding';

class StepsClass extends Component {
    render() {
        console.log(this.props.currentStep);
        return (<div>
            <Steps items={this.props.steps} type={'point'} />
            { this.props.currentStep === 1 ? <BookBinding /> : null }
            { this.props.currentStep === 2 ? <Color /> : null }
            { this.props.currentStep === 3 ? <Format /> : null }
            { this.props.currentStep === 4 ? <Pages /> : null }
            { this.props.currentStep === 5 ? <Gilding /> : null }
            <button onClick={() => this.props.previousStep()}>Previous</button>
            <button onClick={() => this.props.nextStep()}>Next</button>
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        steps: state.steps.steps,
        currentStep: state.steps.currentStep,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ nextStep, previousStep }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(StepsClass);
