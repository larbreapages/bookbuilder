import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Tag } from 'antd';
import { nextStep, previousStep } from '../actions/index';
import PurchaseButton from './PurchaseButton';

const Footer = (props) => {
    const previousButton = <Button type="ghost" disabled={!props.currentStep} onClick={() => props.previousStep()}>Précédent</Button>;

    let nextButton;
    if (props.currentStep < props.stepsLength - 1) {
        nextButton = <Button type="ghost" onClick={() => props.nextStep()}>Suivant</Button>;
    }

    let purchaseButton;
    if (props.currentStep === props.stepsLength - 1) {
        purchaseButton = <PurchaseButton />;
    }

    const priceTTCText = `${props.book.priceTTC} € T.T.C.`;
    return (<div className="footer">
        { previousButton }
        <span className="hint--top" aria-label={priceTTCText}>
            <Tag className="price">
                <b>{props.book.price} € H.T.</b>
            </Tag>
        </span>
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
