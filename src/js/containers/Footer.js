import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { nextStep, previousStep } from '../actions/index';
import StripeCheckout from './StripeCheckout';

const Footer = (props) => {
    const previousButton = <Button type="ghost" disabled={!props.currentStep} onClick={() => props.previousStep()}>Previous</Button>;

    let nextButton;
    if (props.currentStep < props.stepsLength - 1) {
        nextButton = <Button type="ghost" onClick={() => props.nextStep()}>Next</Button>;
    }

    let purchaseButton;
    if (props.currentStep === props.stepsLength - 1) {
        purchaseButton = <StripeCheckout />;
    }

    return (
        <div className="footer">
            { previousButton }
            <div className="price">Total: {props.price}€ H.T.</div>
            { nextButton }
            { purchaseButton }
        </div>
    );
};

function mapStateToProps(state) {
    return {
        price: state.book.price,
        stepsLength: state.steps.steps.length,
        currentStep: state.steps.currentStep,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ nextStep, previousStep }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Footer);
