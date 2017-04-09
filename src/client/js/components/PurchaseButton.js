import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Button from 'antd/lib/button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { nextStep, chooseStep } from '../actions/index';
import { checkStatus } from '../../../shared/utils';

const PurchaseButton = (props) => {
    const onToken = (token) => {
        fetch('/save-stripe-token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token, book: props.book }),
        })
        .then(checkStatus)
        .then(() => {
            props.nextStep();
        }).catch((e) => {
            props.chooseStep(5);
            console.error(e);
        });
    };

    return (
        <StripeCheckout
            name="L'Arbre à Pages"
            description="Reliure d'art"
            image="https://larbreapages.fr/logo-12e811a.svg"
            amount={props.book.total * 100}
            currency="EUR"
            stripeKey={CONFIG.publishableKey}
            locale="fr"
            token={onToken}
            billingAddress
            shippingAddress
        ><Button type="primary" disabled={!props.acceptConditions}>Acheter</Button></StripeCheckout>
    );
};

const mapStateToProps = state => ({ book: state.book, acceptConditions: state.steps.acceptConditions });
const mapDispatchToProps = dispatch => bindActionCreators({ nextStep, chooseStep }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseButton);
