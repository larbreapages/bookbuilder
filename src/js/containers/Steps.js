import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Steps from 'react-steps';
import BookBinding from './BookBinding';
import Color from './Color';
import Format from './Format';
import Pages from './Pages';
import Gilding from './Gilding';

class StepsClass extends Component {
    render() {
        return (<div>
            <Steps items={this.props.steps} type={'point'} />
            { this.props.currentStep === 1 ? <BookBinding /> : null }
            { this.props.currentStep === 2 ? <Color /> : null }
            { this.props.currentStep === 3 ? <Format /> : null }
            { this.props.currentStep === 4 ? <Pages /> : null }
            { this.props.currentStep === 5 ? <Gilding /> : null }
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
