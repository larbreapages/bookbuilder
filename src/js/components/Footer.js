import React from 'react';
import Button from 'antd/lib/button';
import Tag from 'antd/lib/tag';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { nextStep, previousStep } from '../actions/index';
import PurchaseButton from './PurchaseButton';

const Footer = (props) => {
    const validStep = () => {
        if (props.currentStep === 0) return props.book.bookbinding;
        if (props.currentStep === 1) {
            if (props.book.bookbinding === 'conservation') {
                return (props.book.paper > 5);
            }
            if (props.book.bookbinding === 'modern') {
                return (props.book.paper < 5 && props.book.wire);
            }
        }
        if (props.currentStep === 2) {
            return (props.book.format && props.book.pages);
        }
        return false;
    };

    const previousButton = <Button type="ghost" disabled={!props.currentStep} onClick={() => props.previousStep()}>Précédent</Button>;

    let nextButton;
    if (props.currentStep < props.stepsLength - 1) {
        nextButton = <Button type="ghost" onClick={() => props.nextStep()} disabled={!validStep()}>Suivant</Button>;
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
