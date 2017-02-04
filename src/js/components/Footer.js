import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Tag, Tooltip } from 'antd';
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

    const priceTTCText = `${props.book.price + props.book.tva} € T.T.C.`;
    return (<div className="footer">
        { previousButton }
        <Tag className="price">
            <Tooltip placement="top" title={priceTTCText}>
                <b>Prix: {props.book.price} € H.T.</b>
            </Tooltip>
        </Tag>
        { nextButton }
        { purchaseButton }
    </div>);
};

function mapStateToProps(state) {
    return {
        book: state.book,
        stepsLength: state.steps.steps.length,
        currentStep: state.steps.currentStep,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ nextStep, previousStep }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
