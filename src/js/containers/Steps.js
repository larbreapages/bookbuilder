import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Steps from 'react-steps';
import { nextStep, previousStep } from '../actions/index';
import BookBinding from './BookBinding';
import Color from './Color';
import Pages from './Pages';
import Format from './Format';
import StripeCheckout from './StripeCheckout';

class StepsClass extends Component {
    renderButtons() {
        const previousButton = <button onClick={() => this.props.previousStep()}>Previous</button>;

        let nextButton;
        if (this.props.currentStep < this.props.steps.length) {
            nextButton = <button onClick={() => this.props.nextStep()}>Next</button>;
        }

        let purchaseButton;
        if (this.props.currentStep === this.props.steps.length) {
            purchaseButton = <StripeCheckout />;
        }

        return (<div>
            { previousButton }
            { nextButton }
            { purchaseButton }
        </div>);
    }

    render() {
        return (<div>
            <Steps items={this.props.steps} type={'point'} />
            { this.props.currentStep === 1 ? <BookBinding /> : null }
            { this.props.currentStep === 2 ? <Color /> : null }
            { this.props.currentStep === 3 ? <Format /> : null }
            { this.props.currentStep === 4 ? <Pages /> : null }
            { this.renderButtons() }
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
