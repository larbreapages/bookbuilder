import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Steps } from 'antd';
import BookBinding from './BookBinding';
import Color from './Color';
import Format from './Format';
import Summary from './Summary';

const Step = Steps.Step;

class StepsClass extends Component {
    render() {
        return (<div className="steps">
            <Steps size="small" current={this.props.currentStep}>
                {this.props.steps.map(item => <Step key={item.title} title={item.title} />)}
            </Steps>
            { this.props.currentStep === 0 ? <BookBinding /> : null }
            { this.props.currentStep === 1 ? <Color /> : null }
            { this.props.currentStep === 2 ? <Format /> : null }
            { this.props.currentStep === 3 ? <Summary /> : null }
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        steps: state.steps.steps,
        currentStep: state.steps.currentStep,
    };
}

export default connect(mapStateToProps)(StepsClass);
