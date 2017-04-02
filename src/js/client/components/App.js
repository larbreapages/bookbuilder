import React from 'react';
import { connect } from 'react-redux';
import Steps, { Step } from 'antd/lib/steps';
import { bindActionCreators } from 'redux';
import { chooseStep } from '../actions/index';
import StepBookBinding from './StepBookBinding';
import StepColor from './StepColor';
import StepFormat from './StepFormat';
import StepPayment from './StepPayment';
import Finish from './Finish';
import Error from './Error';

const App = (props) => {
    return (<div className="app">
        <div className="steps">
            <Steps size="small" current={props.currentStep}>
                {props.steps.map(item => <Step key={item.title} title={item.title} onClick={() => item.step < props.currentStep && props.chooseStep(item.step)} />)}
            </Steps>
        </div>
        { props.currentStep === 0 ? <StepBookBinding /> : null }
        { props.currentStep === 1 ? <StepColor /> : null }
        { props.currentStep === 2 ? <StepFormat /> : null }
        { props.currentStep === 3 ? <StepPayment /> : null }
        { props.currentStep === 4 ? <Finish /> : null }
        { props.currentStep === 5 ? <Error /> : null }
    </div>);
};

const mapStateToProps = state => ({ steps: state.steps.steps, currentStep: state.steps.currentStep });
const mapDispatchToProps = dispatch => bindActionCreators({ chooseStep }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
