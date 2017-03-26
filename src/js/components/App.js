import React, { Component } from 'react';
import { connect } from 'react-redux';
import Steps, { Step } from 'antd/lib/steps';
import { bindActionCreators } from 'redux';
import { chooseStep } from '../actions/index';
import BookBinding from './BookBinding';
import Color from './Color';
import Format from './Format';
import Payment from './Payment';
import Finish from './Finish';
import Error from './Error';

class App extends Component {
    steps() {
        return (<Steps size="small" current={this.props.currentStep}>
            {this.props.steps.map(item => <Step key={item.title} title={item.title} onClick={() => item.step < this.props.currentStep && this.props.chooseStep(item.step)} />)}
        </Steps>);
    }

    render() {
        return (<div className="app">
            <div className="steps">{ this.steps() }</div>
            { this.props.currentStep === 0 ? <BookBinding /> : null }
            { this.props.currentStep === 1 ? <Color /> : null }
            { this.props.currentStep === 2 ? <Format /> : null }
            { this.props.currentStep === 3 ? <Payment /> : null }
            { this.props.currentStep === 4 ? <Finish /> : null }
            { this.props.currentStep === 5 ? <Error /> : null }
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        steps: state.steps.steps,
        currentStep: state.steps.currentStep,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ chooseStep }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
